// public/js/map-display.js

const mapFolderNames = {
    deston: 'Deston',
    erangel: 'Erangel',
    karakin: 'Karakin',
    miramar: 'Miramar',
    paramo: 'Paramo',
    rondo: 'Rondo',
    sanhok: 'Sanhok',
    taego: 'Taego',
    vikendi: 'Vikendi'
};

const leafletIcons = {
    gasStations: L.icon({ iconUrl: '/icon/gasstation.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    hangGliders: L.icon({ iconUrl: '/icon/hang-glider.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    securityRooms: L.icon({ iconUrl: '/icon/security.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    secretRooms: L.icon({ iconUrl: '/icon/secretkey.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    secretrooms: L.icon({ iconUrl: '/icon/secretkey.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    secretBasements: L.icon({ iconUrl: '/icon/secretkey.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    bunkers: L.icon({ iconUrl: '/icon/bunker.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    bears: L.icon({ iconUrl: '/icon/bear.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    labcamps: L.icon({ iconUrl: '/icon/labcamp.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] })
};

var customTeardropIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<div class="teardrop-pin"><div class="teardrop-pin-inner"></div></div>',
    iconSize: [28, 28],
    iconAnchor: [14, 28] // Anchor at the bottom tip
});

function loadMapDisplay(mapImageSrc, mapName, spawnToggleState, darkMode, currentMapSpawnTypes, questions, top, bottom, addon, markers, routes) {
    const mapSlug = mapImageSrc.split('/').filter(Boolean).pop();

    const mapNameElement = document.querySelector('.map-name');
    if (mapNameElement) {
        mapNameElement.textContent = mapName;
    }

    // Dynamically adjust meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const plainTop = top ? top.replace(/<[^>]+>/g, '').replace(/\n/g, ' ') : '';
        metaDescription.setAttribute(
            'content',
            `${mapName} - PUBG Map Guide: ${plainTop.slice(0, 160)}`
        );
    }

    const mapDisplayPlaceholder = document.getElementById('map-display-placeholder');
    if (mapDisplayPlaceholder) {
        // Clean up Leaflet if active
        if (window.activeLeafletMap) {
            window.activeLeafletMap.remove();
            window.activeLeafletMap = null;
        }
        if (window.activeMapLayers) {
            window.activeMapLayers = null;
        }

        // Render interactive map wrapper
        mapDisplayPlaceholder.innerHTML = `
            <div class="map-wrapper-inner" style="height: 100%;">
                <div id="leafletMap" style="width: 100%; height: 100%; border-radius: var(--radius-md);"></div>
            </div>
        `;

        setTimeout(() => {
            var mapExtent = [0.00000000, -8192.00000000, 8192.00000000, 0.00000000];
            var mapMinZoom = 0;
            var mapMaxZoom = 5;
            var mapMaxResolution = 1.00000000;
            var mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
            var tileExtent = [0.00000000, -8192.00000000, 8192.00000000, 0.00000000];
            var crs = L.CRS.Simple;
            crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);
            crs.scale = function(zoom) {
                return Math.pow(2, zoom) / mapMinResolution;
            };
            crs.zoom = function(scale) {
                return Math.log(scale * mapMinResolution) / Math.LN2;
            };

            var map = new L.Map('leafletMap', {
                maxZoom: mapMaxZoom,
                minZoom: 2,
                crs: crs,
                attributionControl: false,
                maxBounds: L.latLngBounds(
                    crs.unproject(L.point(mapExtent[0], mapExtent[1])),
                    crs.unproject(L.point(mapExtent[2], mapExtent[3]))
                ),
                maxBoundsViscosity: 1.0
            });

            const folderName = mapFolderNames[mapSlug] || (mapSlug.charAt(0).toUpperCase() + mapSlug.slice(1));
            L.tileLayer(`/maps/${folderName}/{z}/{x}/{y}.png`, {
                minZoom: 2,
                maxZoom: mapMaxZoom,
                noWrap: true,
                tms: false,
                bounds: L.latLngBounds(
                    crs.unproject(L.point(mapExtent[0], mapExtent[1])),
                    crs.unproject(L.point(mapExtent[2], mapExtent[3]))
                )
            }).addTo(map);

            // Center view initially
            map.setView(crs.unproject(L.point(4096, -4096)), 2);

            window.activeLeafletMap = map;

            // Initialize LayerGroups for this map
            window.activeMapLayers = {};
            for (const typeKey in currentMapSpawnTypes) {
                window.activeMapLayers[typeKey] = L.layerGroup();
            }

            // Create Toast notification element (shared across all maps)
            const toastEl = document.createElement('div');
            toastEl.id = 'tacticalToast';
            toastEl.className = 'tactical-toast';
            mapDisplayPlaceholder.appendChild(toastEl);

            const showToast = (message) => {
                toastEl.textContent = message;
                toastEl.classList.add('show');
                if (window.toastTimeout) clearTimeout(window.toastTimeout);
                window.toastTimeout = setTimeout(() => {
                    toastEl.classList.remove('show');
                }, 2500);
            };

            let collectorModeActive = false;
            let tempMarker = null;

            // Populate LayerGroups with pre-loaded markers (if available)
            if (markers && Array.isArray(markers)) {
                markers.forEach(m => {
                    if (window.activeMapLayers[m.type]) {
                        const latlng = crs.unproject(L.point(m.x, m.y));
                        const icon = leafletIcons[m.type] || customTeardropIcon;
                        const marker = L.marker(latlng, {
                            icon: icon
                        }).bindPopup(`<strong>${m.label}</strong>`);
                        
                        // Add click listener for coordinate copying!
                        marker.on('click', (e) => {
                            if (collectorModeActive) {
                                L.DomEvent.stopPropagation(e);
                                setTimeout(() => {
                                    marker.closePopup();
                                }, 0);
                                const coordsText = `${m.x}, ${m.y}`;
                                navigator.clipboard.writeText(coordsText).then(() => {
                                    showToast(`Copied POI "${m.label}": ${coordsText}`);
                                });
                            }
                        });

                        window.activeMapLayers[m.type].addLayer(marker);
                    }
                });
            }

            // Add active LayerGroups initially
            for (const typeKey in window.activeMapLayers) {
                if (spawnToggleState[typeKey]) {
                    window.activeMapLayers[typeKey].addTo(map);
                }
            }

            if (mapSlug === 'sanhok') {
                // SANHOK LOOT TRUCK SIMULATION PANEL & ROUTES RENDER
                if (routes) {
                    const routeColors = {
                        eastroute: '#ff7b00',
                        northroute: '#00f2fe',
                        southroute: '#22c55e'
                    };

                    const truckMarkers = {
                        eastroute: null,
                        northroute: null,
                        southroute: null
                    };

                    // Draw static polylines and place timestamp markers
                    for (const routeKey in routes) {
                        const points = routes[routeKey];
                        if (!points || points.length === 0) continue;
                        
                        const latlngs = points.map(p => crs.unproject(L.point(p.x, p.y)));
                        L.polyline(latlngs, {
                            color: routeColors[routeKey] || '#ffffff',
                            weight: 4,
                            opacity: 0.85
                        }).addTo(window.activeMapLayers[routeKey]);

                        const midIdx = Math.floor(points.length / 2);
                        const markersConfig = [
                            { index: 0, label: '0:00' },
                            { index: midIdx, label: routeKey === 'eastroute' ? '2:30' : '5:00' },
                            { index: points.length - 1, label: routeKey === 'eastroute' ? '5:00' : '10:00' }
                        ];

                        markersConfig.forEach(cfg => {
                            const p = points[cfg.index];
                            if (p) {
                                const latlng = crs.unproject(L.point(p.x, p.y));
                                const marker = L.circleMarker(latlng, {
                                    radius: 5,
                                    color: routeColors[routeKey],
                                    fillColor: '#ffffff',
                                    fillOpacity: 1,
                                    weight: 2
                                });
                                
                                const tooltip = L.tooltip({
                                    permanent: true,
                                    direction: 'top',
                                    className: `route-timestamp-tooltip tooltip-${routeKey}`,
                                    offset: [0, -5]
                                }).setContent(cfg.label);
                                
                                marker.bindTooltip(tooltip);
                                marker.addTo(window.activeMapLayers[routeKey]);
                            }
                        });
                    }

                    // Render Loot Truck Simulator UI card
                    const simCard = document.createElement('div');
                    simCard.className = 'route-simulator-card';
                    simCard.innerHTML = `
                        <div class="simulator-header">
                            <h4>🚛 Loot Truck Simulator</h4>
                        </div>
                        <div class="simulator-controls">
                            <button id="simPlayPauseBtn" class="sim-btn primary">Play</button>
                            <button id="simResetBtn" class="sim-btn">Reset</button>
                        </div>
                        <div class="slider-wrapper">
                            <input type="range" id="simTimeSlider" class="sim-slider" min="0" max="600" value="0">
                            <div class="time-labels">
                                <span id="simCurrentTime">0:00</span>
                                <span>10:00</span>
                            </div>
                        </div>
                        <div class="speed-wrapper">
                            <label for="simSpeedSelect">Multiplier:</label>
                            <select id="simSpeedSelect" class="sim-select">
                                <option value="1">1x</option>
                                <option value="10" selected>10x</option>
                                <option value="30">30x</option>
                                <option value="60">60x</option>
                                <option value="120">120x</option>
                            </select>
                        </div>
                    `;
                    mapDisplayPlaceholder.appendChild(simCard);

                    let simTime = 0; // in seconds
                    let simPlaying = false;
                    const updateRateMs = 50;

                    function interpolatePosition(pts, ratio) {
                        if (!pts || pts.length === 0) return null;
                        if (pts.length === 1) return pts[0];
                        if (ratio <= 0) return pts[0];
                        if (ratio >= 1) return pts[pts.length - 1];

                        const dists = [0];
                        let totalDist = 0;
                        for (let i = 1; i < pts.length; i++) {
                            const dx = pts[i].x - pts[i - 1].x;
                            const dy = pts[i].y - pts[i - 1].y;
                            totalDist += Math.sqrt(dx * dx + dy * dy);
                            dists.push(totalDist);
                        }

                        if (totalDist === 0) return pts[0];

                        const targetDist = ratio * totalDist;
                        for (let i = 1; i < pts.length; i++) {
                            if (targetDist <= dists[i]) {
                                const segLength = dists[i] - dists[i - 1];
                                const segRatio = segLength > 0 ? (targetDist - dists[i - 1]) / segLength : 0;
                                const p1 = pts[i - 1];
                                const p2 = pts[i];
                                return {
                                    x: p1.x + segRatio * (p2.x - p1.x),
                                    y: p1.y + segRatio * (p2.y - p1.y)
                                };
                            }
                        }
                        return pts[pts.length - 1];
                    }

                    function updateTruckPositions() {
                        for (const routeKey in routes) {
                            const points = routes[routeKey];
                            const color = routeColors[routeKey];
                            const duration = routeKey === 'eastroute' ? 300 : 600;

                            if (simTime <= duration) {
                                const ratio = simTime / duration;
                                const pos = interpolatePosition(points, ratio);
                                if (pos) {
                                    const latlng = crs.unproject(L.point(pos.x, pos.y));
                                    if (!truckMarkers[routeKey]) {
                                        const icon = L.divIcon({
                                            className: `truck-div-icon truck-icon-${routeKey}`,
                                            html: `<div class="truck-marker-pin" style="background: ${color}; border: 2px solid #ffffff; box-shadow: 0 0 10px ${color}; font-size: 16px; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">🚛</div>`,
                                            iconSize: [30, 30],
                                            iconAnchor: [15, 15]
                                        });
                                        truckMarkers[routeKey] = L.marker(latlng, { icon: icon });
                                        truckMarkers[routeKey].addTo(window.activeMapLayers[routeKey]);
                                    } else {
                                        truckMarkers[routeKey].setLatLng(latlng);
                                        if (!window.activeMapLayers[routeKey].hasLayer(truckMarkers[routeKey])) {
                                            truckMarkers[routeKey].addTo(window.activeMapLayers[routeKey]);
                                        }
                                    }
                                }
                            } else {
                                if (truckMarkers[routeKey]) {
                                    window.activeMapLayers[routeKey].removeLayer(truckMarkers[routeKey]);
                                    truckMarkers[routeKey] = null;
                                }
                            }
                        }
                    }

                    function formatTime(seconds) {
                        const m = Math.floor(seconds / 60);
                        const s = Math.floor(seconds % 60);
                        return `${m}:${s.toString().padStart(2, '0')}`;
                    }

                    function updateTimeLabel() {
                        const timeEl = document.getElementById('simCurrentTime');
                        if (timeEl) timeEl.textContent = formatTime(simTime);
                    }

                    function updateSimulatorUI() {
                        const slider = document.getElementById('simTimeSlider');
                        if (slider) slider.value = Math.round(simTime);
                        updateTimeLabel();
                    }

                    function tick() {
                        const now = Date.now();
                        const dtReal = (now - window.simLastRealTime) / 1000;
                        window.simLastRealTime = now;

                        const speedSelect = document.getElementById('simSpeedSelect');
                        const multiplier = speedSelect ? parseFloat(speedSelect.value) : 10;

                        simTime += dtReal * multiplier;
                        if (simTime >= 600) {
                            simTime = 600;
                            pauseSimulation();
                        }
                        updateSimulatorUI();
                        updateTruckPositions();
                    }

                    function startSimulation() {
                        if (simPlaying) return;
                        simPlaying = true;
                        const btn = document.getElementById('simPlayPauseBtn');
                        if (btn) {
                            btn.textContent = 'Pause';
                            btn.classList.remove('primary');
                        }
                        window.simLastRealTime = Date.now();
                        window.simIntervalId = setInterval(tick, updateRateMs);
                    }

                    function pauseSimulation() {
                        if (!simPlaying) return;
                        simPlaying = false;
                        const btn = document.getElementById('simPlayPauseBtn');
                        if (btn) {
                            btn.textContent = 'Play';
                            btn.classList.add('primary');
                        }
                        if (window.simIntervalId) {
                            clearInterval(window.simIntervalId);
                            window.simIntervalId = null;
                        }
                    }

                    function resetSimulation() {
                        pauseSimulation();
                        simTime = 0;
                        updateSimulatorUI();
                        updateTruckPositions();
                    }

                    // Event Listeners for UI controls
                    const playPauseBtn = document.getElementById('simPlayPauseBtn');
                    if (playPauseBtn) {
                        playPauseBtn.addEventListener('click', () => {
                            if (simPlaying) {
                                pauseSimulation();
                            } else {
                                if (simTime >= 600) simTime = 0;
                                startSimulation();
                            }
                        });
                    }

                    const resetBtn = document.getElementById('simResetBtn');
                    if (resetBtn) {
                        resetBtn.addEventListener('click', resetSimulation);
                    }

                    const slider = document.getElementById('simTimeSlider');
                    if (slider) {
                        slider.addEventListener('input', (e) => {
                            simTime = parseFloat(e.target.value);
                            updateTimeLabel();
                            updateTruckPositions();
                        });

                        slider.addEventListener('mousedown', () => {
                            window.simWasPlayingBeforeDrag = simPlaying;
                            if (simPlaying) pauseSimulation();
                        });

                        slider.addEventListener('mouseup', () => {
                            if (window.simWasPlayingBeforeDrag) startSimulation();
                        });
                    }

                    // Initialize positions
                    updateTruckPositions();
                }
            }

            // Create Coordinate Collector toggle button (Common for ALL maps)
            const toggleBtn = document.createElement('button');
            toggleBtn.id = 'coordCollectorToggleBtn';
            toggleBtn.className = 'coord-collector-toggle-btn';
            toggleBtn.innerHTML = `📍 Coordinate Collector`;
            mapDisplayPlaceholder.appendChild(toggleBtn);

            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                collectorModeActive = !collectorModeActive;
                toggleBtn.classList.toggle('active', collectorModeActive);
                
                const mapContainer = document.getElementById('leafletMap');
                if (mapContainer) {
                    mapContainer.classList.toggle('crosshair-cursor-active', collectorModeActive);
                }
                
                if (collectorModeActive) {
                    showToast('Coordinate Collector active. Click anywhere or on a POI to copy coordinates.');
                } else {
                    if (tempMarker) {
                        map.removeLayer(tempMarker);
                        tempMarker = null;
                    }
                    showToast('Coordinate Collector deactivated.');
                }
            });

            // Click listener for empty space to copy coordinates
            map.on('click', (e) => {
                if (!collectorModeActive) return;
                // Ignore clicks on controls or simulator card
                if (e.originalEvent.target.closest('.leaflet-control') || e.originalEvent.target.closest('.route-simulator-card')) return;

                var latlng = e.latlng;
                var point = crs.project(latlng);
                var x = Math.round(point.x);
                var y = Math.round(point.y);

                const coordsText = `${x}, ${y}`;
                navigator.clipboard.writeText(coordsText).then(() => {
                    showToast(`Copied coordinates: ${coordsText}`);
                }).catch(err => {
                    console.error('Failed to copy coordinates: ', err);
                });

                if (tempMarker) {
                    map.removeLayer(tempMarker);
                }
                
                tempMarker = L.marker(latlng, {
                    icon: L.divIcon({
                        className: 'custom-div-icon',
                        html: '<div class="teardrop-pin" style="background: linear-gradient(135deg, #ff4500 0%, #ef4444 100%); border-color: #ffffff;"><div class="teardrop-pin-inner"></div></div>',
                        iconSize: [28, 28],
                        iconAnchor: [14, 28]
                    })
                }).addTo(map);
            });

        }, 50);

        // Descriptions setup
        const mapInfoTop = document.getElementById('map-info-top');
        if (mapInfoTop) mapInfoTop.innerHTML = top;

        const mapInfoBottom = document.getElementById('map-info-bottom');
        if (mapInfoBottom) mapInfoBottom.innerHTML = bottom;

        // FAQ setup
        if (questions && Array.isArray(questions)) {
            let questionsHtml = '<section class="faq-section"><h3>Frequently Asked Questions - FAQ</h3>';
            questions.forEach(q => {
                questionsHtml += `
                    <div class="faq-item">
                        <div class="faq-question">${q.question}</div>
                        <div class="faq-answer">${q.answer}</div>
                    </div>
                `;
            });
            if (addon){
                questionsHtml += "<div class='addon'>";
                questionsHtml += addon;
                questionsHtml += '</div>';
            }
            questionsHtml += '<div class="support">Found an issue or have suggestions? <a href="mailto:support@pubg-maps.com">Contact us via email</a> - your feedback helps us improve the map.</div>'; 
            questionsHtml += '</section>';
            const questionsContainer = document.getElementById('questions');
            if (questionsContainer) {
                questionsContainer.innerHTML = questionsHtml;
            }
        }
    }
}

function updateMapDisplay(mapImageSrc, spawnToggleState, darkMode, currentMapSpawnTypes) {
    if (window.activeLeafletMap && window.activeMapLayers) {
        for (const typeKey in window.activeMapLayers) {
            if (spawnToggleState[typeKey]) {
                window.activeLeafletMap.addLayer(window.activeMapLayers[typeKey]);
            } else {
                window.activeLeafletMap.removeLayer(window.activeMapLayers[typeKey]);
            }
        }
    }
}
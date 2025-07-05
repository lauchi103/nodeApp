// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const mapData = {
        erangel: {
            name: 'Erangel',
            mapImage: '/maps/erangel/',
            top: `Explore the most up-to-date Erangel map in PUBG with all glider spawn points, gas stations, and secret basement locations marked clearly. Updated for 2025, this interactive map helps you plan your route, secure fast rotations, and loot hidden high-tier gear.<br><br>
            Whether you're playing squads or solos, knowing where to find hang gliders and fuel stations can make the difference between early elimination and a chicken dinner.<br><br>
            Toggle map layers and dominate Erangel with confidence.`,
            bottom: `Erangel is the iconic original map of PUBG, combining wide open fields, urban zones, and strategic chokepoints. Our interactive version highlights the three most game-relevant elements currently in play:<br>
            - 🪂 <strong>Glider spawn points</strong> - Ideal for fast rotations and scouting.<br>
            - 🛢️ <strong>Gas stations</strong> - Essential for refueling air and land vehicles.<br>
            - 🔐 <strong>Secret basements</strong> - Contain randomized high-tier loot, accessible with keys.<br>
            All spawn points on this map are based on in-game data and regularly updated.
            Whether you're playing casually or pushing for ranked wins, knowing where to refuel or find hidden loot can give you the tactical edge you need.`,
            // NEU: Verfügbare Spawn-Typen für Erangel
            spawnTypes: {
                hangGliders: 'Hangglider',
                gasStations: 'Gasstations',
                secretBasements: 'Secret Basements'
            },
            questions:[
                {
                    question: `Where can I find Motor Gliders on Erangel?`,
                    answer:`Motor Gliders spawn at specific locations across the map. While they are not guaranteed to appear every match, the highlighted spots on our map show where they are most likely to spawn.`,
                },
                {
                    question: `Are Gliders hard spawns on Erangel?`,
                    answer:`No, Gliders do not have hard (guaranteed) spawns. However, there are consistent high-probability locations that you can rely on most of the time.`,
                },
                {
                    question: `How do I find Secret Rooms on Erangel?`,
                    answer:`Secret Rooms are hidden underground bunkers that require a special key to open. Their locations are marked on this map with a blue icon.`,
                }
            ],
        },
        miramar: {
            name: 'Miramar',
            mapImage: '/maps/miramar/',
            description: 'Eine große Wüstenkarte mit viel offener Fläche und vertikalem Gameplay in Städten.',
            spawnTypes: {
                hangGliders: 'Hangglider', // Beispiel für Miramar
                gasStations: 'Gasstations'
                // Miramar hat keine secretBasements im Original, nur als Beispiel
            }
        },
        sanhok: {
            name: 'Sanhok',
            mapImage: '/maps/sanhok/',
            description: 'Eine kleine, dichte Inselkarte, die schnelle und aggressive Kämpfe fördert.',
            spawnTypes: {
                eastroute: "Eastroute",
                northroute: "Northroute",
                westroute: "Westroute",
                southroute: "Southroute"
            }
        },
        vikendi: {
            name: 'Vikendi',
            mapImage: '/maps/vikendi/',
            description: 'Eine verschneite Karte mit vielen Hügeln und Wäldern, perfekt für taktische Manöver.',
            spawnTypes: {
                bears: "Bears",
                gasStations: 'Gasstations',
                bunkers: "Bunkers",
                hangGliders: 'Hangglider',
                labcamps: "Lab Camps"
            }
        },
        karakin: {
            name: 'Karakin',
            mapImage: '/maps/karakin/',
            description: 'Eine kleine, karge Wüsteninsel mit einzigartigen Zerstörungsmechaniken.',
            spawnTypes: {
                bunkers: "Bunkers"
            }
        },
        paramo: {
            name: 'Paramo',
            mapImage: '/maps/paramo/',
            description: 'Eine dynamische Vulkaninsel, deren Layout sich von Spiel zu Spiel ändert.',
            spawnTypes: {
                secretRooms: 'Secret Rooms' 
            }
        },
        taego: {
            name: 'Taego',
            mapImage: '/maps/taego/',
            description: 'Eine große, südkoreanisch inspirierte Karte mit neuen Comeback- und Self-Revive-Mechaniken.',
            spawnTypes: {
                secretRooms: 'Secret Rooms',
                hangGliders: 'Hangglider'
            }
        },
        deston: {
            name: 'Deston',
            mapImage: '/maps/deston/',
            description: 'Eine vertikal vielfältige Stadtkarte mit Seilrutschen und vertikalen Aufzügen.',
            // NEU: Spezifische Spawn-Typen für Deston
            spawnTypes: {
                gasStations: 'Gasstations',
                hangGliders: 'Hangglider',
                securityRooms: 'Security Rooms' // NEU: Spezifisch für Deston
            }
        },
        rondo: {
            name: 'Rondo',
            mapImage: '/maps/rondo/',
            description: 'Die neueste und größte Karte mit einer Mischung aus traditionellen und modernen Elementen.',
            spawnTypes: {
                hangGliders: 'Hangglider',
                soldiers: "Soldiers"
            }
        }
    };

    let currentMapSlug = window.location.pathname.split('/').pop();

    if (window.location.pathname === '/' || window.location.pathname === '') {
        window.history.replaceState({}, '', '/maps/erangel');
        currentMapSlug = 'erangel';
    } else if (!currentMapSlug || !mapData[currentMapSlug]) {
        console.warn(`Karte mit Slug "${currentMapSlug}" nicht gefunden. Leite zu Erangel um.`);
        window.history.replaceState({}, '', '/maps/erangel');
        currentMapSlug = 'erangel';
    }

    let currentMap = mapData[currentMapSlug];

    // Initialisiere den Zustand der Marker
    // Wir initialisieren alle möglichen Spawn-Typen auf 'true' hier.
    // Die SidebarControls und MapDisplay filtern dann, was für die aktuelle Karte relevant ist.
    let spawnToggleState = {
        hangGliders: true,
        gasStations: true,
        secretBasements: true,
        securityRooms: true, // NEU
        secretRooms: true, // NEU
        emergencyPickups: true, // NEU
        weaponCaches: true, // NEU
        soldiers: true,
        bunkers: true,
        labcamps: true,
        westroute: true,
        northroute: true,
        eastroute: true,
        bears: true,
        southroute: true,
    };
    let darkMode = true;

    // Lade und initialisiere Navbar
    loadNavbar();

    // Lade und initialisiere SidebarControls
    // Wir übergeben jetzt die spawnTypes der aktuellen Karte und den gesamten Toggle-Zustand
    loadSidebarControls(currentMap.spawnTypes, spawnToggleState, darkMode, (event) => {
        // Aktualisiere nur die geänderten Zustände
        Object.assign(spawnToggleState, event.detail.spawnToggleState);
        darkMode = event.detail.darkMode;
        updateMapDisplay(currentMap.mapImage, spawnToggleState, darkMode, currentMap.spawnTypes);
    });

    // Lade und initialisiere MapDisplay
    // Wir übergeben jetzt den gesamten Toggle-Zustand und die aktuellen spawnTypes
    loadMapDisplay(currentMap.mapImage, currentMap.name, spawnToggleState, darkMode, currentMap.spawnTypes, currentMap.questions, currentMap.top, currentMap.bottom);

    const preloadLink = document.getElementById('map-image-preload');
    if (preloadLink) {
        preloadLink.href = `/image/${mapSlug}/map.jpg`;
    }
});

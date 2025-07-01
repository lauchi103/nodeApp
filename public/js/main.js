// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const mapData = {
        erangel: {
            name: 'Erangel',
            mapImage: '/maps/erangel/',
            description: 'Die ursprüngliche und bekannteste Karte, bekannt für vielfältige Landschaften und intensive Kämpfe.',
            // NEU: Verfügbare Spawn-Typen für Erangel
            spawnTypes: {
                hangGliders: 'Hangglider',
                gasStations: 'Gasstations',
                secretBasements: 'Secret Basements'
            }
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
                labcamps: "Labcamps"
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
        labcams: true,
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
    loadMapDisplay(currentMap.mapImage, currentMap.name, spawnToggleState, darkMode, currentMap.spawnTypes);

    const preloadLink = document.getElementById('map-image-preload');
    if (preloadLink) {
        preloadLink.href = `/image/${mapSlug}/map.jpg`;
    }
});
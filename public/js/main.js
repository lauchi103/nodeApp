// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const mapData = {
        erangel: {
            name: 'Erangel',
            mapImage: '/maps/erangel/',
            // NEU: Verfügbare Spawn-Typen für Erangel
            spawnTypes: {
                hangGliders: 'Hangglider',
                gasStations: 'Gasstations',
                secretBasements: 'Secret Basements'
            },
            top: `Explore the interactive PUBG Erangel map with all active glider spawns, gas stations, and secret basements updated for the 2026 meta. Plan your routes and toggle layers to secure high-tier loot and fast rotations.`,
            bottom: `Erangel is the iconic original map of PUBG, combining wide open fields, urban zones, and strategic chokepoints. Our interactive version highlights the three most game-relevant elements currently in play:<br>
            - 🪂 <strong>Glider spawn points</strong> - Ideal for fast rotations and scouting.<br>
            - 🛢️ <strong>Gas stations</strong> - Essential for refueling air and land vehicles.<br>
            - 🔐 <strong>Secret basements</strong> - Contain randomized high-tier loot, accessible with keys.<br>
            All spawn points on this map are based on in-game data and regularly updated.
            Whether you're playing casually or pushing for ranked wins, knowing where to refuel or find hidden loot can give you the tactical edge you need.`,
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
                },
                {
                    question: `I found a Secret Room Key on Erangel - what now?`,
                    answer:`Head to one of the marked Secret Room locations. Once you're there, shoot the wooden planks at the entrance to gain access and loot high-tier gear.`,
                },
                {
                    question: `Can I refuel a Glider at a gas station on Erangel?`,
                    answer:`Yes - but the refuel icon can be tricky. If it doesn't appear immediately, adjust your camera angle slightly without moving the Glider. The icon will eventually show up.`,
                },
                {
                    question: `What is the best way to leave Sosnovka Island on Erangel?`,
                    answer:`Avoid the bridges if possible. The safest strategy is to take a Glider and fly across the sea to the mainland. It's faster, safer, and avoids common ambush spots.`,
                },
            ],
            addon: "",
        },
        miramar: {
            name: 'Miramar',
            mapImage: '/maps/miramar/',
            description: 'Eine große Wüstenkarte mit viel offener Fläche und vertikalem Gameplay in Städten.',
            spawnTypes: {
                hangGliders: 'Hangglider', // Beispiel für Miramar
                gasStations: 'Gasstations'
                // Miramar hat keine secretBasements im Original, nur als Beispiel
            },
            top: "Master the vast desert terrain with our interactive PUBG Miramar map highlighting verified Motor Glider spawn zones and gas stations. Plan efficient rotations and locate fuel pumps to secure a tactical edge in solos or squads.",
            bottom: "Miramar is known for its wide-open spaces, long-range combat, and minimal cover. This makes fast mobility and aerial scouting essential. Our interactive map focuses on:<br>🪂 <strong>Glider soft spawn zones</strong> - For fast rotations and early positioning.<br>⛽ <strong>Gas stations</strong> - Critical for refueling Gliders and land vehicles.<br><br>Stay mobile. Stay prepared. Stay ahead.",
            questions: [
                {
                    question: "Where can I find Motor Gliders on Miramar?",
                    answer: "Motor Gliders spawn randomly at certain locations. Our map highlights zones with the highest known spawn probabilities, but Gliders are not guaranteed to appear in every match."
                },
                {
                    question: "Are there hard Glider spawns on Miramar?",
                    answer: "No. Unlike vehicles, Gliders on Miramar spawn as soft spawns only -- which means they might be there, or might not. Always have a backup plan."
                },
                {
                    question: "Can I refuel a Glider at gas stations on Miramar?",
                    answer: "Yes -- but the refuel icon might not appear immediately. If you're parked correctly and nothing shows, try adjusting your camera angle slightly. The icon should appear after a moment."
                },
                {
                    question: "Why aren't any vehicles marked on the Miramar map?",
                    answer: "Vehicle spawns are intentionally not shown because they appear randomly along most roads. They are too unreliable to be mapped consistently."
                },
                {
                    question: "Are there any Secret Rooms on Miramar?",
                    answer: "No. Unlike Erangel or Vikendi, Miramar does not currently include any Secret Rooms or key-based loot areas."
                },
                {
                    question: "What's the best use for a Glider on Miramar?",
                    answer: "Use it to cross long distances early, secure high ground, or rotate around enemy hot zones. Avoid flying during final circles unless you're certain you have the altitude and fuel."
                }
            ],
            addon:`⚠️ Tip: If you're heading to the edge of the zone or moving across the map, taking a Glider can be faster and safer than driving - especially in open desert terrain.`,
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
            },
            top: "Track Sanhok's Loot Truck routes, driving paths, and spawn timings in real-time with our interactive tactical guide. Pinpoint patrols to intercept trucks, blow open crate-grade loot, and secure rare weapons.",
            bottom: "Loot Trucks are an exclusive feature of Sanhok that combine strategy, ambush potential, and rich rewards. Here's how they behave:<br>🚛 <strong>4 trucks per match</strong><br>🎯 <strong>Shoot to drop loot</strong> - trucks periodically drop gear while damaged<br>💥 <strong>Destroyable</strong> - once fully destroyed, the entire truck can be looted<br>⏱ <strong>Timed spawn routes</strong> - each truck has a unique path and start time<br>🎁 <strong>High-tier loot</strong> - including crate-grade items and exclusive gear<br><br>Position yourself along a truck's route, set up ambushes, or chase them down with a vehicle. The loot is worth the effort -- but expect competition.",
            questions: [
                {
                    question: "What are Loot Trucks in PUBG Sanhok?",
                    answer: "Loot Trucks are AI-driven vehicles that spawn at set times and travel along pre-defined routes. Players can shoot them to get loot or destroy them entirely for full access to high-tier items."
                },
                {
                    question: "How many Loot Trucks spawn on Sanhok?",
                    answer: "There are always four Loot Trucks per Sanhok match, each following a separate route with a staggered start time."
                },
                {
                    question: "What kind of loot do Loot Trucks drop?",
                    answer: "Yes -- crate-level loot is included. This can contain airdrop-tier weapons, armor and scopes. Loot drops while the truck is damaged or when it's fully destroyed."
                },
                {
                    question: "Can I stop a Loot Truck without destroying it?",
                    answer: "No. The truck does not stop unless destroyed. However, it drops loot while being shot -- so even partial damage can be rewarding if you're quick."
                },
                {
                    question: "How can I know where a Loot Truck is at a given moment?",
                    answer: "Our map shows spawn locations, driving routes, and minute-based timing, so you can predict where each truck will be at specific times during the match."
                },
                {
                    question: "Are the routes the same in every Sanhok match?",
                    answer: "Yes -- the routes and spawn timings are fixed, although the trucks themselves can spawn in slightly varied sequences."
                }
            ],
            addon:"",
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
            },
            top: "Navigate the snowy terrain using our interactive PUBG Vikendi map showing guaranteed Glider spawns, gas stations, Bear Caves, Lab Camps, and secret Keycard Bunkers. Gain an instant strategic advantage by tracking high-tier loot hotspots in real-time.",
            bottom: "Vikendi blends snowy terrain, open fields, and complex vertical zones -- but also hides some of the best loot opportunities in PUBG. This map focuses on five key gameplay elements:<br>🪂 <strong>Glider hardspawns</strong> - Fixed 100% spawn chance, ideal for fast map control<br>⛽ <strong>Gas stations</strong> - Crucial for refueling land and air vehicles<br>🐻 <strong>Bear Caves</strong> - Contain airdrop-grade loot, but Thermal Scopes have been removed in recent patches<br>🔬 <strong>Lab Camps</strong> - Hold crate-level loot, but trigger alarms when opened<br>🗝️ <strong>Keycard Bunkers</strong> - Require Keycards to access hidden high-value loot rooms<br><br>Mastering these hotspots can give you a serious edge -- whether you're chasing the win or farming crates.",
            questions: [
                {
                    question: "Do Gliders have hard spawns on Vikendi?",
                    answer: "Yes. Vikendi features fixed hard spawn locations for Gliders. If it's marked on the map -- it's there every match."
                },
                {
                    question: "Can I refuel a Glider at gas stations on Vikendi?",
                    answer: "Absolutely. Just land near the gas station and align properly. If the refuel icon doesn't appear, slightly adjust your view angle until it does."
                },
                {
                    question: "What kind of loot is in Vikendi Bear Caves?",
                    answer: "Bear Caves contain airdrop-grade loot, including top-tier weapons and gear. However, Thermal Scopes have been removed in the latest updates and are no longer found there."
                },
                {
                    question: "What happens if I open a loot crate in a Lab Camp?",
                    answer: "Loot crates in Lab Camps trigger a loud alarm when opened -- alerting nearby players. Plan accordingly, and secure the area first if possible."
                },
                {
                    question: "I found a Keycard on Vikendi -- what now?",
                    answer: "Keycards are used to access Bunker doors, which contain high-level loot. Use the map to find the nearest bunker and gain access before the zone closes in."
                },
                {
                    question: "Are Bear Caves and Bunkers the same?",
                    answer: "No. Bear Caves are naturally open loot areas; Bunkers require Keycards and are usually more secure -- but both offer strong gear."
                },
                {
                    question: "What's the best way to kill bears on Vikendi?",
                    answer: "Don't try to run them over -- it won't work. Vehicles just push bears without dealing damage. Instead, use LMGs or ARs with large magazines. A single 30-round mag is not enough -- you'll need sustained firepower to take one down safely."
                },
                {
                    question: "Do bears finish knocked players on Vikendi?",
                    answer: "Yes. Bears will attack knocked players until they're fully dead. If you're downed near a bear, don't expect mercy -- they won't stop until the kill is confirmed."
                }
            ],
            addon:"",
        },
        karakin: {
            name: 'Karakin',
            mapImage: '/maps/karakin/',
            description: 'Eine kleine, karge Wüsteninsel mit einzigartigen Zerstörungsmechaniken.',
            spawnTypes: {
                bunkers: "Bunkers"
            },
            top: "Locate all destructible walls, underground tunnels, and sealed bunker entrances on Karakin with our interactive PUBG map. Breach chambers using Sticky Bombs or Panzerfausts to quickly acquire high-tier gear and surprise your enemies.",
            bottom: "Karakin is one of PUBG's smallest maps -- but also one of the most intense. What makes it unique is the ability to blow open walls, floors, and bunkers to access hidden loot and new movement options. Our interactive map highlights:<br>💣 <strong>Bunker entrances</strong> - Sealed behind destructible walls, only breakable with explosives<br>🏚️ <strong>Locked buildings</strong> - Contain strong loot, also require Sticky Bombs or Panzerfausts to access<br>🔄 <strong>Underground routes</strong> - Some bunkers let you rotate below ground and surprise enemies from behind<br><br>Proper use of explosives can win you the game -- or at least give you a serious loot advantage. Every marked location has been verified in-game and is updated regularly.",
            questions: [
                {
                    question: "How do I open bunkers and sealed buildings on Karakin?",
                    answer: "You'll need Sticky Bombs or a Panzerfaust. Without explosives, these entrances remain inaccessible. Sticky Bombs are more common, but both work."
                },
                {
                    question: "What's inside the bunkers?",
                    answer: "Most bunkers contain high-tier loot, including level 3 gear, crate weapons, and attachments. Some even offer underground tunnels to rotate across parts of the map undetected."
                },
                {
                    question: "Can I find vehicles on Karakin?",
                    answer: "No. Karakin has no vehicles at all -- mobility comes down to your movement, parachute path, and smart rotations through terrain and underground routes."
                },
                {
                    question: "Where do I find Sticky Bombs?",
                    answer: "Sticky Bombs spawn on the ground and in buildings. Always pick up a few early -- they are the key to unlocking most hidden loot on this map."
                },
                {
                    question: "Do explosions damage loot inside bunkers?",
                    answer: "No. Blowing open a bunker or wall does not destroy the loot inside. It's perfectly safe to detonate and loot right after."
                },
                {
                    question: "Can enemies camp inside bunkers?",
                    answer: "Yes -- and they often do. Be cautious when entering opened bunkers. Use grenades, sound cues, or peek tactics to avoid ambushes."
                }
            ]
        },
        paramo: {
            name: 'Paramo',
            mapImage: '/maps/paramo/',
            description: 'Eine dynamische Vulkaninsel, deren Layout sich von Spiel zu Spiel ändert.',
            spawnTypes: {
                secretRooms: 'Secret Rooms' 
            },
            top: "Find confirmed Paramo Secret Rooms requiring Keycards to unlock with our data-backed interactive PUBG map. Discover instant Critical Response Kits and high-tier equipment before the volcanic zones close in.",
            bottom: "Paramo introduces a more subtle approach to hidden loot than other PUBG maps. While the surface looks calm, several high-value areas are only accessible with a Keycard:<br><strong>Secret Rooms</strong> - Hidden inside select grey buildings and only accessible with a Keycard<br><strong>Keycards</strong> - Spawn randomly on the map in ordinary buildings<br><strong>Loot contents</strong> - Better than standard loot, often includes Critical Response Kits for ultra-fast revives<br><strong>Official map confusion</strong> - Many grey buildings look like Secret Rooms, but only some actually are -- which is why this map focuses solely on confirmed locations<br><br>Secret Rooms are low-risk, high-reward -- if you can find a Keycard and reach them before others.",
            questions: [
                {
                    question: "What are Secret Rooms on Paramo?",
                    answer: "Secret Rooms are hidden loot areas inside specific grey buildings that require a Keycard to open. They contain stronger loot than standard buildings."
                },
                {
                    question: "Are all grey buildings on Paramo Secret Rooms?",
                    answer: "No. Only some grey buildings are actual Secret Rooms. The official map is misleading -- use pubg-maps.com to locate only the real ones."
                },
                {
                    question: "Where do I find a Keycard on Paramo?",
                    answer: "Keycards can spawn anywhere on the map, typically in normal buildings. Their locations are random in each match."
                },
                {
                    question: "What's inside the Secret Rooms?",
                    answer: "They usually contain better-than-average gear, healing items, and often a Critical Response Kit -- allowing you to revive a teammate instantly."
                },
                {
                    question: "Can I open a Secret Room without a Key?",
                    answer: "No. Keys are required. There's no other way to access these rooms."
                }
            ],
            addon:"",
        },
        taego: {
            name: 'Taego',
            mapImage: '/maps/taego/',
            description: 'Eine große, südkoreanisch inspirierte Karte mit neuen Comeback- und Self-Revive-Mechaniken.',
            spawnTypes: {
                secretRooms: 'Secret Rooms',
                hangGliders: 'Hangglider'
            },
            top: `Navigate PUBG Taego using our interactive tactical map highlighting every confirmed Secret Room entrance and guaranteed Glider hardspawn location. Plan your drops, acquire keys for hidden vaults, and control the skies early.`,
            bottom: `Taego offers a mix of traditional PUBG combat and exclusive mechanics that reward map knowledge. This tool highlights two game-changing elements:<br>
            - 🔑 <strong>Secret Rooms with Key Access</strong> - Hidden in ordinary buildings, these rooms are locked behind a sliding wall that only opens when a Secret Key is inserted. The loot inside is significantly stronger than typical ground loot and often includes high-value meds, attachments, and gear.<br>
            - 🪂 <strong>Glider Hardspawns</strong> - Gliders on Taego have fixed spawn locations, making air mobility a reliable option. Use them for fast rotations, mid-game scouting, or late-game repositioning from high ground.<br>
            Every marked Secret Room has been manually confirmed. All Glider spawns are guaranteed.`,
            questions: [
                {
                    question: `How do I open a Secret Room on Taego?`,
                    answer: `You need a Secret Key, which can be found randomly around the map. Once you have it, look for a building with a sliding wall - insert the key to access the loot inside.`,
                },
                {
                    question: `What kind of loot is inside the Secret Rooms?`,
                    answer: `Secret Rooms typically contain better-than-average loot, including high-level gear, meds, and attachments. They do not contain crate-tier weapons, but the loot is still a clear upgrade over regular drops.`,
                },
                {
                    question: `Where can I find Secret Keys on Taego?`,
                    answer: `Keys spawn randomly inside standard buildings across the map. There's no fixed location - it's based on luck and loot RNG.`,
                },
                {
                    question: `Do Gliders have hard spawns on Taego?`,
                    answer: `Yes. All Glider spawn points on Taego are 100% guaranteed. If it's marked on this map, it will be there every match - unless already taken by another player.`,
                },
                {
                    question: `Can I refuel a Glider on Taego?`,
                    answer: `Yes, Gliders can be refueled at gas stations using standard fuel cans or by parking near fuel pumps. The refuel icon may take a few seconds to appear - adjust your view angle if needed.`,
                },
                {
                    question: `Why are only Secret Rooms and Glider spawns shown on the map?`,
                    answer: `This map focuses on reliable, fixed elements - not randomized vehicles, loot drops, or event-based mechanics. That way, players can plan based on confirmed data.`,
                },
            ],
            addon: "",
        },
        deston: {
            name: 'Deston',
            mapImage: '/maps/deston/',
            description: 'Eine vertikal vielfältige Stadtkarte mit Seilrutschen und vertikalen Aufzügen.',
            spawnTypes: {
                gasStations: 'Gasstations',
                hangGliders: 'Hangglider',
                securityRooms: 'Security Rooms' // NEU: Spezifisch für Deston
            },
            top: `Locate every verified Deston Glider hardspawn, gas station, and locked Security Room (including hidden roadside black trucks) on our interactive map. Unlock reinforced vaults with KeyCards to instantly acquire crate-level weapons and armor.`,
            bottom: `Deston is a vertical and high-mobility map with urban density, open terrain, and powerful loot incentives. This map highlights three critical elements for strategic gameplay:<br>
            - 🪂 <strong>Glider Hardspawns</strong> - All Glider icons on the map represent guaranteed spawns. These are ideal for long-range rotations or fast repositioning in the early and mid-game.<br>
            - ⛽ <strong>Gas Stations</strong> - Scattered across the map, these allow you to refuel land and air vehicles. Perfect for extending Glider range or prepping vehicles for long pushes.<br>
            - 🔐 <strong>Security Rooms (KeyCard required)</strong> - There are two types of Security Rooms on Deston: Inside Buildings - Identifiable by armored glass and steel-reinforced doors, and Black Trucks - Stationary vehicles without windows, found near roads or facilities. Both types require a KeyCard and contain the same tier of loot, but the trucks don't show what's inside. It's a gamble - but often worth it.`,
            questions: [
                {
                    question: `Do Gliders have hard spawns on Deston?`,
                    answer: `Yes. All Glider spawn points shown on our map are 100% fixed. If it's marked, it's there - unless taken by another player.`,
                },
                {
                    question: `How do I open a Security Room on Deston?`,
                    answer: `You need a KeyCard, which can be found randomly in loot zones. Use it to access either a reinforced room inside a building or a black armored truck parked somewhere in the open.`,
                },
                {
                    question: `Are black trucks and building rooms the same?`,
                    answer: `Functionally yes - both are Security Rooms. The difference is visual: the black trucks lack windows, so you can't preview the loot inside. However, the loot quality is identical.`,
                },
                {
                    question: `What kind of loot is in Security Rooms?`,
                    answer: `High-tier weapons, armor, healing, and attachments. While not guaranteed to be crate-tier, the loot is consistently better than standard floor loot.`,
                },
                {
                    question: `Can I refuel my Glider on Deston?`,
                    answer: `Yes - via Fuel Cans or at any marked Gas Station. If the icon doesn't appear immediately, adjust your view slightly. The refuel prompt will show up.`,
                },
                {
                    question: `Are Gas Stations safe to use mid-match?`,
                    answer: `Not always. Gas Stations can be high-risk due to their visibility. Secure the area before refueling, especially if you're in a Glider.`,
                },
            ],
            addon: `Pro tip: If you find a KeyCard and can't decide between a building and a black truck - go for the building if you want to check the loot first. Go for the truck if speed matters more than certainty.`,
        },
        rondo: {
            name: 'Rondo',
            mapImage: '/maps/rondo/',
            description: 'Eine vertikal vielfältige Stadtkarte mit Seilrutschen und vertikalen Aufzügen.',
            // NEU: Spezifische Spawn-Typen für Rondo
            spawnTypes: {
                hangGliders: 'Hangglider',
                secretrooms: 'Secret Rooms' // NEU: Spezifisch für Rondo
            },
            top: `Explore all guaranteed Glider hardspawns and secure Secret Rooms on our interactive PUBG Rondo map. Uncover keys to unlock level 3 gear, rare weapon upgrades, and medical supplies to dominate your rotations.`,
            bottom: `Rondo features hidden loot areas that reward players who know where to look. Instead of fighting bots, your focus should be on securing specialized keys to unlock massive gear upgrades. Here's what you need to know about the current Rondo meta:<br>
            - 🪂 <strong>Glider Hardspawns</strong> - All Glider icons on the map represent 100% fixed spawn locations. These flying vehicles are essential for fast map control, scouting, and escaping tight situations.<br>
            - 🔐 <strong>Secret Rooms with Key Access</strong> - Hidden across Rondo are select secure structures containing top-tier level 3 gear, rare weapons, and excellent healing items. These rooms can only be breached if you possess a Secret Key.<br>
            - 🔑 <strong>Finding Secret Keys</strong> - Keys spawn randomly as normal floor loot inside standard buildings. Keep a close eye out while looting early in the match, as finding a key completely changes your rotation strategy.<br>
            - 🎁 <strong>High-Tier Advantage</strong> - Accessing a Secret Room gives your squad an immediate competitive edge, providing high-value loot without the extreme risk of chasing public airdrops.`,
            questions: [
                {
                    question: `Are Glider spawns fixed on Rondo?`,
                    answer: `Yes. All Glider spawn locations shown on our map are hard spawns - they are guaranteed to appear every match, unless claimed by another player first.`,
                },
                {
                    question: `How do I open Secret Rooms on Rondo?`,
                    answer: `To unlock a Secret Room on Rondo, you must first find a Secret Key. Once you have the key in your inventory, approach the locked entrance of any marked Secret Room to open it and access the high-tier loot inside.`,
                },
                {
                    question: `Where can I find Secret Keys on Rondo?`,
                    answer: `Secret Keys do not have fixed spawn locations. They spawn randomly throughout the map as regular ground loot. Checking high-density looting areas early in the game is your best bet to find one.`,
                },
                {
                    question: `What kind of loot is hidden inside Rondo's Secret Rooms?`,
                    answer: `Secret Rooms contain a massive upgrade over standard floor loot. You can reliably find Level 3 armor, high-end scopes, top-tier attachments, and an abundance of powerful healing items to fully kit out your squad.`,
                },
            ],
            addon:`Pro tip: If you or your teammates find a Secret Key early in the game, immediately adjust your rotation toward the nearest marked Secret Room to secure a massive gear advantage before the late-game circles.`,
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
    
    // Initialisiere den Zustand der Marker
    let spawnToggleState = {
        hangGliders: true,
        gasStations: true,
        secretBasements: true,
        securityRooms: true,
        secretRooms: true,
        emergencyPickups: true,
        weaponCaches: true,
        soldiers: true,
        bunkers: true,
        labcamps: true,
        westroute: true,
        northroute: true,
        eastroute: true,
        bears: true,
        southroute: true,
    };
    
    // Lade Dark-Mode-Auswahl aus localStorage (Standard: true / Dark Mode)
    let darkMode = localStorage.getItem('darkMode') !== 'false';
    document.body.classList.toggle('dark-mode', darkMode);
    document.documentElement.classList.toggle('dark-mode', darkMode);

    // Globale Funktion zum dynamischen Laden der Karte (SPA)
    window.loadMap = function(mapSlug) {
        if (!mapData[mapSlug]) return;
        const currentMap = mapData[mapSlug];
        
        // Dynamic title update with current year
        const currentYear = new Date().getFullYear();
        document.title = `Pubg Maps | ${currentYear} | Spawnpoints for ${currentMap.name} | Gliders, Gasstations, Vehicles, Routes, Secret Basements, Bunker, Soldiers`;
        
        // Sidebar-Controls dynamisch laden
        loadSidebarControls(currentMap.spawnTypes, spawnToggleState, darkMode, (event) => {
            Object.assign(spawnToggleState, event.detail.spawnToggleState);
            darkMode = event.detail.darkMode;
            localStorage.setItem('darkMode', darkMode);
            document.body.classList.toggle('dark-mode', darkMode);
            document.documentElement.classList.toggle('dark-mode', darkMode);
            updateMapDisplay(currentMap.mapImage, spawnToggleState, darkMode, currentMap.spawnTypes);
        });

        // MapDisplay dynamisch laden
        loadMapDisplay(currentMap.mapImage, currentMap.name, spawnToggleState, darkMode, currentMap.spawnTypes, currentMap.questions, currentMap.top, currentMap.bottom, currentMap.addon);

        const preloadLink = document.getElementById('map-image-preload');
        if (preloadLink) {
            preloadLink.href = `/image/${mapSlug}/map.jpg`;
        }
    };

    // Event-Listener für Zurück-/Vorwärts-Navigation des Browsers
    window.addEventListener('popstate', () => {
        let slug = window.location.pathname.split('/').pop() || 'erangel';
        if (window.location.pathname === '/' || window.location.pathname === '') slug = 'erangel';
        window.loadMap(slug);
        
        // Navbar Active-Klasse anpassen
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (navbarPlaceholder) {
            const currentPath = window.location.pathname === '/' || window.location.pathname === '' ? '/maps/erangel' : window.location.pathname;
            navbarPlaceholder.querySelectorAll('a').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === currentPath);
            });
        }
    });

    // Lade und initialisiere Navbar
    loadNavbar();

    // Initialer Aufruf der aktuellen Karte
    window.loadMap(currentMapSlug);
});

// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const mapData = {
        erangel: {
            markers: [
              {
                        "label": "Marker 1",
                        "type": "hangGliders",
                        "x": 5648,
                        "y": -405
              },
              {
                        "label": "Marker 2",
                        "type": "hangGliders",
                        "x": 6454,
                        "y": -607
              },
              {
                        "label": "Marker 3",
                        "type": "hangGliders",
                        "x": 6581,
                        "y": -1461
              },
              {
                        "label": "Marker 4",
                        "type": "hangGliders",
                        "x": 6316,
                        "y": -1761
              },
              {
                        "label": "Marker 5",
                        "type": "hangGliders",
                        "x": 5770,
                        "y": -2568
              },
              {
                        "label": "Marker 6",
                        "type": "hangGliders",
                        "x": 5368,
                        "y": -3364
              },
              {
                        "label": "Marker 7",
                        "type": "hangGliders",
                        "x": 4893,
                        "y": -3385
              },
              {
                        "label": "Marker 8",
                        "type": "hangGliders",
                        "x": 6796,
                        "y": -2278
              },
              {
                        "label": "Marker 9",
                        "type": "hangGliders",
                        "x": 7412,
                        "y": -4107
              },
              {
                        "label": "Marker 10",
                        "type": "hangGliders",
                        "x": 6901,
                        "y": -4856
              },
              {
                        "label": "Marker 11",
                        "type": "hangGliders",
                        "x": 6771,
                        "y": -5040
              },
              {
                        "label": "Marker 12",
                        "type": "hangGliders",
                        "x": 5700,
                        "y": -4365
              },
              {
                        "label": "Marker 13",
                        "type": "hangGliders",
                        "x": 5748,
                        "y": -6399
              },
              {
                        "label": "Marker 14",
                        "type": "hangGliders",
                        "x": 5521,
                        "y": -6265
              },
              {
                        "label": "Marker 15",
                        "type": "hangGliders",
                        "x": 5370,
                        "y": -6703
              },
              {
                        "label": "Marker 16",
                        "type": "hangGliders",
                        "x": 4887,
                        "y": -6599
              },
              {
                        "label": "Marker 17",
                        "type": "hangGliders",
                        "x": 4182,
                        "y": -6594
              },
              {
                        "label": "Marker 18",
                        "type": "hangGliders",
                        "x": 4127,
                        "y": -6755
              },
              {
                        "label": "Marker 19",
                        "type": "hangGliders",
                        "x": 4252,
                        "y": -7050
              },
              {
                        "label": "Marker 20",
                        "type": "hangGliders",
                        "x": 3524,
                        "y": -6461
              },
              {
                        "label": "Marker 21",
                        "type": "hangGliders",
                        "x": 3078,
                        "y": -5363
              },
              {
                        "label": "Marker 22",
                        "type": "hangGliders",
                        "x": 2051,
                        "y": -5584
              },
              {
                        "label": "Marker 23",
                        "type": "hangGliders",
                        "x": 1292,
                        "y": -5769
              },
              {
                        "label": "Marker 24",
                        "type": "hangGliders",
                        "x": 935,
                        "y": -4931
              },
              {
                        "label": "Marker 25",
                        "type": "hangGliders",
                        "x": 1050,
                        "y": -3775
              },
              {
                        "label": "Marker 26",
                        "type": "hangGliders",
                        "x": 1088,
                        "y": -3219
              },
              {
                        "label": "Marker 27",
                        "type": "hangGliders",
                        "x": 1576,
                        "y": -3371
              },
              {
                        "label": "Marker 28",
                        "type": "hangGliders",
                        "x": 2669,
                        "y": -2974
              },
              {
                        "label": "Marker 29",
                        "type": "hangGliders",
                        "x": 3360,
                        "y": -2465
              },
              {
                        "label": "Marker 30",
                        "type": "hangGliders",
                        "x": 4370,
                        "y": -2303
              },
              {
                        "label": "Marker 31",
                        "type": "hangGliders",
                        "x": 3591,
                        "y": -1601
              },
              {
                        "label": "Marker 32",
                        "type": "hangGliders",
                        "x": 3547,
                        "y": -1150
              },
              {
                        "label": "Marker 33",
                        "type": "hangGliders",
                        "x": 2981,
                        "y": -1219
              },
              {
                        "label": "Marker 34",
                        "type": "hangGliders",
                        "x": 2421,
                        "y": -1410
              },
              {
                        "label": "Marker 35",
                        "type": "hangGliders",
                        "x": 1705,
                        "y": -1543
              },
              {
                        "label": "Marker 36",
                        "type": "hangGliders",
                        "x": 1649,
                        "y": -1991
              },
              {
                        "label": "Marker 37",
                        "type": "hangGliders",
                        "x": 953,
                        "y": -1647
              },
              {
                        "label": "Marker 38",
                        "type": "hangGliders",
                        "x": 3520,
                        "y": -4771
              },
              {
                        "label": "Marker 39",
                        "type": "hangGliders",
                        "x": 4164,
                        "y": -4701
              },
              {
                        "label": "Marker 40",
                        "type": "hangGliders",
                        "x": 2190,
                        "y": -5307
              },
              {
                        "label": "Marker 41",
                        "type": "hangGliders",
                        "x": 2406,
                        "y": -4414
              },
              {
                        "label": "Marker 42",
                        "type": "secretBasements",
                        "x": 5675,
                        "y": -6729
              },
              {
                        "label": "Marker 43",
                        "type": "secretBasements",
                        "x": 4402,
                        "y": -5922
              },
              {
                        "label": "Marker 44",
                        "type": "secretBasements",
                        "x": 3304,
                        "y": -6706
              },
              {
                        "label": "Marker 45",
                        "type": "secretBasements",
                        "x": 2738,
                        "y": -5157
              },
              {
                        "label": "Marker 46",
                        "type": "secretBasements",
                        "x": 3012,
                        "y": -3751
              },
              {
                        "label": "Marker 47",
                        "type": "secretBasements",
                        "x": 1258,
                        "y": -5532
              },
              {
                        "label": "Marker 48",
                        "type": "secretBasements",
                        "x": 1483,
                        "y": -3541
              },
              {
                        "label": "Marker 49",
                        "type": "secretBasements",
                        "x": 4661,
                        "y": -4424
              },
              {
                        "label": "Marker 50",
                        "type": "secretBasements",
                        "x": 6756,
                        "y": -4897
              },
              {
                        "label": "Marker 51",
                        "type": "secretBasements",
                        "x": 5468,
                        "y": -3424
              },
              {
                        "label": "Marker 52",
                        "type": "secretBasements",
                        "x": 6528,
                        "y": -2075
              },
              {
                        "label": "Marker 53",
                        "type": "secretBasements",
                        "x": 5125,
                        "y": -663
              },
              {
                        "label": "Marker 54",
                        "type": "secretBasements",
                        "x": 4127,
                        "y": -1968
              },
              {
                        "label": "Marker 55",
                        "type": "secretBasements",
                        "x": 2594,
                        "y": -2208
              },
              {
                        "label": "Marker 56",
                        "type": "secretBasements",
                        "x": 1381,
                        "y": -1811
              },
              {
                        "label": "Marker 57",
                        "type": "gasStations",
                        "x": 5561,
                        "y": -5933
              },
              {
                        "label": "Marker 58",
                        "type": "gasStations",
                        "x": 5484,
                        "y": -5185
              },
              {
                        "label": "Marker 59",
                        "type": "gasStations",
                        "x": 6654,
                        "y": -5146
              },
              {
                        "label": "Marker 60",
                        "type": "gasStations",
                        "x": 3293,
                        "y": -5279
              },
              {
                        "label": "Marker 61",
                        "type": "gasStations",
                        "x": 885,
                        "y": -4832
              },
              {
                        "label": "Marker 62",
                        "type": "gasStations",
                        "x": 1376,
                        "y": -2940
              },
              {
                        "label": "Marker 63",
                        "type": "gasStations",
                        "x": 4264,
                        "y": -2195
              },
              {
                        "label": "Marker 64",
                        "type": "gasStations",
                        "x": 4754,
                        "y": -2493
              },
              {
                        "label": "Marker 65",
                        "type": "gasStations",
                        "x": 6626,
                        "y": -1188
              },
              {
                        "label": "Marker 66",
                        "type": "gasStations",
                        "x": 4377,
                        "y": -1131
              }
    ],
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
            All spawn points on this map are based on in-game data and regularly updated.<br><br>
            ⚡ <strong>Standard 8x8 Blue Zone</strong>: Real-time damage per second (DPS) starts mild at 0.6 HP/s (Phase 1) and scales up to 5.0 HP/s (Phase 4) and 32.0 HP/s (Phase 9). Note that <strong>distance-based scaling</strong> is active: the further you are from the safe zone (white circle) while the blue circle is shrinking, the higher the damage you take.`,
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
            markers: [
              {
                        "label": "Marker 1",
                        "type": "hangGliders",
                        "x": 6684,
                        "y": -769
              },
              {
                        "label": "Marker 2",
                        "type": "hangGliders",
                        "x": 5048,
                        "y": -615
              },
              {
                        "label": "Marker 3",
                        "type": "hangGliders",
                        "x": 7160,
                        "y": -1441
              },
              {
                        "label": "Marker 4",
                        "type": "hangGliders",
                        "x": 6829,
                        "y": -2122
              },
              {
                        "label": "Marker 5",
                        "type": "hangGliders",
                        "x": 7855,
                        "y": -3210
              },
              {
                        "label": "Marker 6",
                        "type": "hangGliders",
                        "x": 7361,
                        "y": -4839
              },
              {
                        "label": "Marker 7",
                        "type": "hangGliders",
                        "x": 7378,
                        "y": -5439
              },
              {
                        "label": "Marker 8",
                        "type": "hangGliders",
                        "x": 5574,
                        "y": -6207
              },
              {
                        "label": "Marker 9",
                        "type": "hangGliders",
                        "x": 4291,
                        "y": -7164
              },
              {
                        "label": "Marker 10",
                        "type": "hangGliders",
                        "x": 3671,
                        "y": -6644
              },
              {
                        "label": "Marker 11",
                        "type": "hangGliders",
                        "x": 3077,
                        "y": -7379
              },
              {
                        "label": "Marker 12",
                        "type": "hangGliders",
                        "x": 1937,
                        "y": -7747
              },
              {
                        "label": "Marker 13",
                        "type": "hangGliders",
                        "x": 1105,
                        "y": -7495
              },
              {
                        "label": "Marker 14",
                        "type": "hangGliders",
                        "x": 969,
                        "y": -6803
              },
              {
                        "label": "Marker 15",
                        "type": "hangGliders",
                        "x": 1021,
                        "y": -6156
              },
              {
                        "label": "Marker 16",
                        "type": "hangGliders",
                        "x": 1041,
                        "y": -5419
              },
              {
                        "label": "Marker 17",
                        "type": "hangGliders",
                        "x": 2056,
                        "y": -5048
              },
              {
                        "label": "Marker 18",
                        "type": "hangGliders",
                        "x": 1740,
                        "y": -4608
              },
              {
                        "label": "Marker 19",
                        "type": "hangGliders",
                        "x": 1499,
                        "y": -3318
              },
              {
                        "label": "Marker 20",
                        "type": "hangGliders",
                        "x": 382,
                        "y": -1999
              },
              {
                        "label": "Marker 21",
                        "type": "hangGliders",
                        "x": 900,
                        "y": -874
              },
              {
                        "label": "Marker 22",
                        "type": "hangGliders",
                        "x": 1668,
                        "y": -1577
              },
              {
                        "label": "Marker 23",
                        "type": "hangGliders",
                        "x": 3673,
                        "y": -1334
              },
              {
                        "label": "Marker 24",
                        "type": "hangGliders",
                        "x": 3568,
                        "y": -3104
              },
              {
                        "label": "Marker 25",
                        "type": "hangGliders",
                        "x": 5361,
                        "y": -3795
              },
              {
                        "label": "Marker 26",
                        "type": "hangGliders",
                        "x": 4746,
                        "y": -4733
              },
              {
                        "label": "Marker 27",
                        "type": "hangGliders",
                        "x": 4247,
                        "y": -5321
              },
              {
                        "label": "Marker 28",
                        "type": "hangGliders",
                        "x": 2932,
                        "y": -6361
              },
              {
                        "label": "Marker 29",
                        "type": "hangGliders",
                        "x": 2112,
                        "y": -7155
              },
              {
                        "label": "Marker 30",
                        "type": "gasStations",
                        "x": 3580,
                        "y": -7531
              },
              {
                        "label": "Marker 31",
                        "type": "gasStations",
                        "x": 1352,
                        "y": -7685
              },
              {
                        "label": "Marker 32",
                        "type": "gasStations",
                        "x": 5983,
                        "y": -6363
              },
              {
                        "label": "Marker 33",
                        "type": "gasStations",
                        "x": 6204,
                        "y": -5033
              },
              {
                        "label": "Marker 34",
                        "type": "gasStations",
                        "x": 3847,
                        "y": -4401
              },
              {
                        "label": "Marker 35",
                        "type": "gasStations",
                        "x": 2806,
                        "y": -4377
              },
              {
                        "label": "Marker 36",
                        "type": "gasStations",
                        "x": 1810,
                        "y": -3996
              },
              {
                        "label": "Marker 37",
                        "type": "gasStations",
                        "x": 1009,
                        "y": -2309
              },
              {
                        "label": "Marker 38",
                        "type": "gasStations",
                        "x": 2184,
                        "y": -1546
              },
              {
                        "label": "Marker 39",
                        "type": "gasStations",
                        "x": 3749,
                        "y": -532
              },
              {
                        "label": "Marker 40",
                        "type": "gasStations",
                        "x": 6424,
                        "y": -1717
              },
              {
                        "label": "Marker 41",
                        "type": "gasStations",
                        "x": 5970,
                        "y": -2568
              },
              {
                        "label": "Marker 42",
                        "type": "gasStations",
                        "x": 4340,
                        "y": -2236
              },
              {
                        "label": "Marker 43",
                        "type": "secretRooms",
                        "x": 1387,
                        "y": -7304
              },
              {
                        "label": "Marker 44",
                        "type": "secretRooms",
                        "x": 3324,
                        "y": -6683
              },
              {
                        "label": "Marker 45",
                        "type": "secretRooms",
                        "x": 5243,
                        "y": -6325
              },
              {
                        "label": "Marker 46",
                        "type": "secretRooms",
                        "x": 1287,
                        "y": -5371
              },
              {
                        "label": "Marker 47",
                        "type": "secretRooms",
                        "x": 2718,
                        "y": -5128
              },
              {
                        "label": "Marker 48",
                        "type": "secretRooms",
                        "x": 4352,
                        "y": -5263
              },
              {
                        "label": "Marker 49",
                        "type": "secretRooms",
                        "x": 6222,
                        "y": -4369
              },
              {
                        "label": "Marker 50",
                        "type": "secretRooms",
                        "x": 3853,
                        "y": -3826
              },
              {
                        "label": "Marker 51",
                        "type": "secretRooms",
                        "x": 1420,
                        "y": -3381
              },
              {
                        "label": "Marker 52",
                        "type": "secretRooms",
                        "x": 1790,
                        "y": -1706
              },
              {
                        "label": "Marker 53",
                        "type": "secretRooms",
                        "x": 2796,
                        "y": -2532
              },
              {
                        "label": "Marker 54",
                        "type": "secretRooms",
                        "x": 3370,
                        "y": -1144
              },
              {
                        "label": "Marker 55",
                        "type": "secretRooms",
                        "x": 4618,
                        "y": -1444
              },
              {
                        "label": "Marker 56",
                        "type": "secretRooms",
                        "x": 5293,
                        "y": -3390
              },
              {
                        "label": "Marker 57",
                        "type": "secretRooms",
                        "x": 6617,
                        "y": -1686
              }
    ],
            name: 'Miramar',
            mapImage: '/maps/miramar/',
            description: 'Eine große Wüstenkarte mit viel offener Fläche und vertikalem Gameplay in Städten.',
            spawnTypes: {
                hangGliders: 'Hangglider',
                gasStations: 'Gasstations',
                secretRooms: 'Secret Rooms'
            },
            top: `Master the vast desert terrain with our interactive PUBG Miramar map highlighting verified Motor Glider spawn zones, gas stations, and newly introduced Secret Rooms. Plan efficient rotations and secure top-tier keycard loot to gain a tactical edge.`,
            bottom: `Miramar is known for its wide-open spaces, long-range combat, and minimal cover. This makes fast mobility, aerial scouting, and securing high-value points essential. Our interactive map focuses on:<br>
            - 🪂 <strong>Glider soft spawn zones</strong> - For fast rotations and early positioning.<br>
            - ⛽ <strong>Gas stations</strong> - Critical for refueling Gliders and land vehicles.<br>
            - 🔑 <strong>Secret Rooms</strong> - Contain high-tier loot, accessible using Secret Keys found on the map.<br><br>
            ⚡ <strong>Standard 8x8 Blue Zone</strong>: Real-time damage per second (DPS) starts mild at 0.6 HP/s (Phase 1) and scales up to 5.0 HP/s (Phase 4) and 32.0 HP/s (Phase 9). Note that <strong>distance-based scaling</strong> is active: the further you are from the safe zone (white circle) while the blue circle is shrinking, the higher the damage you take.`,
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
                    answer: "Yes! Following a recent update, Miramar now features hidden Secret Rooms containing high-tier loot. You can unlock them using Secret Keys found randomly around the map."
                },
                {
                    question: "What's the best use for a Glider on Miramar?",
                    answer: "Use it to cross long distances early, secure high ground, or rotate around enemy hot zones. Avoid flying during final circles unless you're certain you have the altitude and fuel."
                }
            ],
            addon:`⚠️ Tip: If you're heading to the edge of the zone or moving across the map, taking a Glider can be faster and safer than driving - especially in open desert terrain.`,
        },
        sanhok: {
            routes: {
              "eastroute": [
                        {
                                  "x": 5270,
                                  "y": -3633
                        },
                        {
                                  "x": 5417,
                                  "y": -3805
                        },
                        {
                                  "x": 5537,
                                  "y": -4037
                        },
                        {
                                  "x": 5633,
                                  "y": -4269
                        },
                        {
                                  "x": 5681,
                                  "y": -4485
                        },
                        {
                                  "x": 5677,
                                  "y": -4737
                        },
                        {
                                  "x": 5665,
                                  "y": -4869
                        },
                        {
                                  "x": 5609,
                                  "y": -5005
                        },
                        {
                                  "x": 5645,
                                  "y": -5125
                        },
                        {
                                  "x": 5721,
                                  "y": -5241
                        },
                        {
                                  "x": 5865,
                                  "y": -5329
                        },
                        {
                                  "x": 6085,
                                  "y": -5369
                        },
                        {
                                  "x": 6217,
                                  "y": -5333
                        },
                        {
                                  "x": 6293,
                                  "y": -5225
                        },
                        {
                                  "x": 6365,
                                  "y": -5061
                        },
                        {
                                  "x": 6429,
                                  "y": -4933
                        },
                        {
                                  "x": 6449,
                                  "y": -4753
                        },
                        {
                                  "x": 6409,
                                  "y": -4601
                        },
                        {
                                  "x": 6413,
                                  "y": -4425
                        },
                        {
                                  "x": 6465,
                                  "y": -4313
                        },
                        {
                                  "x": 6589,
                                  "y": -4233
                        },
                        {
                                  "x": 6725,
                                  "y": -4149
                        },
                        {
                                  "x": 7065,
                                  "y": -3933
                        },
                        {
                                  "x": 7157,
                                  "y": -3777
                        },
                        {
                                  "x": 7133,
                                  "y": -3637
                        },
                        {
                                  "x": 7049,
                                  "y": -3541
                        },
                        {
                                  "x": 6853,
                                  "y": -3365
                        },
                        {
                                  "x": 6697,
                                  "y": -3233
                        },
                        {
                                  "x": 6457,
                                  "y": -3033
                        },
                        {
                                  "x": 6341,
                                  "y": -2838
                        },
                        {
                                  "x": 6317,
                                  "y": -2714
                        },
                        {
                                  "x": 6265,
                                  "y": -2634
                        },
                        {
                                  "x": 6265,
                                  "y": -2570
                        },
                        {
                                  "x": 6181,
                                  "y": -2454
                        },
                        {
                                  "x": 5685,
                                  "y": -2442
                        },
                        {
                                  "x": 5469,
                                  "y": -2458
                        },
                        {
                                  "x": 5341,
                                  "y": -2434
                        },
                        {
                                  "x": 4982,
                                  "y": -2418
                        },
                        {
                                  "x": 4578,
                                  "y": -2418
                        },
                        {
                                  "x": 4286,
                                  "y": -2414
                        },
                        {
                                  "x": 4158,
                                  "y": -2394
                        },
                        {
                                  "x": 4082,
                                  "y": -2478
                        },
                        {
                                  "x": 4098,
                                  "y": -2650
                        },
                        {
                                  "x": 4126,
                                  "y": -2810
                        },
                        {
                                  "x": 4262,
                                  "y": -2945
                        },
                        {
                                  "x": 4446,
                                  "y": -3065
                        },
                        {
                                  "x": 4502,
                                  "y": -3177
                        },
                        {
                                  "x": 4518,
                                  "y": -3285
                        },
                        {
                                  "x": 4542,
                                  "y": -3433
                        },
                        {
                                  "x": 4614,
                                  "y": -3569
                        },
                        {
                                  "x": 4690,
                                  "y": -3657
                        },
                        {
                                  "x": 4918,
                                  "y": -3665
                        },
                        {
                                  "x": 5174,
                                  "y": -3633
                        }
              ],
              "northroute": [
                        {
                                  "x": 5429,
                                  "y": -1809
                        },
                        {
                                  "x": 5273,
                                  "y": -1813
                        },
                        {
                                  "x": 5145,
                                  "y": -1853
                        },
                        {
                                  "x": 5033,
                                  "y": -1945
                        },
                        {
                                  "x": 4793,
                                  "y": -1989
                        },
                        {
                                  "x": 4645,
                                  "y": -1977
                        },
                        {
                                  "x": 4462,
                                  "y": -2037
                        },
                        {
                                  "x": 4298,
                                  "y": -2129
                        },
                        {
                                  "x": 4214,
                                  "y": -2297
                        },
                        {
                                  "x": 4122,
                                  "y": -2429
                        },
                        {
                                  "x": 3962,
                                  "y": -2521
                        },
                        {
                                  "x": 3734,
                                  "y": -2529
                        },
                        {
                                  "x": 3542,
                                  "y": -2561
                        },
                        {
                                  "x": 3094,
                                  "y": -2529
                        },
                        {
                                  "x": 2927,
                                  "y": -2475
                        },
                        {
                                  "x": 2741,
                                  "y": -2451
                        },
                        {
                                  "x": 2547,
                                  "y": -2503
                        },
                        {
                                  "x": 2297,
                                  "y": -2565
                        },
                        {
                                  "x": 2025,
                                  "y": -2581
                        },
                        {
                                  "x": 1881,
                                  "y": -2587
                        },
                        {
                                  "x": 1777,
                                  "y": -2651
                        },
                        {
                                  "x": 1723,
                                  "y": -2776
                        },
                        {
                                  "x": 1753,
                                  "y": -2984
                        },
                        {
                                  "x": 1819,
                                  "y": -3162
                        },
                        {
                                  "x": 1815,
                                  "y": -3385
                        },
                        {
                                  "x": 1703,
                                  "y": -3629
                        },
                        {
                                  "x": 1668,
                                  "y": -3783
                        },
                        {
                                  "x": 1720,
                                  "y": -3981
                        },
                        {
                                  "x": 1814,
                                  "y": -4103
                        },
                        {
                                  "x": 1830,
                                  "y": -4273
                        },
                        {
                                  "x": 1822,
                                  "y": -4435
                        },
                        {
                                  "x": 2114,
                                  "y": -4978
                        },
                        {
                                  "x": 2165,
                                  "y": -5158
                        },
                        {
                                  "x": 2169,
                                  "y": -5310
                        },
                        {
                                  "x": 2243,
                                  "y": -5442
                        },
                        {
                                  "x": 2694,
                                  "y": -5926
                        },
                        {
                                  "x": 2704,
                                  "y": -6040
                        },
                        {
                                  "x": 2497,
                                  "y": -6799
                        },
                        {
                                  "x": 2325,
                                  "y": -6733
                        },
                        {
                                  "x": 2253,
                                  "y": -6569
                        },
                        {
                                  "x": 2265,
                                  "y": -6471
                        },
                        {
                                  "x": 2375,
                                  "y": -6279
                        },
                        {
                                  "x": 2371,
                                  "y": -6111
                        },
                        {
                                  "x": 2289,
                                  "y": -6031
                        },
                        {
                                  "x": 2125,
                                  "y": -5937
                        },
                        {
                                  "x": 1926,
                                  "y": -5534
                        },
                        {
                                  "x": 2054,
                                  "y": -5070
                        },
                        {
                                  "x": 2274,
                                  "y": -4938
                        },
                        {
                                  "x": 2381,
                                  "y": -4833
                        },
                        {
                                  "x": 2617,
                                  "y": -4997
                        },
                        {
                                  "x": 2985,
                                  "y": -5093
                        },
                        {
                                  "x": 3301,
                                  "y": -5140
                        },
                        {
                                  "x": 3565,
                                  "y": -4965
                        },
                        {
                                  "x": 4320,
                                  "y": -4887
                        },
                        {
                                  "x": 4384,
                                  "y": -4779
                        },
                        {
                                  "x": 4316,
                                  "y": -4699
                        },
                        {
                                  "x": 4260,
                                  "y": -4571
                        },
                        {
                                  "x": 4244,
                                  "y": -4351
                        },
                        {
                                  "x": 4184,
                                  "y": -4139
                        },
                        {
                                  "x": 4220,
                                  "y": -3983
                        },
                        {
                                  "x": 4220,
                                  "y": -3659
                        },
                        {
                                  "x": 3840,
                                  "y": -3659
                        },
                        {
                                  "x": 3724,
                                  "y": -3703
                        },
                        {
                                  "x": 3676,
                                  "y": -3747
                        },
                        {
                                  "x": 3091,
                                  "y": -3523
                        },
                        {
                                  "x": 3135,
                                  "y": -3411
                        },
                        {
                                  "x": 3071,
                                  "y": -3295
                        },
                        {
                                  "x": 3059,
                                  "y": -3127
                        },
                        {
                                  "x": 3023,
                                  "y": -2879
                        },
                        {
                                  "x": 2923,
                                  "y": -2543
                        }
              ],
              "southroute": [
                        {
                                  "x": 3127,
                                  "y": -7168
                        },
                        {
                                  "x": 3279,
                                  "y": -7116
                        },
                        {
                                  "x": 3479,
                                  "y": -7052
                        },
                        {
                                  "x": 3623,
                                  "y": -7068
                        },
                        {
                                  "x": 3851,
                                  "y": -7164
                        },
                        {
                                  "x": 3978,
                                  "y": -7260
                        },
                        {
                                  "x": 4326,
                                  "y": -7232
                        },
                        {
                                  "x": 4514,
                                  "y": -7104
                        },
                        {
                                  "x": 4638,
                                  "y": -6912
                        },
                        {
                                  "x": 4686,
                                  "y": -6544
                        },
                        {
                                  "x": 4946,
                                  "y": -6380
                        },
                        {
                                  "x": 5063,
                                  "y": -6191
                        },
                        {
                                  "x": 5099,
                                  "y": -6039
                        },
                        {
                                  "x": 5255,
                                  "y": -5911
                        },
                        {
                                  "x": 5343,
                                  "y": -5851
                        },
                        {
                                  "x": 5704,
                                  "y": -5797
                        },
                        {
                                  "x": 5976,
                                  "y": -5977
                        },
                        {
                                  "x": 6056,
                                  "y": -6169
                        },
                        {
                                  "x": 6280,
                                  "y": -6185
                        },
                        {
                                  "x": 6616,
                                  "y": -6021
                        },
                        {
                                  "x": 6748,
                                  "y": -5861
                        },
                        {
                                  "x": 6812,
                                  "y": -5673
                        },
                        {
                                  "x": 6976,
                                  "y": -5737
                        },
                        {
                                  "x": 7028,
                                  "y": -5585
                        },
                        {
                                  "x": 6920,
                                  "y": -5361
                        },
                        {
                                  "x": 6816,
                                  "y": -5185
                        },
                        {
                                  "x": 6760,
                                  "y": -4985
                        },
                        {
                                  "x": 6516,
                                  "y": -4797
                        },
                        {
                                  "x": 6408,
                                  "y": -4671
                        },
                        {
                                  "x": 6386,
                                  "y": -4485
                        },
                        {
                                  "x": 6514,
                                  "y": -4263
                        },
                        {
                                  "x": 6930,
                                  "y": -4057
                        },
                        {
                                  "x": 7146,
                                  "y": -3850
                        },
                        {
                                  "x": 7096,
                                  "y": -3612
                        },
                        {
                                  "x": 6756,
                                  "y": -3305
                        },
                        {
                                  "x": 6492,
                                  "y": -3088
                        },
                        {
                                  "x": 6355,
                                  "y": -2902
                        },
                        {
                                  "x": 6245,
                                  "y": -2501
                        },
                        {
                                  "x": 5945,
                                  "y": -2463
                        },
                        {
                                  "x": 5607,
                                  "y": -2465
                        },
                        {
                                  "x": 5215,
                                  "y": -2445
                        },
                        {
                                  "x": 4738,
                                  "y": -2435
                        },
                        {
                                  "x": 4332,
                                  "y": -2433
                        },
                        {
                                  "x": 4193,
                                  "y": -2411
                        },
                        {
                                  "x": 4075,
                                  "y": -2441
                        },
                        {
                                  "x": 4077,
                                  "y": -2601
                        },
                        {
                                  "x": 4095,
                                  "y": -2758
                        },
                        {
                                  "x": 4201,
                                  "y": -2908
                        },
                        {
                                  "x": 4399,
                                  "y": -3020
                        },
                        {
                                  "x": 4490,
                                  "y": -3127
                        },
                        {
                                  "x": 4494,
                                  "y": -3243
                        },
                        {
                                  "x": 4522,
                                  "y": -3379
                        },
                        {
                                  "x": 4572,
                                  "y": -3533
                        },
                        {
                                  "x": 4652,
                                  "y": -3649
                        },
                        {
                                  "x": 4811,
                                  "y": -3673
                        },
                        {
                                  "x": 5112,
                                  "y": -3675
                        },
                        {
                                  "x": 5224,
                                  "y": -3619
                        },
                        {
                                  "x": 5334,
                                  "y": -3725
                        },
                        {
                                  "x": 5491,
                                  "y": -3920
                        },
                        {
                                  "x": 5612,
                                  "y": -4183
                        },
                        {
                                  "x": 5678,
                                  "y": -4399
                        },
                        {
                                  "x": 5670,
                                  "y": -4619
                        },
                        {
                                  "x": 5686,
                                  "y": -4811
                        },
                        {
                                  "x": 5606,
                                  "y": -4974
                        },
                        {
                                  "x": 5616,
                                  "y": -5086
                        },
                        {
                                  "x": 5678,
                                  "y": -5190
                        },
                        {
                                  "x": 5782,
                                  "y": -5302
                        },
                        {
                                  "x": 5988,
                                  "y": -5362
                        },
                        {
                                  "x": 6189,
                                  "y": -5358
                        },
                        {
                                  "x": 6281,
                                  "y": -5284
                        },
                        {
                                  "x": 6357,
                                  "y": -5112
                        },
                        {
                                  "x": 6413,
                                  "y": -5012
                        },
                        {
                                  "x": 6466,
                                  "y": -4788
                        }
              ]
    },
            name: 'Sanhok',
            mapImage: '/maps/sanhok/',
            description: 'Eine kleine, dichte Inselkarte, die schnelle und aggressive Kämpfe fördert.',
            spawnTypes: {
                eastroute: "Eastroute",
                northroute: "Northroute",
                
                southroute: "Southroute"
            },
            top: `Track Sanhok's Loot Truck routes, driving paths, and spawn timings in real-time with our interactive tactical guide. Pinpoint patrols to intercept trucks, blow open crate-grade loot, and secure rare weapons.`,
            bottom: `Loot Trucks are an exclusive feature of Sanhok that combine strategy, ambush potential, and rich rewards. Here's how they behave:<br>
            - 🚛 <strong>4 trucks per match</strong><br>
            - 🎯 <strong>Shoot to drop loot</strong> - trucks periodically drop gear while damaged<br>
            - 💥 <strong>Destroyable</strong> - once fully destroyed, the entire truck can be looted<br>
            - ⏱ <strong>Timed spawn routes</strong> - each truck has a unique path and start time<br>
            - 🎁 <strong>High-tier loot</strong> - including crate-grade items and exclusive gear<br><br>
            ⚡ <strong>Dynamic Blue Zone (4x4)</strong>: Sanhok uses a dynamic Blue Zone system. While base damage is similar to large maps, wait times and shrink speeds adjust automatically in real-time based on the number of surviving players. Fewer survivors mean faster circles.`,
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
            markers: [
              {
                        "label": "Marker 1",
                        "type": "bears",
                        "x": 3853,
                        "y": -6102
              },
              {
                        "label": "Marker 2",
                        "type": "bears",
                        "x": 3764,
                        "y": -6574
              },
              {
                        "label": "Marker 3",
                        "type": "bears",
                        "x": 5266,
                        "y": -5935
              },
              {
                        "label": "Marker 4",
                        "type": "bears",
                        "x": 6304,
                        "y": -5872
              },
              {
                        "label": "Marker 5",
                        "type": "bears",
                        "x": 7006,
                        "y": -4060
              },
              {
                        "label": "Marker 6",
                        "type": "bears",
                        "x": 4755,
                        "y": -3608
              },
              {
                        "label": "Marker 7",
                        "type": "bears",
                        "x": 5758,
                        "y": -2951
              },
              {
                        "label": "Marker 8",
                        "type": "bears",
                        "x": 6104,
                        "y": -1905
              },
              {
                        "label": "Marker 9",
                        "type": "bears",
                        "x": 5339,
                        "y": -1362
              },
              {
                        "label": "Marker 10",
                        "type": "bears",
                        "x": 2864,
                        "y": -1371
              },
              {
                        "label": "Marker 11",
                        "type": "bunkers",
                        "x": 3979,
                        "y": -6568
              },
              {
                        "label": "Marker 12",
                        "type": "bunkers",
                        "x": 2395,
                        "y": -5664
              },
              {
                        "label": "Marker 13",
                        "type": "bunkers",
                        "x": 1401,
                        "y": -3858
              },
              {
                        "label": "Marker 14",
                        "type": "bunkers",
                        "x": 6111,
                        "y": -5912
              },
              {
                        "label": "Marker 15",
                        "type": "bunkers",
                        "x": 6892,
                        "y": -3902
              },
              {
                        "label": "Marker 16",
                        "type": "bunkers",
                        "x": 6290,
                        "y": -2464
              },
              {
                        "label": "Marker 17",
                        "type": "bunkers",
                        "x": 4136,
                        "y": -3227
              },
              {
                        "label": "Marker 18",
                        "type": "bunkers",
                        "x": 2763,
                        "y": -1590
              },
              {
                        "label": "Marker 19",
                        "type": "gasStations",
                        "x": 4200,
                        "y": -6775
              },
              {
                        "label": "Marker 20",
                        "type": "gasStations",
                        "x": 2904,
                        "y": -5257
              },
              {
                        "label": "Marker 21",
                        "type": "gasStations",
                        "x": 1952,
                        "y": -3107
              },
              {
                        "label": "Marker 22",
                        "type": "gasStations",
                        "x": 3072,
                        "y": -1255
              },
              {
                        "label": "Marker 23",
                        "type": "gasStations",
                        "x": 5070,
                        "y": -2509
              },
              {
                        "label": "Marker 24",
                        "type": "gasStations",
                        "x": 5128,
                        "y": -3968
              },
              {
                        "label": "Marker 25",
                        "type": "gasStations",
                        "x": 5186,
                        "y": -4671
              },
              {
                        "label": "Marker 26",
                        "type": "hangGliders",
                        "x": 5043,
                        "y": -7020
              },
              {
                        "label": "Marker 27",
                        "type": "hangGliders",
                        "x": 2471,
                        "y": -7205
              },
              {
                        "label": "Marker 28",
                        "type": "hangGliders",
                        "x": 1301,
                        "y": -5911
              },
              {
                        "label": "Marker 29",
                        "type": "hangGliders",
                        "x": 1760,
                        "y": -3935
              },
              {
                        "label": "Marker 30",
                        "type": "hangGliders",
                        "x": 1616,
                        "y": -1447
              },
              {
                        "label": "Marker 31",
                        "type": "hangGliders",
                        "x": 3659,
                        "y": -2253
              },
              {
                        "label": "Marker 32",
                        "type": "hangGliders",
                        "x": 5474,
                        "y": -3050
              },
              {
                        "label": "Marker 33",
                        "type": "hangGliders",
                        "x": 5928,
                        "y": -2032
              },
              {
                        "label": "Marker 34",
                        "type": "hangGliders",
                        "x": 4331,
                        "y": -4417
              },
              {
                        "label": "Marker 35",
                        "type": "hangGliders",
                        "x": 6733,
                        "y": -5577
              },
              {
                        "label": "Marker 36",
                        "type": "labcamps",
                        "x": 2034,
                        "y": -2693
              },
              {
                        "label": "Marker 37",
                        "type": "labcamps",
                        "x": 2295,
                        "y": -2194
              },
              {
                        "label": "Marker 38",
                        "type": "labcamps",
                        "x": 3241,
                        "y": -1941
              },
              {
                        "label": "Marker 39",
                        "type": "labcamps",
                        "x": 3296,
                        "y": -1067
              },
              {
                        "label": "Marker 40",
                        "type": "bunkers",
                        "x": 5450,
                        "y": -1326
              }
    ],
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
            top: `Navigate the snowy terrain using our interactive PUBG Vikendi map showing guaranteed Glider spawns, gas stations, Bear Caves, Lab Camps, and secret Keycard Bunkers. Gain an instant strategic advantage by tracking high-tier loot hotspots in real-time.`,
            bottom: `Vikendi blends snowy terrain, open fields, and complex vertical zones -- but also hides some of the best loot opportunities in PUBG. This map focuses on five key gameplay elements:<br>
            - 🪂 <strong>Glider hardspawns</strong> - Fixed 100% spawn chance, ideal for fast map control<br>
            - ⛽ <strong>Gas stations</strong> - Crucial for refueling land and air vehicles<br>
            - 🐻 <strong>Bear Caves</strong> - Contain airdrop-grade loot, but Thermal Scopes have been removed in recent patches<br>
            - 🔬 <strong>Lab Camps</strong> - Hold crate-level loot, but trigger alarms when opened<br>
            - 🗝️ <strong>Keycard Bunkers</strong> - Require Keycards to access hidden high-value loot rooms<br><br>
            ⚡ <strong>Standard 8x8 Blue Zone</strong>: Real-time damage per second (DPS) starts mild at 0.6 HP/s (Phase 1) and scales up to 5.0 HP/s (Phase 4) and 32.0 HP/s (Phase 9). Note that <strong>distance-based scaling</strong> is active: the further you are from the safe zone (white circle) while the blue circle is shrinking, the higher the damage you take.`,
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
            markers: [
              {
                        "label": "Marker 1",
                        "type": "bunkers",
                        "x": 1833,
                        "y": -3037
              },
              {
                        "label": "Marker 2",
                        "type": "bunkers",
                        "x": 1969,
                        "y": -2749
              },
              {
                        "label": "Marker 3",
                        "type": "bunkers",
                        "x": 3321,
                        "y": -2626
              },
              {
                        "label": "Marker 4",
                        "type": "bunkers",
                        "x": 6272,
                        "y": -2536
              },
              {
                        "label": "Marker 5",
                        "type": "bunkers",
                        "x": 6128,
                        "y": -2668
              },
              {
                        "label": "Marker 6",
                        "type": "bunkers",
                        "x": 4895,
                        "y": -3858
              },
              {
                        "label": "Marker 7",
                        "type": "bunkers",
                        "x": 4336,
                        "y": -3784
              },
              {
                        "label": "Marker 8",
                        "type": "bunkers",
                        "x": 4497,
                        "y": -4276
              },
              {
                        "label": "Marker 9",
                        "type": "bunkers",
                        "x": 4325,
                        "y": -4274
              },
              {
                        "label": "Marker 10",
                        "type": "bunkers",
                        "x": 6100,
                        "y": -4219
              },
              {
                        "label": "Marker 11",
                        "type": "bunkers",
                        "x": 6243,
                        "y": -5706
              },
              {
                        "label": "Marker 12",
                        "type": "bunkers",
                        "x": 5973,
                        "y": -5888
              },
              {
                        "label": "Marker 13",
                        "type": "bunkers",
                        "x": 3085,
                        "y": -6420
              },
              {
                        "label": "Marker 14",
                        "type": "bunkers",
                        "x": 3467,
                        "y": -6486
              },
              {
                        "label": "Marker 15",
                        "type": "bunkers",
                        "x": 3392,
                        "y": -5763
              },
              {
                        "label": "Marker 16",
                        "type": "bunkers",
                        "x": 3820,
                        "y": -4715
              },
              {
                        "label": "Marker 17",
                        "type": "bunkers",
                        "x": 4228,
                        "y": -5023
              },
              {
                        "label": "Marker 18",
                        "type": "bunkers",
                        "x": 5102,
                        "y": -6217
              },
              {
                        "label": "Marker 19",
                        "type": "bunkers",
                        "x": 4677,
                        "y": -6043
              },
              {
                        "label": "Marker 20",
                        "type": "bunkers",
                        "x": 4646,
                        "y": -5557
              },
              {
                        "label": "Marker 21",
                        "type": "bunkers",
                        "x": 5105,
                        "y": -2843
              },
              {
                        "label": "Marker 22",
                        "type": "bunkers",
                        "x": 4802,
                        "y": -2599
              }
    ],
            name: 'Karakin',
            mapImage: '/maps/karakin/',
            description: 'Eine kleine, karge Wüsteninsel mit einzigartigen Zerstörungsmechaniken.',
            spawnTypes: {
                bunkers: "Bunkers"
            },
            top: `Locate all destructible walls, underground tunnels, and sealed bunker entrances on Karakin with our interactive PUBG map. Breach chambers using Sticky Bombs or Panzerfausts to quickly acquire high-tier gear and surprise your enemies.`,
            bottom: `Karakin is one of PUBG's smallest maps -- but also one of the most intense. What makes it unique is the ability to blow open walls, floors, and bunkers to access hidden loot and new movement options. Our interactive map highlights:<br>
            - 💣 <strong>Bunker entrances</strong> - Sealed behind destructible walls, only breakable with explosives<br>
            - 🏚️ <strong>Locked buildings</strong> - Contain strong loot, also require Sticky Bombs or Panzerfausts to access<br>
            - 🔄 <strong>Underground routes</strong> - Some bunkers let you rotate below ground and surprise enemies from behind<br><br>
            ⚡ <strong>Aggressive Blue & Black Zones (2x2)</strong>: Due to Karakin's micro scale, its Blue Zone is highly aggressive with fewer total phases (6–7), scaling up damage much faster than on 8x8 maps. Beware of the unique <strong>Black Zone</strong> (purple circle on the minimap) which targets and demolishes buildings directly; seek shelter outside buildings to survive.`,
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
            markers: [
              {
                        "label": "Marker 1",
                        "type": "secretRooms",
                        "x": 3232,
                        "y": -2602
              },
              {
                        "label": "Marker 2",
                        "type": "secretRooms",
                        "x": 2274,
                        "y": -2932
              },
              {
                        "label": "Marker 3",
                        "type": "secretRooms",
                        "x": 1052,
                        "y": -5202
              },
              {
                        "label": "Marker 4",
                        "type": "secretRooms",
                        "x": 3555,
                        "y": -5163
              },
              {
                        "label": "Marker 5",
                        "type": "secretRooms",
                        "x": 4237,
                        "y": -6583
              },
              {
                        "label": "Marker 6",
                        "type": "secretRooms",
                        "x": 4952,
                        "y": -4933
              },
              {
                        "label": "Marker 7",
                        "type": "secretRooms",
                        "x": 6687,
                        "y": -4690
              },
              {
                        "label": "Marker 8",
                        "type": "secretRooms",
                        "x": 5102,
                        "y": -4009
              }
    ],
            name: 'Paramo',
            mapImage: '/maps/paramo/',
            description: 'Eine dynamische Vulkaninsel, deren Layout sich von Spiel zu Spiel ändert.',
            spawnTypes: {
                secretRooms: 'Secret Rooms' 
            },
            top: `Find confirmed Paramo Secret Rooms requiring Keycards to unlock with our data-backed interactive PUBG map. Discover instant Critical Response Kits and high-tier equipment before the volcanic zones close in.`,
            bottom: `Paramo introduces a more subtle approach to hidden loot than other PUBG maps. While the surface looks calm, several high-value areas are only accessible with a Keycard:<br>
            - <strong>Secret Rooms</strong> - Hidden inside select grey buildings and only accessible with a Keycard<br>
            - <strong>Keycards</strong> - Spawn randomly on the map in ordinary buildings<br>
            - <strong>Loot contents</strong> - Better than standard loot, often includes Critical Response Kits for ultra-fast revives<br>
            - <strong>Official map confusion</strong> - Many grey buildings look like Secret Rooms, but only some actually are -- which is why this map focuses solely on confirmed locations<br><br>
            ⚡ <strong>Fast Blue Zone (3x3)</strong>: Due to Paramo's smaller scale, the Blue Zone has fewer total phases and damage increases far more aggressively in the early/mid-game than on standard 8x8 maps to speed up encounters.`,
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
            markers: [
              {
                        "label": "Marker 1",
                        "type": "secretRooms",
                        "x": 1445,
                        "y": -1190
              },
              {
                        "label": "Marker 2",
                        "type": "secretRooms",
                        "x": 2606,
                        "y": -1378
              },
              {
                        "label": "Marker 3",
                        "type": "secretRooms",
                        "x": 3592,
                        "y": -1980
              },
              {
                        "label": "Marker 4",
                        "type": "secretRooms",
                        "x": 4855,
                        "y": -1726
              },
              {
                        "label": "Marker 5",
                        "type": "secretRooms",
                        "x": 6911,
                        "y": -2086
              },
              {
                        "label": "Marker 6",
                        "type": "secretRooms",
                        "x": 7162,
                        "y": -3377
              },
              {
                        "label": "Marker 7",
                        "type": "secretRooms",
                        "x": 6029,
                        "y": -3898
              },
              {
                        "label": "Marker 8",
                        "type": "secretRooms",
                        "x": 6421,
                        "y": -5567
              },
              {
                        "label": "Marker 9",
                        "type": "secretRooms",
                        "x": 6371,
                        "y": -7254
              },
              {
                        "label": "Marker 10",
                        "type": "secretRooms",
                        "x": 4950,
                        "y": -6455
              },
              {
                        "label": "Marker 11",
                        "type": "secretRooms",
                        "x": 2433,
                        "y": -6479
              },
              {
                        "label": "Marker 12",
                        "type": "secretRooms",
                        "x": 960,
                        "y": -5288
              },
              {
                        "label": "Marker 13",
                        "type": "secretRooms",
                        "x": 1023,
                        "y": -3416
              },
              {
                        "label": "Marker 14",
                        "type": "secretRooms",
                        "x": 1266,
                        "y": -2711
              },
              {
                        "label": "Marker 15",
                        "type": "secretRooms",
                        "x": 4447,
                        "y": -4991
              },
              {
                        "label": "Marker 16",
                        "type": "hangGliders",
                        "x": 1800,
                        "y": -2032
              },
              {
                        "label": "Marker 17",
                        "type": "hangGliders",
                        "x": 3668,
                        "y": -2765
              },
              {
                        "label": "Marker 18",
                        "type": "hangGliders",
                        "x": 5112,
                        "y": -3553
              },
              {
                        "label": "Marker 19",
                        "type": "hangGliders",
                        "x": 4044,
                        "y": -4783
              },
              {
                        "label": "Marker 20",
                        "type": "hangGliders",
                        "x": 6474,
                        "y": -6391
              },
              {
                        "label": "Marker 21",
                        "type": "hangGliders",
                        "x": 3033,
                        "y": -7030
              },
              {
                        "label": "Marker 22",
                        "type": "hangGliders",
                        "x": 1368,
                        "y": -3985
              },
              {
                        "label": "Marker 23",
                        "type": "hangGliders",
                        "x": 6347,
                        "y": -2779
              },
              {
                        "label": "Marker 24",
                        "type": "hangGliders",
                        "x": 7633,
                        "y": -2186
              },
              {
                        "label": "Marker 25",
                        "type": "hangGliders",
                        "x": 4364,
                        "y": -967
              }
    ],
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
            - 🪂 <strong>Glider Hardspawns</strong> - Gliders on Taego have fixed spawn locations, making air mobility a reliable option. Use them for fast rotations, mid-game scouting, or late-game repositioning from high ground.<br><br>
            ⚡ <strong>Standard 8x8 Blue Zone</strong>: Real-time damage per second (DPS) starts mild at 0.6 HP/s (Phase 1) and scales up to 5.0 HP/s (Phase 4) and 32.0 HP/s (Phase 9). Note that <strong>distance-based scaling</strong> is active: the further you are from the safe zone (white circle) while the blue circle is shrinking, the higher the damage you take.`,
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
            - 🔐 <strong>Security Rooms (KeyCard required)</strong> - There are two types of Security Rooms on Deston: Inside Buildings - Identifiable by armored glass and steel-reinforced doors, and Black Trucks - Stationary vehicles without windows, found near roads or facilities. Both types require a KeyCard and contain the same tier of loot, but the trucks don't show what's inside.<br><br>
            ⚡ <strong>Standard 8x8 Blue Zone</strong>: Real-time damage per second (DPS) starts mild at 0.6 HP/s (Phase 1) and scales up to 5.0 HP/s (Phase 4) and 32.0 HP/s (Phase 9). Note that <strong>distance-based scaling</strong> is active: the further you are from the safe zone (white circle) while the blue circle is shrinking, the higher the damage you take.`,
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
            markers: [
                { label: 'Marker 1', type: 'securityRooms', x: 1799, y: -1402 },
                { label: 'Marker 3', type: 'securityRooms', x: 2051, y: -1608 },
                { label: 'Marker 3', type: 'securityRooms', x: 1965, y: -1783 },
                { label: 'Marker 4', type: 'hangGliders', x: 1332, y: -976 },
                { label: 'Marker 5', type: 'gasStations', x: 2916, y: -544 },
                { label: 'Marker 6', type: 'hangGliders', x: 2538, y: -540 },
                { label: 'Marker 7', type: 'gasStations', x: 4971, y: -859 },
                { label: 'Marker 8', type: 'securityRooms', x: 5219, y: -981 },
                { label: 'Marker 9', type: 'gasStations', x: 3373, y: -1629 },
                { label: 'Marker 10', type: 'securityRooms', x: 5078, y: -2008 },
                { label: 'Marker 11', type: 'securityRooms', x: 5498, y: -2136 },
                { label: 'Marker 12', type: 'gasStations', x: 7585, y: -4190 },
                { label: 'Marker 13', type: 'gasStations', x: 4453, y: -2903 },
                { label: 'Marker 14', type: 'securityRooms', x: 4428, y: -2885 },
                { label: 'Marker 15', type: 'gasStations', x: 3491, y: -2635 },
                { label: 'Marker 16', type: 'hangGliders', x: 3092, y: -2334 },
                { label: 'Marker 17', type: 'securityRooms', x: 3050, y: -2763 },
                { label: 'Marker 18', type: 'hangGliders', x: 2768, y: -2864 },
                { label: 'Marker 19', type: 'gasStations', x: 506, y: -2391 },
                { label: 'Marker 20', type: 'securityRooms', x: 6726, y: -1885 },
                { label: 'Marker 21', type: 'gasStations', x: 4845, y: -3290 },
                { label: 'Marker 22', type: 'hangGliders', x: 4782, y: -3259 },
                { label: 'Marker 23', type: 'gasStations', x: 6495, y: -4028 },
                { label: 'Marker 24', type: 'gasStations', x: 6747, y: -4402 },
                { label: 'Marker 25', type: 'gasStations', x: 6716, y: -5097 },
                { label: 'Marker 26', type: 'gasStations', x: 5959, y: -5033 },
                { label: 'Marker 27', type: 'gasStations', x: 5750, y: -4871 },
                { label: 'Marker 28', type: 'gasStations', x: 5652, y: -5249 },
                { label: 'Marker 29', type: 'gasStations', x: 5315, y: -4416 },
                { label: 'Marker 30', type: 'securityRooms', x: 6708, y: -4230 },
                { label: 'Marker 31', type: 'securityRooms', x: 6133, y: -4219 },
                { label: 'Marker 32', type: 'securityRooms', x: 6085, y: -4333 },
                { label: 'Marker 33', type: 'securityRooms', x: 6226, y: -4266 },
                { label: 'Marker 34', type: 'securityRooms', x: 6124, y: -4730 },
                { label: 'Marker 35', type: 'securityRooms', x: 6578, y: -4677 },
                { label: 'Marker 36', type: 'gasStations', x: 6365, y: -5897 },
                { label: 'Marker 37', type: 'gasStations', x: 6844, y: -6367 },
                { label: 'Marker 38', type: 'hangGliders', x: 6597, y: -6124 },
                { label: 'Marker 39', type: 'gasStations', x: 5683, y: -6464 },
                { label: 'Marker 40', type: 'gasStations', x: 5318, y: -6598 },
                { label: 'Marker 41', type: 'securityRooms', x: 5636, y: -6392 },
                { label: 'Marker 42', type: 'gasStations', x: 5189, y: -5857 },
                { label: 'Marker 43', type: 'hangGliders', x: 4328, y: -6085 },
                { label: 'Marker 44', type: 'gasStations', x: 3899, y: -5813 },
                { label: 'Marker 45', type: 'securityRooms', x: 3490, y: -5759 },
                { label: 'Marker 46', type: 'gasStations', x: 2899, y: -5341 },
                { label: 'Marker 47', type: 'gasStations', x: 1935, y: -4620 },
                { label: 'Marker 48', type: 'securityRooms', x: 1453, y: -4633 },
                { label: 'Marker 49', type: 'hangGliders', x: 747, y: -4637 },
                { label: 'Marker 50', type: 'hangGliders', x: 789, y: -5241 },
                { label: 'Marker 51', type: 'securityRooms', x: 1156, y: -6310 },
                { label: 'Marker 52', type: 'gasStations', x: 1063, y: -6324 },
                { label: 'Marker 53', type: 'gasStations', x: 1826, y: -6275 },
                { label: 'Marker 54', type: 'gasStations', x: 2312, y: -6528 },
                { label: 'Marker 55', type: 'hangGliders', x: 4163, y: -4700 },
                { label: 'Marker 56', type: 'securityRooms', x: 3823, y: -4567 },
                { label: 'Marker 57', type: 'securityRooms', x: 4612, y: -4082 },
                { label: 'Marker 58', type: 'gasStations', x: 3352, y: -3604 },
                { label: 'Marker 59', type: 'gasStations', x: 1411, y: -3393 },
                { label: 'Marker 60', type: 'securityRooms', x: 1815, y: -3514 }
            ]
        },
        rondo: {
            markers: [
              {
                        "label": "Marker 1",
                        "type": "hangGliders",
                        "x": 3367,
                        "y": -316
              },
              {
                        "label": "Marker 2",
                        "type": "hangGliders",
                        "x": 5938,
                        "y": -253
              },
              {
                        "label": "Marker 3",
                        "type": "hangGliders",
                        "x": 7563,
                        "y": -874
              },
              {
                        "label": "Marker 4",
                        "type": "hangGliders",
                        "x": 7808,
                        "y": -3648
              },
              {
                        "label": "Marker 5",
                        "type": "hangGliders",
                        "x": 3908,
                        "y": -7151
              },
              {
                        "label": "Marker 6",
                        "type": "hangGliders",
                        "x": 2167,
                        "y": -7246
              },
              {
                        "label": "Marker 7",
                        "type": "hangGliders",
                        "x": 828,
                        "y": -6073
              },
              {
                        "label": "Marker 8",
                        "type": "hangGliders",
                        "x": 513,
                        "y": -2086
              },
              {
                        "label": "Marker 9",
                        "type": "hangGliders",
                        "x": 1552,
                        "y": -1453
              },
              {
                        "label": "Marker 10",
                        "type": "hangGliders",
                        "x": 7805,
                        "y": -2332
              },
              {
                        "label": "Marker 11",
                        "type": "secretrooms",
                        "x": 3809,
                        "y": -2669
              },
              {
                        "label": "Marker 12",
                        "type": "secretrooms",
                        "x": 5064,
                        "y": -2068
              },
              {
                        "label": "Marker 13",
                        "type": "secretrooms",
                        "x": 6738,
                        "y": -4344
              },
              {
                        "label": "Marker 14",
                        "type": "secretrooms",
                        "x": 5826,
                        "y": -889
              },
              {
                        "label": "Marker 15",
                        "type": "secretrooms",
                        "x": 7041,
                        "y": -2800
              },
              {
                        "label": "Marker 16",
                        "type": "secretrooms",
                        "x": 3052,
                        "y": -935
              },
              {
                        "label": "Marker 17",
                        "type": "secretrooms",
                        "x": 1479,
                        "y": -1363
              },
              {
                        "label": "Marker 18",
                        "type": "secretrooms",
                        "x": 1431,
                        "y": -3256
              },
              {
                        "label": "Marker 19",
                        "type": "secretrooms",
                        "x": 1470,
                        "y": -4812
              },
              {
                        "label": "Marker 20",
                        "type": "secretrooms",
                        "x": 3034,
                        "y": -5170
              },
              {
                        "label": "Marker 21",
                        "type": "secretrooms",
                        "x": 1282,
                        "y": -6530
              },
              {
                        "label": "Marker 22",
                        "type": "secretrooms",
                        "x": 3402,
                        "y": -7041
              },
              {
                        "label": "Marker 23",
                        "type": "secretrooms",
                        "x": 4965,
                        "y": -7426
              },
              {
                        "label": "Marker 24",
                        "type": "secretrooms",
                        "x": 5747,
                        "y": -6143
              },
              {
                        "label": "Marker 25",
                        "type": "secretrooms",
                        "x": 4694,
                        "y": -4416
              }
    ],
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
            - 🎁 <strong>High-Tier Advantage</strong> - Accessing a Secret Room gives your squad an immediate competitive edge, providing high-value loot without the extreme risk of chasing public airdrops.<br><br>
            ⚡ <strong>Standard 8x8 Blue Zone</strong>: Real-time damage per second (DPS) starts mild at 0.6 HP/s (Phase 1) and scales up to 5.0 HP/s (Phase 4) and 32.0 HP/s (Phase 9). Note that <strong>distance-based scaling</strong> is active: the further you are from the safe zone (white circle) while the blue circle is shrinking, the higher the damage you take.`,
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
        loadMapDisplay(currentMap.mapImage, currentMap.name, spawnToggleState, darkMode, currentMap.spawnTypes, currentMap.questions, currentMap.top, currentMap.bottom, currentMap.addon, currentMap.markers, currentMap.routes);

        if (typeof window.initMapComments === 'function') {
            window.initMapComments(mapSlug);
        }

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

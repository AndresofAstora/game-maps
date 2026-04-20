import { createGameRegistry } from "./shared-game-registry.js";

const markerTypes = [
    { id: "area", label: "Area" },
    { id: "stargazer", label: "Stargazer" },
    { id: "npc", label: "NPC" },
    { id: "consumable", label: "Consumable" },
    { id: "tool", label: "Tool" },
    { id: "weapon", label: "Weapon" },
    { id: "defencepart", label: "Defence Part" },
    { id: "material", label: "Material" },
    { id: "collectable", label: "Collectable" },
    { id: "amulet", label: "Amulet" },
    { id: "costume", label: "Costume" },
    { id: "gesture", label: "Gesture" },
    { id: "dimensionalbutterfly", label: "Dimensional Butterfly" },
    { id: "crackscalling", label: "Crack's Calling" },
    { id: "boss", label: "Boss" },
    { id: "ladder", label: "Ladder" },
    { id: "lift", label: "Lift" },
    { id: "lockeddoor", label: "Locked Door" }
];

const MARKER_ICON_FILES = {
    amulet: "amulet.png",
    area: "area.png",
    boss: "boss.png",
    collectable: "collectable.png",
    consumable: "consumable.png",
    costume: "costume.png",
    crackscalling: "crackscalling.png",
    defencepart: "defencepart.png",
    dimensionalbutterfly: "dimensionalbutterfly.png",
    gesture: "gesture.png",
    ladder: "ladder.png",
    lift: "lift.png",
    lockeddoor: "lockeddoor.png",
    material: "material.png",
    npc: "npc.png",
    stargazer: "stargazer.png",
    tool: "tool.png",
    weapon: "weapon.png"
};

const maps = [
    {
        id: "hotelkrat",
        title: "Hotel Krat",
        image: "hotelkrat.webp",
        page: "maps/hotelkrat.html",
        markers: []
    },
    {
        id: "kratcentralstationplaza",
        title: "Krat Central Station Plaza",
        image: "kratcentralstationplaza.webp",
        page: "maps/kratcentralstationplaza.html",
        markers: [
            { x:785, y:2588, type: "area", tooltip: "Krat Central Station" },
            { x:1437, y:83, type: "area", tooltip: "Hotel Krat Entrance" },
            { x:786, y:2388, type: "stargazer", tooltip: "Krat Central Station Plaza" },
            { x:1110, y:992, type: "stargazer", tooltip: "Cerasani Alley" },
            { x:1149, y:2327, type: "consumable", tooltip: "Dim Ergo Fragment" },
            { x:476, y:2096, type: "consumable", tooltip: "Fable Catalyst" },
            { x:1184, y:2022, type: "consumable", tooltip: "Vivid Ergo Fragment" },
            { x:1518, y:1858, type: "consumable", tooltip: "Sawtoothed Wheel" },
            { x:112, y:1704, type: "consumable", tooltip: "Vivid Ergo Fragment" },
            { x:628, y:1620, type: "consumable", tooltip: "Dim Ergo Fragment" },
            { x:286, y:1387, type: "consumable", tooltip: "Venigni's Urgent Repair Tool" },
            { x:450, y:1226, type: "consumable", tooltip: "Dim Ergo Fragment" },
            { x:970, y:1118, type: "consumable", tooltip: "Fable Catalyst" },
            { x:501, y:973, type: "consumable", tooltip: "Thermite" },
            { x:1044, y:1017, type: "consumable", tooltip: "Vivid Ergo Fragment" },
            { x:532, y:1900, type: "collectable", tooltip: "Krat Times Issue 183" },
            { x:1081, y:685, type: "collectable", tooltip: "Introducing the Parade Puppet!" },
			{ x:1149, y:1451, type: "lockeddoor", tooltip: "Opens from the other side." },
			{
				x:1053, y:948, type: "npc",
				tooltip: {
                    title: "Wandering Merchant",
                    items: [
                        "Fable Catalyst",
                        "Throwing Cell",
						"Electric Blitz Abrasive",
						"Puppet's Saber",
						"Wintry Rapier",
						"Greatsword of Fate"
                    ]
                }
            },
	    	{
                x:1392, y:318, type: "boss",
                tooltip: {
                    title: "Parade Master",
                    items: [
                        "Parade Master's Ergo",
                        "Quartz"
                    ]
                }
            },
        ]
    },
    {
        id: "elysianboulevard",
        title: "Elysian Boulevard",
        image: "elysianboulevard.webp",
        page: "maps/elysianboulevard.html",
        markers: [
			{ x:168, y:2873, type: "area", tooltip: "Hotel Krat" },
			{ x:2167, y:59, type: "area", tooltip: "Krat City Hall" },
			{ x:171, y:2261, type: "stargazer", tooltip: "Elysian Boulevard Entrance" },
			{ x:1932, y:1172, type: "stargazer", tooltip: "Inside the House on Elysian Boulevard" },
			{ x:352, y:2058, type: "consumable", tooltip: "Throwing Cell" },
			{ x:558, y:2056, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:931, y:2025, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:823, y:1753, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:800, y:1668, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1102, y:1687, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:1303, y:1567, type: "consumable", tooltip: "Electric Blitz Abrasive" },
			{ x:1295, y:1261, type: "consumable", tooltip: "Sharp Pipe" },
			{ x:1248, y:1155, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1025, y:936, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1180, y:616, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:1795, y:843, type: "consumable", tooltip: "Legion Magazine" },
			{ x:2111, y:948, type: "consumable", tooltip: "Venigni's Urgent Repair Tool" },
			{ x:2163, y:1247, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:2205, y:1499, type: "consumable", tooltip: "Venigni's Emergency Protection" },
			{ x:1728, y:1591, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1727, y:1769, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:2110, y:1797, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1035, y:2365, type: "defencepart", tooltip: "LADA F150 Frame" },
			{ x:1910, y:1481, type: "defencepart", tooltip: "Workshop Union Standard Insulation Converter" },
			{ x:841, y:1478, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1591, y:1313, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1506, y:1133, type: "material", tooltip: "Star Fragment" },
			{ x:2074, y:1302, type: "material", tooltip: "Hidden Moonstone" },
			{ x:2301, y:1674, type: "material", tooltip: "Star Fragment" },
			{ x:2064, y:161, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1393, y:1024, type: "collectable", tooltip: "Frozen Man's Letter" },
			{ x:2506, y:1185, type: "collectable", tooltip: "Torn Doodle" },
			{ x:2019, y:1565, type: "collectable", tooltip: "Venigni's Krat Landmark Guide II" },
			{ x:1655, y:1270, type: "amulet", tooltip: "Life Amulet" },
			{ x:2137, y:1644, type: "dimensionalbutterfly", tooltip: "Hidden Moonstone" },
			{ x:506, y:2086, type: "ladder", tooltip: "Knocked down from above."},
			{ x:787, y:2219, type: "ladder" },
			{ x:1088, y:666, type: "ladder" },
			{ x:1067, y:1244, type: "ladder" },
			{ x:1079, y:1463, type: "ladder" },
			{ x:1483, y:633, type: "ladder" },
			{ x:1425, y:676, type: "ladder" },
			{ x:1499, y:857, type: "ladder" },
			{ x:1476, y:959, type: "ladder" },
			{ x:1821, y:1650, type: "ladder" },
			{ x:1977, y:1589, type: "ladder" },
			{ x:2053, y:1607, type: "ladder" },
			{ x:2426, y:1483, type: "ladder" },
			{ x:2513, y:1445, type: "ladder" },
			{ x:2035, y:1073, type: "lift" },
			{ x:800, y:1729, type: "lockeddoor", tooltip: "Opens from the other side."},
			{ x:2193, y:71, type: "lockeddoor", tooltip: "(Krat City Hall Key"},
			{
				x:1885, y:1055, type: "npc",
				tooltip: {
			        title: "Wandering Merchant",
			        items: [
			            "Attribute Resistance Ampoule",
						"Legion Magazine",
			            "Throwing Cell",
						"Electric Blitz Canister",
						"Electric Blitz Abrasive",
						"Gemini's Iron Protection",
						"Gemini's Emergency Protection",
						"Electric Coil Stick"
			        ]
			    }
			},
			{
				x:1716, y:1634, type: "npc",
				tooltip: {
			        title: "Toma",
			        items: [
						"Radiant Ergo Fragment"
			        ]
			    }
			},
			{
				x:2564, y:1455, type: "npc",
				tooltip: {
			        title: "Weeping Woman",
			        items: [
						"Vivid Ergo Fragment",
						"Feel"
			        ]
			    }
			},
			{
				x:2154, y:336, type: "npc",
				tooltip: {
			        title: "Geppetto",
			        items: [
			        ]
			    }
			},
			{
				x:2182, y:422, type: "boss",
				tooltip: {
			        title: "Mad Donkey",
			        items: [
						"Krat City Hall Key",
						"Enigma Assembly Tool",
						"Mad Donkey's Hunting Apparel",
						"Mad Donkey's Mask"
			        ]
			    }
			},
		]
	},

    {
        id: "kratcityhall",
        title: "Krat City Hall",
        image: "kratcityhall.webp",
        page: "maps/kratcityhall.html",
        markers: [
			{ x:156, y:2214, type: "area", tooltip: "Elysian Boulevard" },
			{ x:924, y:353, type: "area", tooltip: "Union Square Entrance" },
        	{ x:156, y:2046, type: "stargazer", tooltip: "Krat City Hall" },
			{ x:603, y:334, type: "stargazer", tooltip: "Krat City Hall Courtyard" },
            { x:672, y:1887, type: "consumable", tooltip: "Attribute Purification Ampoule" },
			{ x:407, y:1780, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:324, y:1571, type: "consumable", tooltip: "Vivid Ergo Fragment" },
            { x:386, y:1128, type: "collectable", tooltip: "Krat News Issue 1124" },
			{ x:796, y:719, type: "collectable", tooltip: "Broken Baby Puppet (Give to Weeping Woman in Elysian Boulevard)" },
			{ x:480, y:145, type: "collectable", tooltip: "Faded Whistle (Play for Toma in Elysian Boulevard)" },
			{ x:633, y:86, type: "collectable", tooltip: "Venigni's Guide" },
			{ x:462, y:2064, type: "material", tooltip: "Star Fragment" },
            { x:398, y:704, type: "amulet", tooltip: "Puppet Destroyer's Amulet" },
            { x:562, y:615, type: "crackscalling" },
			{ x:382, y:1753, type: "lockeddoor", tooltip: "Opens from the other side." },
            { x:899, y:354, type: "lockeddoor", tooltip: "Krat City Hall Courtyard Key (Get from Geppetto at Hotel Krat)" },
	    {
                x:603, y:270, type: "boss",
                tooltip: {
                    title: "Scrapped Watchman",
                    items: [
                        "Broken Hero's Ergo",
                        "Small Wooden Officer Puppet",
						"Overcharged Starage Battery",
						"Quartz",
						"Core"
                    ]
                }
            },
		]
    },
    {
        id: "stfrangelicocathedralchapel",
        title: "St. Frangelico Cathedral Chapel",
        image: "stfrangelicocathedralchapel.webp",
        page: "maps/stfrangelicocathedralchapel.html",
        markers: []
    },
    {
        id: "stfrangelicocathedrallibrary",
        title: "St. Frangelico Cathedral Library",
        image: "stfrangelicocathedrallibrary.webp",
        page: "maps/stfrangelicocathedrallibrary.html",
        markers: []
    },
    {
        id: "pathofthepilgrim",
        title: "Path of the Pilgrim",
        image: "pathofthepilgrim.webp",
        page: "maps/pathofthepilgrim.html",
        markers: [
			{ x:169, y:2889, type: "area", tooltip: "St Frangelico Chapel Library" },
			{ x:1345, y:168, type: "area", tooltip: "Malum District" },
			{ x:1032, y:2608, type: "stargazer", tooltip: "Path of the Pilgrm" },
			{ x:401, y:2674, type: "consumable", tooltip: "Special Purification Ampoule" },
			{ x:1151, y:2738, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:1771, y:2739, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1688, y:2654, type: "consumable", tooltip: "Saw Blade" },
			{ x:1893, y:2551, type: "consumable", tooltip: "Fire Canister" },
			{ x:1602, y:2574, type: "consumable", tooltip: "Chain" },
			{ x:1644, y:2363, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:2162, y:1730, type: "consumable", tooltip: "Legion Magazine" },
			{ x:1607, y:1759, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:1509, y:1903, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1573, y:2013, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1240, y:2133, type: "consumable", tooltip: "Sharp Pipe" },
			{ x:1245, y:2413, type: "consumable", tooltip: "Fire Abrasive" },
			{ x:1468, y:1996, type: "consumable", tooltip: "Legion Caliber" },
			{ x:1249, y:1153, type: "consumable", tooltip: "Saw Blade" },
			{ x:1332, y:988, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1279, y:287, type: "consumable", tooltip: "Legion Magazine" },
			{ x:1232, y:209, type: "consumable", tooltip: "Special Reistance Ampoule" },
			{ x:1251, y:113, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:752, y:2432, type: "collectable", tooltip: "Smiling Bunny Mark" },
			{ x:1004, y:2483, type: "collectable", tooltip: "Scribbles of Slum Resident" },
			{ x:1333, y:2126, type: "collectable", tooltip: "Wanted: Black Rabbit Brotherhood" },
			{ x:1287, y:453, type: "collectable", tooltip: "Sweepers Branch Office Newspaper Archives" },
			{ x:1165, y:2072, type: "collectable", tooltip: "Slum Shack Key (Enemy Drop)" },
			{ x:1457, y:2972, type: "weapon", tooltip: "Acidic Crystal Spear" },
			{ x:2071, y:1857, type: "dimensionalbutterfly", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:1111, y:2404, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:1340, y:2806, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1905, y:1820, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1545, y:1717, type: "material", tooltip: "Star Fragment" },
			{ x:1484, y:1963, type: "amulet", tooltip: "Life Amulet +1" },
			{ x:1411, y:2168, type: "defencepart", tooltip: "Belford Superior Resistance Converter (Slum Shack Key)" },
			{ x:1063, y:2443, type: "lift" },
			{ x:1088, y:2339, type: "ladder" },
			{ x:1422, y:1923, type: "ladder" },
			{ x:1507, y:1740, type: "ladder" },
			{ x:1546, y:1755, type: "ladder" },
			{ x:1171, y:1052, type: "ladder" },
			{ x:1125, y:193, type: "ladder" },
			{ x:1441, y:1960, type: "lockeddoor", tooltip: "(Robber's Shack Key)" },
			{
				x:1496, y:1855, type: "npc",
				tooltip: {
			        title: "Slum Resident",
			        items: [
						"Robber's Shack Key"
			        ]
			    }
			},
		]
    },
    {
        id: "malumdistrict",
        title: "Malum District",
        image: "malumdistrict.webp",
        page: "maps/malumdistrict.html",
        markers: [
			{ x:1497, y:1639, type: "area", tooltip: "Path of the Pilgrim" },
			{ x:107, y:1988, type: "area", tooltip: "Hotel Krat (Garden)" },
            { x:1523, y:1421, type: "stargazer", tooltip: "Malum District" },
			{ x:421, y:1709, type: "stargazer", tooltip: "Malum District Town Hall" },
			{ x:768, y:1675, type: "crackscalling" },
	    	{ x:1560, y:1395, type: "npc", tooltip: "Red Fox" },
			{ x:1576, y:1364, type: "npc", tooltip: "Black Cat" },
			{ x:1541, y:922, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1457, y:629, type: "consumable", tooltip: "Cluster Grenade" },
			{ x:1499, y:577, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1432, y:525, type: "consumable", tooltip: "Sharp Pipe" },
			{ x:1149, y:666, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1063, y:892, type: "consumable", tooltip: "Chain" },
			{ x:761, y:833, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:713, y:732, type: "consumable", tooltip: "Shot Put" },
			{ x:675, y:520, type: "consumable", tooltip: "Special Resistance Ampoule" },
			{ x:1068, y:377, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:743, y:279, type: "consumable", tooltip: "Gemini's Iron Protection" },
			{ x:459, y:764, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:447, y:992, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:457, y:1147, type: "consumable", tooltip: "Attribute Purification Ampoule" },
			{ x:634, y:1145, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:740, y:1140, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:1233, y:1160, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:1355, y:1264, type: "consumable", tooltip: "Special Purification Ampoule" },
			{ x:1055, y:281, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:459, y:764, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1262, y:257, type: "consumable", tooltip: "Attribute Purification Ampoule" },
			{ x:1635, y:867, type: "material", tooltip: "Crescent Moonstone" },
			{ x:939, y:857, type: "material", tooltip: "Motivity Crank" },
			{ x:809, y:541, type: "material", tooltip: "Quartz" },
			{ x:591, y:830, type: "material", tooltip: "Hidden Moonstone" },
			{ x:793, y:1026, type: "material", tooltip: "Crescent Moonstone" },
			{ x:1131, y:1259, type: "material", tooltip: "Star Fragment" },
			{ x:1509, y:1224, type: "material", tooltip: "Legion Caliber" },
			{ x:949, y:308, type: "material", tooltip: "Star Fragment" },
			{ x:1353, y:310, type: "material", tooltip: "Hidden Moonstone" },
			{ x:238, y:1866, type: "material", tooltip: "Quartz" },
			{ x:1102, y:238, type: "dimensionalbutterfly", tooltip: "Balance Crank" },
			{ x:1684, y:589, type: "collectable", tooltip: "Have a taste of La Bleiwies, the greatest wine in the world!" },
			{ x:631, y:609, type: "collectable", tooltip: "Trinity Key" },
			{ x:1471, y:1125, type: "collectable", tooltip: "Monad Charity House Guide" },
			{ x:205, y:1786, type: "collectable", tooltip: "[This month's trend: Stalker Masks]" },
			{ x:249, y:1821, type: "collectable", tooltip: "Black Rabbit Brotherhood Ledger" },
			{ x:313, y:1913, type: "collectable", tooltip: "Portrait of a Boy" },
			{ x:1748, y:756, type: "defencepart", tooltip: "Arch Break Cartridge" },
			{ x:1193, y:495, type: "weapon", tooltip: "Bone-Cutting Saw" },
			{ x:825, y:748, type: "amulet", tooltip: "Patience Amulet (Enemy Drop)" },
			{ x:107, y:2018, type: "lift" },
			{ x:706, y:1078, type: "ladder" },
			{ x:940, y:935, type: "ladder" },
			{ x:651, y:736, type: "ladder" },
			{ x:523, y:598, type: "ladder" },
			{ x:854, y:422, type: "ladder" },
			{ x:1092, y:114, type: "ladder" },
			{ x:1613, y:840, type: "ladder" },
			{ x:1542, y:1124, type: "ladder" },
			{ x:1509, y:1323, type: "lockeddoor", tooltip: "Opens from the other side." },
			{
				x:1471, y:1186, type: "npc",
				tooltip: {
			        title: "Malum District Black Market Trader",
			        items: [
						"Bramble Curved Sword",
						"Someday"
			        ]
			    }
			},
	    	{
                x:493, y:1676, type: "boss",
                tooltip: {
                    title: "Eldest of the Black Rabbit Brotherhood",
                    items: [
                        "Resplendant Ergo Chunk",
						"Taunt"
                    ]
                }
            },
		]
		
    },
    {
        id: "blackseaside",
        title: "Black Seaside",
        image: "blackseaside.webp",
        page: "maps/blackseaside.html",
        markers: [
			{ x:332, y:2872, type: "area", tooltip: "Area Start (Backtrack via Stargazer)" },
			{ x:371, y:72, type: "area", tooltip: "Arch Abbey" },
            { x:394, y:1148, type: "stargazer", tooltip: "Black Seaside" },
	    	{ x:451, y:2810, type: "npc", tooltip: "Sophia" },
            { x:376, y:2596, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:512, y:2346, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:416, y:2136, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:373, y:2021, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:195, y:1610, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:357, y:1583, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:497, y:1573, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:180, y:1339, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:239, y:1192, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:463, y:1198, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:549, y:1036, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:321, y:1034, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:430, y:920, type: "consumable", tooltip: "Attribute Purification Ampoule" },
			{ x:498, y:893, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:126, y:893, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:265, y:864, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:435, y:792, type: "consumable", tooltip: "Shot Put" },
			{ x:603, y:702, type: "consumable", tooltip: "Acid Canister" },
			{ x:276, y:646, type: "consumable", tooltip: "Shot Put" },
			{ x:291, y:478, type: "consumable", tooltip: "Acid Abrasive" },
            { x:512, y:1969, type: "material", tooltip: "Crescent Moonstone" },
			{ x:410, y:1737, type: "material", tooltip: "Hidden Moonstone" },
			{ x:246, y:1455, type: "material", tooltip: "Crescent Moonstone" },
			{ x:420, y:1477, type: "material", tooltip: "Hidden Moonstone" },
			{ x:339, y:1235, type: "material", tooltip: "Hidden Moonstone" },
			{ x:457, y:1296, type: "material", tooltip: "Crescent Moonstone" },
			{ x:101, y:1131, type: "material", tooltip: "Hidden Moonstone" },
			{ x:498, y:1070, type: "material", tooltip: "Hidden Moonstone" },
			{ x:157, y:990, type: "material", tooltip: "Crescent Moonstone" },
			{ x:621, y:958, type: "material", tooltip: "Hidden Moonstone" },
			{ x:451, y:599, type: "material", tooltip: "Star Fragment" },
            { x:393, y:677, type: "collectable", tooltip: "So Said Pistris II" },
			{
                x:371, y:194, type: "boss",
                tooltip: {
                    title: "Door Guardian",
                    items: [
                        "High-level Alchemist Badge"
                    ]
                }
            },
		]
    },
    {
        id: "lorenziniarcade",
        title: "Lorenzini Arcade",
        image: "lorenziniarcade.webp",
        page: "maps/lorenziniarcade.html",
        markers: [
			{ x:1095, y:766, type: "area", tooltip: "Estella Opera House" },
			{ x:2979, y:1821, type: "area", tooltip: "Grand Exhibition" },
        	{ x:2317, y:1824, type: "stargazer", tooltip: "Lorenzini Arcade" },
			{ x:1228, y:403, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:1261, y:208, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:1477, y:208, type: "consumable", tooltip: "Cluster Grenade" },
			{ x:1562, y:354, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1707, y:470, type: "consumable", tooltip: "Attribute Purification Ampoule" },
			{ x:1846, y:703, type: "consumable", tooltip: "Thermite" },
			{ x:2183, y:546, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:2494, y:856, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:2396, y:1172, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:2233, y:1179, type: "consumable", tooltip: "Saw Blade" },
			{ x:2443, y:1499, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:2432, y:1843, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:2437, y:2083, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1744, y:2255, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1704, y:1232, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1506, y:1967, type: "consumable", tooltip: "Special Resistance Ampoule" },
			{ x:1439, y:2001, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:821, y:1401, type: "consumable", tooltip: "Electric Blitz Canister" },
			{ x:222, y:1579, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:285, y:1903, type: "consumable", tooltip: "Gemini's Iron Protection" },
			{ x:1605, y:576, type: "material", tooltip: "?" },
			{ x:1818, y:2086, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:1799, y:1478, type: "material", tooltip: "Star Fragment" },
			{ x:1268, y:2227, type: "material", tooltip: "Balance Crank" },
			{ x:2253, y:2249, type: "collectable", tooltip: "Lorenzini Arcade 1st Flooer Key" },
			{ x:2102, y:1911, type: "collectable", tooltip: "Scandal! V, the Tragedy Behind the Flamboyance" },
			{ x:1953, y:1986, type: "collectable", tooltip: "Arcade Underground Passage Key" },
			{ x:1213, y:2334, type: "collectable", tooltip: "La Bleiwies (Give to Old Lady at the Window in Rosa Isabelle Street)" },
			{ x:923, y:1401, type: "collectable", tooltip: "The greatest show on Earth is coming!" },
			{ x:486, y:1791, type: "collectable", tooltip: "Monad Charity House Concert" },
			{ x:2270, y:398, type: "weapon", tooltip: "Clock Sword" },
			{ x:228, y:2463, type: "weapon", tooltip: "Spear of Honor" },
			{ x:1439, y:2071, type: "amulet", tooltip: "Hunter's Amulet (Enemy Drop)" },
			{ x:376, y:1478, type: "defencepart", tooltip: "LADA F250 Frame (Enemy Drop)" },
			{ x:1842, y:1121, type: "dimensionalbutterfly", tooltip: "Half Moonstone" },
			{ x:822, y:2259, type: "dimensionalbutterfly", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:285, y:2463, type: "dimensionalbutterfly", tooltip: "Alchemical Booster" },
			{ x:2100, y:573, type: "ladder" },
			{
                x:1886, y:1944, type: "npc",
                tooltip: {
                    title: "Wandering Merchant",
                    items: [
                        "Attribute Purification Ampoule",
                        "Special Purification Ampoule",
						"Thermite",
						"Fire Canister",
						"Fire Abrasive",
						"Circular Electric Chainsaw",
						"Indomitable Amulet"
                    ]
                }
            },
		]
    },
    {
        id: "estellaoperahouse",
        title: "Estella Opera House",
        image: "estellaoperahouse.webp",
        page: "maps/estellaoperahouse.html",
        markers: [
			{ x:666, y:49, type: "area", tooltip: "Lorenzini Arcade" },
			{ x:711, y:1904, type: "area", tooltip: "Rosa Isabelle Street" },
			{ x:298, y:1904, type: "area", tooltip: "Rosa Isabelle Street" },
        	{ x:504, y:1712, type: "stargazer", tooltip: "Estella Opera House Entrance" },
			{ x:506, y:115, type: "stargazer", tooltip: "Estella Opera House Stage" },
            { x:362, y:1576, type: "consumable", tooltip: "Electric Blitz Abrasive" },
			{ x:518, y:1809, type: "consumable", tooltip: "Attribute Purification Ampoule" },
			{ x:748, y:1415, type: "consumable", tooltip: "Special Resistance Ampoule" },
			{ x:893, y:1429, type: "consumable", tooltip: "Electric Blitz Abrasive" },
			{ x:836, y:1172, type: "consumable", tooltip: "Legion Magazine" },
			{ x:504, y:806, type: "consumable", tooltip: "Special Purification Ampoule" },
			{ x:265, y:850, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:402, y:612, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1162, y:1002, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1749, y:777, type: "consumable", tooltip: "Saw Blade" },
			{ x:2003, y:580, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:775, y:897, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:1190, y:816, type: "defencepart", tooltip: "Belford Disruption Cartridge" },
			{ x:1648, y:870, type: "defencepart", tooltip: "Belford Superior Radiation Converter" },
			{ x:910, y:1246, type: "dimensionalbutterfly", tooltip: "Technique Crank" },
			{ x:1459, y:1127, type: "weapon", tooltip: "Exploding Pickaxe" },
			{ x:741, y:1196, type: "collectable", tooltip: "Notes from an Experiment" },
			{ x:761, y:1090, type: "collectable", tooltip: "Jeweled Cryptic Vessel" },
			{ x:585, y:969, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:1655, y:897, type: "material", tooltip: "Quartz" },
			{ x:1858, y:831, type: "material", tooltip: "Crescent Moonstone" },
            { x:1605, y:725, type: "amulet", tooltip: "Technique Amulet" },
			{ x:1959, y:1098, type: "tool", tooltip: "Incredible Venigni Collection" },
			{ x:819, y:1249, type: "ladder" },
			{ x:819, y:1281, type: "ladder" },
			{ x:819, y:1159, type: "ladder" },
			{ x:760, y:1131, type: "ladder" },
			{ x:1, y:1, type: "lockeddoor", tooltip: "..." },
            { x:2, y:2, type: "lockeddoor", tooltip: "..." },
			{
				x:944, y:908, type: "npc",
				tooltip: {
			        title: "Adelina",
			        items: [
						"Red Actress's Locket"
			        ]
			    }
			},
	    	{
                x:500, y:311, type: "boss",
                tooltip: {
                    title: "King of Puppets",
                    items: [
                        "Burnt-White King's Ergo",
                        "Puppet Prince's Formal Dress",
						"Someone's Necklace"
                    ]
                }
            },
		]
    },
    {
        id: "rosaisabbellstreet",
        title: "Rosa Isabelle Street",
        image: "rosaisabbellstreet.webp",
        page: "maps/rosaisabbellstreet.html",
        markers: [
			{ x:256, y:2316, type: "area", tooltip: "Hotel Krat" },
			{ x:277, y:63, type: "area", tooltip: "Estella Opera House" },
			{ x:555, y:63, type: "area", tooltip: "Estella Opera House" },
			{ x:227, y:1894, type: "stargazer", tooltip: "Rosa Isabelle Street Enterance" },
			{ x:1495, y:419, type: "stargazer", tooltip: "Rosa Isabelle Street Culvert" },
			{ x:101, y:1689, type: "consumable", tooltip: "Cluster Grenade" },
			{ x:286, y:1533, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:286, y:1453, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:439, y:1435, type: "consumable", tooltip: "Venigni's Urgent Repair Tool" },
			{ x:793, y:1202, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:125, y:1045, type: "consumable", tooltip: "Electric Blitz Canister" },
			{ x:527, y:964, type: "consumable", tooltip: "Special Purification Ampoule" },
			{ x:570, y:835, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:204, y:845, type: "consumable", tooltip: "Gemini's Iron Protection" },
			{ x:506, y:732, type: "consumable", tooltip: "Legion Magazine" },
			{ x:469, y:99, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:597, y:624, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:830, y:1357, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1075, y:1398, type: "consumable", tooltip: "Saw Blade" },
			{ x:1298, y:1473, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:1431, y:1114, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1723, y:1149, type: "consumable", tooltip: "Throwing Cell" },
			{ x:1314, y:943, type: "consumable", tooltip: "Attribute Purification Ampoule" },
			{ x:1677, y:664, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1787, y:434, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:1175, y:546, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:606, y:1148, type: "material", tooltip: "Legion Plug" },
			{ x:360, y:1154, type: "material", tooltip: "Crescent Moonstone" },
			{ x:309, y:1186, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:387, y:948, type: "material", tooltip: "Advance Crank" },
			{ x:260, y:312, type: "material", tooltip: "Star Fragment" },
			{ x:873, y:449, type: "material", tooltip: "Crescent Moonstone" },
			{ x:987, y:1036, type: "material", tooltip: "Quartz" },
			{ x:1199, y:923, type: "material", tooltip: "Star Fragment" },
			{ x:271, y:1738, type: "collectable", tooltip: "The Witch's Tower and Princess Poster" },
			{ x:674, y:1319, type: "collectable", tooltip: "Artist's Doodle" },
			{ x:194, y:1094, type: "collectable", tooltip: "Wedding Ring" },
			{ x:924, y:1377, type: "collectable", tooltip: "Special Report! Foreigner's Confession" },
			{ x:1605, y:615, type: "collectable", tooltip: "Rose Estate Incident, left as a mystery" },
			{ x:1472, y:1029, type: "dimensionalbutterfly", tooltip: "Crescent Moonstone" },
			{ x:138, y:845, type: "defencepart", tooltip: "Arch Heavyweight Frame" },
			{ x:1398, y:833, type: "weapon", tooltip: "Dancer's Curved Sword" },
			{ x:682, y:543, type: "ladder" },
			{ x:811, y:1169, type: "ladder" },
			{ x:1241, y:1341, type: "ladder" },
			{ x:1169, y:929, type: "ladder" },
			{ x:1546, y:356, type: "ladder" },
			{ x:1651, y:270, type: "ladder" },
			{ x:1697, y:276, type: "ladder" },
			{ x:1697, y:276, type: "npc", tooltip: "Test Subject 826 (Second Location)" },
			{
				x:266, y:1687, type: "npc",
				tooltip: {
			        title: "Old Lady at the Window",
			        items: [
						"Venigni Commemorative Coin"
			        ]
			    }
			},
			{
				x:1586, y:354, type: "npc",
				tooltip: {
			        title: "Julian the Gentleman",
			        items: [
						"Wedding Ring",
						"Sad"
			        ]
			    }
			},
			{
				x:1781, y:930, type: "boss",
				tooltip: {
			        title: "White Lady",
			        items: [
						"The White Lady's Locket",
						"The White Lady's Mask"
                    ]
                }
            },
			{
				x:414, y:384, type: "boss",
				tooltip: {
			        title: "Mad Clown Puppet",
			        items: [
						"Quartz"
                    ]
                }
            },
		]
    },
    {
        id: "venignisworkshop",
        title: "Venigni's Workshop",
        image: "venignisworkshop.webp",
        page: "maps/venignisworkshop.html",
        markers: []
    },
    {
        id: "workshopunionentrance",
        title: "Workshop Union Entrance",
        image: "workshopunionentrance.webp",
        page: "maps/workshopunionentrance.html",
        markers: []
    },
    {
        id: "moonlighttown",
        title: "Moonlight Town",
        image: "moonlighttown.webp",
        page: "maps/moonlighttown.html",
        markers: []
    },
    {
        id: "barrenswamp",
        title: "Barren Swamp",
        image: "barrenswamp.webp",
        page: "maps/barrenswamp.html",
        markers: [
			{ x:1006, y:524, type: "area", tooltip: "Grand Exhibition (Tram)" },
			{ x:466, y:1232, type: "area", tooltip: "Hermit's Cave (Complete Hugo's questline)" },
			{ x:462, y:3112, type: "area", tooltip: "Krat Central Station" },
			{ x:1774, y:165, type: "area", tooltip: "Tower (Lower Floor)" },
			{ x:1995, y:165, type: "area", tooltip: "Tower (Middle Floor)" },
			{ x:2215, y:165, type: "area", tooltip: "Tower (Upper Floor)" },
        	{ x:1249, y:336, type: "stargazer", tooltip: "Barren Swamp Entrance" },
			{ x:2140, y:1321, type: "stargazer", tooltip: "Barren Swamp" },
			{ x:1856, y:2612, type: "stargazer", tooltip: "Barren Swamp Ravine" },
			{ x:527, y:1568, type: "stargazer", tooltip: "Barren Swamp Bridge" },
			{ x:451, y:2387, type: "stargazer", tooltip: "Barren Swamp Nest" },
			{ x:639, y:2081, type: "crackscalling" },
			{ x:445, y:1263, type: "npc", tooltip: "Rookie Explorer Hugo" },
			{ x:353, y:2653, type: "npc", tooltip: "Alidoro" },
			{ x:1177, y:396, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:1254, y:456, type: "consumable", tooltip: "Gemini's Iron Protection" },
			{ x:1500, y:83, type: "consumable", tooltip: "Chain" },
			{ x:1412, y:580, type: "consumable", tooltip: "Electric Blitz Canister" },
			{ x:1572, y:482, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1500, y:724, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:1560, y:778, type: "consumable", tooltip: "Special Purification Ampoule" },
			{ x:1707, y:726, type: "consumable", tooltip: "Legion Magazine" },
			{ x:1749, y:660, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1803, y:724, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:1778, y:283, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1778, y:382, type: "consumable", tooltip: "Throwing Cell" },
			{ x:2141, y:257, type: "consumable", tooltip: "Special Resistance Ampoule" },
			{ x:1712, y:870, type: "consumable", tooltip: "Attribute Amplification Ampoule" },
			{ x:1809, y:870, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:1986, y:868, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1754, y:1048, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1912, y:1187, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:2057, y:1108, type: "consumable", tooltip: "Sharp Pipe" },
			{ x:2149, y:1022, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:2219, y:1178, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:1571, y:1257, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1290, y:1306, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1251, y:1361, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1463, y:1632, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:1485, y:1456, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1621, y:1370, type: "consumable", tooltip: "Sharp Pipe" },
			{ x:1710, y:1539, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:2022, y:1601, type: "consumable", tooltip: "Cluster Grenade" },
			{ x:1795, y:1649, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:1857, y:1755, type: "consumable", tooltip: "Legion Magazine" },
			{ x:1904, y:1858, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:2322, y:1664, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:1331, y:2494, type: "consumable", tooltip: "Attribute Purification Ampoule" },
			{ x:1614, y:1931, type: "consumable", tooltip: "Carcass Body Fluid Bottle" },
			{ x:1717, y:2236, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1563, y:2858, type: "consumable", tooltip: "Fire Abrasive" },
			{ x:1625, y:2898, type: "consumable", tooltip: "???" },
			{ x:1739, y:2958, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:1982, y:2419, type: "consumable", tooltip: "Fire Canister" },
			{ x:1938, y:2629, type: "consumable", tooltip: "Special Resistance Ampoule" },
			{ x:2034, y:2582, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:2426, y:2662, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:2444, y:2914, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:2251, y:2950, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:335, y:2784, type: "consumable", tooltip: "Acid Canister" },
			{ x:867, y:2859, type: "consumable", tooltip: "Legion Magazine" },
			{ x:685, y:2922, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1611, y:595, type: "material", tooltip: "Legion Caliber (Enemy Drop)" },
			{ x:2004, y:287, type: "material", tooltip: "Half Moonstone" },
			{ x:1868, y:1071, type: "material", tooltip: "Crescent Moonstone" },
			{ x:1833, y:1142, type: "material", tooltip: "Half Moonstone" },
			{ x:2173, y:1251, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:1369, y:1479, type: "material", tooltip: "Crescent Moonstone" },
			{ x:1538, y:1798, type: "material", tooltip: "Quartz (Large Enemy Drop)" },
			{ x:1899, y:1546, type: "material", tooltip: "Quartz (Large Enemy Drop)" },
			{ x:1917, y:1614, type: "material", tooltip: "Half Moonstone" },
			{ x:2268, y:1810, type: "material", tooltip: "Crescent Moonstone" },
			{ x:1547, y:2018, type: "material", tooltip: "Dark Moon Moonstone of the Covenant (Enemy Drop)" },
			{ x:2009, y:2292, type: "material", tooltip: "Crescent Moonstone" },
			{ x:2403, y:2315, type: "material", tooltip: "Legion Caliber" },
			{ x:2198, y:2650, type: "material", tooltip: "Star Fragment" },
			{ x:1489, y:1421, type: "dimensionalbutterfly", tooltip: "Balance Crank" },
			{ x:1578, y:1729, type: "dimensionalbutterfly", tooltip: "Motivity Crank" },
			{ x:1835, y:1598, type: "dimensionalbutterfly", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:2041, y:1761, type: "dimensionalbutterfly", tooltip: "Alchemical Booster" },
			{ x:2223, y:1581, type: "dimensionalbutterfly", tooltip: "Stabilized Alchemical Booster" },
			{ x:1428, y:2848, type: "dimensionalbutterfly", tooltip: "Half Moonstone" },
			{ x:1963, y:2774, type: "dimensionalbutterfly", tooltip: "Half Moonstone" },
			{ x:2304, y:2856, type: "dimensionalbutterfly", tooltip: "Advance Crank" },
			{ x:1151, y:271, type: "collectable", tooltip: "Venigni's Krat Landmark Guide IV" },
			{ x:2317, y:1938, type: "collectable", tooltip: "Experiment Report of Order - Test Subject 890" },
			{ x:558, y:1663, type: "collectable", tooltip: "Sentry's Notebook" },
			{ x:439, y:2866, type: "collectable", tooltip: "Frayed Notebook" },
			{ x:1689, y:1185, type: "weapon", tooltip: "Live Puppet's Axe" },
			{ x:1588, y:2192, type: "weapon", tooltip: "City Longspear" },
			{ x:1741, y:472, type: "defencepart", tooltip: "Belford Superior Insulation Converter" },
			{ x:1153, y:2407, type: "defencepart", tooltip: "Arch Disruption Cartridge" },
			{ x:1447, y:276, type: "amulet", tooltip: "Recharged Amulet" },
			{ x:1512, y:1994, type: "amulet", tooltip: "Leaping Amulet (Enemy Drop)" },
			{ x:1181, y:1295, type: "tool", tooltip: "Fancy Venigni Collection" },
			{ x:1588, y:252, type: "ladder" },
			{ x:1713, y:299, type: "ladder" },
			{ x:1560, y:1178, type: "ladder" },
			{ x:1234, y:1286, type: "ladder" },
			{ x:1301, y:1557, type: "ladder" },
			{ x:1389, y:1664, type: "ladder" },
			{ x:2373, y:1888, type: "ladder" },
			{ x:1530, y:2540, type: "ladder" },
			{ x:1861, y:2472, type: "ladder" },
			{ x:1808, y:2542, type: "ladder" },
			{ x:2098, y:2638, type: "ladder" },
			{ x:2257, y:2445, type: "ladder" },
			{ x:2209, y:2489, type: "ladder" },
			{ x:2543, y:2627, type: "ladder" },
			{ x:468, y:2998, type: "ladder" },
			{ x:820, y:2815, type: "ladder" },
			{
				x:2290, y:1876, type: "boss",
				tooltip: {
			        title: "Owl Doctor",
			        items: [
						"Owl Doctor's Mask"
					]
			    }
			},
	    	{
                x:381, y:2498, type: "boss",
                tooltip: {
                    title: "Green Monster of the Swamp",
                    items: [
						"Puppet-Devourering Green Hunter's Ergo",
						"Golden Ergo"
                    ]
                }
            },
		]
    },
    {
        id: "collapsingkrat",
        title: "Collapsing Krat",
        image: "collapsingkrat.webp",
        page: "maps/collapsingkrat.html",
        markers: []
    },
    {
        id: "thegrandexhibition",
        title: "The Grand Exhibition",
        image: "thegrandexhibition.webp",
        page: "maps/thegrandexhibition.html",
        markers: [
			{ x:535, y:3141, type: "area", tooltip: "Lorenzini Arcade" },
			{ x:1700, y:325, type: "area", tooltip: "Barren Swamp (Tram)" },
        	{ x:1328, y:1855, type: "stargazer", tooltip: "Grand Exhibition Gallery" },
			{ x:1330, y:685, type: "stargazer", tooltip: "Grand Exhibition Conference Room" },
			{ x:958, y:817, type: "stargazer", tooltip: "Saintess of Mercy Statue" },
			{ x:1286, y:981, type: "crackscalling" },
			{ x:1512, y:2833, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1725, y:2010, type: "consumable", tooltip: "Special Purification Ampoule" },
			{ x:1954, y:2010, type: "consumable", tooltip: "Legion Magazine" },
			{ x:589, y:2148, type: "consumable", tooltip: "Acid Canister" },
			{ x:813, y:1902, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:829, y:1673, type: "consumable", tooltip: "Acid Abrasive" },
			{ x:1156, y:1686, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:780, y:1589, type: "consumable", tooltip: "Shot Put" },
			{ x:1004, y:1454, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1224, y:1650, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1224, y:1543, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:1224, y:1440, type: "consumable", tooltip: "Chain" },
			{ x:1416, y:1542, type: "consumable", tooltip: "Venigni's Urgent Repair Tool" },
			{ x:599, y:1219, type: "consumable", tooltip: "Sharp Pipe" },
			{ x:1702, y:2727, type: "material", tooltip: "Crescent Moonstone" },
			{ x:1144, y:2451, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:1292, y:1956, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:762, y:2207, type: "material", tooltip: "Quartz" },
			{ x:247, y:2277, type: "material", tooltip: "Star Fragment" },
			{ x:662, y:1860, type: "material", tooltip: "Half Moonstone" },
			{ x:586, y:1816, type: "material", tooltip: "Attribute Resistance Ampoule" },
			{ x:862, y:1741, type: "material", tooltip: "Crescent Moonstone" },
			{ x:967, y:1587, type: "material", tooltip: "Legion Caliber" },
			{ x:846, y:1271, type: "material", tooltip: "Legion Caliber (Enemy Drop)" },
			{ x:725, y:823, type: "material", tooltip: "Legion Plug" },
			{ x:927, y:1563, type: "collectable", tooltip: "Resurrection! Champion Victor has Returned!" },
			{ x:1344, y:1122, type: "collectable", tooltip: "Crumpled Baptist's Doodle" },
			{ x:423, y:1242, type: "collectable", tooltip: "Trinity Key" },
			{ x:646, y:908, type: "collectable", tooltip: "Order of Kroud Report" },
			{ x:900, y:628, type: "collectable", tooltip: "So Said Pistris I" },
			{ x:776, y:2081, type: "dimensionalbutterfly", tooltip: "Technique Crank" },
			{ x:1639, y:2094, type: "defencepart", tooltip: "LADA Shock Cartridge (Enemy Drop)" },
			{ x:986, y:2162, type: "amulet", tooltip: "Strength Amulet (Enemy Drop)" },
			{ x:1299, y:1402, type: "tool", tooltip: "Sturdy Krat Supply Box" },
			{ x:895, y:850, type: "gesture", tooltip: "Repect" },
			{ x:160, y:2443, type: "ladder" },
			{ x:377, y:2298, type: "ladder" },
			{ x:77, y:2099, type: "ladder" },
			{ x:739, y:2025, type: "ladder" },
			{ x:821, y:2065, type: "ladder" },
			{ x:1045, y:1882, type: "ladder" },
			{ x:693, y:1627, type: "ladder" },
			{ x:1500, y:1832, type: "ladder" },
			{ x:1330, y:1427, type: "ladder" },
			{
				x:970, y:713, type: "npc",
				tooltip: {
			        title: "Sophia",
			        items: []
			    }
			},
	    	{
                x:1330, y:591, type: "boss",
                tooltip: {
                    title: "Champion Victor",
                    items: [
						"Reborn Champion's Ergo"
                    ]
                }
            },
		]
    },
    {
        id: "relicoftrismegistus",
        title: "Relic of Trismegistus",
        image: "relicoftrismegistus.webp",
        page: "maps/relicoftrismegistus.html",
        markers: [
			{ x:458, y:167, type: "area", tooltip: "Hotel Krat" },
			{ x:1051, y:317, type: "area", tooltip: "Black Seaside (Submarine)" },
        	{ x:516, y:92, type: "stargazer", tooltip: "Relic of Trismegistus Entrance" },
			{ x:428, y:1758, type: "stargazer", tooltip: "Relic of Trismegistus Combat Field" },
			{ x:359, y:1472, type: "crackscalling" },
			{ x:369, y:1081, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:460, y:1260, type: "consumable", tooltip: "Gemini's Iron Protection" },
			{ x:541, y:260, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:257, y:836, type: "material", tooltip: "Star Fragment" },
			{ x:346, y:930, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:551, y:1028, type: "material", tooltip: "Technique Crank" },
			{ x:293, y:1064, type: "material", tooltip: "Half Moostone" },
			{ x:182, y:1132, type: "material", tooltip: "Legion Caliber" },
			{ x:445, y:1182, type: "material", tooltip: "Half Moonstone" },
			{ x:899, y:1155, type: "material", tooltip: "Full Moonstone" },
			{ x:116, y:1331, type: "collectable", tooltip: "Trinity Key" },
			{ x:1107, y:403, type: "collectable", tooltip: "The Great Venigni and Pistris the Submarine" },
			{ x:583, y:1142, type: "amulet", tooltip: "Iron Wall Amulet (Enemy Drop)" },
			{ x:677, y:1167, type: "weapon", tooltip: "Cursed Knight's Halberd" },
			{ x:537, y:873, type: "dimensionalbutterfly", tooltip: "Half Moonstone" },
			{ x:500, y:942, type: "dimensionalbutterfly", tooltip: "Enchanced Alchemical Booster" },
			{ x:612, y:926, type: "dimensionalbutterfly", tooltip: "Full Moonstone of the Covenant" },
			{ x:715, y:1362, type: "tool", tooltip: "Great Venigni Collection" },
			{ x:302, y:1171, type: "ladder" },
			{ x:477, y:182, type: "lift" },
			{
				x:694, y:1400, type: "npc",
				tooltip: {
			        title: "Alidoro (Boss Ergo Trader)",
			        items: []
			    }
			},
			{
                x:414, y:1660, type: "boss",
                tooltip: {
                    title: "Youngest of the Black Rabbit Brotherhood",
                    items: []
                }
            },
			{
                x:370, y:1669, type: "boss",
                tooltip: {
                    title: "Battle Maniac of the Black Rabbit Brotherhood",
                    items: []
                }
            },
			{
                x:434, y:1697, type: "boss",
                tooltip: {
                    title: "Eccentric of the Black Rabbit Brotherhood",
                    items: []
                }
            },
	    	{
                x:389, y:1706, type: "boss",
                tooltip: {
                    title: "Eldest of the Black Rabbit Brotherhood",
                    items: [
						"Quartz"
                    ]
                }
            },
		]
    },
    {
        id: "kratcentralstation",
        title: "Krat Central Station",
        image: "kratcentralstation.webp",
        page: "maps/kratcentralstation.html",
        markers: [
			{ x:570, y:2028, type: "area", tooltip: "Game Start" },
            { x:661, y:388, type: "area", tooltip: "Krat Central Station Plaza" },
            { x:583, y:1785, type: "consumable", tooltip: "Monad's Lamp" },
			{ x:763, y:1152, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:690, y:860, type: "consumable", tooltip: "Pulse Cell" },
			{ x:514, y:634, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1755, y:1138, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:1214, y:872, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:1713, y:762, type: "consumable", tooltip: "Thermite" },
			{ x:1123, y:561, type: "consumable", tooltip: "Dim Ergo Fragment" },
            { x:1642, y:1008, type: "tool", tooltip: "Krat Central Station Main Entrance Key (Enemy Drop)" },
            { x:570, y:1536, type: "weapon", tooltip: "Starter Weapon" },
            { x:1586, y:1036, type: "defencepart", tooltip: "Workshop Union Lightweight Frame (Enemy Drop)" },
            { x:1072, y:1248, type: "collectable", tooltip: "Passenger's Note" },
            { x:688, y:388, type: "lockeddoor", tooltip: "Krat Central Station Main Entrance Key"}
		]
    },
    {
        id: "kratcentralstationplatform",
        title: "Krat Central Station Platform",
        image: "kratcentralstationplatform.webp",
        page: "maps/kratcentralstationplatform.html",
        markers: []
    },
    {
        id: "kratcentralstationreturn",
        title: "Krat Central Station Return",
        image: "kratcentralstationreturn.webp",
        page: "maps/kratcentralstationreturn.html",
        markers: [
			{ x:419, y:1223, type: "area", tooltip: "Barren Swamp" },
            { x:3094, y:2447, type: "area", tooltip: "Collapsing Krat" },
			{ x:1168, y:1332, type: "stargazer", tooltip: "Krat Central Station Platform" },
			{ x:2842, y:807, type: "stargazer", tooltip: "Krat Central Station Lobby" },
			{ x:2991, y:2231, type: "stargazer", tooltip: "Abandoned Apartment" },
			{ x:72, y:1170, type: "consumable", tooltip: "Saw Blade" },
			{ x:1022, y:1260, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:812, y:914, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:902, y:783, type: "consumable", tooltip: "Fire Canister" },
			{ x:1201, y:613, type: "consumable", tooltip: "Chain" },
			{ x:1334, y:137, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1609, y:93, type: "consumable", tooltip: "Special Purification Ampoule" },
			{ x:1716, y:210, type: "consumable", tooltip: "Shot Put" },
			{ x:1480, y:1570, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:2115, y:440, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:2172, y:483, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1864, y:562, type: "consumable", tooltip: "Special Purification Ampoule" },
			{ x:2019, y:562, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:1738, y:587, type: "consumable", tooltip: "Radiant Ergo Chunk" },
			{ x:1971, y:813, type: "consumable", tooltip: "Special Resistance Ampoule" },
			{ x:1754, y:1228, type: "consumable", tooltip: "Special Resistance Ampoule" },
			{ x:1980, y:1442, type: "consumable", tooltip: "Chain" },
			{ x:2136, y:1666, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:2073, y:1854, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:2366, y:1021, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:2947, y:1086, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
			{ x:2942, y:1630, type: "consumable", tooltip: "Cat Dust" },
			{ x:3246, y:699, type: "consumable", tooltip: "Legion Magazine" },
			{ x:3707, y:772, type: "consumable", tooltip: "Thermite" },
			{ x:3445, y:900, type: "consumable", tooltip: "Dim Ergo Chunk" },
			{ x:3367, y:965, type: "consumable", tooltip: "Acid Canister" },
			{ x:3341, y:1168, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:3442, y:1135, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:708, y:842, type: "material", tooltip: "Quartz" },
			{ x:2773, y:1620, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:2795, y:1970, type: "material", tooltip: "Half Moonstone" },
			{ x:1363, y:711, type: "defencepart", tooltip: "LADA Break Cartridge" },
			{ x:2001, y:1289, type: "weapon", tooltip: "Master Chef's Knife" },
			{ x:3704, y:578, type: "weapon", tooltip: "Coil Mjolnir" },
			{ x:2589, y:1727, type: "dimensionalbutterfly", tooltip: "Stabilized Alchemical Booster" },
			{ x:1094, y:1011, type: "collectable", tooltip: "Bloody Letter" },
			{ x:1453, y:693, type: "collectable", tooltip: "Letter from Someone Who has Gone Ahead" },
			{ x:3015, y:2460, type: "collectable", tooltip: "Fairytale of the Three Brothers of the Workshop Tower" },
			{ x:2109, y:845, type: "amulet", tooltip: "Murderer Puppet's Amulet (Enemy Drop)" },
			{ x:2905, y:518, type: "amulet", tooltip: "Carrier's Amulet +1" },
			{ x:2905, y:463, type: "costume", tooltip: "Workshop Master's Workwear" },
			{ x:1050, y:805, type: "ladder" },
			{ x:2279, y:395, type: "ladder" },
			{ x:1905, y:1081, type: "ladder" },
			{
				x:3065, y:2368, type: "npc",
				tooltip: {
			        title: "Wandering Merchant",
			        items: [
						"Inventory???"
			        ]
			    }
			},
	    	{
                x:2655, y:1238, type: "boss",
                tooltip: {
                    title: "Robber Weasel",
                    items: [
                        "Robber Weasel's Mask",
						"Robber Weasel's Hunting Apparel"
                    ]
                }
            },
		]
    },
    {
        id: "hotelkratentrance",
        title: "Hotel Krat Entrance",
        image: "hotelkratentrance.webp",
        page: "maps/hotelkratentrance.html",
        markers: [
			{ x:488, y:1078, type: "area", tooltip: "Krat Central Station Plaza" },
            { x:833, y:220, type: "area", tooltip: "Hotel Krat" },
	    	{ x:431, y:731, type: "consumable", tooltip: "Fable Catalyst" },
            { x:258, y:319, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:373, y:148, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1272, y:231, type: "material", tooltip: "Hidden Moonstone" }
		]
    },
    {
        id: "hermitscave",
        title: "Hermit's Cave",
        image: "hermitscave.webp",
        page: "maps/hermitscave.html",
        markers: [
            { x:44, y:1790, type: "area", tooltip: "Barren Swamp" },
            { x:746, y:870, type: "stargazer", tooltip: "Hermit's Cave" },
            { x:563, y:821, type: "weapon", tooltip: "Black Steel Cutter" },
            { x:1162, y:106, type: "costume", tooltip: "Black Cat's Hunting Apparel" },
            { x:245, y:1792, type: "consumable", tooltip: "Attribute Purification Ampoule" },
            { x:234, y:1418, type: "consumable", tooltip: "Resplendant Ergo Fragment" },
            { x:200, y:1427, type: "consumable", tooltip: "Sawtoothed Wheel" },
            { x:296, y:1428, type: "consumable", tooltip: "Radiant Ergo Fragment" },
            { x:195, y:1167, type: "consumable", tooltip: "Special Purification Ampoule" },
            { x:555, y:916, type: "consumable", tooltip: "Chain" },
            { x:729, y:961, type: "consumable", tooltip: "Electric Blitz Abrasive" },
            { x:782, y:632, type: "consumable", tooltip: "Throwing Cell" },
            { x:685, y:383, type: "consumable", tooltip: "Cluster Grenade" },
            { x:181, y:1197, type: "collectable", tooltip: "Someone's Report Note Notebook" },
            { x:1036, y:179, type: "collectable", tooltip: "Misty E'rA (Enemy Drop)" },
            { x:498, y:1217, type: "material", tooltip: "Half Moonstone" },
            { x:554, y:1003, type: "material", tooltip: "Quartz" },
            { x:736, y:816, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
            { x:1168, y:133, type: "material", tooltip: "Quartz" },
            { x:344, y:1494, type: "ladder" },
            { x:356, y:1270, type: "ladder" },
            { x:239, y:1201, type: "ladder" },
            { x:506, y:993, type: "ladder" },
            { x:690, y:990, type: "ladder" },
            { x:749, y:791, type: "ladder" },
            { x:739, y:377, type: "ladder" }
        ]
    }
];

const stageOrder = maps.map((map) => map.id);

const registry = createGameRegistry({
    gameId: "lies-of-p",
    title: "Lies of P",
    page: "lies-of-p.html",
    maps,
    stageOrder,
    markerTypes,
    markerIconFiles: MARKER_ICON_FILES
});

export const GAME_INFO = registry.GAME_INFO;
export const MARKER_TYPES = registry.MARKER_TYPES;
export const MAP_CATALOG = registry.MAP_CATALOG;
export const STAGE_ORDER = registry.STAGE_ORDER;
export const getMapById = registry.getMapById;
export const getMarkerCounts = registry.getMarkerCounts;
export const getMapImageUrl = registry.getMapImageUrl;
export const getMarkerIconUrl = registry.getMarkerIconUrl;

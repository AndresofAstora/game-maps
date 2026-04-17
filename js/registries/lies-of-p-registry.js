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
	        {
				x:1053, y:948,
				type: "npc",
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
	    	{
                x:1392, y:318,
                type: "boss",
                tooltip: {
                    title: "Parade Master",
                    items: [
                        "Parade Master's Ergo",
                        "Quartz"
                    ]
                }
            },
            { x:1149, y:1451, type: "lockeddoor", tooltip: "Opens from the other side." }
        ]
    },
    {
        id: "elysianboulevard",
        title: "Elysian Boulevard",
        image: "elysianboulevard.webp",
        page: "maps/elysianboulevard.html",
        markers: [
			{ x:168, y:2873, type: "area", tooltip: "Hotel Krat" },
			{ x:171, y:2261, type: "stargazer", tooltip: "Elysian Boulevard Entrance" },
			{ x:1932, y:1172, type: "stargazer", tooltip: "Inside the House on Elysian Boulevard" },
			{
				x:1885, y:1055,
				type: "npc",
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
				x:1716, y:1634,
				type: "npc",
				tooltip: {
			        title: "Toma",
			        items: [
						"Radiant Ergo Fragment"
			        ]
			    }
			},
			{
				x:2564, y:1455,
				type: "npc",
				tooltip: {
			        title: "Weeping Woman",
			        items: [
						"Vivid Ergo Fragment",
						"Feel"
			        ]
			    }
			},
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
			{ x:800, y:1729, type: "lockeddoor", tooltip: "Opens from the other side."}
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
        markers: []
    },
    {
        id: "malumdistrict",
        title: "Malum District",
        image: "malumdistrict.webp",
        page: "maps/malumdistrict.html",
        markers: []
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
        markers: []
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
        	{ x:504, y:1712, type: "stargazer", tooltip: "Estella Opera House Enterance" },
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
			{ x:741, y:1196, type: "collectable", tooltip: "Notes frm an Expirament" },
			{ x:761, y:1090, type: "collectable", tooltip: "Jeweled Cryptic Vessel" },
			{ x:585, y:969, type: "material", tooltip: "Dark Moon Moonstone of the Covenant" },
			{ x:1655, y:897, type: "material", tooltip: "Quartz" },
			{ x:1858, y:831, type: "material", tooltip: "Crescent Moonstone" },
            { x:1605, y:725, type: "amulet", tooltip: "Technique Amulet" },
			{ x:1959, y:1098, type: "tool", tooltip: "Incredible Venigni Collection" },
			{ x:819, y:1249, type: "ladder" },
			{ x:819, y:1281, type: "ladder" },
			{ x:819, y:1159, type: "ladder },
			{ x:760, y:1131, type: "ladder },
			{ x:0, y:0, type: "lockeddoor", tooltip: "?" },
            { x:0, y:0, type: "lockeddoor", tooltip: "?" },
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
                x:500, y:3110, type: "boss",
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
		]
    },
    {
        id: "rosaisabbellstreet",
        title: "Rosa Isabelle Street",
        image: "rosaisabbellstreet.webp",
        page: "maps/rosaisabbellstreet.html",
        markers: []
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
        markers: []
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
        markers: []
    },
    {
        id: "relicoftrismegistus",
        title: "Relic of Trismegistus",
        image: "relicoftrismegistus.webp",
        page: "maps/relicoftrismegistus.html",
        markers: []
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
        markers: []
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

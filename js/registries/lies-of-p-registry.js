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
			{ x:161, y:2873, type: "area", tooltip: "Hotel Krat" },
			{ x:164, y:2261, type: "stargazer", tooltip: "Elysian Boulevard Entrance" },
			{ x:1925, y:1172, type: "stargazer", tooltip: "Inside the House on Elysian Boulevard" },
			{
				x:1878, y:1055,
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
				x:1702, y:1634,
				type: "npc",
				tooltip: {
        			title: "Toma",
        			items: [
						"Radiant Ergo Fragment"
        			]
    			}
			},
			{
				x:2557, y:1455,
				type: "npc",
				tooltip: {
        			title: "Weeping Woman",
        			items: [
						"Vivid Ergo Fragment",
						"Feel"
        			]
    			}
			},
			{ x:345, y:2058, type: "consumable", tooltip: "Throwing Cell" },
			{ x:551, y:2056, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:924, y:2025, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:816, y:1753, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:793, y:1668, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1095, y:1687, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:1296, y:1567, type: "consumable", tooltip: "Electric Blitz Abrasive" },
			{ x:1288, y:1261, type: "consumable", tooltip: "Sharp Pipe" },
			{ x:1241, y:1155, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1018, y:936, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1173, y:616, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:1788, y:843, type: "consumable", tooltip: "Legion Magazine" },
			{ x:2104, y:948, type: "consumable", tooltip: "Venigni's Urgent Repair Tool" },
			{ x:2156, y:1247, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:2198, y:1499, type: "consumable", tooltip: "Venigni's Emergency Protection" },
			{ x:1721, y:1591, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1720, y:1769, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:2103, y:1797, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:1030, y:2365, type: "defencepart", tooltip: "LADA F150 Frame" },
			{ x:1903, y:1481, type: "defencepart", tooltip: "Workshop Union Standard Insulation Converter" },
			{ x:834, y:1478, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1584, y:1313, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1499, y:1133, type: "material", tooltip: "Star Fragment" },
			{ x:2067, y:1302, type: "material", tooltip: "Hidden Moonstone" },
			{ x:2294, y:1674, type: "material", tooltip: "Star Fragment" },
			{ x:1386, y:1024, type: "collectable", tooltip: "Frozen Man's Letter" },
			{ x:2499, y:1185, type: "collectable", tooltip: "Torn Doodle" },
			{ x:2012, y:1565, type: "collectable", tooltip: "Venigni's Krat Landmark Guide II" },
			{ x:1648, y:1270, type: "amulet", tooltip: "Life Amulet" },
			{ x:2130, y:1644, type: "dimensionalbutterfly", tooltip: "Hidden Moonstone" },
			{ x:499, y:2086, type: "ladder", tooltip: "Knocked down from above."},
			{ x:780, y:2219, type: "ladder" },
			{ x:1081, y:666, type: "ladder" },
			{ x:1060, y:1244, type: "ladder" },
			{ x:1072, y:1463, type: "ladder" },
			{ x:1476, y:633, type: "ladder" },
			{ x:1418, y:676, type: "ladder" },
			{ x:1492, y:857, type: "ladder" },
			{ x:1469, y:959, type: "ladder" },
			{ x:1814, y:1650, type: "ladder" },
			{ x:1970, y:1589, type: "ladder" },
			{ x:2046, y:1607, type: "ladder" },
			{ x:2419, y:1483, type: "ladder" },
			{ x:2506, y:1445, type: "ladder" },
			{ x:2028, y:1073, type: "lift" },
			{ x:793, y:1729, type: "lockeddoor", tooltip: "Opens from the other side."}
		]
	},

    {
        id: "kratcityhall",
        title: "Krat City Hall",
        image: "kratcityhall.webp",
        page: "maps/kratcityhall.html",
        markers: []
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
        markers: []
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
        markers: []
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
        markers: []
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
        markers: []
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

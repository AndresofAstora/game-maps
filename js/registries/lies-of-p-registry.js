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
			{ x:203, y:2356, type: "area", tooltip: "Hotel Krat" },
            { x:206, y:1744, type: "stargazer", tooltip: "Elysian Boulevard Entrance" },
			{ x:1967, y:655, type: "stargazer", tooltip: "Inside the House on Elysian Boulevard" },
	    	{
				x:1920,
				y:538,
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
				x:1744,
				y:1117,
				type: "npc",
				tooltip: {
                    title: "Toma",
                    items: [
						"Radiant Ergo Fragment"
                    ]
                }
            },
			{
				x:2599,
				y:938,
				type: "npc",
				tooltip: {
                    title: "Weeping Woman",
                    items: [
						"Vivid Ergo Fragment",
						"Feel"
                    ]
                }
            },
            { x:387, y:1541, type: "consumable", tooltip: "Throwing Cell" },
			{ x:593, y:1539, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:966, y:1508, type: "consumable", tooltip: "Gemini's Emergency Protection" },
			{ x:858, y:1236, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:835, y:1151, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1137, y:1170, type: "consumable", tooltip: "Attribute Resistance Ampoule" },
			{ x:1338, y:1050, type: "consumable", tooltip: "Electric Blitz Abrasive" },
			{ x:1330, y:744, type: "consumable", tooltip: "Sharp Pipe" },
			{ x:1283, y:638, type: "consumable", tooltip: "Vivid Ergo Fragment" },
			{ x:1060, y:419, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1215, y:99, type: "consumable", tooltip: "Fable Catalyst" },
			{ x:1830, y:326, type: "consumable", tooltip: "Legion Magazine" },
			{ x:2146, y:431, type: "consumable", tooltip: "Venigni's Urgent Repair Tool" },
			{ x:2198, y:730, type: "consumable", tooltip: "Sawtoothed Wheel" },
			{ x:2240, y:982, type: "consumable", tooltip: "Venigni's Emergency Protection" },
			{ x:1763, y:1074, type: "consumable", tooltip: "Dim Ergo Fragment" },
			{ x:1762, y:1252, type: "consumable", tooltip: "Radiant Ergo Fragment" },
			{ x:2145, y:1280, type: "consumable", tooltip: "Radiant Ergo Fragment" },
            { x:1072, y:1848, type: "defencepart", tooltip: "LADA F150 Frame" },
			{ x:1945, y:964, type: "defencepart", tooltip: "Workshop Union Standard Insulation Converter" },
            { x:876, y:961, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1626, y:796, type: "material", tooltip: "Hidden Moonstone" },
			{ x:1541, y:616, type: "material", tooltip: "Star Fragment" },
			{ x:2109, y:785, type: "material", tooltip: "Hidden Moonstone" },
			{ x:2336, y:1157, type: "material", tooltip: "Star Fragment" },
            { x:1428, y:507, type: "collectable", tooltip: "Frozen Man's Letter" },
			{ x:2541, y:668, type: "collectable", tooltip: "Torn Doodle" },
			{ x:2054, y:1048, type: "collectable", tooltip: "Venigni's Krat Landmark Guide II" },
            { x:1690, y:753, type: "amulet", tooltip: "Life Amulet" },
            { x:2172, y:1127, type: "dimensionalbutterfly", tooltip: "Hidden Moonstone" },
            { x:541, y:1569, type: "ladder", tooltip: "Knocked down from above."},
			{ x:822, y:1702, type: "ladder" },
			{ x:1123, y:149, type: "ladder" },
			{ x:1102, y:727, type: "ladder" },
			{ x:1114, y:946, type: "ladder" },
			{ x:1518, y:116, type: "ladder" },
			{ x:1460, y:159, type: "ladder" },
			{ x:1534, y:340, type: "ladder" },
			{ x:1511, y:442, type: "ladder" },
			{ x:1856, y:1133, type: "ladder" },
			{ x:2012, y:1072, type: "ladder" },
			{ x:2088, y:1090, type: "ladder" },
			{ x:2461, y:966, type: "ladder" },
			{ x:2548, y:928, type: "ladder" },
            { x:2070, y:556, type: "lift" },
            { x:835, y:1212, type: "lockeddoor", tooltip: "Opens from the other side."}
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

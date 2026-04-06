import { createGameRegistry } from "./shared-game-registry.js";

const markerTypes = [
    { id: "start", label: "Player Start" },
    { id: "save", label: "Save" },
    { id: "weapon", label: "Weapon" },
    { id: "key", label: "Key" },
    { id: "item", label: "Item" },
    { id: "illusory-wall", label: "Illusory Wall" },
    { id: "ladder", label: "Ladder" },
    { id: "locked-door", label: "Locked Door" },
    { id: "npc", label: "NPC" },
    { id: "boss", label: "Boss" }
];

const MARKER_ICON_FILES = {
    start: "marker-start.png",
    save: "marker-save.png",
    weapon: "marker-weapon.png",
    key: "marker-key.png",
    item: "marker-item.png",
    "illusory-wall": "marker-illusorywall.png",
    ladder: "marker-ladder.png",
    "locked-door": "marker-lockeddoor.png",
    npc: "marker-npc.png",
    boss: "marker-boss.png"
};

const maps = [
    {
        id: "prisonofhusksdemo",
        title: "Prison of Husks (Demo)",
        image: "prisonofhusksdemo.png",
        page: "maps/prison-of-husks-demo.html",
        markers: [
            { x:394, y:211, type: "start" },
            { x:104, y:691, type: "save" },
            { x:1803, y:463, type: "save" },
            { x:114, y:409, type: "weapon", tooltip: "Longsword" },
            { x:1174, y:673, type: "weapon", tooltip: "Broken Needle" },
            { x:433, y:913, type: "weapon", tooltip: "Twin Blades" },
            { x:1282, y:1431, type: "weapon", tooltip: "Rapier" },
            { x:404, y:1131, type: "weapon", tooltip: "Sword of the Stray (Dropped by Stray Pigment boss)" },
            { x:394, y:242, type: "key", tooltip: "Cell Key" },
            { x:483, y:620, type: "key", tooltip: "Cell Key x2 (Enemy drop)" },
            { x:750, y:697, type: "key", tooltip: "Jailer's Emerald Key (Enemy drop)" },
            { x:1173, y:97, type: "key", tooltip: "Chapel Key (Received from Caged Doll)" },
            { x:1563, y:209, type: "key", tooltip: "Liberation (Dropped by Champion boss)" },
            { x:636, y:242, type: "key", tooltip: "Wilting Lily" },
            { x:114, y:391, type: "item", tooltip: "Red Ribbon (Enemy Drop)" },
            { x:155, y:1554, type: "item", tooltip: "Telescope" },
            { x:196, y:437, type: "item", tooltip: "Scarlet Flask x3" },
            { x:225, y:785, type: "item", tooltip: "Red Ribbon" },
            { x:1094, y:531, type: "item", tooltip: "Stamp" },
            { x:697, y:565, type: "item", tooltip: "Red Ribbon" },
            { x:718, y:1070, type: "item", tooltip: "Red Ribbon" },
            { x:811, y:1085, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
            { x:805, y:1354, type: "item", tooltip: "Rusty Knife x5" },
            { x:636, y:1298, type: "item", tooltip: "Stamp" },
            { x:1478, y:388, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
            { x:1813, y:536, type: "item", tooltip: "Red Ribbon x3" },
            { x:1650, y:1409, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
            { x:1641, y:1436, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
            { x:1616, y:1443, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
            { x:1703, y:1448, type: "item", tooltip: "Red Ribbon" },
            { x:154, y:143, type: "illusory-wall" },
            { x:835, y:725, type: "illusory-wall" },
            { x:677, y:1290, type: "illusory-wall" },
            { x:677, y:985, type: "illusory-wall" },
            { x:675, y:1204, type: "ladder" },
            { x:1575, y:625, type: "ladder" },
            { x:154, y:787, type: "locked-door", tooltip: "Cell Key required" },
            { x:275, y:184, type: "locked-door", tooltip: "Cell Key required" },
            { x:396, y:184, type: "locked-door", tooltip: "Cell Key required" },
            { x:515, y:184, type: "locked-door", tooltip: "Cell Key required" },
            { x:634, y:184, type: "locked-door", tooltip: "Cell Key required" },
            { x:435, y:748, type: "locked-door", tooltip: "Cell Key required" },
            { x:1294, y:945, type: "locked-door", tooltip: "Cell Key required" },
            { x:1415, y:945, type: "locked-door", tooltip: "Cell Key required" },
            { x:1534, y:945, type: "locked-door", tooltip: "Cell Key required" },
            { x:1135, y:627, type: "locked-door", tooltip: "Cell Key required" },
            { x:1133, y:725, type: "locked-door", tooltip: "Cell Key required" },
            { x:677, y:783, type: "locked-door", tooltip: "Jailer's Emerald Key required" },
            { x:1055, y:388, type: "locked-door", tooltip: "Liberation key required" },
            { x:99, y:117, type: "npc", tooltip: "Caged Doll (Lower cage to receive Chapel key and unlock shortcut)" },
            { x:1503, y:189, type: "boss", tooltip: "Champion" },
            { x:375, y:1107, type: "boss", tooltip: "Stray Pigment (Wilting Lily key required for boss to spawn)" }
        ]
    }
];

const registry = createGameRegistry({
    gameId: "prison-of-husks-demo",
    title: "Prison of Husks (Demo)",
    page: "prison-of-husks-demo.html",
    maps,
    stageOrder: ["prisonofhusksdemo"],
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


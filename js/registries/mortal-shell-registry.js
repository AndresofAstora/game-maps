import { createGameRegistry } from "./shared-game-registry.js";

const markerTypes = [
    { id: "boss", label: "Boss" },
    { id: "chest", label: "Chest" },
    { id: "frogchest", label: "Frog Chest" },
    { id: "lever", label: "Lever" },
    { id: "inscription", label: "Inscription" },
    { id: "item", label: "Item" },
    { id: "mushroom", label: "Mushroom" },
    { id: "npc", label: "NPC" },
    { id: "shell", label: "Shell" },
    { id: "warp", label: "Warp" }
];

const MARKER_ICON_FILES = {
    start: "marker-boss.png",
    save: "marker-chest.png",
    weapon: "marker-frogchest.png",
    key: "marker-lever.png",
    item: "marker-inscription.png",
    "illusory-wall": "marker-item.png",
    ladder: "marker-mushroom.png",
    "locked-door": "marker-npc.png",
    npc: "marker-shell.png",
    boss: "marker-warp.png"
};

const maps = [
    {
        id: "fallgrim",
        title: "Fallgrim",
        image: "fallgrim.png",
        page: "maps/fallgrim.html",
        markers: [
            { x:394, y:211, type: "start" },
            { x:104, y:691, type: "save" },
            { x:1803, y:463, type: "save" },
            { x:114, y:409, type: "weapon", tooltip: "Longsword" },
        ]
    }
];

const registry = createGameRegistry({
    gameId: "mortal-shell",
    title: "Mortal Shell",
    page: "mortal-shell.html",
    maps,
    stageOrder: ["fallgrim"],
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

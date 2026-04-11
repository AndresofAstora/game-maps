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
    boss: "marker-boss.png",
    chest: "marker-chest.png",
    "frog-chest": "marker-frogchest.png",
    lever: "marker-lever.png",
    inscription: "marker-inscription.png",
    item: "marker-item.png",
    mushroom: "marker-mushroom.png",
    npc: "marker-npc.png",
    shell: "marker-shell.png",
    warp: "marker-warp.png"
};

const maps = [
    {
        id: "fallgrim",
        title: "Fallgrim",
        image: "fallgrim.png",
        page: "maps/fallgrim.html",
        markers: [
            { x:6090, y:8142, type: "shell", tooltip: "Harros, the Vassal" },
            { x:6594, y:7243, type: "mushroom" },
            { x:7005, y:6987, type: "inscription" },
            { x:7128, y:6759, type: "item", tooltip: "Glimpse of Futility" },
            { x:7426, y:6657, type: "chest", tooltip: "Simple Lute + Remnant of Tar" }
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

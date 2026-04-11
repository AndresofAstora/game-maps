import { createGameRegistry } from "./shared-game-registry.js";

const markerTypes = [
    { id: "boss", label: "Boss" },
    { id: "chest", label: "Chest" },
    { id: "frog-chest", label: "Frog Chest" },
    { id: "goal", label: "Goal" },
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
    goal: "marker-goal.png",
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
        markers: []
    },
    {
        id: "shrine-of-ash",
        title: "Shrine of Ash",
        image: "shrineofash.png",
        page: "maps/shrine-of-ash.html",
        markers: []
    },
    {
        id: "crypt-of-martyrs",
        title: "Crypt of Martyrs",
        image: "cryptofmartyrs.png",
        page: "maps/crypt-of-martyrs.html",
        markers: []
    },
    {
        id: "eternal-narthex",
        title: "Eternal Narthex",
        image: "eternalnarthex.png",
        page: "maps/eternal-narthex.html",
        markers: []
    },
    {
        id: "shifting-archives",
        title: "Shifting Archives",
        image: "shiftingarchives.png",
        page: "maps/shifting-archives.html",
        markers: []
    },
    {
        id: "dim-gate",
        title: "Dim Gate",
        image: "dimgate.png",
        page: "maps/dim-gate.html",
        markers: []
    }
];

const registry = createGameRegistry({
    gameId: "mortal-shell",
    title: "Mortal Shell",
    page: "mortal-shell.html",
    maps,
    stageOrder: [
        "fallgrim",
        "shrine-of-ash",
        "crypt-of-martyrs",
        "eternal-narthex",
        "shifting-archives",
        "dim-gate"
    ],
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

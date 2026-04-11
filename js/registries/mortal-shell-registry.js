import { createGameRegistry } from "./shared-game-registry.js";

const markerTypes = [
    { id: "boss", label: "Boss" },
    { id: "chest", label: "Chest" },
    { id: "frog-chest", label: "Frog Chest" },
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
        markers: []
    },
    {
        id: "shrine-of-ash",
        title: "Shrine of Ash",
        image: "shrineofash.png",
        page: "maps/shrine-of-ash.html",
        markers: [
            { x:2586, y:3417, type: "start" },
            { x:2552, y:3241, type: "npc", tooltip: "Sester Genessa (First Appearance)" },
            { x:505, y:1395, type: "npc", tooltip: "Sester Genessa (Second Appearance)" },
            { x:1230, y:158, type: "npc", tooltip: "Sester Genessa (Third Appearance)" },
            { x:2620, y:3132, type: "weapon", tooltip: "Smoldering Mace" },
            { x:2620, y:3132, type: "boss", tooltip: "Imrod, the Unrepentant (Drop: Glimpse of Annihilation" },
            { x:1864, y:2565, type: "chest", tooltip: "Offering: Glimpse of Affection + Foundry Stone" },
            { x:966, y:2670, type: "chest", tooltip: "Solemn Offering + Unguent Tar" },
            { x:185, y:2560, type: "chest", tooltip: "Offering: Glimpse of Wisdom + Unkown Effigy" },
            { x:503, y:1540, type: "chest", tooltip: "Offering: Glimpse of Futility + Untarnished Mask" },
            { x:503, y:1540, type: "chest", tooltip: "Offering: Glimpse of Futility + Awakened Stone" },
            { x:1320, y:666, type: "chest", tooltip: "Extracted Tar + Mortal Token" },
            { x:2511, y:2771, type: "item", tooltip: "Unkown Effigy" },
            { x:1957, y:2761, type: "item", tooltip: "Scripture of Repent" },
            { x:1335, y:2740, type: "item", tooltip: "Mortal Token" },
            { x:1291, y:2784, type: "item", tooltip: "Mortal Token" },
            { x:1322, y:2826, type: "item", tooltip: "Mortal Token" },
            { x:1252, y:2530, type: "item", tooltip: "Glimpse of Futility" },
            { x:1102, y:3002, type: "item", tooltip: "Quenching Acid" },
            { x:804, y:3049, type: "item", tooltip: "Bronze Bell" },
            { x:977, y:2426, type: "item", tooltip: "Roasted Rat" },
            { x:819, y:2530, type: "item", tooltip: "Glimpse of Wisdom" },
            { x:775, y:2535, type: "item", tooltip: "Eternal Diapason" },
            { x:534, y:2687, type: "item", tooltip: "Large Bolt" },
            { x:234, y:2526, type: "item", tooltip: "Scripture of Repent" },
            { x:623, y:1646, type: "item", tooltip: "Mortal Token x2" },
            { x:697, y:1761, type: "item", tooltip: "Glimpse of Affection" },
            { x:810, y:1862, type: "item", tooltip: "Remnant of Tar" },
            { x:994, y:1616, type: "item", tooltip: "Mortal Token" },
            { x:1075, y:2104, type: "item", tooltip: "Scripture of Despair" },
            { x:1020, y:1931, type: "item", tooltip: "Quenching Acid" },
            { x:1320, y:906, type: "item", tooltip: "Glimpse of Hope" },
            { x:1318, y:519, type: "item", tooltip: "Inflamed Gland + Nascent Tar" },
            { x:1868, y:2822, type: "inscription" },
            { x:456, y:2161, type: "inscription" },
            { x:1427, y:815, type: "inscription" },
            { x:2551, y:2670, type: "mushroom" },
            { x:1311, y:3081, type: "mushroom" },
            { x:1145, y:2425, type: "mushroom" },
            { x:478, y:2487, type: "mushroom" },
            { x:923, y:1709, type: "mushroom" },
            { x:1146, y:628, type: "mushroom" }
        ]
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
        "dim-gate",
        "shifting-archives"
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

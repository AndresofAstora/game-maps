export const MARKER_TYPES = [
    { id: "start", label: "Start" },
    { id: "checkpoint", label: "Checkpoint" },
    { id: "bit-chest", label: "Bit Chest" },
    { id: "part-chest", label: "Part Chest" },
    { id: "color-capsule", label: "Color Capsule" },
    { id: "stage-exit", label: "Stage Exit" }
];

const MARKER_ICON_FILES = {
    start: "marker-start.png",
    checkpoint: "marker- checkpoint.png",
    "bit-chest": "marker-bitchest.png",
    "part-chest": "marker-partchest.png",
    "color-capsule": "marker-colorcapsule.png",
    "stage-exit": "marker-end.png"
};

export const MAP_CATALOG = [
    { id: "tutorial", title: "Tutorial", chapter: "Training Grounds", summary: "Boot sequence walkthrough and movement primer.", image: "tutorial.png", page: "maps/tutorial.html", markers: [] },
    { id: "ancienttechruins1", title: "Ancient Tech Ruins 1", chapter: "Ancient Tech Ruins", summary: "Collapsed corridors and rusted chambers in the opening ruins run.", image: "ancienttechruins1.png", page: "maps/ancienttechruins1.html", markers: [] },
    { id: "ancienttechruins2", title: "Ancient Tech Ruins 2", chapter: "Ancient Tech Ruins", summary: "A second ruins pass with wider traversal lanes and hidden pockets.", image: "ancienttechruins2.png", page: "maps/ancienttechruins2.html", markers: [] },
    { id: "ancienttechruins3", title: "Ancient Tech Ruins 3", chapter: "Ancient Tech Ruins", summary: "Late-ruins stage layout with compact vertical branches.", image: "ancienttechruins3.png", page: "maps/ancienttechruins3.html", markers: [] },
    { id: "binaryfortress1", title: "Binary Fortress 1", chapter: "Binary Fortress", summary: "Front gate route through the first fortress sector.", image: "binaryfortress1.png", page: "maps/binaryfortress1.html", markers: [] },
    { id: "binaryfortress2", title: "Binary Fortress 2", chapter: "Binary Fortress", summary: "Mid-fortress assault path with tighter combat rooms.", image: "binaryfortress2.png", page: "maps/binaryfortress2.html", markers: [] },
    { id: "binaryfortress3", title: "Binary Fortress 3", chapter: "Binary Fortress", summary: "Fortress finale layout with stacked routes and a hard push forward.", image: "binaryfortress3.png", page: "maps/binaryfortress3.html", markers: [] },
    { id: "frostbytedeep1", title: "Frostbyte Deep 1", chapter: "Frostbyte Deep", summary: "Cold sector entry with long horizontal stretches and caves.", image: "frostbytedeep1.png", page: "maps/frostbytedeep1.html", markers: [] },
    { id: "frostbytedeep2", title: "Frostbyte Deep 2", chapter: "Frostbyte Deep", summary: "Deeper frozen caverns with more branching routes.", image: "frostbytedeep2.png", page: "maps/frostbytedeep2.html", markers: [] },
    { id: "frostbytedeep3", title: "Frostbyte Deep 3", chapter: "Frostbyte Deep", summary: "Final Frostbyte Deep stage with dense endgame traversal.", image: "frostbytedeep3.png", page: "maps/frostbytedeep3.html", markers: [] },
    {
        id: "lostmegaclopolis1",
        title: "Lost Megaclopolis 1",
        chapter: "Lost Megaclopolis",
        summary: "Marker-complete city approach with early checkpoint coverage.",
        image: "lostmegaclopolis1.png",
        page: "maps/lostmegaclopolis1.html",
        markers: [
            { x: 139, y: 974, type: "start" },
            { x: 237, y: 734, type: "checkpoint" },
            { x: 260, y: 617, type: "checkpoint" },
            { x: 858, y: 478, type: "checkpoint" },
            { x: 934, y: 878, type: "checkpoint" },
            { x: 1967, y: 770, type: "checkpoint" },
            { x: 2028, y: 617, type: "checkpoint" },
            { x: 116, y: 239, type: "bit-chest" },
            { x: 525, y: 358, type: "bit-chest" },
            { x: 540, y: 358, type: "bit-chest" },
            { x: 528, y: 1008, type: "bit-chest" },
            { x: 1346, y: 877, type: "bit-chest" },
            { x: 1656, y: 513, type: "bit-chest" },
            { x: 87, y: 249, type: "part-chest" },
            { x: 689, y: 975, type: "part-chest" },
            { x: 1724, y: 827, type: "part-chest" },
            { x: 98, y: 221, type: "color-capsule" },
            { x: 2435, y: 461, type: "stage-exit" }
        ]
    },
    {
        id: "lostmegaclopolis2",
        title: "Lost Megaclopolis 2",
        chapter: "Lost Megaclopolis",
        summary: "Marker-complete vertical climb with dense item placement.",
        image: "lostmegaclopolis2.png",
        page: "maps/lostmegaclopolis2.html",
        markers: [
            { x: 143, y: 2158, type: "start" },
            { x: 599, y: 325, type: "checkpoint" },
            { x: 825, y: 545, type: "checkpoint" },
            { x: 481, y: 989, type: "checkpoint" },
            { x: 291, y: 1447, type: "checkpoint" },
            { x: 877, y: 1430, type: "checkpoint" },
            { x: 677, y: 1527, type: "checkpoint" },
            { x: 347, y: 1969, type: "checkpoint" },
            { x: 561, y: 407, type: "bit-chest" },
            { x: 598, y: 873, type: "bit-chest" },
            { x: 337, y: 1217, type: "bit-chest" },
            { x: 134, y: 1382, type: "bit-chest" },
            { x: 290, y: 1773, type: "bit-chest" },
            { x: 347, y: 1865, type: "bit-chest" },
            { x: 295, y: 2135, type: "bit-chest" },
            { x: 295, y: 2145, type: "bit-chest" },
            { x: 303, y: 2145, type: "bit-chest" },
            { x: 580, y: 391, type: "part-chest" },
            { x: 657, y: 1235, type: "part-chest" },
            { x: 330, y: 2144, type: "part-chest" },
            { x: 288, y: 76, type: "color-capsule" },
            { x: 696, y: 81, type: "stage-exit" }
        ]
    },
    {
        id: "lostmegaclopolis3",
        title: "Lost Megaclopolis 3",
        chapter: "Lost Megaclopolis",
        summary: "Marker-complete city finale with packed endgame routes.",
        image: "lostmegaclopolis3.png",
        page: "maps/lostmegaclopolis3.html",
        markers: [
            { x: 473, y: 261, type: "start" },
            { x: 125, y: 240, type: "checkpoint" },
            { x: 267, y: 240, type: "checkpoint" },
            { x: 355, y: 715, type: "checkpoint" },
            { x: 994, y: 932, type: "checkpoint" },
            { x: 1046, y: 270, type: "checkpoint" },
            { x: 1644, y: 110, type: "checkpoint" },
            { x: 1732, y: 1089, type: "checkpoint" },
            { x: 112, y: 471, type: "bit-chest" },
            { x: 153, y: 301, type: "bit-chest" },
            { x: 361, y: 1012, type: "bit-chest" },
            { x: 427, y: 591, type: "bit-chest" },
            { x: 818, y: 760, type: "bit-chest" },
            { x: 1134, y: 270, type: "bit-chest" },
            { x: 1393, y: 270, type: "bit-chest" },
            { x: 1877, y: 1067, type: "bit-chest" },
            { x: 392, y: 39, type: "part-chest" },
            { x: 1933, y: 974, type: "part-chest" },
            { x: 736, y: 201, type: "color-capsule" },
            { x: 1795, y: 95, type: "stage-exit" }
        ]
    },
    { id: "subprogramdeadlands1", title: "Subprogram Deadlands 1", chapter: "Subprogram Deadlands", summary: "Opening Deadlands route across broad, exposed terrain.", image: "subprogramdeadlands1.png", page: "maps/subprogramdeadlands1.html", markers: [] },
    { id: "subprogramdeadlands2", title: "Subprogram Deadlands 2", chapter: "Subprogram Deadlands", summary: "Mid-Deadlands path with more dangerous choke points.", image: "subprogramdeadlands2.png", page: "maps/subprogramdeadlands2.html", markers: [] },
    { id: "subprogramdeadlands3", title: "Subprogram Deadlands 3", chapter: "Subprogram Deadlands", summary: "Deadlands finale with a compact last sprint to the exit.", image: "subprogramdeadlands3.png", page: "maps/subprogramdeadlands3.html", markers: [] },
    { id: "frostbytechallenge", title: "Frostbyte Challenge", chapter: "Challenge Maps", summary: "Standalone challenge route outside the main chapter flow.", image: "frostbytechallenge.png", page: "maps/frostbytechallenge.html", markers: [] },
    { id: "hiddenlevel", title: "Hidden Level", chapter: "Challenge Maps", summary: "Special map page for the hidden level route.", image: "hiddenlevel.png", page: "maps/hiddenlevel.html", markers: [] },
    { id: "core", title: "Core", chapter: "Endgame", summary: "Core stage overview page in the shared atlas shell.", image: "core.png", page: "maps/core.html", markers: [] },
    { id: "throneroom", title: "Throne Room", chapter: "Endgame", summary: "Boss approach and throne room page with dedicated navigation.", image: "throneroom.png", page: "maps/throneroom.html", markers: [] },
    { id: "credits", title: "Credits", chapter: "Archives", summary: "Credits screen page kept inside the same dark presentation system.", image: "credits.png", page: "maps/credits.html", markers: [] }
];

export const CHAPTER_ORDER = [
    "Training Grounds",
    "Ancient Tech Ruins",
    "Binary Fortress",
    "Frostbyte Deep",
    "Lost Megaclopolis",
    "Subprogram Deadlands",
    "Challenge Maps",
    "Endgame",
    "Archives"
];

export function getMapById(id) {
    return MAP_CATALOG.find((map) => map.id === id) ?? null;
}

export function getMapStatus(map) {
    return map.markers.length > 0 ? "interactive" : "preview";
}

export function getMapStatusLabel(map) {
    return getMapStatus(map) === "interactive" ? "Interactive" : "Preview";
}

export function getMarkerCounts(map) {
    return map.markers.reduce((counts, marker) => {
        counts[marker.type] = (counts[marker.type] ?? 0) + 1;
        return counts;
    }, {});
}

export function getMapImageUrl(map) {
    return new URL(`../assets/maps/${map.image}`, import.meta.url).href;
}

export function getMarkerIconUrl(type) {
    const filename = MARKER_ICON_FILES[type];
    return filename ? new URL(`../assets/markers/${filename}`, import.meta.url).href : "";
}

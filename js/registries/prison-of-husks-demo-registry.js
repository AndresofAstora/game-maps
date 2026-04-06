import { createGameRegistry } from './shared-game-registry.js';

const LEGACY_MARKER_TYPES = [
        { id: "start", label: "Player Start" },
        { id: "save", label: "Save" },
        { id: "weapon", label: "Weapon" },
        { id: "key", label: "Key" },
        { id: "item", label: "Item" },
        { id: "illusory-wall", label: "Illusory Wall" },
        { id: "ladder", label: "Ladder" },
        { id: "locked-door", label: "Locked Door" },
        { id: "boss", label: "Boss" }
];

const MARKER_ICON_FILES = {
    "start": "marker-start.png",
    "save": "marker-save.png",
    "weapon": "marker-weapon.png",
    "key": "marker-key.png",
    "item": "marker-item.png",
    "illusory-wall": "marker-illusorywall.png",
    "ladder": "marker-ladder.png",
    "locked-door": "marker-lockeddoor.png",
    "boss": "marker-boss.png"
};

export const MAP_CATALOG = [
    {
    id: "prisonofhusksdemo",
	title: "Prison of Husks (Demo)",
	image: "prisonofhusksdemo.png",
	page: "maps/prison-of-husks-demo.html",
	markers: [
		{ x:100, y:100, type: "start" },
        { x:100, y:100, type: "save" },
        { x:100, y:100, type: "save" },
        { x:100, y:100, type: "weapon", tooltip: "Longsword" },
        { x:100, y:100, type: "weapon", tooltip: "Broken Needle" },
        { x:100, y:100, type: "weapon", tooltip: "Twin Blades" },
        { x:100, y:100, type: "weapon", tooltip: "Rapier" },
        { x:100, y:100, type: "weapon", tooltip: "Sword of the Stray (Dropped by Stray Pigment boss)" },
        { x:100, y:100, type: "key", tooltip: "Cell Key" },
        { x:100, y:100, type: "key", tooltip: "Cell Key x2 (Enemy drop)" },
        { x:100, y:100, type: "key", tooltip: "Jailer's Emerald Key (Enemy drop)" },
        { x:100, y:100, type: "key", tooltip: "Chapel Key (Received from Caged Doll)" },
        { x:100, y:100, type: "key", tooltip: "Wilting Lily" },
        { x:100, y:100, type: "key", tooltip: "Liberation (Dropped by Champion boss)" },
        { x:100, y:100, type: "key", tooltip: "Wilting Lily" },
        { x:100, y:100, type: "item", tooltip: "Telescope" },
        { x:100, y:100, type: "item", tooltip: "Scarlet Flask x3" },
        { x:100, y:100, type: "item", tooltip: "Red Ribbon" },
        { x:100, y:100, type: "item", tooltip: "Stamp" },
        { x:100, y:100, type: "item", tooltip: "Red Ribbon" },
        { x:100, y:100, type: "item", tooltip: "Red Ribbon" },
        { x:100, y:100, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
        { x:100, y:100, type: "item", tooltip: "Rusty Knife x5" },
        { x:100, y:100, type: "item", tooltip: "Stamp" },
        { x:100, y:100, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
        { x:100, y:100, type: "item", tooltip: "Red Ribbon x3" },
        { x:100, y:100, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
        { x:100, y:100, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
        { x:100, y:100, type: "item", tooltip: "Charred Ribbon (Enemy Drop)" },
        { x:100, y:100, type: "item", tooltip: "Red Ribbon" },
        { x:100, y:100, type: "illusoryiwall" },
        { x:100, y:100, type: "illusoryiwall" },
        { x:100, y:100, type: "illusoryiwall" },
        { x:100, y:100, type: "illusoryiwall" },
        { x:100, y:100, type: "ladder" },
        { x:100, y:100, type: "ladder" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Cell Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Jailer's Emerald Key required" },
        { x:100, y:100, type: "locked-door", tooltip: "Liberation key required" },
        { x:100, y:100, type: "npc", tooltip: "Caged Doll (Lower cage to receive Chapel key and unlock shortcut)" },
        { x:100, y:100, type: "boss", tooltip: "Champion" },
        { x:100, y:100, type: "boss", tooltip: "Stray Pigment (Wilting Lily key required for boss to spawn)" },
        
        ]
    },

const registry = createGameRegistry({
    gameId: "prison-of-husks-demo",
    title: "Prison of Husks (Demo)",
    page: "prison-of-husks-demo.html",
    maps: [],
    stageOrder: [
        'prisonofhusksdemo'
    ]
});

export const GAME_INFO = registry.GAME_INFO;
export const MARKER_TYPES = registry.MARKER_TYPES;
export const MAP_CATALOG = registry.MAP_CATALOG;
export const STAGE_ORDER = registry.STAGE_ORDER;
export const getMapById = registry.getMapById;
export const getMarkerCounts = registry.getMarkerCounts;
export const getMapImageUrl = registry.getMapImageUrl;
export const getMarkerIconUrl = registry.getMarkerIconUrl;

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
        markers: []
    },
    {
        id: "elysianboulevard",
        title: "Elysian Boulevard",
        image: "elysianboulevard.webp",
        page: "maps/elysianboulevard.html",
        markers: []
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
        id: "alchemistbridge",
        title: "Alchemist Bridge",
        image: "alchemistbridge.webp",
        page: "maps/alchemistbridge.html",
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
        markers: []
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

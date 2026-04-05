import { MAP_CATALOG, getMapImageUrl } from "./map-registry.js";

const stageGrid = document.getElementById("stageGrid");
const stageOrder = [
    "electrocaves1",
    "electrocaves2",
    "electrocaves3",
    "lostmegaclopolis1",
    "lostmegaclopolis2",
    "lostmegaclopolis3",
    "ancienttechruins1",
    "ancienttechruins2",
    "ancienttechruins3",
    "subprogramdeadlands1",
    "subprogramdeadlands2",
    "subprogramdeadlands3",
    "frostbytedeep1",
    "frostbytedeep2",
    "frostbytedeep3",
    "binaryfortress1",
    "binaryfortress2",
    "binaryfortress3",
    "tutorial",
    "hiddenlevel",
    "frostbytechallenge",
    "throneroom",
    "core",
    "credits"
];

const orderedMaps = stageOrder
    .map((id) => MAP_CATALOG.find((map) => map.id === id))
    .filter(Boolean);

stageGrid.innerHTML = orderedMaps.map((map) => `
    <article class="stage-card stage-card--minimal">
        <a class="stage-card__link" href="${map.page}" aria-label="${map.title}">
            <div class="stage-card__art" style="background-image: url('${getMapImageUrl(map)}');"></div>
            <div class="stage-card__body stage-card__body--minimal">
                <h2 class="stage-card__title">${map.title}</h2>
            </div>
        </a>
    </article>
`).join("");

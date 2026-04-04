import { MAP_CATALOG, getMapImageUrl } from "./map-registry.js";

const stageGrid = document.getElementById("stageGrid");

stageGrid.innerHTML = MAP_CATALOG.map((map) => `
    <article class="stage-card stage-card--minimal">
        <a class="stage-card__link" href="${map.page}" aria-label="${map.title}">
            <div class="stage-card__art" style="background-image: url('${getMapImageUrl(map)}');"></div>
            <div class="stage-card__body stage-card__body--minimal">
                <h2 class="stage-card__title">${map.title}</h2>
            </div>
        </a>
    </article>
`).join("");

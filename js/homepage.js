import {
    CHAPTER_ORDER,
    MAP_CATALOG,
    getMapImageUrl,
    getMapStatus,
    getMapStatusLabel
} from "./map-registry.js";

const filters = [
    { id: "all", label: "All Stages" },
    { id: "interactive", label: "Interactive Only" },
    { id: "preview", label: "Preview Only" }
];

const stageSections = document.getElementById("stageSections");
const stageFilters = document.getElementById("stageFilters");
const statTotal = document.getElementById("statTotal");
const statInteractive = document.getElementById("statInteractive");
const statPreview = document.getElementById("statPreview");

let activeFilter = "all";

function getVisibleMaps() {
    if (activeFilter === "all") {
        return MAP_CATALOG;
    }

    return MAP_CATALOG.filter((map) => getMapStatus(map) === activeFilter);
}

function renderStats() {
    const interactiveCount = MAP_CATALOG.filter((map) => getMapStatus(map) === "interactive").length;
    statTotal.textContent = String(MAP_CATALOG.length);
    statInteractive.textContent = String(interactiveCount);
    statPreview.textContent = String(MAP_CATALOG.length - interactiveCount);
}

function renderFilters() {
    stageFilters.innerHTML = "";

    filters.forEach((filter) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `filter-chip${filter.id === activeFilter ? " is-active" : ""}`;
        button.textContent = filter.label;
        button.addEventListener("click", () => {
            activeFilter = filter.id;
            renderFilters();
            renderSections();
        });
        stageFilters.appendChild(button);
    });
}

function createCard(map) {
    const status = getMapStatus(map);
    const markerCount = map.markers.length;

    return `
        <article class="stage-card">
            <a class="stage-card__link" href="${map.page}">
                <div class="stage-card__art" style="background-image: url('${getMapImageUrl(map)}');"></div>
                <div class="stage-card__body">
                    <div class="stage-card__topline">
                        <p class="eyebrow">${map.chapter}</p>
                        <span class="status-badge" data-status="${status}">${getMapStatusLabel(map)}</span>
                    </div>
                    <div>
                        <h3 class="stage-card__title">${map.title}</h3>
                        <p>${map.summary}</p>
                    </div>
                    <div class="stage-card__meta">
                        <span><strong>${markerCount}</strong> markers</span>
                        <span>Open page</span>
                    </div>
                </div>
            </a>
        </article>
    `;
}

function renderSections() {
    const visibleMaps = getVisibleMaps();

    if (visibleMaps.length === 0) {
        stageSections.innerHTML = `
            <div class="empty-state">
                <p>No stages match the current filter.</p>
            </div>
        `;
        return;
    }

    const sections = CHAPTER_ORDER.map((chapter) => {
        const maps = visibleMaps.filter((map) => map.chapter === chapter);
        if (!maps.length) {
            return "";
        }

        return `
            <section class="stage-section">
                <div class="stage-section__head">
                    <h3>${chapter}</h3>
                    <span class="section-count">${maps.length} page${maps.length === 1 ? "" : "s"}</span>
                </div>
                <div class="stage-grid">
                    ${maps.map(createCard).join("")}
                </div>
            </section>
        `;
    }).join("");

    stageSections.innerHTML = sections;
}

renderStats();
renderFilters();
renderSections();

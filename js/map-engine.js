let scale = 1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let startX, startY;

let currentMap = null;

function initMap(mapData) {
    currentMap = mapData;

    const mapImage = document.getElementById('mapImage');
    mapImage.src = currentMap.img;

    resetView();
    loadMarkers();
}

const markerIcons = {
    start: "../maps/marker-start.png",
    checkpoint: "../maps/marker-checkpoint.png",
    "bit-chest": "../maps/marker-bitchest.png",
    "part-chest": "../maps/marker-partchest.png",
    "color-capsule": "../maps/marker-colorcapsule.png",
    "stage-exit": "../maps/marker-stageexit.png"
};

const mapWrapper = document.getElementById('mapWrapper');
const markersContainer = document.getElementById('markers');
const mapView = document.getElementById('mapView');

function loadMarkers() {
    markersContainer.innerHTML = '';

    currentMap.markers.forEach(m => {
        const el = document.createElement('div');

        el.className = `marker ${m.type}`;
        el.style.left = m.x + 'px';
        el.style.top = m.y + 'px';
        el.dataset.type = m.type;

        if (markerIcons[m.type]) {
            el.style.backgroundImage = `url(${markerIcons[m.type]})`;
        }

        markersContainer.appendChild(el);
    });
}

function zoom(factor) {
    scale *= factor;
    applyTransform();
}

function applyTransform() {
    mapWrapper.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

document.getElementById('zoomIn').onclick = () => zoom(1.2);
document.getElementById('zoomOut').onclick = () => zoom(0.8);

mapView.addEventListener('wheel', e => {
    e.preventDefault();

    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;

    const mapX = (e.clientX - offsetX) / scale;
    const mapY = (e.clientY - offsetY) / scale;

    scale *= zoomFactor;
    scale = Math.min(Math.max(scale, 0.2), 5);

    offsetX = e.clientX - mapX * scale;
    offsetY = e.clientY - mapY * scale;

    applyTransform();
}, { passive: false });

mapView.addEventListener('mousedown', e => {
    if (e.target.closest('.legend, .zoom-controls, .back-btn')) return;

    isDragging = true;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

mapView.addEventListener('mousemove', e => {
    if (isDragging) {
        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;
        applyTransform();
    }

    const x = Math.round((e.clientX - offsetX) / scale);
    const y = Math.round((e.clientY - offsetY) / scale);

    document.getElementById('coords').innerText = `X: ${x} Y: ${y}`;
});

document.querySelectorAll('.legend input').forEach(cb => {
    cb.addEventListener('change', () => {
        document.querySelectorAll(`.${cb.dataset.type}`).forEach(el => {
            el.style.display = cb.checked ? 'block' : 'none';
        });
    });
});

document.getElementById('toggleAll').onclick = () => {
    const boxes = document.querySelectorAll('.legend input');
    const allOn = [...boxes].every(b => b.checked);

    boxes.forEach(b => {
        b.checked = !allOn;
        b.dispatchEvent(new Event('change'));
    });
};

function resetView() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
    applyTransform();
}

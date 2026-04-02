function initMap(mapId, imageUrl, callback) {
  const img = new Image();
  img.onload = function () {
    const width = img.width, height = img.height;
    const map = L.map(mapId, { crs: L.CRS.Simple, minZoom: -2, maxZoom: 2, zoomControl: true });
    const bounds = [[0,0],[height,width]];
    L.imageOverlay(imageUrl, bounds).addTo(map);
    map.fitBounds(bounds);
    callback(map, bounds);
  };
  img.src = imageUrl;
}

function createIcon(url) {
  return L.icon({ iconUrl: url, iconSize: [32,32], iconAnchor: [16,16] });
}

function addMarkers(map, data, layer, icon) {
  data.forEach(m => {
    L.marker(m.coords, { icon })
      .bindPopup(m.label)
      .addTo(layer);
  });
}

function buildLegend(map, layers) {
  const legend = document.getElementById("legend");

  // Toggle ALL
  const allDiv = document.createElement("div");
  allDiv.className = "toggle";

  const allCheckbox = document.createElement("input");
  allCheckbox.type = "checkbox";
  allCheckbox.checked = true;

  const allLabel = document.createElement("label");
  allLabel.innerText = "Toggle All";

  allCheckbox.onchange = e => {
    Object.values(layers).forEach(layer => {
      if (e.target.checked) map.addLayer(layer);
      else map.removeLayer(layer);
    });

    // sync individual checkboxes
    document.querySelectorAll(".layer-toggle").forEach(cb => {
      cb.checked = e.target.checked;
    });
  };

  allDiv.appendChild(allCheckbox);
  allDiv.appendChild(allLabel);
  legend.appendChild(allDiv);

  // Individual toggles
  Object.keys(layers).forEach(name => {
    const div = document.createElement("div");
    div.className = "toggle";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.className = "layer-toggle";

    checkbox.onchange = e => {
      e.target.checked ? map.addLayer(layers[name]) : map.removeLayer(layers[name]);
    };

    const label = document.createElement("label");
    label.innerText = name;

    div.appendChild(checkbox);
    div.appendChild(label);
    legend.appendChild(div);
  });
}

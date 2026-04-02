const MEGABYTE_MAPS = {
  map1: {
    title: "Factory Zone",
    image: "../assets/megabyte-map1.jpg",
    categories: {
      enemies: [
        { coords: [300, 400], label: "Enemy Spawn A" }
      ],
      items: [
        { coords: [500, 600], label: "Upgrade Core" }
      ],
      secrets: [
        { coords: [700, 200], label: "Hidden Room" }
      ]
    }
  },

  map2: {
    title: "Junkyard",
    image: "../assets/megabyte-map2.jpg",
    categories: {
      enemies: [
        { coords: [200, 300], label: "Scrap Bot" }
      ],
      items: [],
      secrets: []
    }
  },

  map3: {
    title: "Sky Platform",
    image: "../assets/megabyte-map3.jpg",
    categories: {
      enemies: [],
      items: [
        { coords: [600, 500], label: "Jet Booster" }
      ],
      secrets: []
    }
  }
};

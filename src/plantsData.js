const plants = [
  {"id": "plant-1", "name": "Moonlit Monstera", "price": 38, "emoji": "🌿", "colorA": "#0f766e", "colorB": "#22c55e", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/moonlit-monstera.jpg"},
  {"id": "plant-2", "name": "Velvet Calathea", "price": 26, "emoji": "🍃", "colorA": "#166534", "colorB": "#65a30d", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/velvet-calathea.jpg"},
  {"id": "plant-3", "name": "Emerald Philodendron", "price": 29, "emoji": "🌱", "colorA": "#14532d", "colorB": "#16a34a", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/emerald-philodendron.webp"},
  {"id": "plant-4", "name": "Silver Pothos", "price": 21, "emoji": "🪴", "colorA": "#0f766e", "colorB": "#38bdf8", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/silver-pothos.webp"},
  {"id": "plant-5", "name": "Golden Croton", "price": 24, "emoji": "🌼", "colorA": "#ca8a04", "colorB": "#f97316", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/golden-croton.webp"},
  {"id": "plant-6", "name": "Rainforest Alocasia", "price": 34, "emoji": "🍀", "colorA": "#047857", "colorB": "#14b8a6", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/rainforest-alocasia.avif"},
  {"id": "plant-7", "name": "Jade ZZ Plant", "price": 31, "emoji": "🌿", "colorA": "#15803d", "colorB": "#4ade80", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/jade-zz-plant.jpeg"},
  {"id": "plant-8", "name": "Pixie Palm", "price": 27, "emoji": "🌴", "colorA": "#0f766e", "colorB": "#10b981", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/pixie-palm.jpg"},
  {"id": "plant-9", "name": "Marble Queen Ivy", "price": 23, "emoji": "🍃", "colorA": "#4f46e5", "colorB": "#22d3ee", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/marble-queen-ivy.webp"},
  {"id": "plant-10", "name": "Starlight Dieffenbachia", "price": 30, "emoji": "🌱", "colorA": "#0f766e", "colorB": "#84cc16", "category": "Tropical Foliage", "description": "A charming tropical foliage pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/starlight-dieffenbachia.webp"},
  {"id": "plant-11", "name": "Aurora Orchid", "price": 42, "emoji": "🌸", "colorA": "#a21caf", "colorB": "#ec4899", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/aurora-orchid.webp"},
  {"id": "plant-12", "name": "Sun Kissed Begonia", "price": 19, "emoji": "🌺", "colorA": "#f97316", "colorB": "#fb7185", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/sun-kissed-begonia.jpg"},
  {"id": "plant-13", "name": "Rosy Peace Lily", "price": 25, "emoji": "💮", "colorA": "#7c3aed", "colorB": "#c084fc", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/rosy-peace-lily.jpg"},
  {"id": "plant-14", "name": "Twinkle African Violet", "price": 18, "emoji": "🌷", "colorA": "#7c3aed", "colorB": "#60a5fa", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/twinkle-african-violet.jpg"},
  {"id": "plant-15", "name": "Candy Stripe Bromeliad", "price": 28, "emoji": "🌺", "colorA": "#db2777", "colorB": "#fb7185", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/candy-stripe-bromeliad.jpeg"},
  {"id": "plant-16", "name": "Coral Crown Anthurium", "price": 33, "emoji": "❤️", "colorA": "#ef4444", "colorB": "#f97316", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/coral-crown-anthurium.webp"},
  {"id": "plant-17", "name": "Pearl Jasmine Pot", "price": 22, "emoji": "🤍", "colorA": "#64748b", "colorB": "#c084fc", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/pearl-jasmine-pot.avif"},
  {"id": "plant-18", "name": "Dawn Hibiscus", "price": 26, "emoji": "🌺", "colorA": "#ea580c", "colorB": "#f59e0b", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/dawn-hibiscus.jpeg"},
  {"id": "plant-19", "name": "Blush Cyclamen", "price": 20, "emoji": "🌸", "colorA": "#be185d", "colorB": "#f472b6", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/blush-cyclamen.jpeg"},
  {"id": "plant-20", "name": "Luna Kalanchoe", "price": 17, "emoji": "🌼", "colorA": "#f59e0b", "colorB": "#ec4899", "category": "Flowering Beauties", "description": "A charming flowering beauties pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/luna-kalanchoe.jpg"},
  {"id": "plant-21", "name": "Comet Snake Plant", "price": 24, "emoji": "🌵", "colorA": "#14532d", "colorB": "#84cc16", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/comet-snake-plant.jpg"},
  {"id": "plant-22", "name": "Honey Spider Plant", "price": 18, "emoji": "🕸️", "colorA": "#166534", "colorB": "#a3e635", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/honey-spider-plant.jpg"},
  {"id": "plant-23", "name": "Pebble Haworthia", "price": 16, "emoji": "🌵", "colorA": "#475569", "colorB": "#22c55e", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/pebble-haworthia.jpg"},
  {"id": "plant-24", "name": "Sunny Aloe", "price": 15, "emoji": "☀️", "colorA": "#ca8a04", "colorB": "#84cc16", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/sunny-aloe.jpg"},
  {"id": "plant-25", "name": "Minty Rubber Plant", "price": 27, "emoji": "🍃", "colorA": "#15803d", "colorB": "#14b8a6", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/minty-rubber-plant.jpg"},
  {"id": "plant-26", "name": "Little Jade Tree", "price": 19, "emoji": "🌿", "colorA": "#166534", "colorB": "#4ade80", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/little-jade-tree.jpg"},
  {"id": "plant-27", "name": "Satin Dracaena", "price": 23, "emoji": "🌱", "colorA": "#0f766e", "colorB": "#14b8a6", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/satin-dracaena.jpg"},
  {"id": "plant-28", "name": "Dappled Aglaonema", "price": 22, "emoji": "🪴", "colorA": "#4f46e5", "colorB": "#34d399", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/dappled-aglaonema.jpg"},
  {"id": "plant-29", "name": "Star Sansevieria", "price": 21, "emoji": "⭐", "colorA": "#14532d", "colorB": "#65a30d", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/star-sansevieria.jpg"},
  {"id": "plant-30", "name": "Pocket Parlor Palm", "price": 20, "emoji": "🌴", "colorA": "#047857", "colorB": "#22c55e", "category": "Easy-Care Favorites", "description": "A charming easy-care favorites pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/pocket-parlor-palm.jpg"},
  {"id": "plant-31", "name": "Fern Flourish", "price": 23, "emoji": "🌿", "colorA": "#0f766e", "colorB": "#2dd4bf", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/fern-flourish.jpg"},
  {"id": "plant-32", "name": "Cascade String of Pearls", "price": 28, "emoji": "🫧", "colorA": "#15803d", "colorB": "#4ade80", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/cascade-string-of-pearls.jpg"},
  {"id": "plant-33", "name": "Silver Ribbon Vine", "price": 21, "emoji": "🎀", "colorA": "#6366f1", "colorB": "#22d3ee", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/silver-ribbon-vine.jpg"},
  {"id": "plant-34", "name": "Moonbeam Hoya", "price": 26, "emoji": "🌙", "colorA": "#7c3aed", "colorB": "#60a5fa", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/moonbeam-hoya.jpg"},
  {"id": "plant-35", "name": "Cloud Tradescantia", "price": 18, "emoji": "☁️", "colorA": "#4f46e5", "colorB": "#c084fc", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/cloud-tradescantia.jpg"},
  {"id": "plant-36", "name": "Mint Waterfall Pothos", "price": 24, "emoji": "💧", "colorA": "#0f766e", "colorB": "#22c55e", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/mint-waterfall-pothos.jpg"},
  {"id": "plant-37", "name": "Golden Heart Vine", "price": 22, "emoji": "💛", "colorA": "#ca8a04", "colorB": "#f59e0b", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/golden-heart-vine.jpg"},
  {"id": "plant-38", "name": "Pixie String of Hearts", "price": 25, "emoji": "💗", "colorA": "#db2777", "colorB": "#f472b6", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/pixie-string-of-hearts.jpg"},
  {"id": "plant-39", "name": "Whispering Boston Fern", "price": 20, "emoji": "🍃", "colorA": "#166534", "colorB": "#34d399", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/whispering-boston-fern.jpg"},
  {"id": "plant-40", "name": "Dewdrop Ivy Basket", "price": 27, "emoji": "🪴", "colorA": "#0ea5e9", "colorB": "#14b8a6", "category": "Trailing & Hanging", "description": "A charming trailing & hanging pick for shelves, desks, and gift baskets.", "realImage": "/images/plants/dewdrop-ivy-basket.jpg"}
];

const makeThumbnail = (emoji, title, colorA, colorB) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${colorA}"/>
          <stop offset="100%" stop-color="${colorB}"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="24" fill="url(#g)"/>
      <circle cx="72" cy="78" r="34" fill="rgba(255,255,255,0.18)"/>
      <text x="72" y="92" text-anchor="middle" font-size="34">${emoji}</text>
      <text x="24" y="150" fill="white" font-family="Verdana, sans-serif" font-weight="700" font-size="24">${title}</text>
      <text x="24" y="182" fill="rgba(255,255,255,0.85)" font-family="Verdana, sans-serif" font-size="14">Houseplant favorite</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const plantCatalog = plants.map((plant) => ({
  ...plant,
  image: makeThumbnail(plant.emoji, plant.name, plant.colorA, plant.colorB),
}));

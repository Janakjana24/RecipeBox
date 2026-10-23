
const recipes = [
  {
    id: 1,
    name: "Masala Dosa",
    category: "Breakfast",
    emoji: "🥞",
    time: 25,
    difficulty: "Medium",
    description: "Crispy dosa filled with flavourful potato masala.",
    ingredients: [
      "2 cups dosa batter",
      "2 boiled potatoes",
      "1 onion, sliced",
      "1 green chilli",
      "1/2 tsp mustard seeds",
      "Curry leaves and salt",
      "Oil for cooking"
    ],
    instructions: [
      "Heat a pan and add a little oil.",
      "Add mustard seeds, curry leaves, onion and green chilli.",
      "Add mashed potatoes and salt. Cook for 4–5 minutes.",
      "Spread dosa batter thinly on a hot tawa.",
      "Add potato masala, fold the dosa and serve hot with chutney."
    ]
  },
  {
    id: 2,
    name: "Vegetable Sandwich",
    category: "Breakfast",
    emoji: "🥪",
    time: 10,
    difficulty: "Easy",
    description: "A quick and crunchy sandwich for busy mornings.",
    ingredients: [
      "4 slices of bread",
      "1 small cucumber",
      "1 tomato",
      "1 small onion",
      "Butter",
      "Salt and pepper"
    ],
    instructions: [
      "Wash and slice all vegetables.",
      "Spread butter on the bread slices.",
      "Layer cucumber, tomato and onion.",
      "Sprinkle salt and pepper.",
      "Close the sandwich, cut in half and serve."
    ]
  },
  {
    id: 3,
    name: "Idli & Sambar",
    category: "Breakfast",
    emoji: "🍘",
    time: 30,
    difficulty: "Easy",
    description: "Soft idlis served with comforting South Indian sambar.",
    ingredients: [
      "8 prepared idlis",
      "1/2 cup toor dal",
      "1 tomato",
      "1 small onion",
      "2 tbsp sambar powder",
      "Tamarind water and salt"
    ],
    instructions: [
      "Cook the toor dal until soft.",
      "Boil tomato, onion and tamarind water with sambar powder.",
      "Add cooked dal and salt.",
      "Simmer for 10 minutes.",
      "Steam the idlis and serve with hot sambar."
    ]
  },
  {
    id: 4,
    name: "Veg Fried Rice",
    category: "Lunch",
    emoji: "🍚",
    time: 20,
    difficulty: "Easy",
    description: "Colourful vegetables tossed with fragrant rice.",
    ingredients: [
      "2 cups cooked rice",
      "1/2 cup chopped carrots",
      "1/2 cup beans",
      "1/4 cup capsicum",
      "2 garlic cloves",
      "1 tbsp soy sauce",
      "Oil, salt and pepper"
    ],
    instructions: [
      "Heat oil in a large pan.",
      "Add chopped garlic and vegetables.",
      "Stir-fry the vegetables until slightly tender.",
      "Add cooked rice, soy sauce, salt and pepper.",
      "Toss everything together and serve hot."
    ]
  },
  {
    id: 5,
    name: "Paneer Curry",
    category: "Lunch",
    emoji: "🍛",
    time: 30,
    difficulty: "Medium",
    description: "Paneer cubes in a rich and creamy tomato gravy.",
    ingredients: [
      "200 g paneer",
      "2 tomatoes",
      "1 onion",
      "1 tsp ginger-garlic paste",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "2 tbsp cream (optional)",
      "Oil and salt"
    ],
    instructions: [
      "Heat oil and sauté chopped onion.",
      "Add ginger-garlic paste and chopped tomatoes.",
      "Cook until soft, then blend if desired.",
      "Add spices, salt and a little water.",
      "Add paneer cubes and simmer for 8 minutes.",
      "Stir in cream if desired and serve."
    ]
  },
  {
    id: 6,
    name: "Fresh Garden Salad",
    category: "Lunch",
    emoji: "🥗",
    time: 10,
    difficulty: "Easy",
    description: "A refreshing mix of crunchy vegetables and lemon dressing.",
    ingredients: [
      "1 cucumber",
      "2 tomatoes",
      "1 carrot",
      "Lettuce leaves",
      "1 tbsp lemon juice",
      "1 tsp olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Wash all vegetables thoroughly.",
      "Chop the cucumber, tomatoes and carrot.",
      "Place everything in a large bowl.",
      "Mix lemon juice, olive oil, salt and pepper.",
      "Pour over the salad, toss and serve fresh."
    ]
  },
  {
    id: 7,
    name: "Creamy Tomato Pasta",
    category: "Dinner",
    emoji: "🍝",
    time: 25,
    difficulty: "Easy",
    description: "Comforting pasta tossed in a creamy tomato sauce.",
    ingredients: [
      "200 g pasta",
      "2 tomatoes",
      "2 garlic cloves",
      "1/4 cup milk or cream",
      "1 tsp mixed herbs",
      "Salt and pepper",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Boil pasta according to the packet instructions.",
      "Heat olive oil and sauté chopped garlic.",
      "Add chopped tomatoes and cook until soft.",
      "Stir in milk or cream, herbs, salt and pepper.",
      "Add drained pasta and mix well.",
      "Serve warm."
    ]
  },
  {
    id: 8,
    name: "Vegetable Soup",
    category: "Dinner",
    emoji: "🍲",
    time: 20,
    difficulty: "Easy",
    description: "A warm, light soup packed with vegetables.",
    ingredients: [
      "1 carrot",
      "1/2 cup chopped cabbage",
      "1/4 cup beans",
      "3 cups vegetable stock or water",
      "2 garlic cloves",
      "Salt and pepper"
    ],
    instructions: [
      "Chop all vegetables into small pieces.",
      "Add garlic and vegetables to a pot.",
      "Pour in vegetable stock or water.",
      "Simmer until the vegetables are tender.",
      "Season with salt and pepper and serve warm."
    ]
  },
  {
    id: 9,
    name: "Crispy Potato Wedges",
    category: "Snacks",
    emoji: "🍟",
    time: 30,
    difficulty: "Easy",
    description: "Golden potato wedges seasoned with herbs and spices.",
    ingredients: [
      "3 medium potatoes",
      "1 tbsp oil",
      "1/2 tsp paprika",
      "1/2 tsp garlic powder",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 200°C.",
      "Wash potatoes and cut into wedges.",
      "Toss with oil, paprika, garlic powder, salt and pepper.",
      "Arrange on a baking tray in a single layer.",
      "Bake for 25–30 minutes, turning halfway through.",
      "Check they are cooked and crispy before serving."
    ]
  }
];

const recipeGrid = document.getElementById("recipeGrid");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");
const favoritesToggle = document.getElementById("favoritesToggle");
const favoriteCount = document.getElementById("favoriteCount");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");
const recipeDialog = document.getElementById("recipeDialog");
const recipeDetails = document.getElementById("recipeDetails");
const closeDialog = document.getElementById("closeDialog");
const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");

let selectedCategory = "All";
let showFavoritesOnly = false;
let favorites = loadFavorites();
let toastTimer;

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("recipebox-favorites") || "[]");
    return Array.isArray(saved) ? saved.filter(Number.isInteger) : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("recipebox-favorites", JSON.stringify(favorites));
  } catch {
    showToast("Couldn't save favourites in this browser.");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function updateFavoriteCount() {
  favoriteCount.textContent = favorites.length;
  favoritesToggle.setAttribute(
    "aria-pressed",
    String(showFavoritesOnly)
  );
}

function getFilteredRecipes() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  return recipes.filter(recipe => {
    const matchesCategory =
      selectedCategory === "All" ||
      recipe.category === selectedCategory;

    const matchesSearch = [
      recipe.name,
      recipe.category,
      recipe.description,
      ...recipe.ingredients
    ].join(" ").toLowerCase().includes(searchTerm);

    const matchesFavorites =
      !showFavoritesOnly || favorites.includes(recipe.id);

    return matchesCategory && matchesSearch && matchesFavorites;
  });
}

function renderRecipes() {
  const filteredRecipes = getFilteredRecipes();

  recipeGrid.innerHTML = filteredRecipes.map(recipe => {
    const isFavorite = favorites.includes(recipe.id);

    return `
      <article class="recipe-card">
        <div class="recipe-image">
          <span class="fallback-emoji" aria-hidden="true">${recipe.emoji}</span>
          <span class="recipe-tag">${recipe.category}</span>
          <button
            class="favorite-btn ${isFavorite ? "saved" : ""}"
            type="button"
            data-favorite="${recipe.id}"
            aria-label="${isFavorite ? "Remove" : "Add"} ${recipe.name} ${isFavorite ? "from" : "to"} favourites"
            aria-pressed="${isFavorite}"
          >${isFavorite ? "♥" : "♡"}</button>
        </div>

        <div class="recipe-content">
          <div class="recipe-meta">
            <span>◷ ${recipe.time} min</span>
            <span>✦ ${recipe.difficulty}</span>
          </div>
          <h3>${recipe.name}</h3>
          <p>${recipe.description}</p>
          <button class="view-btn" type="button" data-view="${recipe.id}">
            View recipe →
          </button>
        </div>
      </article>
    `;
  }).join("");

  resultCount.textContent =
    `${filteredRecipes.length} ${filteredRecipes.length === 1 ? "recipe" : "recipes"} found`;

  emptyMessage.hidden = filteredRecipes.length !== 0;
  recipeGrid.hidden = filteredRecipes.length === 0;

  updateFavoriteCount();
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favoriteId => favoriteId !== id);
    showToast("Removed from favourites.");
  } else {
    favorites.push(id);
    showToast("Added to your favourites! ♥");
  }

  saveFavorites();
  renderRecipes();
}

function openRecipe(id) {
  const recipe = recipes.find(item => item.id === id);
  if (!recipe) return;

  recipeDetails.innerHTML = `
    <div class="dialog-emoji" aria-hidden="true">${recipe.emoji}</div>
    <p class="eyebrow">${recipe.category.toUpperCase()} · ${recipe.time} MINUTES</p>
    <h2>${recipe.name}</h2>
    <p>${recipe.description}</p>

    <h3>🧺 Ingredients</h3>
    <ul>
      ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <h3>👩‍🍳 Instructions</h3>
    <ol>
      ${recipe.instructions.map(step => `<li>${step}</li>`).join("")}
    </ol>

    <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
  `;

  if (typeof recipeDialog.showModal === "function") {
    recipeDialog.showModal();
  } else {
    showToast("Your browser does not support recipe popups.");
  }
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  renderRecipes();
  document.getElementById("recipesHeading").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

searchInput.addEventListener("input", renderRecipes);

filters.forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    filters.forEach(filter => {
      filter.classList.toggle("active", filter === button);
    });

    renderRecipes();
  });
});

favoritesToggle.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;

  favoritesToggle.textContent = showFavoritesOnly
    ? "♥ Show all recipes "
    : "♡ My favourites ";

  const count = document.createElement("span");
  count.id = "favoriteCount";
  count.textContent = favorites.length;
  favoritesToggle.appendChild(count);

  renderRecipes();
});

recipeGrid.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const viewButton = event.target.closest("[data-view]");

  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favorite));
  }

  if (viewButton) {
    openRecipe(Number(viewButton.dataset.view));
  }
});

closeDialog.addEventListener("click", () => {
  recipeDialog.close();
});

recipeDialog.addEventListener("click", event => {
  if (event.target === recipeDialog) {
    recipeDialog.close();
  }
});

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

let savedTheme = false;

try {
  savedTheme = localStorage.getItem("recipebox-theme") === "dark";
} catch {
  savedTheme = false;
}

applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);

  try {
    localStorage.setItem("recipebox-theme", isDark ? "dark" : "light");
  } catch {
    // Theme still works for the current page.
  }
});

renderRecipes();

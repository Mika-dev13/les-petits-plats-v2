import { RECIPES } from './data/recipes.js';

const itemsContainer = document.querySelector('.items-container');

window.addEventListener('DOMContentLoaded', () => {
  displayRecipeItem(RECIPES);
  // displayListIngredient();
});

function displayRecipeItem(recipeItems) {
  let displayRecipe = recipeItems.map((item) => {
    let ingredientsList = [];

    for (let ingredient of item.ingredients) {
      const ingredientCleaned = ingredient.unit
        ? `<li><strong>${ingredient.ingredient}:</strong> ${ingredient.quantity} ${ingredient.unit}</li>`
        : ingredient.quantity
        ? `<li><strong>${ingredient.ingredient}:</strong> ${ingredient.quantity}</li>`
        : `<li><strong>${ingredient.ingredient}</strong>`;
      ingredientsList.push(`<li>${ingredientCleaned}</li>`);
    }

    return `<article class="item">
    <div class="item-img">
      <img src="./assets/dummy_600x400_ffffff_cccccc.png" alt="" />
    </div>
    <div class="item-content">
      <div class="item-content-header">
        <h2>${item.name}</h2>
        <div class="time">
          <img src="./assets/clock.svg" alt="" />
          <span>${item.time} min</span>
        </div>
      </div>
      <div class="item-content-desc">
        <ul class="ingredients-list">
            ${ingredientsList.join('')}
        </ul>
        <div class="text-description">
          <p>
            ${item.description}
          </p>
        </div>
      </div>
    </div>
  </article>`;
  });
  itemsContainer.innerHTML = displayRecipe.join('');
}

import { RECIPES } from './data/recipes.js';
import displayRecipeItem from './components/recipeItem.js';

const itemsContainer = document.querySelector('.items-container');
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
  displayRecipeItem(RECIPES);
  // displayListIngredient();
});

filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    console.log(category);
  });
});

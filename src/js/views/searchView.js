import { element } from './base'

const imgBaseUrl = "https://spoonacular.com/recipeImages/";
const imgSize = "480x360";

export const renderDishes = dishes => {
    dishes.forEach(dish => {
        element.searchDishesList.insertAdjacentHTML('beforeend', `
            <div class="col-lg-3 col-sm-6 my-3">
                <a class="card dish-item text-decoration-none" data-id="${dish.id}" href="./recipe.html#${dish.id}">
                    <img class="img-fluid" src="${imgBaseUrl}${dish.id}-${imgSize}" class="card-img-top" alt="${dish.title}">
                    <div class="card-body bg-dark">
                    <h6 class="card-title text-white">${dish.title}</h6>
                    </div>
                </a>
            </div>
        `);
    })
}
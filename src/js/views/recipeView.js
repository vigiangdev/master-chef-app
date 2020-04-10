import { element } from './base'

export const recipeRender = recipe => {

    renderHeader(recipe);

    renderDiet(recipe.diet);

    renderIngredients(recipe.extendedIngredients);

    renderInstructions(recipe.steps);

    renderSimilarRecipes(recipe.similarRecipes);
};

const renderHeader = recipe => {
    element.recipeHeader.innerHTML = `
        <h1>${recipe.title}</h1>
        <img
            src="${recipe.image}"
            alt="${recipe.title}" class="img-response" width="100%">
    `
};

const renderDiet = diets => {
    for (let diet in diets) {
        if (diets[diet][0] === true || (diets[diet][0] === "yes")) {
            element.recipeDiet.insertAdjacentHTML('beforeend', `
                <li>${diets[diet][1]}</li>
            `)
        }
    }
};

const renderIngredients = ingredients => {
    ingredients.forEach(ingredient => {
        element.recipeIngredients.insertAdjacentHTML('beforeend', `
        <li>${ingredient.original}</li>
        `)
    })
};

const renderInstructions = steps => {
    steps.forEach(step => {
        element.recipeInstructions.insertAdjacentHTML('beforeend', `
            <li>${step.step}</li>
        `)
    })
};

const renderSimilarRecipes = recipes => {
    const imgBaseUrl = "https://spoonacular.com/recipeImages/";
    const imgSize = "480x360";

    for (let i = 0; i < 4 && i < recipes.length; i++) {
        element.recipeSimRender.insertAdjacentHTML('beforeend', `
        <div class="col-sm-6 col-md-4 col-lg-12 my-3">
        <a class="card text-decoration-none" href="./recipe.html#${recipes[i].id}">
            <img class="img-fluid" src="${imgBaseUrl}${recipes[i].id}-${imgSize}.jpg" class="card-img-top" alt="${recipes[i].title}">
            <div class="card-body bg-dark">
            <h6 class="card-title text-white">${recipes[i].title}</h6>
            </div>
        </a>
        </div>
        `)
    }
};
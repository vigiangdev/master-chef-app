import { element } from './views/base'
import Search from './models/Search'
import { renderDishes } from './views/searchView'
import Recipe from './models/Recipe'
import { recipeRender } from './views/recipeView'

// FOR TESTING
import { stateDishes, stateRecipe } from './apiCallTest'


let state = {};

export const controlSearch = async function (query, numOfResults, offset) {

    if (query) {

        // pass input into search
        const dishes = new Search(query, numOfResults, offset);

        try {
            // store dishes result in the state
            await dishes.getResults();
            state.dishes = dishes;

            // TESTING START
            // state.dishes = stateDishes;
            // TESTING END

            // render dishes result in UI
            await renderDishes(state.dishes.results.results);

        } catch (err) {
            console.log('controlSearch', err);
        };
    };
};

const controlRecipe = async dishId => {

    try {
        // create new recipe object
        const recipe = new Recipe(dishId);

        // make call to server to retrieve information
        await recipe.getRecipe();
        await recipe.getInstructions();
        await recipe.getSimilarRecipes();


        // store recipe in the state
        state.recipe = recipe;

        // TESTING START
        // state.recipe = stateRecipe;
        // TESTING END

        // render recipe result in UI
        recipeRender(state.recipe);

    } catch (err) {
        console.log('controlRecipe', err);
    };
};



window.onload = function () {

    if (window.location.search) {
        const query = decodeURI(window.location.search);
        controlSearch(query);
    }

    if (window.location.hash) {
        controlRecipe(window.location.hash.split('#')[1]);
    }
};

if (element.homeGetStarted) {
    element.homeGetStarted.addEventListener('click', e => {
        console.log(e);
        element.homeSearch.focus();
        element.homeSearch.classList.add('btn-focus');
        element.homeLanding.style.filter = 'brightness(30%)';
    });
}

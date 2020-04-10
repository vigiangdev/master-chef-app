import { apiKey } from '../config'

export default class Recipe {
    constructor(recipeId) {
        this.recipeId = recipeId
    };

    async getRecipe() {
        await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.recipeId}/information`, {
            "method": "GET",
            "headers": apiKey
        })
            .then(response => {
                return response.json();
            })
            .then(result => {

                this.diet = {
                    vegetarian: [result.vegetarian, 'Vegetarian'],
                    vegan: [result.vegan, 'Vegan'],
                    glutenFree: [result.glutenFree, 'Gluten Free'],
                    dairyFree: [result.dairyFree, 'Dairy Free'],
                    gaps: [result.gaps, 'GAPS'],
                    lowFodmap: [result.lowFodmap, 'Low FODMAP']
                };
                this.veryHealthy = result.veryHealthy;
                this.cheap = result.cheap;
                this.veryPopular = result.veryPopular;
                this.sustainable = result.sustainable;
                this.weightWatcherSmartPoints = result.weightWatcherSmartPoints;
                this.preparationMinutes = result.preparationMinutes;
                this.cookingMinutes = result.cookingMinutes;
                this.sourceUrl = result.sourceUrl;
                this.spoonacularSourceUrl = result.spoonacularSourceUrl;
                this.aggregateLikes = result.aggregateLikes;
                this.spoonacularScore = result.spoonacularScore;
                this.healthScore = result.healthScore;
                this.creditsText = result.creditsText;
                this.sourceName = result.sourceName;
                this.pricePerServing = result.pricePerServing;
                this.extendedIngredients = result.extendedIngredients;
                this.id = result.id;
                this.title = result.title;
                this.readyInMinutes = result.readyInMinutes;
                this.servings = result.servings;
                this.image = result.image;
                this.imageType = result.imageType;
                this.summary = result.summary;
                this.cuisines = result.cuisines;
                this.dishTypes = result.dishTypes;
                this.diets = result.diets;
                this.occasions = result.occasions;
                this.winePairing = result.winePairing;
                this.instructions = result.instructions;
            })
            .catch(err => {
                console.log('getRecipe', err);
            });
    };

    async getInstructions() {
        await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.recipeId}/analyzedInstructions?stepBreakdown=false`, {
            "method": "GET",
            "headers": apiKey
        })
            .then(response => {
                return response.json();
            })
            .then(result => {
                console.dir(result);
                this.steps = result[0].steps;
            })
            .catch(err => {
                console.log('getInstructions', err);
            });
    };

    async getSimilarRecipes() {
        await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.recipeId}/similar`, {
            "method": "GET",
            "headers": apiKey
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(result => {
                console.log('similar recipe results', result);
                this.similarRecipes = result;
            })
            .catch(err => {
                console.log(err);
            });
    }
}


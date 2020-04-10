import { apiKey } from '../config'

export default class Search {
    constructor(query, numOfResults, offset) {
        this.query = query,
            this.numOfResults = numOfResults,
            this.offset = offset
    }

    concatString() {
        return `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search${this.query}`;
    }

    async getResults() {
        await fetch(this.concatString(), {
            "method": "GET",
            "headers": apiKey
        })
            .then(response => {
                return response.json();
            })
            .then(res => {
                console.log(res);
                this.results = res;
            })
            .catch(err => {
                console.log('Error caught in Search.js');
            });
    }
}
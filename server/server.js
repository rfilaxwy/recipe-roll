const   bodyParser  =   require('bodyparser'),
        cors        =   require('cors'),
        express     =   require('express'),
        massive     =   require('massive');

const   app         =   express();

app.use(bodyParser);
app.use(cors);

require('dotenv').config();

let key = process.env.FOOD_API_KEY;

let recipeSearch = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='

function appendIngredients(ingredientArray){
    for(let ing of ingredientArray){
        recipeSearch+=`${ing},+`
    }
    recipeSearch = recipeSearch.slice(0,recipeSearch.length-2)+'&number=10';
    return recipeSearch+key;
}

https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2
//Chain promies for getting lists of common ingrdients for drop downs 

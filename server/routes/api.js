const express = require('express')
const router = express.Router()
var urllib = require('urllib');

let recipesArr = []

class Recipe {
    constructor(recipe) {
        this.ingredients = recipe.ingredients
        this.title = recipe.title
        this.thumbnail = recipe.thumbnail
        this.href = recipe.href
    }
}

router.get('/sanity', function (req, res) {
    res.end('all ok')
})


router.get('/recipes/:ingredient', function (req, res) {
    recipesArr = []
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`, function (err, data, result) {
        for (let recipe of JSON.parse(data).results) {
            recipesArr.push(new Recipe(recipe))
        }
        res.send(recipesArr)
    })
})


module.exports = router
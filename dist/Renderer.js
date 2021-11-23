class Renderer {
    constructor() { }


    render(recipes) {
        $('#results').empty()
        this.setAll(recipes)
    }

    setAll(recipe) {
        const source = $('#recipes-template').html()
        const template = Handlebars.compile(source)
        let newHtml = template({ recipes: recipe })
        $('#results').append(newHtml)
    }

}
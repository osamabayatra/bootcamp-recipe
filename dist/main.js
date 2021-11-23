const renderer = new Renderer()

$('#search-btn').on('click', function () {

    const ingredient = $('input').val()
    if (ingredient != '')
        $.get(`/recipes/${ingredient}`, function (recipes) {
            renderer.render(recipes)
        })
})

$('#results').on('click', 'img', function () {
    alert($(this).closest('.recipe').find('ul>li:first-child').text())
})
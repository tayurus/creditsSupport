$(document).ready(function() {

    $(".header__item-hasSubmenu").click(function(event) {
        $(event.currentTarget).next().slideToggle(200);
    });

    $(".header__burger").click(function(){
        $(".container_categories-mobile").toggle(300);
    })

})

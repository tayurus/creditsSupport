$(document).ready(function() {
    
    $(".header__item-hasSubmenu").click(function(event) {
        $(event.currentTarget).next().slideToggle(200);
    });

})

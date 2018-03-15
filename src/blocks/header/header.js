$(document).ready(function() {

    $(".header__burger, .container__close").click(function(){
        $(".header__burger").toggleClass("open");
        $(".container_categories-mobile").slideToggle(300);
    })

})

$(document).ready(function() {

    $(".header__burger, .container__close").click(function(e){
        e.stopPropagation();
        $(".header__burger").toggleClass("open");
        $(".container_categories-mobile").slideToggle(300);
    });

    $(".container_categories-mobile").on("swipe", function(){
        $(".header__burger").removeClass("open");
        $(".container_categories-mobile").hide();
    })

    $(".container_categories-mobile").click(function(e){
        e.stopPropagation();
    })

})

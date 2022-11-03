$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        waitForAnimate:true,
        centerMode:true,
         responsive:[
{
    breakpoint: 768,
    settings: {
        slidesToShow:2
    }
},
{
    breakpoint: 550,
    settings: {
        slidesToShow:1
    }
}
]
    });
});
/*$(document).ready(function(){
  let scrollDistance = $(window).scrollTop();
    
    
    $(".menu").each((i,el) => {
       
        
        if($(el).offset().top - $("nav").outerHeight() <= scrolldistance){
            $("nav a").each((i,el) => {
                if($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});*/


  $('.slaider').slick({
      autoplay : true,
      dots : true,
      fade : true,
      arrow : true
  });

 $(".rev-slider").slick({
     dots:true,
 });




$('a[href^="#"]').click(function(){
  let valHref = $(this).attr("href");
$('html,body').animate({scrollTop : $(valHref).offset().top - 50 + "px"}); 
    $('.contacts').animate({scrollTop : $(valHref).offset().top - 70 + "px"});
  });



let totalTerm = 0;
let totalCost = 0;

let typeTerm = 0;
let typeCost = 0;

let designTerm = 0;
let designCost = 0;

let adapTerm = 0;
let adapCost = 0;

function totalUpdate() {
    const term = document.querySelector(".span1");
    const cost = document.querySelector(".span2");
    totalTerm = typeTerm + designTerm + adapTerm;
    totalCost = typeCost + designCost + adapCost;

    term.innerHTML = totalTerm;
    cost.innerHTML = totalCost;
}

function func1() {
    const list = document.querySelector(".spisok1");
    typeCost = 0;
    typeTerm = 0;
    if (list.value == "Сайт-визитка") {
        setListOne(10, 10);
    } else if (list.value == "Корпоративный сайт") {
        setListOne(20, 20);
    } else if (list.value == "Лендинг") {
        setListOne(30, 30);
    }

    function setListOne(cost, term) {
        typeCost = cost;
        typeTerm = term;

        totalUpdate();
    }
}

function func2() {
    const list = document.querySelector(".spisok2");
    designCost = 0;
    designTerm = 0;
    if (list.value == "Opt1") {
        setListTwo(10, 10);
    } else if (list.value == "Opt2") {
        setListTwo(20, 20);
    } else if (list.value == "Opt3") {
        setListTwo(30, 30);
    }

    function setListTwo(cost, term) {
        designCost = cost;
        designTerm = term;

        totalUpdate();
    }
}

function func3() {
    const list = document.querySelector(".spisok3");
    adapCost = 0;
    adapTerm = 0;
    if (list.value == "Opt1") {
        setListThree(10, 10);
    } else if (list.value == "Opt2") {
        setListThree(20, 20);
    } else if (list.value == "Opt3") {
        setListThree(30, 30);
    }

    function setListThree(cost, term) {
        adapCost = cost;
        adapTerm = term;

        totalUpdate();
    }
};

let options = {threshold : [0.5]};
let observer = new IntersectionObserver(onEntry , options);
let elements = $(".animation-number");


elements.each((i,el) =>{
   observer.observe(el); 
});


function onEntry (entry){
    entry.forEach(change =>{
        if(change.isIntersecting){
            change.target.classList.add("show-animation");
            $(".animation-number").each(function(){
    $(this).prop('Counter',0).animate({
        Counter:$(this).text()
    },{
        duration: 4000,
        easing : 'swing',
        step:function(now){
        $(this).text(Math.ceil(now));
    }
    });
});

        }
    });
};






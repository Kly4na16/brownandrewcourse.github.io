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

/*"use strict"

const basePrice = 0;




let finalCost = 0;
let cost = 0;
let final = 0;

let type = prompt("Тип сайта (1-Cайт визитка , 2-Корпоративный сайт , 3-Лендинг)");


if(type == 1) finalCost += 100;

if(type == 2) finalCost += 200;

if(type == 3) finalCost += 300;



let design = prompt("Дизайн сайта (1 - Минимализм , 2 - Информационный , 3 - Рисованный стиль)");
 

if(design == 1) cost += 400;

if(design == 2) cost += 500;

if(design == 3) cost += 600;



let adaptability = prompt("Адаптивность (1 - адаптивный , 2- не адаптивный)");


if(adaptability == 1) final += 700;

if(adaptability == 2) final += 0;

let sum = (finalCost + cost + final);


alert(sum); */

$('a[href^="#"]').click(function(){
  let valHref = $(this).attr("href");
$('html,body').animate({scrollTop : $(valHref).offset().top - 50 + "px"}); 
    $('.contacts').animate({scrollTop : $(valHref).offset().top - 70 + "px"});
  });



/*let totalTerm = 0;
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
}


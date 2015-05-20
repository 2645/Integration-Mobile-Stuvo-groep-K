$(document).ready(init);

function init() {

    var count = 0;
$("#hamburger").click(function() {
    count++;
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    var isEven2 = function(someNumber2) {
        return (someNumber2 % 2 === 0) ? true : false;
    };
    if (isEven(count) === false) {
        $("#navigatie").animate({
            marginLeft: "0"
        }, 400);
    } else if (isEven(count) === true) {
        $("#navigatie").animate({
            marginLeft: "-260px"
        }, 400);
    }
    
    if (isEven2(count) === false) {
        $("#hamburgerClick").animate({
            marginLeft: "0"
        }, 400);
    } else if (isEven2(count) === true) {
        $("#hamburgerClick").animate({
            marginLeft: "-70px"
        }, 400);
    }
});
    
    
    $('#navigatieNav ul li a[href*="#"]').each(function() {
    
        $("#navigatieNav ul li").css
});
      
}
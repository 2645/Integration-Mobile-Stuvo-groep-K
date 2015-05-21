$(document).ready(init);

function init() {

    var count = 0;
$("#hamburger").click(function() {
    count++;
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    if (isEven(count) === false) {
        $("#navigatie").animate({
            marginLeft: "0"
        }, 400);
        $("#settings").animate({
            right: "-73%"
        }, 400);
    } else if (isEven(count) === true) {
        $("#navigatie").animate({
            marginLeft: "-73%"
        }, 400);
    }
    
});
    
      
}
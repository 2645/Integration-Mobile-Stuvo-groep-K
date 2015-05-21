$(document).ready(init);

function init() {

    var count = 0;
$("#tandwiel").click(function() {
    count++;
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    if (isEven(count) === false) {
        $("#settings").animate({
            right: "0"
        }, 400);
         $("#navigatie").animate({
            marginLeft: "-73%"
        }, 400);
    } else if (isEven(count) === true) {
        $("#settings").animate({
            right: "-73%"
        }, 400);

    }
    
});
    
      
}
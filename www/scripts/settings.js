$(document).ready(init);

function init() {

    var count = 0;
$("#tandwiel").click(function() {
    count++;
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    var isEven2 = function(someNumber2) {
        return (someNumber2 % 2 === 0) ? true : false;
    };
    if (isEven(count) === false) {
        $("#settings").animate({
            marginRight: "-20%"
        }, 400);
    } else if (isEven(count) === true) {
        $("#settings").animate({
            marginRight: "-90%"
        }, 400);
    }
    
    if (isEven2(count) === false) {
        $("#tandwielClick").animate({
            marginRight: "-20%"
        }, 400);
    } else if (isEven2(count) === true) {
        $("#tandwielClick").animate({
            marginRight: "-50%"
        }, 400);
    }
});
    
      
}
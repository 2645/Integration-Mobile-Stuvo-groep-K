/**Jan Desmet, Bart Sevenois, Gabriel Deschamps, Lieven Luycks, Cédric Brichau**/
$(document).ready(function () {
    $("#login").click(function (e) {
        e.preventDefault();
        window.location.href = 'home.html';
        checkIfValidEmail(em);
    });

    function checkIfValidEmail(em) {}

    $('.inlogForm-input').live('focus', function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(0, 0); //the second 0 marks the Y scroll pos. Setting this to i.e. 100 will push the screen up by 100px. 
    });
});
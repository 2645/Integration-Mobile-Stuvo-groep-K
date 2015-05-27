/**Jan Desmet, Bart Sevenois, Gabriel Deschamps, Lieven Luycks, Cédric Brichau**/
$(document).ready(function () {
    $("#login").click(function (e) {
        e.preventDefault();
        window.location.href = 'home.html';
        checkIfValidEmail(em);
    });

    function checkIfValidEmail(em) {}


});
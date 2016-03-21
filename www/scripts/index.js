/**Jan Desmet, Bart Sevenois, Gabriel Deschamps, Lieven Luyckx, Cédric Brichau**/
    
    $("#login").click(function (e) {
        e.preventDefault();
        window.location.href = 'home.html';
        checkIfValidEmail();
    });

    function checkIfValidEmail(em) {}
});
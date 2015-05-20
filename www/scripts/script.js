$('body').html("TESTING");
getEvents();

function getEvents() {
   $('body').html("TESTING1"); $.get("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {       
        $('body').html("TESTING2");
    });
}
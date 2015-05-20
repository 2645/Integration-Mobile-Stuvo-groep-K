
getEvents();

function getEvents() {
   $('.testingJS').html("TESTING1"); $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {       
        $('.testingJS').html("TESTING2");
    });
}
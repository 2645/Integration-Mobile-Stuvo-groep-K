
getEvents();

function getEvents() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {       
        $('.testingJS').html(data + "DOES THIS SHIT WORK");
    });
}
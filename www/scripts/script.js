$(document).ready() {
    getEvents();
}

function getEvents() {
    $.get("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {
        $("body").html(data);
        
    });
}
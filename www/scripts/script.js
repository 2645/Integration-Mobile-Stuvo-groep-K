
getEvents();

function getEvents() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {       
        $('.testingJS').html(generateEventHtml(data));
    });
}

function generateEventHtml(data){
    var data = JSON.parse(data);
    return "testing";
}
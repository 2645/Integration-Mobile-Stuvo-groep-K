
getEvents();

function getEvents() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {       
        $('.testingJS').html(generateEventHtml(data));
    });
}

function generateEventHtml(data){
    var data = JSON.parse(data);
    var htmlString = "";
    for each(var item in data){
        htmlString +=item
    }
    return htmlString;
}
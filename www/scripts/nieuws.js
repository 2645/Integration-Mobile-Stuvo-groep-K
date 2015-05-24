$(document).ready(function () {
    addContent();
})

function addContent() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/nieuws.php", function (data) {
        $('.nieuws ul').html(generateNewsHtml(data));
        $('.nieuws ul li').first().removeClass('notSelected');
        $('.nieuws ul li').first().addClass('selected');
        addListeners();
    });

}

function addListeners() {
    $('.readMore').click(function(){
        $('.selected').switchClass('selected','notSelected');
        $(this).parent().switchClass('notSelected','selected');
    })
}

function generateNewsHtml(data) {
    var htmlString = "";
    var newsObj = JSON.parse(data).data;
    for (var item in newsObj) {
        htmlString += generateNewsItemHtml(newsObj[item]);
    }
    return htmlString;
}

function generateNewsItemHtml(item) {
    var htmlString = "";
    var naam = item.name;
    var descr = item.description;
    var tijd = item.created_time;
    var datum = tijd.split("T")[0].split("-");
    var imgSource = item.picture;

    if (naam === "undefined") {
        return "";
    }
    htmlString += "<li class='notSelected'>";
    htmlString += "<h3>" + naam + "</h3>";
    htmlString += "<img src='" + imgSource + "'>";
    htmlString += "<p class='date'><img src='img/kalender_red.png'>" + datum[2] + "/" + datum[1] + "/" + datum[0] + "</p>";
    htmlString += "<p class='description'>" + descr + "</p>";
    htmlString += "<p class='readMore'>Lees meer...</p>";
    htmlString += "<div class='clearFix'></div></li>";
    return htmlString;
}
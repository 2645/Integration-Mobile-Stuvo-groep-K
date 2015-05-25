/* jshint
devel:true,
browser: true,
jquery:true
*/
/* global google */
var map;
var marker;

$(document).ready(function () {
    createMap('Nijverheidskaai 170, anderlecht');
    getContent();
    addListeners();
});

function createMap(adres) {

    var adresToLatLong = new google.maps.Geocoder();
    var location;
    adresToLatLong.geocode({
        'address': adres
    }, function (data) {
        location = data[0].geometry.location;
        var options = {
            zoom: 15,
            center: location,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), options);

        marker = new google.maps.Marker({
            position: location,
            map: map
        });

        google.maps.event.addListener(marker, 'click', function () {
            map.panTo(marker.getPosition());
        });
    });


}

function updateMap(selected) {
    var adres = $('td:first',selected).text();
    createMap(adres);
}

function getContent() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {
        $('.eventMonthSlider').html(generateEventMonthsHtml(data) + "<div class='clearfix'></div>");
        $('.event:nth-child(2)').addClass('selected');
        changeCss();
        addSwapper();
    });
}

function addSwapper() {
    $('.event').click(function (event) {
        $('.selected', $(this).parent()).before($(this));
        $('.selected', $(this).parent()).removeClass('selected');
        $(this).addClass('selected');
        updateMap();
    });
}

function addListeners() {

    $('.eventMonthSlider').on('swipeleft', function (event) {
        slideLeft($(this));
    });
    $('.eventMonthSlider').on('swiperight', function (event) {
        slideRight($(this));
    });
}

function slideLeft(object) {
    var pos = object.position().left;
    var width = $(window).width();
    if (pos > -width * (($('.eventMonth').length) - 1)) {
        object.animate({
            left: '-=' + width + 'px'
        }, 100);
    }
}

function slideRight(object) {
    var pos = object.position().left;
    var width = $(window).width();
    if (pos < 0) {
        object.animate({
            left: '+=' + width + 'px'
        }, 100);
    }
}



function generateEventMonthsHtml(data) {
    var eventMonths = JSON.parse(data).events;
    var htmlString = '';
    for (var eventMonth in eventMonths) {
        htmlString += "<div class='eventMonth'><h2>" + eventMonth + "</h2>" + generateEventMonthHtml(eventMonths[eventMonth]) + "</div>";
    }

    return htmlString;
}

function generateEventMonthHtml(eventMonth) {
    htmlString = '';
    for (var event in eventMonth) {
        htmlString += generateEventHtml(eventMonth[event]);
    }
    return htmlString;
}

function generateEventHtml(event) {
    var htmlString = '';
    var htmlString = "";
    var dag = event.date.startday
    var maand = event.date.startmonth;
    var jaar = event.date.startyear;
    var tijd = event.date.starthour + ":" + event.date.startminute;
    var naam = event.name
    var descr = event.description;
    var id = event.id;
    var locatie = event.location;

    htmlString += "<div class='event'><h3>" + naam + "</h3>";
    htmlString += "<img src='img/Agenda_temp.jpg'><p class='description'>" + descr + "</p>";
    htmlString += "<table><tr><td><img src='img/Location_red.png'>" + locatie + "</td>";
    htmlString += "<td><img src='img/kalender_red.png'>" + dag + "/" + maand + "/" + jaar + "</td>"
    htmlString += "<td><img src='img/Tijd_red.png'>" + tijd + "</td></tr></table><div class='clearfix'></div></div>";

    return htmlString;
}

function changeCss() {
    $('.eventMonthSlider').css('width', 100 * ($('.eventMonth').length) + "%");
    $('.eventMonth').css('width', 100 / ($('.eventMonth').length) + "%");
}
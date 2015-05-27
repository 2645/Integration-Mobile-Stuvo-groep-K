/**Jan Desmet, Bart Sevenois, Gabriel Deschamps, Lieven Luycks, Cédric Brichau**/
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

});

function createMap(adres) {

    var adresToLatLong = new google.maps.Geocoder(),
        location;
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
    var adres = $('td:first', selected).text();
    createMap(adres);
}

function getContent() {
    /**    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {
            $('.eventMonthSlider').html(generateEventMonthsHtml(data) + "<div class='clearfix'></div>");
            $('.event:nth-child(2)').addClass('selected');
            changeCss();
            addSwapper();
            addListeners();
        });
        **/

    var data = {
        "events": {
            "Mei": [{
                "name": "Multec Show",
                "date": {
                    "short": "29\/05",
                    "startyear": "2015",
                    "startmonth": "5",
                    "startday": "29",
                    "starthour": "17",
                    "startminute": "00",
                    "endyear": "2015",
                    "endmonth": "5",
                    "endday": "29",
                    "endhour": "13",
                    "endminute": "00"
                },
                "description": "Multec Integration show is een voorstelling van de verschillende integration projecten van het eerste en tweede jaar Multec",
                "id": "8bb7n8fqm2get72isu0ljeoe9o",
                "location": "Nijverheidskaai 170, Anderlecht"
        }],
            "Juni": [{
                "name": "begin exames",
                "date": {
                    "short": "02\/06",
                    "startyear": "2015",
                    "startmonth": "6",
                    "startday": "02",
                    "starthour": "8",
                    "startminute": "30",
                    "endyear": "2015",
                    "endmonth": "6",
                    "endday": "02",
                    "endhour": "8",
                    "endminute": "30"
                },
                "description": "Zoals elk jaar zijn er in juni weer eens examens! Veel succes",
                "id": "aih03e8p6sm7gue8ntgom5lhas",
                "location": "Brussel"
        }, {
                "name": "Einde examens",
                "date": {
                    "short": "15\/06",
                    "startyear": "2015",
                    "startmonth": "6",
                    "startday": "15",
                    "starthour": "11",
                    "startminute": "30",
                    "endyear": "2015",
                    "endmonth": "6",
                    "endday": "15",
                    "endhour": "12",
                    "endminute": "30"
                },
                "description": "Gelukkig heeft elk slecht ding een einde, examens zitten erop! Veel plezier in de zomer",
                "id": "sp010cqoa28ke343b08hgkbbj8",
                "location": "Dansaertstraat 123, Brussel"
        }],
            "September": [{
                "name": "Einde vakantie",
                "date": {
                    "short": "31\/08",
                    "startyear": "2015",
                    "startmonth": "8",
                    "startday": "31",
                    "starthour": "6",
                    "startminute": "00",
                    "endyear": "2015",
                    "endmonth": "8",
                    "endday": "31",
                    "endhour": "7",
                    "endminute": "00"
                },
                "description": "Aan alle mooie dingen komt een einde, terug naar de campus!",
                "id": "k4623e507qp4t5rda9oet90puk",
                "location": "België"
        }]
        }
    };

    $('.eventMonthSlider').html(generateEventMonthsHtml(JSON.stringify(data)) + "<div class='clearfix'></div>");
    $('.event:nth-child(2)').addClass('selected');
    changeCss();
    addSwapper();
    addListeners();
}

function addSwapper() {
    $('.event').click(function (event) {
        $('.selected', $(this).parent()).before($(this));
        $('.selected', $(this).parent()).removeClass('selected');
        $(this).addClass('selected');
        updateMap($(this));
    });
}

function addListeners() {

    $('.eventMonthSlider').on('swipeleft', function (event) {
        slideLeft($(this));
    });
    $('.eventMonthSlider').on('swiperight', function (event) {
        slideRight($(this));
    });
    $('.arrowLeft').click(function (event) {
        slideRight($('.eventMonthSlider'));
    });
    $('.arrowRight').click(function (event) {
        slideLeft($('.eventMonthSlider'));
    });

}

function slideLeft(object) {
    var pos = object.position().left,
        width = $(window).width();
    if (pos > -width * (($('.eventMonth').length) - 1)) {
        object.animate({
            left: '-=' + width + 'px'
        }, 100);
    }
}

function slideRight(object) {
    var pos = object.position().left,
        width = $(window).width();
    if (pos < 0) {
        object.animate({
            left: '+=' + width + 'px'
        }, 100);
    }
}



function generateEventMonthsHtml(data) {
    var eventMonths = JSON.parse(data).events,
        htmlString = '';
    /**for (var eventMonth in eventMonths) {
        htmlString += "<div class='eventMonth'><h2><img class='arrowLeft' src='img/pijltjeLinks_white.png'>" + eventMonth + "<img class='arrowRight' src='img/pijltjeRechts_white.png'></h2>" + generateEventMonthHtml(eventMonths[eventMonth]) + "</div>";
    }**/

    return htmlString;
}

function generateEventMonthHtml(eventMonth) {
    var htmlString = '';
    for (var event in eventMonth) {
        htmlString += generateEventHtml(eventMonth[event]);
    }
    return htmlString;
}

function generateEventHtml(event) {
    var htmlString = '',
        dag = event.date.startday,
        maand = event.date.startmonth,
        jaar = event.date.startyear,
        tijd = event.date.starthour + ":" + event.date.startminute,
        naam = event.name,
        descr = event.description,
        id = event.id,
        locatie = event.location;

    htmlString += "<div class='event'><h3>" + naam + "</h3>";
    htmlString += "<img src='img/Agenda_temp.jpg'><p class='description'>" + descr + "</p>";
    htmlString += "<table><tr><td><img src='img/Location_red.png'>" + locatie + "</td>";
    htmlString += "<td><img src='img/kalender_red.png'>" + dag + "/" + maand + "/" + jaar + "</td>";
    htmlString += "<td><img src='img/Tijd_red.png'>" + tijd + "</td></tr></table><div class='clearfix'></div></div>";

    return htmlString;
}

function changeCss() {
    $('.eventMonthSlider').css('width', 100 * ($('.eventMonth').length) + "%");
    $('.eventMonth').css('width', 100 / ($('.eventMonth').length) + "%");
}
getEvents();

function getEvents() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php", function (data) {
        $('.events ul').html(generateEventsHtml(data,4));
    });
}

function generateEventsHtml(data,amount) {
    var events = JSON.parse(data).events;
    var htmlString = "";
    var counter = 0;
    for (var maand in events) {
        maand = events[maand];
        for (var event in maand) {
            event = maand[event];
            htmlString += generateEventHtml(event);
            counter ++;
            if(counter >= amount){
                return htmlString;
            }
        }
    }
    
    return htmlString;
}

function generateEventHtml(event) {
    
    var htmlString = "";
    var dag = event.date.startday
    var maand = maandToString(event.date.startmonth);
    var jaar = event.date.startyear;
    var tijd = event.date.starthour + ":" + event.date.startminute;
    var naam = event.name
    var id = event.id;
    var locatie = event.location;

    htmlString += "<li><h2 class='datum'><span>" + dag + "</span><br>" + maand + "</h2>";
    htmlString += "<div class='info'><h3>" + naam + "</h3>";
    htmlString += "<img class='icoon' src='img/maps_grey.png'/><p>" + locatie + "</p><br>"
    htmlString += "<img class='icoon' src='img/kalender_grey.png'/><p>" + dag + " " + maand + " " + jaar + "</p><br>"
    htmlString += "<img class='icoon' src='img/klok_grey.png'/><p>" + tijd + "</p></div></li>";
    
    return htmlString;
}

function maandToString(maand) {
    switch (maand) {
    case "1":
        return "Jan";
    case "2":
        return "Feb";
    case "3":
        return "Mar";
    case "4":
        return "Apr";
    case "5":
        return "Mei";
    case "6":
        return "Jun";
    case "7":
        return "Jul";
    case "8":
        return "Aug";
    case "9":
        return "Sep";
    case "10":
        return "Okt";
    case "11":
        return "Nov";
    case "12":
        return "Dec";
    default:
        return "UNKNOWN";
    }
}
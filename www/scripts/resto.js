/**Jan Desmet, Bart Sevenois, Gabriel Deschamps, Lieven Luyckx, Cédric Brichau**/
$(document).ready(function () {
    var campusID = localStorage.getItem("campusID");
    movePointerToCampus(campusID);
    getMenus(campusID%3);
    addActions();
});



function addActions() {
    $('.menuWrapperSlider').on("swipeleft", function (event) {
        slideLeft($(this));
    });

    $('.menuWrapperSlider').on("swiperight", function (event) {
        slideRight($(this));
    });

    $('.pijltjeLinks').click(function (event) {
        slideRight($(".menuWrapperSlider"));
    });

    $('.pijltjeRechts').click(function (event) {
        slideLeft($(".menuWrapperSlider"));
    });
    $('.navResto li').click(function (event) {
        var width = $(window).width()/6;
        var id = Math.round($(this).position().left/width);
        getMenus(id%3);
        var position = $(this).position().left;
        $('#pointer').animate({
            left: position + "px"
        }, 100);
    });

}

function movePointerToCampus(id){
    var leftPos = id*$(window).width()/6
    $('#pointer').animate({
        left: leftPos + "px"
    })
}

function slideLeft(object) {
    var pos = object.position().left;
    var width = $(window).width();
    if (pos > -width * (($('.menuWrapperSlider .menu').length)-1)) {
        updateDaySlider(-width);
        object.animate({
            left: '-=' + width + 'px'
        }, 100);
    }
}

function slideRight(object) {
    var pos = object.position().left;
    var width = $(window).width();
    if (pos < 0) {
        updateDaySlider(width);
        object.animate({
            left: '+=' + width + 'px'
        }, 100);
    }
}

function updateDaySlider(distance) {
    $('.dagSelectieWrapperSlider').animate({
        left: '+=' + distance + "px"
    }, 100, function () {

    });
}

function getMenus(id) {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/resto.php?campus=" + id, function (data) {
        $(".dagSelectieWrapperSlider").html("");
        $(".menuWrapperSlider").html(generateMenusHtml(data));
        changeCss();
    });
}

function generateMenusHtml(data) {
    var menus = JSON.parse(data).menu;
    var htmlString = ""
    for (var dag in menus) {
        $(".dagSelectieWrapperSlider").append("<h1>" + dag + "</h1>");
        htmlString += generateMenuHtml(menus[dag]);
    }
    return htmlString;
}

function generateMenuHtml(dagMenu) {
    var htmlString = "";
    htmlString += "<div class='menu'><table>";

    htmlString += "<tr><td><img src='img/soep.png'></td><td class='info'>Soep<br><span>";
    htmlString += dagMenu.Soep + "</span></td></tr>";

    htmlString += "<tr><td><img src='img/bord.png'></td><td class='info'>Dagschotel<br><span>";
    htmlString += dagMenu.Dagschotel + "</span></td></tr>";

    htmlString += "<tr><td><img src='img/wortel.png'></td><td class='info'>Vegetarische schotel<br><span>";
    htmlString += dagMenu["Vegetarische Schotel"] + "</span></td></tr>";

    htmlString += "<tr><td><img src='img/bord.png'></td><td class='info'>Koude schotel<br><span>";
    htmlString += dagMenu["koude Schotel"] + "</span></td></tr>";

    htmlString += "<tr><td><img src='img/broodje.png'></td><td class='info'>Broodje van de week<br><span>";
    htmlString += dagMenu["Broodje van de week"] + "</span></td></tr>";

    htmlString += "<tr><td><img src='img/panini.png'></td><td class='info'>Panini<br><span>";
    htmlString += dagMenu.Panini + "</span></td></tr>";

    htmlString += "<tr><td><img src='img/muffin.png'></td><td class='info'>Dessert<br><span>";
    htmlString += dagMenu.Dessert + "</span></td></tr>";

    htmlString += "</table></div>";

    return htmlString;
}

function changeCss(){
    $('.menuWrapperSlider').css('width',100 * ($('.menuWrapperSlider .menu').length) + "%")
    $('.menu').css('width', (100 / ($('.menuWrapperSlider .menu').length) - 6) + "%");
}
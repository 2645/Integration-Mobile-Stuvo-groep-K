getMenus(4);
addActions();

function addActions() {
    $('.menuWrapperSlider').on("swipeleft", function (event) {
        var pos = $(this).position().left;
        var width = $(window).width();
        if (pos > -width * 4) {
            $(this).animate({
                left: '-=' + width + 'px'
            }, 100);
        }
    });
    
    $('.menuWrapperSlider').on("swiperight", function (event) {
        var pos = $(this).position().left;
        var width = $(window).width();
        if (pos<0) {
            $(this).animate({
                left: '+=' + width + 'px'
            }, 100);
        }
    });
}

function getMenus(id) {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/resto.php?campus=0", function (data) {
        $(".menuWrapperSlider").html(generateMenusHtml(data));
        var menu = JSON.parse(data).menu;        
    });
}

function generateMenusHtml(data){
    var menus = JSON.parse(data).menu;
    var htmlString =""
    for(var dag in menus){
       htmlString += generateMenuHtml(menus[dag]);
    }
    return htmlString;
}

function generateMenuHtml(dagMenu){
    var htmlString ="";
    htmlString +="<div class='menu'><table>";
    
    htmlString +="<tr><td><img src='img/soep.png'></td><td class='info'>Soep<br><span>";
    htmlString +=dagMenu.Soep + "</span></td></tr>";
    
    htmlString +="<tr><td><img src='img/bord.png'></td><td class='info'>Dagschotel<br><span>";
    htmlString +=dagMenu.Dagschotel + "</span></td></tr>";
    
    htmlString +="<tr><td><img src='img/wortel.png'></td><td class='info'>Vegetarische schotel<br><span>";
    htmlString +=dagMenu["Vegetarische Schotel"] + "</span></td></tr>";
    
    htmlString +="<tr><td><img src='img/bord.png'></td><td class='info'>Koude schotel<br><span>";
    htmlString +=dagMenu["koude Schotel"] + "</span></td></tr>";
    
    htmlString +="<tr><td><img src='img/broodje.png'></td><td class='info'>Broodje van de week<br><span>";
    htmlString +=dagMenu["Broodje van de week"] + "</span></td></tr>";
    
    htmlString +="<tr><td><img src='img/panini.png'></td><td class='info'>Panini<br><span>";
    htmlString +=dagMenu.Panini + "</span></td></tr>";
    
    htmlString +="<tr><td><img src='img/muffin.png'></td><td class='info'>Dessert<br><span>";
    htmlString +=dagMenu.Dessert + "</span></td></tr>";
    
    htmlString += "</table></div>";
    
    return htmlString;
}
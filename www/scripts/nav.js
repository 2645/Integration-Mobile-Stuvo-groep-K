init();
var activeNav = false;
var activeSettings = false;

function init() {
    $("#hamburger").click(function () {
        toggleNavMenu(true);
    });

    $("#tandwiel").click(function () {
        toggleSettingsMenu(true);
    });
    $("#black").click(function(){
        if(activeNav)toggleNavMenu(true);
        if(activeSettings)toggleSettingsMenu(true);
    });
    $(".navigatieNav li").hover(function(){
      $(this).css("background-color","red");
    });
}



function toggleNavMenu(buttonPressed) {
    if (!activeNav && buttonPressed) {
        $("#navigatie").animate({
            left: "+=80%"
        }, 300, false);
        $("#black").show();
        $("#black").fadeTo("fast", 1);
        activeNav = !activeNav;
        toggleSettingsMenu(false);
    } else if (activeNav) {
        $("#navigatie").animate({
            left: "-=80%"
        }, 300, false);
        if (buttonPressed) {
            $("#black").fadeTo("fast", 0, function () {
                $("#black").hide();
            });
        }

        activeNav = !activeNav;
    }
}

function toggleSettingsMenu(buttonPressed) {
    if (!activeSettings && buttonPressed) {
        $("#settings").show();
        $("#settings").animate({
            right: "+=80%"
        }, 300, false);
        $("#black").show();
        $("#black").fadeTo("fast", 1);
        toggleNavMenu(false);
        activeSettings = !activeSettings;
    } else if (activeSettings) {
        $("#settings").animate({
            right: "-=80%"
        }, 300, false, function () {
            $("#settings").hide();
        });
        if (buttonPressed) {
            $("#black").fadeTo("fast", 0, function () {
                $("#black").hide();
            });
        }
        activeSettings = !activeSettings;
    }
}
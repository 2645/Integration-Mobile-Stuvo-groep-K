/**Jan Desmet, Bart Sevenois, Gabriel Deschamps, Lieven Luycks, Cédric Brichau**/
var activeNav = false;
var activeSettings = false;

$(document).ready(function () {
    init();
});



function init() {
    if (localStorage.getItem('campusID') !== null) {
        $('.settingsNav select').val(localStorage.getItem('campusID'));
    }

    $("#hamburger").click(function () {
        toggleNavMenu(true);
    });

    $("#tandwiel").click(function () {
        toggleSettingsMenu(true);
    });

    $("#black").click(function () {
        if (activeNav) toggleNavMenu(true);
        if (activeSettings) toggleSettingsMenu(true);
    });

    $(".navigatieNav li").on('click', function () {
        console.log("appels!");
        $(this).css("background-color", "blue");
    });

    $('.navWrapper').on("swipeleft", function () {
        if (activeNav) toggleNavMenu(true);
    })
    $('.navWrapper').on("swiperight", function () {
        if (activeSettings) toggleSettingsMenu(true);
    })

    $('.settingsNav .switch input').click(function () {
        localStorage.setItem("pushBerichten", $(this).is(":checked"));
    });
    $('.settingsNav select').change(function () {
        localStorage.setItem("campusID", $(this).val());
    });

}



function toggleNavMenu(buttonPressed) {
    if (!activeNav && buttonPressed) {
        $("#navigatie").animate({
            left: "+=80%"
        }, 300, false);
        $("#black").show();
        $('#black').height($('#navigatie').height());
        $("#black").fadeTo("fast", 1);
        $('body').css('max-height',$('#navigatie').height()+60+'px');
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
        $('#black').height($('#settings').height());
        $("#black").fadeTo("fast", 1);
        $('body').height($('#settings').height()+60);
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
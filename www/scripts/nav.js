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
        console.log("toggling nav")
    });

    $("#tandwiel").click(function () {
        toggleSettingsMenu(true);
        updateSettingsCss();
    });

    $("#black").click(function () {
        if (activeNav) toggleNavMenu(true);
        if (activeSettings) toggleSettingsMenu(true);
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
        $("#black").fadeTo("fast", 1);
        activeNav = !activeNav;
        toggleSettingsMenu(false);
        $('.navWrapper').css('z-index', '2');
        $('.navWrapper').css("display","block");
    } else if (activeNav) {
        $("#navigatie").animate({
            left: "-=80%"
        }, 300, false, function () {

        });
        if (buttonPressed) {
            $("#black").fadeTo("fast", 0, function () {
                $("#black").hide();
                $('.navWrapper').css("display","none");
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
        $('.navWrapper').css('z-index', '2');
        $('.navWrapper').css("display","block");
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
                $('.navWrapper').css("display","none");
            });
        }
        activeSettings = !activeSettings;
    }
}
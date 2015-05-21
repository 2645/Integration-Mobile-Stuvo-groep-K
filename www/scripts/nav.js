init();

function init() {
    $("#hamburger").click(function () {        
        toggleNavMenu(true);      
    });
    
    $("#tandwiel").click(function () {        
        toggleSettingsMenu(true);      
    });
}

var activeNav = false;
var activeSettings = false;

function toggleNavMenu(buttonPressed){  
    console.log("NAV : active:"+activeNav+"||button pressed:"+buttonPressed);
    if(!activeNav && buttonPressed){
        $("#navigatie").animate({
            left:"+=80%"
        },100,false);
        activeNav = !activeNav;
        toggleSettingsMenu(false);
    }else if(activeNav){
        $("#navigatie").animate({
            left:"-=80%"
        },100,false);
        activeNav = !activeNav;
    }    
}

function toggleSettingsMenu(buttonPressed){  
    console.log("SETTINGS : active:"+activeSettings+"||button pressed:"+buttonPressed);
    if(!activeSettings && buttonPressed){
        $("#settings").animate({
            right:"+=80%"
        },100,false);
        toggleNavMenu(false);
        activeSettings = !activeSettings;
    }else if(activeSettings){
        $("#settings").animate({
            right:"-=80%"
        },100,false);
        activeSettings = !activeSettings;
    }    
}
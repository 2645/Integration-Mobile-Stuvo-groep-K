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
    if(!activeSettings && buttonPressed){
        $("#settings").show();
        $("#settings").animate({
            right:"+=80%"
        },100,false);
        toggleNavMenu(false);
        activeSettings = !activeSettings;
    }else if(activeSettings){
        $("#settings").animate({
            right:"-=80%"
        },100,false,function(){
            $("#settings").hide();
        });
        activeSettings = !activeSettings;
    }    
}
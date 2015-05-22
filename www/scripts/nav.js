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
        },300,false);
         $("#black").show();
         $("#black").fadeTo( "slow", 1);
        activeNav = !activeNav;
        toggleSettingsMenu(false);
    }else if(activeNav){
        $("#navigatie").animate({
            left:"-=80%"
        },300,false);
         $("#black").fadeTo( "slow", 0);
        $("#black").hide();
        activeNav = !activeNav;
    }    
}

function toggleSettingsMenu(buttonPressed){  
    if(!activeSettings && buttonPressed){
        $("#settings").show();
        $("#settings").animate({
            right:"+=80%"
        },300,false);
        toggleNavMenu(false);
        activeSettings = !activeSettings;
    }else if(activeSettings){
        $("#settings").animate({
            right:"-=80%"
        },300,false,function(){
            $("#settings").hide();
        });
        activeSettings = !activeSettings;
    }    
}
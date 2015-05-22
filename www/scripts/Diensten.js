$(document).ready(function(){
    
    /*     if one content is open, hide al the other contents     */


    $('#ToggleContent2').hide();
    $('#ToggleContent3').hide();
    $('#ToggleContent4').hide();
    $('#ToggleContent5').hide();
    $('#ToggleContent6').hide();
    
    $('#ToggleContent1 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent1').hide('slow');
        $('.DienstTitel1').show('slow');
        
        /*$('.DienstTitel1').toggleClass('.DienstTitel1Show');*/
    });
    
    $('DienstTitel1').click(function(){
        $('#ToggleContent').show('slow');
    });
    
    $('.DienstTitel2').click(function(){
        $('#ToggleContent2').show('slow');
        $('.DienstTitel1').show('slow');
        $('#ToggleContent1').hide('slow');
    });

    $('#ToggleContent2 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent2').hide('fast');
        $('.DienstTitel1').show('fast');
    });
    
    $('.DienstTitel3').click(function(){
        $('#ToggleContent3').show('fast');
        $('#ToggleContent2').hide('fast');
    });
    
    $('#ToggleContent3 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent3').hide('fast');
    });
    
    $('.DienstTitel4').click(function(){
        $('#ToggleContent4').show('fast');
        $('#ToggleContent3').hide('fast');
    });
    
    $('#ToggleContent4 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent4').hide('fast');
    });
    
    $('.DienstTitel5').click(function(){
        $('#ToggleContent5').show('fast');
        $('#ToggleContent4').hide('fast');
    });
    
    $('#ToggleContent5 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent5').hide('fast');
    });
    
    $('.DienstTitel6').click(function(){
        $('#ToggleContent6').show('fast');
        $('#ToggleContent5').hide('fast');
    });
    
    $('#ToggleContent6 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent6').hide('fast');
    });
});

/*if(class === 'ToggleContent1'){
    ToggleContent2
    ToggleContent3
    ToggleContent4
    ToggleContent5
    ToggleContent6
}*/
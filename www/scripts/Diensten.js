$(document).ready(function(){

    $('#ToggleContent2').hide();
    $('#ToggleContent3').hide();
    $('#ToggleContent4').hide();
    $('#ToggleContent5').hide();
    $('#ToggleContent6').hide();
    
    $('#ToggleContent1 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent1').slideUp('fast');
        $('.DienstTitel1').slideDown('fast');
    });
    
    $('.DienstTitel1').click(function(){
        $('#ToggleContent1').slideToggle('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });
    
    $('.DienstTitel2').click(function(){
        $('#ToggleContent2').slideToggle('fast');
        $('.DienstTitel1').slideDown('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });

    $('#ToggleContent2 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent2').slideUp('fast');
    });
    
    $('.DienstTitel3').click(function(){
        $('#ToggleContent3').slideToggle('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });
    
    $('#ToggleContent3 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent3').slideUp('fast');
    });
    
    $('.DienstTitel4').click(function(){
        $('#ToggleContent4').slideToggle('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });
    
    $('#ToggleContent4 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent4').slideUp('fast');
    });
    
    $('.DienstTitel5').click(function(){
        $('#ToggleContent5').slideToggle('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });
    
    $('#ToggleContent5 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent5').slideUp('fast');
    });
    
    $('.DienstTitel6').click(function(){
        $('#ToggleContent6').slideToggle('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
    });
    
    $('#ToggleContent6 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent6').slideUp('fast');
    });
});

/*if(class === 'ToggleContent1'){
    ToggleContent2
    ToggleContent3
    ToggleContent4
    ToggleContent5
    ToggleContent6
}*/
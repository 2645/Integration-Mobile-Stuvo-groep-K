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
        $('.DienstTitel1').slideUp();
        $('.DienstTitel2').slideDown('fast');
        $('.DienstTitel3').slideDown('fast');
        $('.DienstTitel4').slideDown('fast');
        $('.DienstTitel5').slideDown('fast');
        $('.DienstTitel6').slideDown('fast');
        $('#ToggleContent1').slideToggle('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });
    
    $('.DienstTitel2').click(function(){
        $('.DienstTitel2').slideUp();
        $('.DienstTitel1').slideDown('fast');
        $('.DienstTitel3').slideDown('fast');
        $('.DienstTitel4').slideDown('fast');
        $('.DienstTitel5').slideDown('fast');
        $('.DienstTitel6').slideDown('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideToggle('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });

    $('#ToggleContent2 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent2').slideUp('fast');
        $('.DienstTitel2').slideDown('fast');
    });
    
    $('.DienstTitel3').click(function(){
        $('.DienstTitel3').slideUp();
        $('.DienstTitel1').slideDown('fast');        
        $('.DienstTitel2').slideDown('fast');
        $('.DienstTitel4').slideDown('fast');
        $('.DienstTitel5').slideDown('fast');
        $('.DienstTitel6').slideDown('fast');
        $('#ToggleContent3').slideToggle('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });
    
    $('#ToggleContent3 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent3').slideUp('fast');
        $('.DienstTitel3').slideDown('fast');
    });
    
    $('.DienstTitel4').click(function(){
        $('.DienstTitel4').slideUp();
        $('.DienstTitel1').slideDown('fast');        
        $('.DienstTitel2').slideDown('fast');
        $('.DienstTitel3').slideDown('fast');
        $('.DienstTitel5').slideDown('fast');
        $('.DienstTitel6').slideDown('fast');
        $('#ToggleContent4').slideToggle('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });
    
    $('#ToggleContent4 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent4').slideUp('fast');
        $('.DienstTitel4').slideDown('fast');
    });
    
    $('.DienstTitel5').click(function(){
        $('.DienstTitel5').slideUp();
        $('.DienstTitel1').slideDown('fast');        
        $('.DienstTitel2').slideDown('fast');
        $('.DienstTitel3').slideDown('fast');
        $('.DienstTitel4').slideDown('fast');
        $('.DienstTitel6').slideDown('fast');
        $('#ToggleContent5').slideToggle('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent6').slideUp('fast');
    });
    
    $('#ToggleContent5 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent5').slideUp('fast');
        $('.DienstTitel5').slideDown('fast');
    });
    
    $('.DienstTitel6').click(function(){
        $('.DienstTitel6').slideUp();
        $('.DienstTitel1').slideDown('fast');        
        $('.DienstTitel2').slideDown('fast');
        $('.DienstTitel3').slideDown('fast');
        $('.DienstTitel4').slideDown('fast');
        $('.DienstTitel5').slideDown('fast');
        $('#ToggleContent6').slideToggle('fast');
        $('#ToggleContent1').slideUp('fast');
        $('#ToggleContent2').slideUp('fast');
        $('#ToggleContent3').slideUp('fast');
        $('#ToggleContent4').slideUp('fast');
        $('#ToggleContent5').slideUp('fast');
    });
    
    $('#ToggleContent6 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent6').slideUp('fast');
        $('.DienstTitel6').slideDown('fast');
    });
});

/*if(class === 'ToggleContent1'){
    ToggleContent2
    ToggleContent3
    ToggleContent4
    ToggleContent5
    ToggleContent6
}*/
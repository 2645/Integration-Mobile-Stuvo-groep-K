$(document).ready(function(){

    $('#ToggleContent2').hide();
    $('#ToggleContent3').hide();
    $('#ToggleContent4').hide();
    $('#ToggleContent5').hide();
    $('#ToggleContent6').hide();
    
    $('#ToggleContent1 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent1').hide('fast');
        $('.DienstTitel1').show('fast');
    });
    
    $('.DienstTitel1').click(function(){
        $('#ToggleContent1').slideDown(function(){
            $('#ToggleCOntent').show('slow');
        });
    });
    
    $('.DienstTitel2').click(function(){
        $('#ToggleContent2').toggle('fast');
        $('.DienstTitel1').show('fast');
        $('#ToggleContent1').hide('fast');
    });

    $('#ToggleContent2 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent2').hide('fast');
        $('.DienstTitel1').show('fast');
    });
    
    $('.DienstTitel3').click(function(){
        $('#ToggleContent3').toggle('fast');
        $('#ToggleContent2').hide('fast');
    });
    
    $('#ToggleContent3 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent3').hide('fast');
    });
    
    $('.DienstTitel4').click(function(){
        $('#ToggleContent4').toggle('fast');
        $('#ToggleContent3').hide('fast');
    });
    
    $('#ToggleContent4 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent4').hide('fast');
    });
    
    $('.DienstTitel5').click(function(){
        $('#ToggleContent5').toggle('fast');
        $('#ToggleContent4').hide('fast');
    });
    
    $('#ToggleContent5 > #emailENpijl > .pijlUp').click(function(){
        $('#ToggleContent5').hide('fast');
    });
    
    $('.DienstTitel6').click(function(){
        $('#ToggleContent6').toggle('fast');
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
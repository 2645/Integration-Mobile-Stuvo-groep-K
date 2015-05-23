$(document).ready(function(){
    $(".dienstContent",$(".dienst").first()).css("display","block");
    $(".dienst").first().attr("shown","1");
    $(".dienst .dienstTitel").first().hide();
    addListener();
});

function addListener(){
    $('.dienst').click(function(event){
        if($(this).attr('shown')!= 1){
            $('.dienstContent').slideUp("slow");
            $('.dienst').attr("shown",0);
            $('.dienstTitel').slideDown();
            
            $('.dienstContent',this).slideDown("slow");
            $(this).attr("shown",1);
            $(".dienstTitel",this).slideUp();
        }
    });
}

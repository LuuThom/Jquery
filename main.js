
$(document).ready(function(){
   
    $("#register-modal").addClass("open-modal")
    $(".layer").addClass("open-layer");
    
    $(".close-modal").on('click',function(){
        $("#register-modal").removeClass("open-modal");
        $(".layer").removeClass("open-layer");
    });
    $(".layer").on('click',function(){
        $("#register-modal").removeClass("open-modal");
        $(".layer").removeClass("open-layer");
    });
});
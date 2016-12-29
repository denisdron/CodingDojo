$(document).ready(function() {
    $("#redButton").click(function(){
        $("#right").hide();
    });

    $("#greenButton").click(function(){
        $("#right").show();
    });

    $("#addClass").click(function(){
        $(this).addClass("newBoxes");
    });

    $("#slideUpBox").click(function(){
        $(this).slideUp();
    });

    $("#slideDownBox").click(function(){
        $("#slideInDiv").slideDown();
    });
});

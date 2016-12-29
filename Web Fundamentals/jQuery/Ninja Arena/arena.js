$(document).ready(function() {
    $('#setHome').hover(function() {
        $('#wrapper').css('background-image', 'url("img/home.jpg")');},
        function(){
        if(!this.click){
        $('#wrapper').css('background-image', 'url("img/original.jpg")');}
    });

    $('#setStadium').hover(function() {
        $('#wrapper').css('background-image', 'url("img/stadium.jpg")');},
        function(){
            if(!this.click){
        $('#wrapper').css('background-image', 'url("img/original.jpg")');}
    });

    $('#setKrusty').hover(function() {
        $('#wrapper').css('background-image', 'url("img/krusty.png")');},
        function(){
            if(!this.click){
        $('#wrapper').css('background-image', 'url("img/original.jpg")');}
    });

    $('#setNuclearPlant').hover(function() {
        $('#wrapper').css('background-image', 'url("img/nuclearPlant.png")');},
        function(){
            if(!this.click){
        $('#wrapper').css('background-image', 'url("img/original.jpg")');}
    });

    $('#setKwikEMart').hover(function() {
        $('#wrapper').css('background-image', 'url("img/kwikEMart.png")');},
        function(){
            if(!this.click){
        $('#wrapper').css('background-image', 'url("img/original.jpg")');}
    });

    $('#setSchool').hover(function() {
        $('#wrapper').css('background-image', 'url("img/school.png")');},
        function(){
            if(!this.click){
        $('#wrapper').css('background-image', 'url("img/original.jpg")');}
    });

    //use fadeIn and fadeOut

    $('#gameMenu button').click(function() {
        $('#gameMenu').hide();
        $('#selectPlayer').show();
        $('#wrapper').css('padding-top','100px');
    });

    $('#left').change(function() {
        $('#playerOne img').attr('src','img/' + $('#left').val() + '.png');
    });

    $('#right').change(function() {
        $('#playerTwo img').attr('src','img/' + $('#right').val() + '.png');
    });
});

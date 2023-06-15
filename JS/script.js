$(function(){
    //menu mobile
    $('.fa-bars').click(function(){
        $('.mobile ul').slideToggle();
    })
    $('body').click(function(){
        $('.mobile ul').css('display','none')
    }); 
    $('.mobile .fa-bars').click(function(e){
        e.stopPropagation();
    });
    //menu mobile

});
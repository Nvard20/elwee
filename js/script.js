$('#burger-svg').click(function(){

    $('.navigation-menu').addClass('active');
    $('.logo-link').addClass('light-logo');
    $('.nav-link').addClass('nav-link-wihte');
    $( "#burger-svg" ).hide();
    $('#burg-svg').show();
})
$('#burg-svg').click(function(){
    $('.navigation-menu').removeClass('active');
    $('.logo-link').removeClass('light-logo');
    $('.nav-link').removeClass('nav-link-wihte');
    $( "#burger-svg" ).show();
    $('#burg-svg').hide();

})
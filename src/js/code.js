var box_home = $('.box_home').height();
var box_home_content = $('.box_home .content').height();
$('.box_home').css({
    'padding-top' : ((box_home-box_home_content)/2)
});
$(document).ready(function() {

    $(".list").pinBox({
        Top : '50px',
        Container : '#pinBoxContainer',
    });

});     
$(document).on('click','a.godiv', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('godiv');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});
$(document).ready(function() {
    $('#myCarousel').carousel({ interval: 500 });
    $('#login').click(function() {
        $('#loginModal').modal('show');
    });
    $('#reserved').click(function() {
        $('#reserveModal').modal('show');
    });

    $('#carouselButton').click(function() {
        console.log('Click Pause button');
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
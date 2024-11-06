$('.ui-block-08.team-sec .team-carousel').owlCarousel({
    loop: true,
    smartSpeed: 500,
    responsiveClass: true,
    nav:false,
    dots:false,
    autoplay: true,
    margin:30,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            margin: 30,
        },
        480: {
            items: 1,
        },
        992: {
            items: 1,
        }
    }
});

$('#team-next').click(function() {
    var owl = $('.team-carousel');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel');
});
$('#team-prev').click(function() {
    var owl = $('.team-carousel');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel', [300]);
});
(function(){

    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline').hasClass('revealLeft')) {
            $('.timeline').removeClass('revealLeft').addClass('revealRight');
        }

        sr.reveal('.revealRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.revealLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.revealRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

    sr.reveal('.revealLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.revealRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });


});

ScrollReveal({reset: false})
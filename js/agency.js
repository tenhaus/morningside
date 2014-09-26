/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var navSize = $(".navbar").height();
        navSize += parseInt($(".navbar").css('padding-top'));
        navSize += parseInt($(".navbar").css('padding-bottom'));

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function() {

	$('.slider-top').slick({
        draggable: false,
        autoplay: false,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        cemterMode: true
	});

    $('.slider-middle').slick({
        draggable: false,
        autoplay: false,
        pauseOnHover: false,
        // rtl: true,
        cemterMode: true

    });

    $('.slider-bottom').slick({
        draggable: false,
        autoplay: false,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        cemterMode: true
    });

    animateSlider();
});

var slideAlt = false;

function animateSlider()
{
    $(".slider-middle").slickPrev();

    if(slideAlt) {

        $(".slider-top").slickNext();
        $(".slider-bottom").slickNext();
    }


    slideAlt = !slideAlt;
    setTimeout(animateSlider, 2500);
}

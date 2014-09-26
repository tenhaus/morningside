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

var topReady = false;
var middleReady = false;
var bottomReady = false;

$(document).ready(function() {

	$('.slider-top').slick({
        draggable: false,
        swipe: false,
        touchMove: false,
        autoplay: false,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        cemterMode: true,
        onInit: function() {
            $('.slider-top').find(".slider-item.hidden").toggleClass("hidden");
            topReady = true;
        }

	});

    $('.slider-middle').slick({
        draggable: false,
        swipe: false,
        touchMove: false,
        autoplay: false,
        pauseOnHover: false,
        // rtl: true,
        cemterMode: true,
        onInit: function() {
            $('.slider-middle').find(".slider-item.hidden").toggleClass("hidden");
            middleReady = true;
        }

    });

    $('.slider-bottom').slick({
        draggable: false,
        swipe: false,
        touchMove: false,
        autoplay: false,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        cemterMode: true,
        onInit: function() {
            $('.slider-bottom').find(".slider-item.hidden").toggleClass("hidden");
            bottomReady = true;
        }
    });

    animateSlider();
});

var slideAlt = false;

function animateSlider()
{
    if(topReady && middleReady && bottomReady)
    {
        $(".slider-middle").slickPrev();

        if(slideAlt) {

            $(".slider-top").slickNext();
            $(".slider-bottom").slickNext();
        }


        slideAlt = !slideAlt;
        setTimeout(animateSlider, 2500);
    }
}

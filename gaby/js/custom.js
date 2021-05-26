var $portfolio;
var $portfolio_selectors;
var $portfolio_selectors_li;
var hashfilter;
$(document).ready(function () {
    "use strict";
/* ---------------------------------------------------- */
// Pre Loader - start
/* ---------------------------------------------------- */
    // Initialize functions after elements are loaded
    $(window).load(function() {
    $('.preloader img').fadeOut(); // will first fade out the loading animation
    $('.preloader').delay(320).fadeOut('slow', function() {
        });
    });
/* ---------------------------------------------------- */
// Pre Loader - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Carousels - start
/* ---------------------------------------------------- */
    // Home - Main Slider
    $("#main-slider").owlCarousel({
        transitionStyle : "fade",
        navigation: true, 
        slideSpeed: 200,
        paginationSpeed: 300,
        singleItem: true,
        navigationText: ["<i class='fa fa-caret-left'></i>", "<i class='fa  fa-caret-right'></i>"]
    });
    // Testimonials / Reviews Slider
    $("#reviews").owlCarousel({
        navigation: false,
        items: 2,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1]
    });
/* ---------------------------------------------------- */
// Carousels - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Accordion settings for mobile and ipads - start
/* ---------------------------------------------------- */
    $('.nav.navbar-nav a.internal-link').on('click', function () {

        $(this).parents('ul.navbar-nav').find('a.internal-link').removeClass('active');

        $(this).addClass('active');

        if ($('.navbar-header .navbar-toggle').is(':visible'))
            $(this).parents('.navbar-collapse').collapse('hide');
    });
/* ---------------------------------------------------- */
// Accordion settings for mobile and ipads - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// WOW Animation settings  - start
/* ---------------------------------------------------- */
    var wow = new WOW({
         boxClass: 'wow',
         animateClass: 'animated',
         offset: 90,
         mobile: false,
         live: true
        });
    wow.init();
/* ---------------------------------------------------- */
// WOW Animation settings  - end
/* ---------------------------------------------------- */
     
   
/* ---------------------------------------------------- */
// Counter Settings - start
/* ---------------------------------------------------- */
    animatecounters();
    function animatecounters() {
    $('.counter').appear();
    $(document.body).on('appear', '.counter', function (e) {
        if (!$(this).hasClass('appear')) {
            animatecounters();
            $(this).addClass('appear');
        }
    });
    $('.counter').each(count);
    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);}
    }
/* ---------------------------------------------------- */
// Counter Settings - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Contact Form - start
/* ---------------------------------------------------- */
    $("#alert").hide();
    $("#btn-contact").on('click', function () {
        var error = validationContactUsForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "contact-form.php",
                data: $("#contactusform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#alert").html(result);
                    $("#alert").fadeIn("slow");
                    $('#alert').delay(3000).fadeOut("slow");
                }
            });
        }
    });
    function validationContactUsForm() {
        var error = true;
        $('#contactusform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #e40000"});
                    error = false;
                } else {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #e8e8e8"});
                }
            }
            else if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #e40000"});
                    error = false;
                }
                else {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #e8e8e8"});
                }
            }
        });
        return error;
    }
/* ---------------------------------------------------- */
// Contact Form - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Popups - start
/* ---------------------------------------------------- */
    $(".owl-btns > .owl-prev").on('click', function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });
    $(".owl-pagination > .owl-page").on('click', function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });

    $(".owl-btns > .owl-next").on('click', function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });
/* ---------------------------------------------------- */
// Popups - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Smooth Scrolling - start
/* ---------------------------------------------------- */
    var scrollAnimationTime = 1100,
            scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop()
            .animate({
                'scrollTop': $(target)
                    .offset()
                    .top
            }, scrollAnimationTime, scrollAnimation, function () {
             window.location.hash = target;
            });
    });
/* ---------------------------------------------------- */
// Smooth Scrolling - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Scroll Top - start
/* ---------------------------------------------------- */
    $(window).scroll(function () {
        if ($(this)
                .scrollTop() > 100) {
            $('.scrollTop')
                    .fadeIn();
        } else {
            $('.scrollTop')
                    .fadeOut();
        }
    });
    $('.scrollTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
/* ---------------------------------------------------- */
// Scroll Top - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Internal Links - start
/* ---------------------------------------------------- */
    $('.internal-link').smoothScroll({
        speed: 700,
        offset: -0
    });
/* ---------------------------------------------------- */
// Internal Links - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Portfolio Masonry Settings - start
/* ---------------------------------------------------- */
    //masonry portfolio in recent work section
    $portfolio = $('.portfolio-masonry');
    $portfolio_selectors = $('.grid-filter > li > a');
    $portfolio_selectors_li = $('.grid-filter li');
    hashfilter = "*";
    if(location.hash!=""){
        var temphashfilter = "." + location.hash.substr(1);
        if (temphashfilter==".*")
        {
        temphashfilter="*";
        }
    $portfolio_selectors.each(function(){
     if ($(this).attr("data-filter") == temphashfilter) {
        $portfolio_selectors_li.removeClass('active');
        $portfolio_selectors_li.find('a[data-filter="'+temphashfilter+'"]').parent('li').addClass("active");
        var autoscrolltoelement = function(){
            $("html, body").animate({
             scrollTop: $('.grid-filter').parents('section').offset().top-60
            });
        };
        setTimeout(autoscrolltoelement, 500);
        hashfilter=temphashfilter;
             }
         });        
    }
    // images loaded
    $portfolio.imagesLoaded(function () {
        $portfolio.isotope({
        filter: hashfilter,
        itemSelector: 'li',
        layoutMode: 'masonry'
        });
    });
     $(window).resize(function () {
        setTimeout(function () {
            $portfolio.isotope('layout');
        }, 500);
    });
    //portfolio selectors
    $portfolio_selectors.on('click', function () {
        $portfolio_selectors.parent().removeClass('active');
        $(this).parent().addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({filter: selector});
       
        if (selector.substr(1)!="" && selector.substr(1)!="#")
        {
             location.hash = selector.substr(1);     
        }
        else
        {
        location.hash ="*";
        }
        return false;
    });
/* ---------------------------------------------------- */
// Portfolio Masonry Settings - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Navigation - start
/* ---------------------------------------------------- */
    if ($(window).scrollTop() > 10) {
        $('nav').addClass('shrink-nav');
    } else {
        $('nav').removeClass('shrink-nav');
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('nav').addClass('shrink-nav');
        } else {
            $('nav').removeClass('shrink-nav');
        }
    });
/* ---------------------------------------------------- */
// Navigation - end
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
// Resize Conent - start
/* ---------------------------------------------------- */
    $(window).resize(function () {
      SetResizeContent();
        setTimeout(function () {
        }, 200);
    });
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".slider-full").css('min-height', minheight);
        var minwidth = $(window).width();
        $(".slider-full-width").css('min-width', minwidth);
    }
    SetResizeContent();
    });
/* ---------------------------------------------------- */
// Resize Content - end
/* ---------------------------------------------------- */
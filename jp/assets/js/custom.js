$(document).ready(function() {

    "use strict";

       $(window).on('load', function() {
          $('.preloader').fadeOut();
          $('.animated-row').each(function() {
              var $this = $(this);
              $this.find('.animate').each(function(i) {
                  var $item = $(this);
                  var animation = $item.data('animate');
                  $item.on('inview', function(event, isInView) {
                      if (isInView) {
                          setTimeout(function() {
                              $item.addClass('animated ' + animation).removeClass('animate');
                          }, i * 50);
                      } else if (!screencheck(767)) {
                          $item.removeClass('animated ' + animation).addClass('animate');
                      }
                  });
              });
          });
      });


      $(function () {
        $('a[href="#search"]').on('click', function(event) {
            event.preventDefault();
            $('#search').addClass('open');
            $('#search > form > input[type="search"]').focus();
        });
        
        $('#search, #search button.close').on('click keyup', function(event) {
            if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                $(this).removeClass('open');
            }
        });
        
        
        //Do not include! This prevents the form from submitting for DEMO purposes only!
        $('form').submit(function(event) {
            event.preventDefault();
            return false;
        })
    });

    // Header Type = Fixed
    $(window).on("scroll", function() {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 300) {
            $('.site-header').addClass('scrolled-header animated fadeInDown');
        } else {
            $('.site-header').removeClass('scrolled-header animated fadeInDown');
        }
    });

    // Top Features Carousel
    $('#owl-top-features').owlCarousel({
      pagination : false,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          400:{
              items:2
          },
          600:{
              items:3
          },
          800:{
              items:4
          },
          1000:{
              items:5
          }
        }
    })

    // Testimonials Carousel
    $('#owl-testimonials').owlCarousel({
      pagination : true,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
        }
    })

    // Clients Carousel
    $('#owl-clients').owlCarousel({
      pagination : true,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:6
          }
        }
    })

    // Default OwlCarosuel Init
    $('#owl-similar').owlCarousel({
      pagination : true,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
        }
    })

    // Homepage Banner
    $(".Modern-Slider").slick({
      autoplay:true,
      autoplaySpeed:10000,
      speed:900,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:true,
      pauseOnDotsHover:true,
      cssEase:'linear',
      fade:true,
      draggable:false,
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>', 
    });

    // Car Details Page Gallery
    $( '#single-car' ).sliderPro({
      width: 570,
      height: 450,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: true,
      shuffle: true,
      smallSize: 500,
      mediumSize: 1000,
      largeSize: 3000,
      thumbnailArrows: true,
      autoplay: false
    });

    // Menu Function for DropDown
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
          settings = $.extend(
            {
              title: "Menu",
              format: "dropdown",
              sticky: false
            },
            options
          );

        return this.each(function() {
          cssmenu.prepend('<div id="menu-button">' + settings.title + "</div>");
          $(this)
            .find("#menu-button")
            .on("click", function() {
              $(this).toggleClass("menu-opened");
              var mainmenu = $(this).next("ul");
              if (mainmenu.hasClass("open")) {
                mainmenu.hide().removeClass("open");
              } else {
                mainmenu.show().addClass("open");
                if (settings.format === "dropdown") {
                  mainmenu.find("ul").show();
                }
              }
            });

          cssmenu
            .find("li ul")
            .parent()
            .addClass("has-sub");

          var multiTg = function() {
            cssmenu
              .find(".has-sub")
              .prepend('<span class="submenu-button"></span>');
            cssmenu.find(".submenu-button").on("click", function() {
              $(this).toggleClass("submenu-opened");
              if (
                $(this)
                  .siblings("ul")
                  .hasClass("open")
              ) {
                $(this)
                  .siblings("ul")
                  .removeClass("open")
                  .hide();
              } else {
                $(this)
                  .siblings("ul")
                  .addClass("open")
                  .show();
              }
            });
          };

          if (settings.format === "multitoggle") multiTg();
          else cssmenu.addClass("dropdown");

          if (settings.sticky === true) cssmenu.css("position", "fixed");

          var resizeFix = function() {
            if ($(window).width() > 768) {
              cssmenu.find("ul").show();
            }

            if ($(window).width() <= 768) {
              cssmenu
                .find("ul")
                .hide()
                .removeClass("open");
            }
          };
          resizeFix();
          return $(window).on("resize", resizeFix);
        });
      };

    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

});



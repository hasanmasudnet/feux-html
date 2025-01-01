/***************************************************
==================== JS INDEX ======================
****************************************************

// sticky header 
// Smooth active
// Preloader
// Side Info Js
// meanmenu activation 
// Register GSAP Plugins
// Counter active
// testimonial slider
// wow js activation 


****************************************************/

(function ($) {
  "use strict";


  // sticky header 
  let header = document.querySelector('.header-sticky');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      header.classList.add('sticky')
    } else {
      header.classList.remove('sticky')
    }
  })



  // Smooth active
  var device_width = window.screen.width;

  if (device_width > 767) {
    if (document.querySelector("#has_smooth").classList.contains("has-smooth")) {
      const smoother = ScrollSmoother.create({
        smooth: 0.5,
        effects: device_width < 1025 ? false : true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }

  }


  // Preloader
  $(document).ready(function () {
    $('#container').addClass('loaded');
    if ($('#container').hasClass('loaded')) {
      $('#preloader').delay(1000).queue(function () {
        $(this).remove();
      });
    }
  });


  // Side Info Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });


  // meanmenu activation 
  $('.main-menu').meanmenu({
    meanScreenWidth: "1199",
    meanMenuContainer: '.mobile-menu',
    meanMenuCloseSize: '28px',
  });


  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);



  // Counter active
  if ('counterUp' in window) {
    const skill_counter = window.counterUp.default
    const skill_cb = entries => {

      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
          skill_counter(el, {
            duration: 1500,
            delay: 16,
          })
          el.classList.add('is-visible')
        }
      })
    }

    const IO = new IntersectionObserver(skill_cb, {
      threshold: 1
    })

    const els = document.querySelectorAll('.t-counter');
    els.forEach((el) => {
      IO.observe(el)
    });
  }


  // testimonial slider
  if (('.testimonial-slider').length) {
    var testimonial_slider = new Swiper(".testimonial-slider", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 1800,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".testimonial-button-prev",
        nextEl: ".testimonial-button-next",
      },
      pagination: {
        el: '.testimonial-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1201: {
          slidesPerView: 1,
        },
        1367: {
          slidesPerView: 1,
        },
      }
    });
  }

  // wow js activation 
  new WOW().init();

  // text slider 
  if ('.text-slider-active') {
    var text_slider_active = new Swiper(".text-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 10000,
      autoplay: {
        delay: 1,
      },
    });
  }

  // text slider 
  if ('.text-slider-active-2') {
    var text_slider_active_2 = new Swiper(".text-slider-active-2", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 15000,
      autoplay: {
        delay: 1,
      },
    });
  }

  // brand slider 
  if ('.brand-slider-active') {
    var brand_slider_active = new Swiper(".brand-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 5000,
      autoplay: {
        delay: 1,
      },
    });
  }


  // faq number active 
  $('.accordion-active .accordion-item').on("click", function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // team hover active 
  $('.team-hover-active .team-box').on("mouseover", function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


  let tl = gsap.timeline();

  let servicesSpanels = document.querySelectorAll('.services-panel')

  servicesSpanels.forEach((section, index) => {
    tl.to(section, {
      scrollTrigger: {
        trigger: section,
        pin: section,
        scrub: 1,
        start: 'top 10%',
        end: "bottom 70%",
        endTrigger: '.services-panel-area',
        pinSpacing: false,
        markers: false,
      },
    })
  })


  // testimonial active 
  var swiper = new Swiper(".slide-nav-active", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".slide-content-active", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });



})(jQuery);
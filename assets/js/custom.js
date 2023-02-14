$(function () {
  "use strict";
  /* Smooth Scroll Start */
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
/* Smooth Scroll End */
/* Banner Slider Activation Js Start */
$(".banner_slider").slick({
  arrows: true,
  fade: true,
  speed: 1500,
  prevArrow: '<i class="fas fa-chevron-left banner_slide_btn_left"></i>',
  nextArrow: '<i class="fas fa-chevron-right banner_slide_btn_right"></i>',
  responsive: [{
    breakpoint: 576,
    settings: {
      arrows: false
    }
  }]
});
/* Banner Slider Activation Js End */

/* About Slider Activation Js Start */
$(".about_slider_box").slick({
  arrows: false,
  dots: true,
  dotsClass: "about_slider_dots"
});
/* About Slider Activation Js End */

/* Counter Up Activation Start */
$(".counter").counterUp({
  time: 1000
});
/* Counter Up Activation End */

/* Course Slider Activation Start */
$(".course_slider_container").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: '<i class="fas fa-chevron-left course_slide_btn_left"></i>',
  nextArrow: '<i class="fas fa-chevron-right course_slide_btn_right"></i>',
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});
/* Course Slider Active Activation End */

/* Event Calendar Js Start */

var current_yyyymm_ = moment().format("YYYYMM");

$("#pb-calendar").pb_calendar({
  schedule_list: function (callback_, yyyymm_) {
    var temp_schedule_list_ = {};

    temp_schedule_list_[current_yyyymm_ + "03"] = [{
      ID: 1,
      style: "red"
    }];

    temp_schedule_list_[current_yyyymm_ + "10"] = [{
        ID: 2,
        style: "red"
      },
      {
        ID: 3,
        style: "blue"
      }
    ];

    temp_schedule_list_[current_yyyymm_ + "20"] = [{
        ID: 4,
        style: "red"
      },
      {
        ID: 5,
        style: "blue"
      },
      {
        ID: 6,
        style: "green"
      }
    ];
    callback_(temp_schedule_list_);
  },
  schedule_dot_item_render: function (dot_item_el_, schedule_data_) {
    dot_item_el_.addClass(schedule_data_["style"], true);
    return dot_item_el_;
  }
});

/* Event Calendar Js End */

/* Events Slider Activation Start */
$(".events_schedule").slick({
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fas fa-chevron-up events_slide_btn_top"></i>',
  nextArrow: '<i class="fas fa-chevron-down events_slide_btn_bottom"></i>',
  responsive: [{
    breakpoint: 1200,
    settings: {
      arrows: false
    }
  }],
  verticalSwiping: true
});
/* Events Slider Activation End */

/* Testimonial Slider Activation Start */
$(".testimonial_slider").slick({
  prevArrow: '<i class="fas fa-chevron-left testi_slide_btn_left"></i>',
  nextArrow: '<i class="fas fa-chevron-right testi_slide_btn_right"></i>',
  responsive: [{
    breakpoint: 1200,
    settings: {
      arrows: false
    }
  }]
});
/* Testimonial Slider Activation End */

/* Teachers Slider Activation Start */
$(".teachers_slider").slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
/* Teachers Slider Activation End */

/* Footer Slider Activation Start */
$('.footer_slider_container').slick({
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
/* Footer Slider Activation End */

/* About Page Video Activation Start */
$('.about_video_btn').venobox()
/* About Page Video Activation End */

});
/* Back to top Button Js Start */
$(window).on('scroll', function () {
  var scrollSize = $(window).scrollTop()
  if (scrollSize > 200) {
    $('#btt').css({
      'bottom': '40px',
      'opacity': '1'
    })
  } else {
    $('#btt').css({
      'bottom': '-40px',
      'opacity': '0'
    })
  }
})
$('#btt').on('click', function () {
  $('body, html').animate({
    scrollTop: 0
  }, 1000)
})
/* Back to top Button Js End */

/* Sticky Nav Js Start */
$(window).on('scroll', function () {
  var scrollSize = $(this).scrollTop()
  if (scrollSize > 150) {
    $('#main_nav').addClass('nav_scroll_animate')
  } else {
    $('#main_nav').removeClass('nav_scroll_animate')
  }
})
/* Sticky Nav Js End */
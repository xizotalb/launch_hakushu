$(window).ready(() => {
    setFullHeight('u-fullheight')
    setFullWidth('u-fullwidth')

});
$(window).on('resize', function() {
    setFullHeight('u-fullheight')
    setFullWidth('u-fullwidth')

})
$(window).on('scroll', onScroll)

function onScroll(){
    fadeEffect();
}


function fadeEffect() {
    var scrollTop = $(window).scrollTop();
    var bottom = scrollTop + $(window).height();
    $(".u-fade").each(function () {
        if (bottom > $(this).offset().top + 200) {
            $(this).addClass("u-fade--show");
        } else {
            $(this).removeClass("u-fade--show");
        }
    });
}

function setFullHeight(selector){
    let windowHeight = $(window).height();
    $(selector).outerHeight(windowHeight);
}
function setFullWidth(selector){
    let windowWidth = $(window).width();
    $(selector).outerWidth(windowWidth);
}

$('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    anchors: ['1', '2', '3', '4', '5', '6', '7', '8','9'],
    controlArrows: false,
    scrollingSpeed: 1200,
    easingcss3: 'cubic-bezier(.5,.03,0,.99)',
    scrollOverflow: false,
    scrollBar: false,
    autoScrolling:true,
    afterLoad: function(anchorLink, index){
        $('.p-entrace1__black').removeClass('is-active');
        $('.p-entrace1__content').removeClass('is-fade');
    
        //   $(this).find('.c-info').removeClass('is-show');
          if(index == 1){
              setTimeout(() => {
                  $('.p-entrace1__black').addClass('is-active');
                  $('.p-entrace1__content').addClass('is-fade');
                  
              }, 200);
              
            // $('.js-header__logo').css('opacity', 1);
          }
    },
    onLeave: function(index, nextIndex, direction){
    $('.p-entrace1__black').removeClass('is-active');
    $('.p-entrace1__content').removeClass('is-fade');

    //   $(this).find('.c-info').removeClass('is-show');
      if(index == 2 && direction == 'up'){
          setTimeout(() => {
              $('.p-entrace1__black').addClass('is-active');
              $('.p-entrace1__content').addClass('is-fade');
              
          }, 200);
          
        // $('.js-header__logo').css('opacity', 1);
      }
    //   if(index == 2 && direction == 'up'){
    //     $('.p-top video').show();
    //     // $('.js-header__logo').css('opacity', 0);
    //   }
    //   if(index == 8 && direction == 'up'){
    //     $('.js-p').removeClass('is-show');
    //     $('.js-title1').removeClass('is-show');
    //   }
    },
  });

  $('#item').fullpage({
    sectionSelector: '.vertical-scrolling',
    anchors: ['1', '2', '3', '4', '5', '6', '7', '8','9'],
    controlArrows: false,
    scrollingSpeed: 1200,
    easingcss3: 'cubic-bezier(.5,.03,0,.99)',
    scrollOverflow: false,
    scrollBar: false,
    autoScrolling:true,
    afterLoad: function(anchorLink, index){
        if(index <= 1 ){
            $('.p-item__content .l-layout1__right .c-scroll1').fadeIn()
        }
    },
    onLeave: function(index, nextIndex, direction){
        if(nextIndex > 1){
            $('.p-item__content .l-layout1__right .c-scroll1').fadeOut()
        }
    },
  });

  $(document).ready(function(){
    $('.c-slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        customPaging: function (slider, i) {
            console.log(slider);
            return  (i + 1) + ' / ' + slider.slideCount;
        }    
    });
  });

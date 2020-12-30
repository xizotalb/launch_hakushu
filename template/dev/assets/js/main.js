$('.c-top-loading').addClass("is-active")


$(window).ready(() => {
    setFullHeight('u-fullheight')
    setFullWidth('u-fullwidth')
    // $('.c-sound__')
    $(".js-sound-icon").mouseover(function () { 
        $('.c-sound__content').addClass("is-active")
    });
    $('.c-sound__content').mouseleave(function () { 
        $(this).removeClass('is-active')
    });

    $('.js-slide1').slick({
        arrows: false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });

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
let anchorsArray = ['1', '2', '3']
$('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    anchors:anchorsArray,
    controlArrows: false,
    scrollingSpeed: 1200,
    easingcss3: 'cubic-bezier(.5,.03,0,.99)',
    scrollOverflow: false,
    scrollBar: false,
    autoScrolling:true,
    afterLoad: function(anchorLink, index){
        $('.u-fade2').eq(index-1).addClass('u-fade2--show')
        if(index < anchorsArray.length ){
            $('.c-scroll1').fadeIn()
            $('.c-mainvisuals__copyright').removeClass("is-show")

        }
    },
    onLeave: function(index, nextIndex, direction){
        $('.u-fade2').eq(index-1).removeClass('u-fade2--show')
        if(nextIndex === anchorsArray.length){
            $('.c-scroll1').fadeOut()
            $('.c-mainvisuals__copyright').addClass("is-show")
        }
       
}
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

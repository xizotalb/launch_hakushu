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
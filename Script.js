/**
 * Created by jdocampo on 9/11/2016.
 */
var slide;
var CanImg;
$(function () {
    slide = 1;
    CanImg = 3;
    $('.BAfter').on('click',function () {
        if(slide == 1)
            slide = (CanImg+1);
        $('.slides').attr('src','slides/slide'+ --slide +'.png');
    });
    $('.BBefore').on('click',function () {
        if(slide == CanImg)
            slide=0;
        $('.slides').attr('src','slides/slide'+ ++slide +'.png');
    });
    var fondo =$('.fondo');
    fondo.find('img').height($('body').height());
    fondo.find('img').width($('body').width());

    $(window).on('resize', function () {
        fondo.find('img').height($('body').height());
        fondo.find('img').width($('body').width());
    });
});
var imagen = $('.slide').find('img');
var touch = new Hammer(imagen[0]);
touch.on('swipeleft',function (event) {
    if(slide == CanImg)
        slide=0;
    $('.slides').attr('src','slides/slide'+ ++slide +'.png');
});
touch.on('swiperight',function (event) {
    if(slide == 1)
        slide = (CanImg+1);
    $('.slides').attr('src','slides/slide'+ --slide +'.png');
});

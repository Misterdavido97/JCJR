/**
 * Created by jdocampo on 9/11/2016.
 */
$(function () {
    var slide = 1;
    var CanImg = 3;
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
});
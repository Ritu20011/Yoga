$(document).ready(function(){

    function scrollPos(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 0){
            $('.topBar').addClass('active');
            $('.scrollTop').addClass('active');
        }else{
            $('.topBar').removeClass('active');
            $('.scrollTop').removeClass('active');
        }
    }

    $('.scrollTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    $('.toggler').click(function(){
        $(this).toggleClass('active');
        $('.mainNav').slideToggle();
    })

    $(window).scroll(function(){
        scrollPos();
    })
    $(window).resize(function(){
        scrollPos();
        if (window.innerWidth > 767) {
            $('.mainNav').css('display', 'flex');
        }else{
            $('.mainNav').css('display', 'none');
        }

        
    })
        scrollPos();
})
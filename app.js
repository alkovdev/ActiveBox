$(function(){
    // FIXED Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(scrollPos);
    });

    // SMOOTH scroll
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        // OTSTUP SVERHU
        let elementOffset = $(elementID).offset().top;
        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 80
        },700);
    });


});
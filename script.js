$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(document).ready(function(){
        $('.slider').slick({
            arrows:true,
            dots:true,
            slidesToShow:3,
            autoplay:true,
            speed:1000,
            autoplaySpeed:800,
            responsive:[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        });
    });
    
    
});


(function ($) {
    "use-strict"

    $(document).ready(function () {
        $('.protfolio-list').masonry({
            //            itemSelector :'.single-protfolio-list',
            horizontalOrder: true
        });

        $('.protfolio-filter li').on('click', function () {
            var filterData = $(this).attr("data-filter");


            $(".protfolio-list").isotope({
                filter: filterData,
            });
        });

        $(".protfolio-list").isotope({
            // options
            itemSelector: '.single-protfolio-list',
            percentPosition: true,
            masonry: {
                columnWidth: '.single-protfolio-list',
                horizontalOrder: true
            }
        });
       
      

           
//        $('.menu-top').addClass('animated bounceInUp');
//      $('.inline-btn').addClass('animated bounceInUp');
        
        
        
        $('#menu1').slicknav({
            label: '',
            duration: 500,

        });

        $(".menu-top").headroom();
        $(".topp").headroom();


        $('.carosal-item-inner').owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: false
                }
            }
        });


    });


})(jQuery)

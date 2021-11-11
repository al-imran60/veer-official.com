
$(document).ready(function() {

    /* =================
        Counter JS
     ==================== */

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }


    /* =================
        Blog Slide JS
     ==================== */

    $('.blog-img').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                 items:3
             },
             1000:{
                 items:3
             }
         }
    })
 
   
   /* =======================
        Cover Slide JS
    ========================== */

         $('.owl-carousel').owlCarousel({
             loop:true,
            margin:10,
             nav:true,
             responsive:{
                 0:{
                     items:1
                 },
                 600:{
                     items:1
                 },
                 1000:{
                     items:1
                 }
             }
         })

    /* =================
        venobox js
    ==================== */

    $('.venobox').venobox();

   

    /* =================
        Isotope JS
    ==================== */

         // filter items on button click
         $('.filter-button-group').on( 'click', 'button', function() {
             var filterValue = $(this).attr('data-filter');
             $grid.isotope({ filter: filterValue });
         });
         var $grid = $('.grid').isotope({
             // set itemSelector so .grid-sizer is not used in layout
             itemSelector: '.grid-item',
             percentPosition: true,
             masonry: {
             // use element for option
             columnWidth: '.grid-item'
             }
         })

    /* =================
        Scroll Btn
    ==================== */

       $(window).scroll(function(){

         var scroll = $(window).scrollTop();

         if( scroll > 1200) {
           $('.scroll-btn').fadeIn();
         }
         else{
           $('.scroll-btn').fadeOut();
         }

         });


    /* =================
       water ripple plugin
    ==================== */
        $('.veer-review-area').ripples();
        $('.veer-footer-area').ripples();
        $('.contact-form').ripples();

    /* =================
      Wow plugin
    ==================== */

      var wow = new WOW(
            {
              boxClass:     'wow',      // animated element css class (default is wow)
              animateClass: 'animate__animated', // animation css class (default is animated)
              offset:       0,          // distance to the element when triggering the animation (default is 0)
              mobile:       true,       // trigger animations on mobile devices (default is true)
              live:         true,       // act on asynchronously loaded content (default is true)
              callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
              },
              scrollContainer: null,    // optional scroll container selector, otherwise use window,
              resetAnimation: true,     // reset animation on end (default is true)
            }
          );
      wow.init();

     /* =================
      Responsive Menu bar
    ==================== */

$('.mobile-menu-icon i.fa-align-right').on('click', function(){
  $('.mobile-menu').animate({ left : 0 })
  $(this).fadeOut();
  $('.mobile-menu-icon i.fa-times').fadeIn();
});
$('.mobile-menu-icon i.fa-times').on('click', function(){
  $('.mobile-menu').animate({ left : -1000 })
  $(this).fadeOut();
  $('.mobile-menu-icon i.fa-align-right').fadeIn();
});










// End Line

 });



//  END
$(function() {
var owl = $('.slider_main');
owl.owlCarousel({
   autoplay:true,
   slideSpeed : 300,
   loop:true,
   items:1,
   responsive:{
  			600:{
        	items:1
        },
 			762:{
        	items:2
        },
        1000:{
        	items:4
        },
       
        1200:{
            items:5
         } 
       
       
      
    }
});

var owl = $('.Carousel_Posts_wrapper');
	owl.owlCarousel({
 	 items : 3,
  	 loop:true,
  	 dots:true,
     responsive:{
        600:{
          items:1
        },
      762:{
          items:2
        },
        1200:{
          items:3
        }           
    }
    
	});
});




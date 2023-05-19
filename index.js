$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
        
    } else {
        $('#back-to-top').fadeOut();
        
    }
  });


//   const 
//     popup = document.querySelector(".popup"),
//     close = popup.querySelector(".close");
   


//   var delay = 5000;
//   setTimeout(function() {
//     setInterval(function(){
//       $(document).ready(function () {
  
//         popup.classList.toggle("show");
      
//       });
//     },6000)
    
    
//   }, delay);
    
//   close.onclick = ()=>{
//     popup.classList.remove("show");
//   }

  

    
  
  //Click event scroll to top button jquery
  
  $('#back-to-top').click(function(){
  
    $('html, body').animate({scrollTop : 0},600);
    return false;
  });

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1560: {
        slidesPerView: 3
      }
    }
  });

//   var delay = 2000;
//   setTimeout(function() {
//     $(document).ready(function () {
  
//       $('#modalTour').modal('show');
    
//     });
//     setTimeout(function() {
//       $('.close').css({'display':'block'});
//      }, delay);
//   }, delay);

  $(".place-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
  });


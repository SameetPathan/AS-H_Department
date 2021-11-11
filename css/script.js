document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    });





    $(document).ready(function() {
        //change the integers below to match the height of your upper div, which I called
        //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
        //to figure out what the scroll position is when exactly you want to fix the nav
        //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
        //you know the position.
        $(window).scroll(function () { 
      
          console.log($(window).scrollTop());
      
          if ($(window).scrollTop() > 200) {
            $('#nav_bar').addClass('fixed-top');
            $('#nav_bar').addClass('bg-prim');
            $('#nav_bar').addClass('pl-lg-5');
          
       
          
          }
      
          if ($(window).scrollTop() < 551) {
            $('#nav_bar').removeClass('fixed-top');
            $('#nav_bar').removeClass('bg-prim');
            $('#nav_bar').removeClass('pl-lg-5');
           
            
           
          }
        });
      });


      function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }




      //$(document).ready(function() {
        //change the integers below to match the height of your upper div, which I called
        //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
        //to figure out what the scroll position is when exactly you want to fix the nav
        //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
        //you know the position.
       
      
         

       
      //      $('#background').addClass('bg-img');
        //    $('#background').removeClass('bg-img1'); 
         //   $('#background').removeClass('bg-img2'); 

            
            
         
         ///   $('#background').addClass('bg-img1');
         //   $('#background').removeClass('bg-img'); 
        //    $('#background').removeClass('bg-img2'); 
      //
         
            
        ///    $('#background').addClass('bg-img2');
       ///    $('#background').removeClass('bg-img'); 
 //
//});

  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

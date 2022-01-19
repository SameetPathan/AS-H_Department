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
      
        
      
          if ($(window).scrollTop() > 50) {
            $('#nav_bar').addClass('fixed-top');
            $('#nav_bar').addClass('bg-prim');
            $('#nav_bar').addClass('pl-lg-5');
          
       
          
          }
      
          if ($(window).scrollTop() < 51) {
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





  $(document).ready(function() {
   
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log("mobile")
      $('#navbarSupportedContent').addClass('mo');
    }else{
      // false for not mobile device
      console.log("not")
      $('#navbarSupportedContent').removeClass('mo');
    }
  });




  window.addEventListener(
      "resize", getSizes, false);

    

  //function getSizes() {
      //let zoom = ((window.outerWidth - 10)
     //     / window.innerWidth) * 100;
     // console.log(zoom)
     // if()
     // {
//
     /// }
     // if(){

    //  }
    //  
 // }

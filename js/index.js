 
/* Hide menu on click mobile */
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $('.navbar-toggle').trigger( "click" );
        }
    });
});
 
/* smooth scroll */
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

function sendemail()
{
    var url = '/mail.php';

    new Ajax.Request(url,{
            onComplete:function(transport)
            {
                var feedback = transport.responseText.evalJSON();
                if(feedback.result==0)
                    alert('There was a problem sending the email, please try again.');
            }
        });

}

/* navbar height on scroll */
      $(document).on("scroll", function() {

        if($(document).scrollTop()>50) {
          $("nav").addClass("small");
        } else {
          $("nav").removeClass("small");
        }
        
      });


/* Social Media Icons show on scroll */
     $(document).on("scroll", function() {

        if($(document).scrollTop()>800) {
          $("div.wrapper").addClass("remove");
        } else {
          $("div.wrapper").removeClass("remove");
        }
        
      });


/* Smooth Scroll Script */

    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});


/* Button go up */

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
              
       $('#back-to-top').tooltip('show');
});

/* Progress Bar */

$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

$( window ).scroll(function() {   
 if($( window ).scrollTop() > 1200){  // scroll down abit and get the action   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
  }  
 });


$(document).ready(function() {
  $("#aa1").click(function() {
    $("#sociallist").toggleClass("remove");
    $(".btnopenclose").toggleClass("as_selected");
  });
});


/* FADEIN ANIMATION FOR TIMELINE */
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        }); 
    
    });
    
});

/* Contact */
$(document).ready(function() {
  // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");
          
            switch(e.type) {
              case 'keyup': {
                 $parent.toggleClass('js-hide-label', $this.val() == '');
              } break;
              case 'blur': {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
              } break;
              case 'focus': {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
              } break;
              default: break;
            }
            // previous implementation with ifs
            /*if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }*/
        });
    } 
});


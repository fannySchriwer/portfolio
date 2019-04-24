$(document).ready(function () {
  
	//fades in main header
    $('div.hidden').fadeIn(2000).removeClass('hidden');

    //scrolls down to part of the page when click on nav links
	$("nav").find("a").click(function(e) {
		e.preventDefault();

		var section = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(section).offset().top
		}, 1200);
	});


	//to slide in text in portfolio-site
	
  //window and animation items
  var animation = $.find('.animate-text');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation, function() {

      //get the element information
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on scroll, check if element is in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});

//shows to top button on scroll

//run function on scroll
window.onscroll = function() {scrollFunction()};

//shows button when scroll down more than 100px
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("toTopBtn").style.display = "block";
  } else {
    document.getElementById("toTopBtn").style.display = "none";
  }
}

//scrolls to top of page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

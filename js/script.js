
var menu = document.querySelector('.navbar');

var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("videobt");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "Pause";
	} else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
	}
});

$(document).ready(function() {
	var NavY = $('.nav').offset().top;
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();

	if (ScrollY > NavY) {
		$('.nav').addClass('sticky');
	} else {
		$('.nav').removeClass('sticky');
	}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});
	});

  var menu = document.querySelector('.navbar');

  function myMap() {
      var mapOptions = {
          center: new google.maps.LatLng(51.5, -0.12),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.HYBRID
      }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

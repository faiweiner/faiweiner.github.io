$(document).ready(function() {
	function init() {
		window.addEventListener('scroll', function (e) {
			var distanceY = window.pageYOffset || document.documentElement.scrollTop,
				shrinkOn = 300,
				header = document.querySelector("header");
			if (distanceY > shrinkOn) {
				classie.add(header,"smaller");
				console.log("i got smaller");
			} else {
				if (classie.has(header,"smaller")) {
						classie.remove(header,"smaller");
						console.log("i got bigger");
				}
			}
		});
	}

	window.onload = init();

	$('.avatar').hover(function () {
		$( this ).css('padding', '5px' );
			}, function() {
		$( this ).css('padding', '2px' );
		}
	);
});
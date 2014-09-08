$(document).ready(function() {
	// grab an element
	var myElement = document.querySelector('header');
	var someElement = document.querySelector('.container');

	function init() {
		window.addEventListener('scroll', function (e) {
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			var shrinkOn = 200;
			if (distanceY > shrinkOn) {
				classie.add(myElement,"smaller");
				console.log("i got smaller");
			} else {
				if (classie.has(myElement,"smaller")) {
						classie.remove(myElement,"smaller");
						console.log("i got bigger");
				}
			}
		});
	}

	window.onload = init();

	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init({
		// vertical offset in px before element is first unpinned
		offset : 400,
		// scroll tolerance in px before state changes
		tolerance : 600,
		// or you can specify tolerance individually for up/down scroll
		tolerance : {
				up : 5,
				down : 0
		},
		// css classes to apply
		classes : {
				// when element is initialised
				initial : 'headroom',
				// when scrolling up
				pinned : 'headroom--pinned',
				// when scrolling down
				unpinned : 'headroom--unpinned',
				// when above offset
				top : 'headroom--top',
				// when below offset
				notTop : 'headroom--not-top'
		},
		// element to listen to scroll events on, defaults to `window`
		scroller : someElement,
		// callback when pinned, `this` is headroom object
		onPin : function() {
		},
		// callback when unpinned, `this` is headroom object
		onUnpin : function() {},
		// callback when above offset, `this` is headroom object
		onTop : function() {},
		// callback when below offset, `this` is headroom object
		onNotTop : function() {},
	});
	getViewport = function () {
	  var m = document.compatMode == 'CSS1Compat';
	  return {
	    l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
	    t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
	    w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
	    h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
	  };
	};


	getViewport2 = function() {
	    var $w = $(window);
	    return {
	        l: $w.scrollLeft(),
	        t: $w.scrollTop(),
	        w: $w.width(),
	        h: $w.height() 
	    }
	}
	        
	console.log(getViewport());
	    
	console.log(getViewport2());
});




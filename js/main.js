jQuery(function($) {
	var options = {
		$menu: false,
		menuSelector: 'a',
		panelSelector: 'section',
		namespace: '.panelSnap',
		onSnapStart: function(){},
		onSnapFinish: function(){},
		onActivate: function(){},
		directionThreshold: 50,
		slideSpeed: 200,
		keyboardNavigation: {
			enabled: false,
			nextPanelKey: 40,
			previousPanelKey: 38,
			wrapAround: true
		}
	};

	$('.panel_container').panelSnap(options);
});

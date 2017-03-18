// HTML5 Up section

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

})(jQuery);

// video section

var random_vids = [
  "2ao4ILWfl8U",
  "KgQKzFOidW4",
	"tBS5CvcxoLc",
	"EnN8AgsWQnU",
	"tBS5CvcxoLc",
	"qmHfxUxHIWw",
	"X17VWR8QkRY",
	"wSW_bwJXvo",
	"2flWRK9JbGs",
	"Kk-sstsfA3c",
	"FgVPmnJ1Wi4",
	"7aTO_PWxmuY",
	"cpom7i9G778",
	"sqRSpbrAhqU",
	"mLcYYw4Jd-A",
	"u4rqGLS6_Io",
	"fQzYcl83h4o",
	"jgQ6V7xroQg",
	"dgqJeMdLmIs",
	"qrRVuvzedgU",
	"MoNbDb0bc_s",
	"ePqC-vkulzo",
	"bzDWQr1cCtQ",
	"wTOMMgyUcgc",
	"Ztc_dN7L1UY",
	"_HeQVMMrVKg",
	"XW2SV8eyH_4",
	"0jopcDADGtI",
	"e3LerzVQ2Q",
	"WjacT4vSQbo",
	"rCl9Z8yUw0A",
	"y8Oshs1fWrY"
  ];

var array_pop = function(arr, i) {
  return arr.splice(i,1)[0];
};

var get_random_vid = function() {
  i = Math.floor((Math.random()*random_vids.length));
  return array_pop(random_vids, i);
};

var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
		height: '480',
    width: '640',
    videoId: get_random_vid(),
    playerVars: {
      controls: 0,
      showinfo: 0,
      loop: 1
    },
    events: {
      'onReady': playVideo,
      'onStateChange': onPlayerStateChange
    }
  });
};

function playVideo(event) {
  event.target.playVideo();
};

function onPlayerStateChange(event) {
  event.target.playVideo();
};

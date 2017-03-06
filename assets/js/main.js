/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

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


var random_vids = [
    "2ao4ILWfl8U",
    "KgQKzFOidW4",
    "OEa53h9fOvE",
		"tBS5CvcxoLc",
		"EnN8AgsWQnU"
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
    videoId: get_random_vid(),
    playerVars: {
      controls: 0,
      showinfo: 0,
      loop: 1
    },
    events: {
      'onReady': scrollActivate,
      'onStateChange': onPlayerStateChange
    }
  });
};

function scrollActivate(event) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    event.target.playVideo();
  }
};

var done = false;
function onPlayerStateChange(event) {
  event.target.playVideo();
};

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
};

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == getDocHeight()) {
       scrollActivate;
   };
 });

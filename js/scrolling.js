var lastScrollTop = 0;
var backgroundImages = $('.backgroundImage'); 

$(window).scroll(function(e){
  var st = $(this).scrollTop();
  var ah = $(this).height();
  backgroundImages.each(function(i){
    var img = $(this);
    var pos = img.position().top;
    var hei = img.height();
    if ((st + ah) > pos && st < (pos + hei)){
      var p = ((pos - st)/ah) + 0.25;
      if(i == 1) console.log(p);
      img.css('background-position', '50%'+(p*100)+'%');
    }
  });
  lastScrollTop = st;
});

$(window).scroll();



var random_vids = [
    "qmHfxUxHIWw",
    "7aTO_PWxmuY",
    "-wSW_bwJXvo"
    ];

var array_pop = function(arr, i) {
    return arr.splice(i,1)[0]; 
};

var get_random_vid = function() {
    var i = Math.floor((Math.random()*random_vids.length));
    return array_pop(random_vids, i);
};

var play_new_vid = function() {
    player.loadVideoById(get_random_vid());
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
  event.target.play_new_vid();
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

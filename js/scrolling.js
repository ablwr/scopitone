var random_vids = [
    "Vow27wAwXvw",
    "sQ4X-A4rSgY",
    "0ZVKVCrtfDA",
    "XyUxjR8vKiM",
    "898oHCARiK4",
    "WoC33S0o6f0",
    "L6dyo2zfJVQ",
    "stOeGcDnsj8",
    "rk1-NaEXrmI",
    "z9kHj4FTgek",
    "1mBteyxYPtA",
    "Hkx4vUUqa0",
    "unjvxHtcpKQ",
    "YBCzUi67eZA",
    "IvZLA4En-ug",
    "dcq-RJ4lVe4"
    ];

var array_pop = function(arr, i) {
    // slice() modifies the array in-place and returns an array
    // of the element we want.
    return arr.splice(i,1)[0]; 
};

var get_random_vid = function() {
    var i = Math.floor((Math.random()*random_vids.length));
    // Pops out the video ID we're using so we don't re-use
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
  }

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
}
$(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == getDocHeight()) {
           alert("bottom!");
       }
   });

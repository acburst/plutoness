// Setup youtube player API

var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  console.log("YOUTUBE IFRAME READY");
  player = new YT.Player('main-video', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
  });
}
function onPlayerReady(event) {
  console.log("ON PLAYER READY");
  let mainVideo = document.getElementById('main-video');
  let seconds = mainVideo.getAttribute('seconds');
  if (!seconds) seconds = convertDateToTimestamp(new Date());
  event.target.seekTo(seconds);
  event.target.setVolume(0);
  event.target.playVideo();
}
function onPlayerStateChange(event) {

}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

const videoOptions = '?controls=1&modestbranding=1&autohide=1&autoplay=1&enablejsapi=1';
const videos = [{
  // 10:20 PM - 2:20 AM
  url: 'https://www.youtube.com/embed/hABRwKHU1OE' + videoOptions,
  length: 4 * 60 * 60 // 7 hours in seconds
}, {
  // 2:20 AM - 5:20 AM
  url: 'https://www.youtube.com/embed/mNwGOJEGSeE' + videoOptions,
  length: 3 * 60 * 60 // 3 hours in seconds
}, {
  // 5:20 AM - 9:20 AM
  url: 'https://www.youtube.com/embed/5iPX9Fmugxw' + videoOptions,
  length: 4 * 60 * 60 // 4 hours in seconds
}, {
  // 9:20 AM - 12:20 PM
  url: 'https://www.youtube.com/embed/NQwWj1xPE4E' + videoOptions,
  length: 3 * 60 * 60 // 3 hours in seconds
}, {
  // 12:20 PM - 4:20 PM
  // TODO: add real video
  url: 'https://www.youtube.com/embed/lM02vNMRRB0' + videoOptions,
  length: 4 * 60 * 60 // 4 hours in seconds
}, {
  // 4:20 PM - 5:20 PM
  url: 'https://www.youtube.com/embed/iE1BjatrdCI' + videoOptions,
  length: 60 * 60 // 1 hour in seconds
}, {
  // 5:20 PM - 6:20 PM
  url: 'https://www.youtube.com/embed/WojKvsFyD7A' + videoOptions,
  length: 60 * 60 // 1 hours in seconds
}, {
  // 6:20 PM - 10:20 PM
  // TODO: add real video
  url: 'https://www.youtube.com/embed/lM02vNMRRB0' + videoOptions,
  length: 4 * 60 * 60 // 4 hours in seconds
}]

const audioOptions = '&amp;auto_play=true&amp;show_artwork=false&amp;show_playcount=false&amp;show_user=false&amp;sharing=false&amp;buying=false&amp;download=false';
const audios = [{
  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293' + audioOptions
}]

const wormholes = [{
  id: 'wormhole-1',
  start: 18 * 60 * 60, // 4:20pm
  end: 19 * 60 * 60
}]

function convertDateToTimestamp(d) {
  // Make sure to offset by UTC - 4 (EDT)
  let startHour = window.startHour;
  let startMinute = window.startMinute;

  let date = new Date();
  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let second = date.getUTCSeconds();

  let diffHours = hour - startHour;
  let diffMinutes = minute - startMinute;
  if (diffMinutes < 0) {
    diffHours -= 1;
    diffMinutes = 60 + diffMinutes;
  }

  if (diffHours < 0) {
    diffHours = 24 + diffHours;
  }

  // Return seconds from start time
  return (diffHours * 60 * 60) + (diffMinutes * 60) + second;
}

function convertSecondsToTimer(n) {
  return new Date(n * 1000).toISOString().substr(14, 5)
}

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};

window.ready(function() {
  window.startHour = 2;
  window.startMinute = 20;

  let params = getParams(window.location.href);
  let date = new Date();
  if (params.startHour) {
    let hour = date.getUTCHours();
    window.startHour = hour - parseInt(params.startHour) - 2;
    if (window.startHour > 24) window.startHour -= 24;
    else if (window.startHour < 0) window.startHour = 24 + window.startHour;

    console.log(window.startHour);
  }
  if (params.startMinute) {
    let minute = date.getUTCMinutes();
    window.startMinute = minute - parseInt(params.startMinute) + 20;
    if (window.startMinute > 59) window.startMinute -= 59;
    else if (window.startMinute < 0) window.startMinute = 60 + window.startMinute;
  }
  console.log("INIT");
  const checkAndChangeVideo = () => {
    let date = new Date();
    let seconds = convertDateToTimestamp(date);

      console.log(seconds);
    let i = 0
    for (i = 0; i < videos.length; i++) {
      console.log(seconds, videos[i].length);
      if (seconds > videos[i].length) {
        seconds -= videos[i].length;
      } else {
        break;
      }
    }

    // Change video
    if (i !== mainVideoIndex) {
      console.log("CHANGE", i, seconds);
      mainVideoIndex = i;
      mainVideo.setAttribute('seconds', seconds);
      mainVideo.src = videos[mainVideoIndex].url;
    }
  }

  let mainVideo = document.getElementById('main-video');
  let mainVideoIndex = null;
  mainVideo.width = "100%";
  mainVideo.height = "100%";
  checkAndChangeVideo();

  let mainAudio = document.getElementById('main-audio');
  mainAudio.src = audios[0].url;
  let mainAudioWidget = SC.Widget(mainAudio);
  mainAudioWidget.bind(SC.Widget.Events.READY, function() {
    // set new volume level
    mainAudioWidget.setVolume(0);
  });

  let allowSoundBtn = document.getElementById('allow-sound');
  allowSoundBtn.addEventListener('click', () => {
    if (allowSoundcloudBtn.classList.contains('active')) {
      player.setVolume(0);
    } else {
      player.setVolume(100);
    }
    allowSoundBtn.classList.toggle('active');
  })

  let allowSoundcloudBtn = document.getElementById('allow-sound-soundcloud');
  allowSoundcloudBtn.addEventListener('click', () => {
    if (allowSoundcloudBtn.classList.contains('active')) {
      mainAudioWidget.setVolume(0);
    } else {
      mainAudioWidget.setVolume(100);
      mainAudioWidget.play();
    }
    allowSoundcloudBtn.classList.toggle('active');
  })

  // Title dropdown
  let titleChanger = document.getElementById('title-changer');
  titleChanger.addEventListener('click', (e) => {
    if (titleChanger.classList.contains('active') &&
        e.target.tagName === 'LI') {
      let pastActive = titleChanger.querySelector('li.active');
      pastActive.classList.remove('active');
      e.target.classList.add('active');
    }
    titleChanger.classList.toggle('active');
  });

  // Janky interval
  setInterval(() => {
    checkAndChangeVideo();

    // Render wormholes
    let seconds = convertDateToTimestamp(new Date());
    let showWormhole = false;
    let currentWormhole = document.getElementById('wormhole');
    for (var i = 0; i < wormholes.length; i++) {
      if (seconds >= wormholes[i].start &&
          seconds <= wormholes[i].end) {
        showWormhole = true;
        if (currentWormhole) {
          if (currentWormhole.classList.contains('active')) {
            let secondsLeft = wormholes[i].end - seconds;
            let timer = document.getElementById('timer');
            timer.textContent = convertSecondsToTimer(secondsLeft);
          } else {
            currentWormhole.classList.add('active');
          }
        }
        break;
      }
    }
    if (!showWormhole) {
      currentWormhole.classList.remove('active');
    }

  }, 1000)
});

// Setup youtube player API

var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  console.log("YOUTUBE IFRAME READY");
  window.player = new YT.Player('main-video', {
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
  // 6:20 PM - 9:20 PM
  // TODO: add real video
  url: 'https://www.youtube.com/embed/lM02vNMRRB0' + videoOptions,
  length: 3 * 60 * 60 // 4 hours in seconds
}, {
  // 9:20 PM - 10:20 PM
  url: 'https://www.youtube.com/embed/LqxMNkm1Teg' + videoOptions,
  length: 60 * 60 // 1 hour in seconds
}]

// TODO: soundcloud sync to time
const audioOptions = '&amp;auto_play=true&amp;show_artwork=false&amp;show_playcount=false&amp;show_user=false&amp;sharing=false&amp;buying=false&amp;download=false';
const audios = [{
  // 10:20 PM
  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/824678797' + audioOptions,
  length: (3 * 60) + 47, // 3 minutes 47 seconds
}, {
  url: null,
  length: (56 * 60) + 13
}, {
  // 11:20 PM
  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/824690302' + audioOptions,
  length: (35 * 60) + 29, // 35 minutes 29 seconds
}, {
  url: null,
  length: (5 * 60 * 60) + (24 * 60) + 31
}, {
  // 5:20 AM
  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/824669977' + audioOptions,
  length: (8 * 60) + 26, // 8 minutes 26 seconds
}, {
  url: null,
  length: (2 * 60 * 60) + (51 * 60) + 34,
}, {
  // 8:20 AM
  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/824679112' + audioOptions,
  length: (4 * 60) + 29, // 4 minutes 29 seconds
}, {
  url: null,
  length: (1 * 60 * 60) + (55 * 60) + 31
}, {
  // 10:20 AM
  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/824679799' + audioOptions,
  length: (2 * 60) + 49, // 2 minutes 49 seconds
}, {
  url: null,
  length: (5 * 60 * 60) + (57 * 60) + 11
}, {
  // 4:20 PM
  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/824677906' + audioOptions,
  length: (3 * 60) + 35, // 3 minutes 35 seconds
}, {
  url: null,
  length: (4 * 60 * 60) + (56 * 60) + 25
}, {
  // 9:20 PM
  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/824705536' + audioOptions,
  length: (21 * 60) + 29 // 21 minutes 29 seconds
}, {
  url: null,
  length: (38 * 60) + 31
}]

const wormholes = [{
  id: 'wormhole-1',
  url: 'https://www.youtube.com/embed/vxmogAJgNlk' + videoOptions,
  start: 18 * 60 * 60, // 4:20PM
  end: 19 * 60 * 60, // 5:20PM
}]

const pastPresentFuture = [{
  src: 'img/mostlypresent.gif',
  length: 2 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 2 * 60,
}, {
  src: 'img/future.gif',
  length: 59 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 2 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 4 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 2 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 60,
}, {
  src: 'img/future.gif',
  length: 2 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 2 * 60,
}, {
  src: 'img/future.gif',
  length: 10 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 11 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 9 * 60,
}, {
  src: 'img/allover.gif',
  length: (5 * 60 * 60) + (46 * 60), // 5 hours 46 mins
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/allover.gif',
  length: 32 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 5 * 60,
}, {
  src: 'img/present.gif',
  length: 8 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/allover.gif',
  length: 4 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 18 * 60,
}, {
  src: 'img/present.gif',
  length: 60 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 3 * 60,
}, {
  src: 'img/allover.gif',
  length: 13 * 60,
}, {
  src: 'img/present.gif',
  length: 5 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 2 * 60,
}, {
  src: 'img/present.gif',
  length: 3 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/allover.gif',
  length: 3 * 60,
}, {
  src: 'img/past.gif',
  length: 12 * 60,
}, {
  src: 'img/mostlypast.gif',
  length: 60,
}, {
  src: 'img/pastfuturedanger.gif',
  length: 3 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/allover.gif',
  length: 4 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 11 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 12 * 60,
}, {
  src: 'img/present.gif',
  length: 4 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 6 * 60,
}, {
  src: 'img/allover.gif',
  length: 11 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/present.gif',
  length: 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 2 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 11 * 60,
}, {
  src: 'img/allover.gif',
  length: 60,
}, {
  src: 'img/past.gif',
  length: 60,
}, {
  src: 'img/present.gif',
  length: 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 15 * 60,
}, {
  src: 'img/allover.gif',
  length: 3 * 60,
}, {
  src: 'img/present.gif',
  length: 6 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 20 * 60,
}, {
  src: 'img/allover.gif',
  length: 3 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 12 * 60,
}, {
  src: 'img/present.gif',
  length: 7 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/allover.gif',
  length: 7 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 4 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 5 * 60,
}, {
  src: 'img/allover.gif',
  length: 5 * 60 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 60,
}, {
  src: 'img/allover.gif',
  length: 2 * 60,
}, {
  src: 'img/mostlyfuture.gif',
  length: 60,
}, {
  src: 'img/past.gif',
  length: 3 * 60,
}, {
  src: 'img/allover.gif',
  length: 3 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 3 * 60,
}, {
  src: 'img/allover.gif',
  length: 7 * 60,
}, {
  src: 'img/mostlypast.gif',
  length: 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 60,
}, {
  src: 'img/present.gif',
  length: 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 3 * 60,
}, {
  src: 'img/allover.gif',
  length: 3 * 60,
}, {
  src: 'img/mostlypresent.gif',
  length: 12 * 60,
}, {
  src: 'img/present.gif',
  length: 19 * 60,
}, {
  src: 'img/allover.gif',
  length: 6 * 60 * 60,
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
    let i = 0
    for (i = 0; i < videos.length; i++) {
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

  const checkAndChangeAudio = () => {
    let date = new Date();
    let seconds = convertDateToTimestamp(date);
    let i = 0
    for (i = 0; i < audios.length; i++) {
      if (seconds > audios[i].length) {
        seconds -= audios[i].length;
      } else {
        break;
      }
    }

    // Change video
    if (i !== mainAudioIndex) {
      console.log("CHANGE AUDIO", i, seconds);
      mainAudioIndex = i;
      mainAudio.setAttribute('seconds', seconds);
      if (audios[mainAudioIndex].url) {
        mainAudio.src = audios[mainAudioIndex].url;
        allowSoundcloudBtn.style.display = 'block';
      } else {
        allowSoundcloudBtn.style.display = 'none';
      }
    }
  }

  const checkAndChangeGif = () => {
    let date = new Date();
    let seconds = convertDateToTimestamp(date);
    let i = 0
    for (i = 0; i < pastPresentFuture.length; i++) {
      if (seconds > pastPresentFuture[i].length) {
        seconds -= pastPresentFuture[i].length;
      } else {
        break;
      }
    }

    // Change video
    if (i !== timelineIndex) {
      console.log("CHANGE GIF", i, seconds);
      timelineIndex = i;
      timelineGif.src = pastPresentFuture[i].src;
    }
  }

  let mainVideo = document.getElementById('main-video');
  let mainAudio = document.getElementById('main-audio');
  let timelineGif = document.getElementById('timeline-gif');
  let allowSoundBtn = document.getElementById('allow-sound');
  let allowSoundcloudBtn = document.getElementById('allow-sound-soundcloud');
  let titleChanger = document.getElementById('title-changer');
  let wormhole = document.getElementById('wormhole');
  let wormholeText = document.querySelector('#wormhole .text');
  let mainVideoIndex = null;
  let mainAudioIndex = null;
  let timelineIndex = 0;
  let wormholeIndex = 0;

  checkAndChangeGif();

  mainVideo.width = "100%";
  mainVideo.height = "100%";
  checkAndChangeVideo();

  mainAudio.src = audios[0].url;
  let mainAudioWidget = SC.Widget(mainAudio);
  mainAudioWidget.bind(SC.Widget.Events.READY, function() {
    console.log("ON AUDIO READY");
    // set new volume level
    let seconds = mainAudio.getAttribute('seconds');
    if (!seconds) seconds = convertDateToTimestamp(new Date());
    console.log("AUDIO SECONDS", seconds);
    mainAudioWidget.seekTo(20 * 1000);
    mainAudioWidget.setVolume(0);
  });
  checkAndChangeAudio();

  allowSoundBtn.addEventListener('click', () => {
    console.log(window.player, allowSoundBtn.classList.contains('active'));
    if (allowSoundBtn.classList.contains('active')) {
      console.log("SET VOLUME 0");
      window.player.setVolume(0);
    } else {
      console.log("SET VOLUME 100");
      window.player.setVolume(100);
    }
    allowSoundBtn.classList.toggle('active');
  })

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
  titleChanger.addEventListener('click', (e) => {
    if (titleChanger.classList.contains('active') &&
        e.target.tagName === 'LI') {
      let pastActive = titleChanger.querySelector('li.active');
      pastActive.classList.remove('active');
      e.target.classList.add('active');
    }
    titleChanger.classList.toggle('active');
  });

  // Wormhole switcher
  wormhole.addEventListener('click', () => {
    if (window.inWormhole) {
      wormholeText.textContent = 'a wormhole appeared !'
      mainVideoIndex = null;
      window.inWormhole = false;
    } else {
      let seconds = window.player.getCurrentTime();
      mainVideo.src = wormholes[wormholeIndex].url;
      wormholeText.textContent = 'go back'
      window.inWormhole = true;
    }
  });

  // Janky interval
  setInterval(() => {
    checkAndChangeVideo();
    checkAndChangeAudio();
    checkAndChangeGif();

    // Render wormholes
    let seconds = convertDateToTimestamp(new Date());
    let showWormhole = false;
    for (var i = 0; i < wormholes.length; i++) {
      if (seconds >= wormholes[i].start &&
          seconds <= wormholes[i].end) {
        wormholeIndex = i;
        showWormhole = true;
        if (wormhole) {
          if (wormhole.classList.contains('active')) {
            let secondsLeft = wormholes[i].end - seconds;
            let timer = document.getElementById('timer');
            timer.textContent = convertSecondsToTimer(secondsLeft);
          } else {
            wormhole.classList.add('active');
          }
        }
        break;
      }
    }
    if (!showWormhole) {
      wormhole.classList.remove('active');
    }

  }, 1000)
});

(function() {

  var keys = {
    65: {
      letter: "a",
      label: "Clap",
      wavFile: "clap"
    },
    83: {
      letter: "s",
      label: "Hihat",
      wavFile: "hihat"
    },
    68: {
      letter: "d",
      label: "Kick",
      wavFile: "kick"
    },
    70: {
      letter: "f",
      label: "Openhat",
      wavFile: "openhat"
    },
    71: {
      letter: "g",
      label: "Boom",
      wavFile: "boom"
    },
    72: {
      letter: "h",
      label: "Ride",
      wavFile: "ride"
    },
    74: {
      letter: "j",
      label: "Snare",
      wavFile: "snare"
    },
    75: {
      letter: "k",
      label: "Tom",
      wavFile: "tom"
    },
    76: {
      letter:"l",
      label: "Tink",
      wavFile: "tink"
    }
  };

  document.onkeydown = function(e) {
    if (keys.hasOwnProperty(e.keyCode)) {
      var drumLetter = keys[e.keyCode]['letter'];
      var drumLabel = keys[e.keyCode]['label'];
      var drumSoundFile = 'sounds/' + keys[e.keyCode]['wavFile'] + '.wav';
      var drumSelector = document.querySelector('.drum-key-' + drumLetter);

      playSound(drumSoundFile, drumSelector);
    }

    keyLog = (typeof drumLetter !== 'undefined') ? drumLetter + ' ' + e.keyCode + ' ' + drumLabel : e.keyCode;
    console.log(keyLog);
  }

  function playSound(drumSoundFile, drumSelector) {
    var drumSound = new Audio(drumSoundFile);
    drumSound.play();
    drumSelector.classList.add('active');

    window.setTimeout(function() {
      drumSelector.classList.remove('active');
    }, 100);
  }

})();

(function() {

  document.onkeydown = function(e) {
    var key;
    switch(e.keyCode) {

      case 65:
        key = 'a';
        var drumSound = new Audio('sounds/clap.wav')
        break;

      case 83:
        key = 's';
        var drumSound = new Audio('sounds/hihat.wav')
        break;

      case 68:
        key = 'd';
        var drumSound = new Audio('sounds/kick.wav')
        break;

      case 70:
        key = 'f';
        var drumSound = new Audio('sounds/openhat.wav')
        break;

      case 71:
        key = 'g';
        var drumSound = new Audio('sounds/boom.wav')
        break;

      case 72:
        key = 'h';
        var drumSound = new Audio('sounds/ride.wav')
        break;

      case 74:
        key = 'j';
        var drumSound = new Audio('sounds/snare.wav')
        break;

      case 75:
        key = 'k';
        var drumSound = new Audio('sounds/tom.wav')
        break;

      case 76:
        key = 'l';
        var drumSound = new Audio('sounds/tink.wav')
        break;
    }

    if (typeof drumSound !== 'undefined') {
      drumSound.play();
      console.log(key);
    }
  }


})();

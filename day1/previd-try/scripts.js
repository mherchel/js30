(function() {

  document.onkeydown = function(e) {
    var key;
    switch(e.keyCode) {

      case 78:
        key = 'n';
        var drumSound = new Audio('sounds/and.wav')
        break;

      case 65:
        key = 'a';
        var drumSound = new Audio('sounds/a.wav')
        break;

      case 83:
        key = 's';
        var drumSound = new Audio('sounds/socks.wav')
        break;

      case 68:
        key = 'd';
        var drumSound = new Audio('sounds/daddy.wav')
        break;

      // case 70:
      //   key = 'f';
      //   var drumSound = new Audio('sounds/openhat.wav')
      //   break;

      // case 71:
      //   key = 'g';
      //   var drumSound = new Audio('sounds/boom.wav')
      //   break;

      // case 72:
      //   key = 'h';
      //   var drumSound = new Audio('sounds/ride.wav')
      //   break;

      // case 74:
      //   key = 'j';
      //   var drumSound = new Audio('sounds/snare.wav')
      //   break;

      // case 75:
      //   key = 'k';
      //   var drumSound = new Audio('sounds/tom.wav')
      //   break;

      // case 76:
      //   key = 'l';
      //   var drumSound = new Audio('sounds/tink.wav')
      //   break;

      case 80:
        key = 'p';
        var drumSound = new Audio('sounds/pee.wav')
        break;

      case 66:
        key = 'b';
        var drumSound = new Audio('sounds/stinky.wav')
        break;

      case 81:
        key = 'q';
        var drumSound = new Audio('sounds/butt.wav')
        break;

      case 79:
        key = 'o';
        var drumSound = new Audio('sounds/poop.wav')
        break;

      case 73:
        key = 'i';
        var drumSound = new Audio('sounds/is.wav')
        break;
    }
console.log(e.keyCode);
    if (typeof drumSound !== 'undefined') {
      drumSound.play();
      var drum = document.querySelector('.drum-key-' + key);
      drum.classList.add('active');
      window.setTimeout(function() {
        drum.classList.remove('active');
      }, 100);

    }
  }

})();

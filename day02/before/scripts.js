(function() {
  var handHour = document.querySelector('.hand-hour'),
      handMinute = document.querySelector('.hand-minute'),
      handSecond = document.querySelector('.hand-second');

  (function updateClock() {
    // Update time
    var now = new Date();
    var hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    // Update the degrees to rotate
    var degHour = hour / 12 * 360;
    var degMinute = minute / 60 * 360;
    var degSecond = second / 60 * 360 ;
    // var degSecond = second / 60 * 360;

    // Apply rotation transforms to the DOM
    handHour.style.transform = 'rotate(' + degHour + 'deg)';
    handMinute.style.transform = 'rotate(' + degMinute + 'deg)';
    handSecond.style.transform = 'rotate(' + degSecond + 'deg)';

    setTimeout(function() {
      updateClock();
    }, 1000);
  })();
})();

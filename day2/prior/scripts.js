(function() {
  var now, hour, minute, second;
  var degHour, degMinute, degSecond;
  var handHour = document.querySelector('.hand-hour'),
      handMinute = document.querySelector('.hand-minute'),
      handSecond = document.querySelector('.hand-second');

  function updateClock() {
    // Update time
    now = new Date();
    hour = now.getHours() > 12 ? now.getHours() - 12 : hour;
    minute = now.getMinutes();
    second = now.getSeconds();

    // Update the degrees to rotate
    degHour = hour / 12 * 360;
    degMinute = minute / 60 * 360;
    degSecond = second / 60 * 360;

    // Apply rotation transforms to the DOM
    handHour.style.transform = 'rotate(' + degHour + 'deg)';
    handMinute.style.transform = 'rotate(' + degMinute + 'deg)';
    handSecond.style.transform = 'rotate(' + degSecond + 'deg)';

    setTimeout(function() {
      updateClock();
    }, 1000);
  }

  updateClock();
})();

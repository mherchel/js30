(function() {
  var rangeSpacingElement = document.querySelector('#range-spacing'),
      rangeBlurElement = document.querySelector('#range-blur'),
      inputColorElement = document.querySelector('#input-color');

  var rootElementStyles = getComputedStyle(document.documentElement),
      blurRadiusVal = String(rootElementStyles.getPropertyValue('--blur-radius')).trim(),
      spacingRadiusVal = String(rootElementStyles.getPropertyValue('--spacing')).trim();
      inputColorVal = String(rootElementStyles.getPropertyValue('--color')).trim();

      rangeSpacingElement.addEventListener('input', function(e) {
        currentVal = this.value;
        setSpacing(currentVal);
        console.log(currentVal);
      });

      rangeBlurElement.addEventListener('input', function(e) {
        currentVal = this.value;
        setBlur(currentVal);
        console.log(currentVal);
      });

      inputColorElement.addEventListener('input', function(e) {
        currentVal = this.value;
        setColor(currentVal);
        console.log(currentVal);
      });

  function setSpacing(val) {
    document.documentElement.style.setProperty('--spacing', val + 'px');
  }

  function setBlur(val) {
    document.documentElement.style.setProperty('--blur-radius', val + 'px');
  }

  function setColor(val) {
    document.documentElement.style.setProperty('--color', val);
  }

})();

(function() {
  var rangeSpacingElement = document.querySelector('#range-spacing'),
      rangeBlurElement = document.querySelector('#range-blur'),
      rangeColorElement = document.querySelector('#range-color');

  var rangeSpacingVal = rangeSpacingElement.value,
      rangeBlurVal = rangeBlurElement.value,
      rangeColorVal = rangeColorElement.value;

  var rootElementStyles = getComputedStyle(document.documentElement),
      blurRadiusVal = String(rootElementStyles.getPropertyValue('--blur-radius')).trim(),
      spacingRadiusVal = String(rootElementStyles.getPropertyValue('--spacing')).trim();

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

  function setSpacing(val) {
    document.documentElement.style.setProperty('--spacing', val + 'px');
  }

  function setBlur(val) {
    document.documentElement.style.setProperty('--blur-radius', val + 'px');
  }

})();

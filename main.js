AFRAME.registerComponent('sphere-animation', {
    init: function () {
      var sphere = document.querySelector('a-sphere');
      var degrees = 0;      
  
      function shiftDegrees(value) {
        return (value + 1) % 360;
      }
  
      function animate() {
        degrees = shiftDegrees(degrees);
        var color = 'hsl(' + degrees + ', 100%, 50%)';
        var variation = Math.sin(Date.now() / 1000);
        var position = '0 ' + (1.5 + variation) + ' -5';
  
        sphere.setAttribute('color', color);
        sphere.setAttribute('position', position);
  
        requestAnimationFrame(animate);
      }
  
      animate();
      requestAnimationFrame(animate);
    }

    
  });
  
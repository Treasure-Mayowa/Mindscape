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

  AFRAME.registerComponent('breathing-animation', {
    init: function () {
      const breathingSphere = document.querySelector('#sphere');
      const breathDuration = 9000;
      const numBreaths = 1000;
      let currentBreathCycle = 0;
  
      function animateBreathCycle() {
        // Scale the sphere up (inhale)
        breathingSphere.setAttribute('animation', {
          property: 'scale',
          to: '1.2 1.2 1.2',
          dur: breathDuration / 2,
          easing: 'easeInOutQuad'
        });
  
        // Scale the sphere down (exhale)
        setTimeout(() => {
          breathingSphere.setAttribute('animation', {
            property: 'scale',
            to: '1 1 1',
            dur: breathDuration / 2,
            easing: 'easeInOutQuad'
          });
        }, breathDuration / 2);
      }
  
      function animateNextBreathCycle() {
        animateBreathCycle();
        currentBreathCycle++;
  
        if (currentBreathCycle < numBreaths) {
          setTimeout(animateNextBreathCycle, breathDuration);
        }
      }
  
      animateNextBreathCycle(); // Start the breathing animation
    }
  });
  
AFRAME.registerComponent('text', {
  schema: {
    value: { type: 'string', default: '' },
    color: { type: 'color', default: 'black' },
    position: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
  },
  init: function () {
    // Create the text element
    var textEl = document.createElement('a-entity');
    textEl.setAttribute('text', {
      value: this.data.value,
      color: this.data.color
    });
    textEl.setAttribute('position', this.data.position);

    // Append the text element to the scene
    this.el.appendChild(textEl);
  }
});
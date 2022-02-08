'use strict'

AFRAME.registerComponent('spawn-entity', {
  
  // Accept value for color or default to blue.
  schema: {
    
    color: {type: 'color', default: 'blue'},
    duration: {type:'number', default: 20000}
  },
  
  // Init lifecycle method fires upon initialization of component.
  init: function() {
    

    const CONTEXT_AF = this; // this to refer to'this' component, because 'this' in an event listener refers to something else
  //  CONTEXT_AF.slime = document.querySelector('#slime');

    // Allows the use of "self" as "this" within the listener without binding.

    
    // Add the click listener.
    CONTEXT_AF.el.addEventListener('click', function() {

        var entity = document.createElement('a-box');
        var x = document.getElementById("wood_surface").src;
      
      // Log intersection points for our reference.
      // console.log(e.detail.intersection.point);
      
      // Create the box element (not yet added).

    
      // Set the color to the assigned value.
      entity.setAttribute('material', {src: 'assets/wood_plank.png'});
      
      // Set the position of the box to the click intersection.
      entity.setAttribute('position', {x:2, y:2, z:2});

      // Append the box element to the scene.
      CONTEXT_AF.el.sceneEl.appendChild(entity);
      
    });
    
  }
});
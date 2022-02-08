'use strict'

AFRAME.registerComponent('instantiate-block', {

  schema: {
    
    duration: {type:'number', default: 20000}
  },
  
  // Init lifecycle method fires upon initialization of component.
  init: function () {

    const instant = this; 


    instant.el.addEventListener('click', function () {
      var audio = document.getElementById("plate_click");
      audio.play();

      // to set a-mixin attributes
      var entity = document.createElement('a-box');

      // set mixin attribute to box that was created
      entity.setAttribute("mixin", "createBlock");

      entity.setAttribute('material', {src: 'assets/wood_plank.png'});

      // position where all blocks spawn from - "inside" crafting table
      entity.setAttribute('position', {x:2.25, y:16, z:-1});

      // append elements to scene
      instant.el.sceneEl.appendChild(entity);

    });
  }
});

AFRAME.registerComponent('destroy-block', {
    schema: {
      
      duration: {type:'number', default: 20000}
    },
    
    init: function() {
  
      var DEST = this;
        DEST.el.addEventListener('click', function() {


          var audio = document.getElementById("plate_click");
          audio.play();
  
          var entity = document.querySelector('[mixin]');
  
          if (entity) {
            entity.parentNode.removeChild(entity);
          
         }

       });
    
    }
  });
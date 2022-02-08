AFRAME.registerComponent('destroy-block', {
    schema: {
      
      duration: {type:'number', default: 20000}
    },
    
    init: function() {
  
      var DEST = this; // this to refer to'this' component, because 'this' in an event listener refers to something else
        DEST.el.addEventListener('click', function() {
          //var entity = document.getElementById("block").getAttribute("mixin");
  
          var entity = document.querySelector('#block');
  
          if (entity) {
            entity.parentNode.removeChild(entity);
          
          }
              
          //entity.removeAttribute('block');
         //entity.removeAttribute
          
         //const entity = document.getElementById("block").setAttribute("mixin");
        // var entity = document.querySelector("#block").setAttribute('mixin');
     //    entity.parentNode.removeChild(entity);
        // entity.getAttribute("mixin", "block");
      //  console.log(entity.removeAttribute("mixin"));
         /* if (elem != null) {
            console.log(entity.removeAttribute("mixin"));
            elem.parentNode.removeChild(elem);
          }*/
  
       });
    
    }
  });
'use strict'

AFRAME.registerComponent('instantiate-block', {
    schema : {
        //list properties we accept
        duration: {type:'number', default: 20000}
    
    },
    init : function() {
        //this is like setup in OpenFrameworks
        //also, it is only called once the entire A-Frame scene is built
        const CONTEXT_AF = this; // this to refer to'this' component, because 'this' in an event listener refers to something else
        CONTEXT_AF.walls = document.querySelector('#walls');
        CONTEXT_AF_AF.isSpinning = false;

        CONTEXT_AF.walls.setAttribute('animation', {propert:'rotation.y', to:360, loop:true, dur:CONTEXT_AF.data.duration, easing:'linear', enabled:false});

        CONTEXT_AF.addEventListener('click', function(){
            if (CONTEXT_AF.isSpinning === true) {
                //stop spinning
                CONTEXT_AF.walls.setAttribute('animation', {enabled:false});
                CONTEXT_AF.isSpinning = false;
            }
            else {
                //start spinning
                CONTEXT_AF.walls.setAttribute('animation', {enabled:true});
                CONTEXT_AF.isSpinning = true;
            }
        });
    }
});
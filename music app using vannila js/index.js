window.addEventListener('load', () => {
const beats= document.querySelectorAll(".beats");
const pads=document.querySelectorAll(".pads div");
const visual=document.querySelector('.visual');
//coloured bubbles
const colors=[
"lightpink",
"lightseagreen",
"lightslategrey",
"lightsalmon",
"lightyellow",
"rgb(241, 210, 250)",
"rgb(206, 206, 123)",
"rgb(87, 114, 119)",
"rgb(141, 93, 115)",
"rgb(61, 5, 124)",
"rgb(235, 150, 164)",
"rgb(116, 206, 113)"
];
//add sounds, to access each sounds we use index
pads.forEach((pad,index) => {
    pad.addEventListener("click", function() {
        beats[index].currentTime=0;
        beats[index].play();
        createBubbles(index);
    });

});


//make bubble function
const createBubbles= (index) => {
   const bubble= document.createElement("div"); 
   visual.appendChild(bubble); //attaching bubble to visual div
   bubble.style.backgroundColor= colors[index];
   bubble.style.animation= 'jump 1s ease';
   bubble.addEventListener('animationend',function(){
       visual.removeChild(this);
   });
};

});
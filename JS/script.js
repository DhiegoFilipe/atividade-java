const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const jump = () => {
  sonic.classList.add('jump');

setTimeout(() => {
   sonic.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

 const pipePosition = pipe.offsetleft;
  

 if (pipePosition < 190 ) {

    pipe.style.animation = 'none';
    pipe.style.left = '${pipePosition}px';
    
 }
 

}, 10);
document .addEventListener ('keydown' , jump);
const background = document.getElementById('background');
//makes sure we can edit an html div from its id!
let lastMove = 0;
//for maintaining performance
let targetX = 50;
let targetY = 50;
let currentX = 50;
let currentY = 50;
//for following the mouse!
document.addEventListener('mousemove', (event) => {
  //ensures the function runs less to better performance :)
  const now = Date.now();
  if(now - lastMove < 50) return;
  lastMove = now;
  targetX = ((event.clientX / window.innerWidth)) * 50;
  targetY = ((event.clientY / window.innerHeight)) * 50;
});

  function animateBackground() {
    const speed = 0.03; //closer to 0 is slower, closer to 1 is faster.

    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;
    background.style.backgroundPosition = `${75 - currentX}% ${75 - currentY}%`;
    requestAnimationFrame(animateBackground);
  }

  animateBackground();
const background = document.getElementById('background');

/*document.addEventListener('mousemove', (event) => {
  //need to use mouth calculated things!!!
    const xPercent = 205 - (event.clientX / window.innerWidth) * 30;
    const yPercent = 205 - (event.clientY / window.innerHeight) * 30;
    background.animate(
      {
         backgroundPosition: `${xPercent}% ${yPercent}%`
      },
      {
        duration: 1200
      }

    );
  });
*/
let lastMove = 0;
//for maintaining performance
let targetX = 50;
let targetY = 50;
let currentX = 50;
let currentY = 50;

document.addEventListener('mousemove', (event) => {
  //ensures the function runs less to better performance :)
  const now = Date.now();
  if(now - lastMove < 50) return;
  lastMove = now;
  targetX = 50 - ((event.clientX / window.innerWidth) - 0.5) * 30;
  targetY = 50 - ((event.clientY / window.innerHeight) - 0.5) * 30;
});

  function animateBackground() {
    const speed = 0.03; //closer to 0 is slower,
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;
    background.style.backgroundPosition = `${currentX}% ${currentY}%`;
    requestAnimationFrame(animateBackground);
  }

  animateBackground();
const background = document.getElementById('background');

document.addEventListener('mousemove', (event) => {
  //need to use mouth calculated things!!!
    const xPercent = 205 - (event.clientX / window.innerWidth) *  30;
    const yPercent = 205 - (event.clientY / window.innerHeight) * 30;
  
    // Set CSS variables with percent values
    //background.
    document.documentElement.style.setProperty('--xpos', `${xPercent}%`);
    document.documentElement.style.setProperty('--ypos', `${yPercent}%`);
  });


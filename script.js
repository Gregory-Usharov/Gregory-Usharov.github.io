document.addEventListener("DOMContentLoaded", function () {
  const startCenter = [58, 90, 138]; // Blue center (#3A5A8A)
  const endCenter = [161, 176, 182]; // Greyish center (#A1B0B6)
  const startOuter = [10, 25, 47];   // Dark Blue outer (#0a192f)
  const endOuter = [0, 0, 0];        // Black outer (#000000)
  
  const transitionTime = 10000;       // 5 seconds per cycle (faster transition)
  let startTime = null;
  let forward = true;               // Controls direction

  function lerp(start, end, t) {
      return start + (end - start) * t;
  }

  function updateBackground(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = (timestamp - startTime) / transitionTime;

      if (progress > 1) {
          forward = !forward; // Reverse direction
          startTime = timestamp;
          progress = 0;
      }

      const t = forward ? progress : 1 - progress;

      // Interpolate center color
      const r1 = Math.round(lerp(startCenter[0], endCenter[0], t));
      const g1 = Math.round(lerp(startCenter[1], endCenter[1], t));
      const b1 = Math.round(lerp(startCenter[2], endCenter[2], t));

      // Interpolate outer color
      const r2 = Math.round(lerp(startOuter[0], endOuter[0], t));
      const g2 = Math.round(lerp(startOuter[1], endOuter[1], t));
      const b2 = Math.round(lerp(startOuter[2], endOuter[2], t));

      // Make sure the center stays bright and the outer edges fade to black
      document.body.style.background = `radial-gradient(circle at 50% 50%, rgb(${r1}, ${g1}, ${b1}) 20%, rgb(${r2}, ${g2}, ${b2}) 100%)`;
      requestAnimationFrame(updateBackground);
  }

  requestAnimationFrame(updateBackground);
});

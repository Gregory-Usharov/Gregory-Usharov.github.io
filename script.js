const r = document.querySelector('body');

// Create a function for getting a vardiable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--sizex'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--sizex', '5%');
}

document.addEventListener('mousemove', (event) => {
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;
  
    // Set CSS variables with percent values
    document.documentElement.style.setProperty('--sizex', `${xPercent}%`);
    document.documentElement.style.setProperty('--sizey', `${yPercent}%`);
  });


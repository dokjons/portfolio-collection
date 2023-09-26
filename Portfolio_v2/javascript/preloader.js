// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Select the loader element
    const loader = document.getElementById("loader");
  
    // Hide the loader after the delay
    setTimeout(function() {
      loader.style.display = "none";
    }, 3500);
  });
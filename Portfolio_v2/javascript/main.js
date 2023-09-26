document.addEventListener("DOMContentLoaded", function() {
  const projectContainers = document.querySelectorAll(".container");

  projectContainers.forEach(function(container) {
    container.addEventListener("click", function() {
      container.classList.toggle("expanded");
      if (container.classList.contains("expanded")) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

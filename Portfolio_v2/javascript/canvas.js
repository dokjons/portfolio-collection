// Get canvas element and set context
const canvas = document.getElementById("canvas");
const canvcon = document.querySelector(".canvas-container");
const ctx = canvas.getContext("2d");
const canvastxt = document.querySelector(".name-ocu");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Make canvas responsive
function resizeCanvas() {
  canvas.width = canvcon.offsetWidth;
  canvas.height = canvcon.offsetHeight;
  canvastxt.style.height = `${canvcon.offsetHeight}px`;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Create an array of particle objects
let particles = [];
for (let i = 0; i < 1000; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let size = Math.random() * 10 + 5;
  let speedX = (Math.random() - 0.5) * 0.5;
  let speedY = (Math.random() - 0.5) * 0.5;
  particles.push(new Particle(x, y, size, speedX, speedY));
}

// Particle class
function Particle(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  
    // Array of possible fill colors
    this.colors = ["cyan", "blue", "purple", "magenta", "pink"];
    this.fillColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  
    // Choose a single shape to draw
    this.shape = Math.floor(Math.random() * 3);
  
    this.draw = function () {
      switch (this.shape) {
        case 0:
          // Circle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
          ctx.fillStyle = this.fillColor;
          ctx.fill();
          break;
        case 1:
          // Square
          ctx.fillStyle = this.fillColor;
          ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
          break;
        case 2:
          // Triangle
          ctx.beginPath();
          ctx.moveTo(this.x - this.size / 2, this.y + this.size / 2);
          ctx.lineTo(this.x, this.y - this.size / 2);
          ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
          ctx.fillStyle = this.fillColor;
          ctx.fill();
          break;
      }
    };
  
    this.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY;
      }
      this.draw();
    };
  }  

// Animation function
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (particle) {
    particle.update();
});
}
// Start animation
animate();  
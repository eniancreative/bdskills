const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // between 0 and 1

const cursorSize = 137.795; // Make sure this matches the custom circle size
const crossSize = 37.795; // The size of your actual cursor (cross)

// Fine-tune offset values to manually adjust the alignment
let xOffset = 20; // Adjust this value for manual fine-tuning of X axis
let yOffset = 20; // Adjust this value for manual fine-tuning of Y axis

// Function to adjust the positioning
const updatePosition = () => {
  // Smoothly interpolate the cursor's position
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;

  // Center the custom circle and adjust for manual offsets
  cursor.style.transform = 'translate3d(' + (pos.x - (cursorSize - crossSize) / 2 + xOffset) + 'px, ' + (pos.y - (cursorSize - crossSize) / 2 + yOffset) + 'px, 0)';
};

const updateCoordinates = e => {
  // Update mouse position
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

// Event listener for mouse movement
window.addEventListener('mousemove', updateCoordinates);

// Animation loop
function loop() {
  updatePosition();
  requestAnimationFrame(loop);
}

// Start the animation loop
requestAnimationFrame(loop);
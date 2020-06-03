// Select the canvas & button
const canvas = document.querySelector('#etch-a-sketch');
const clearButton = document.querySelector('.clear');

// getting a '2d' context from canvas
const ctx = canvas.getContext('2d');

// Setting a constant for stylus speed, change it to increase/decrease pace
const MOVE_AMOUNT = 10;

// Extracting width & height from canvas
const { width, height } = canvas;

// Randomizing the stylus point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// Setting up some stylus drawing style
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// Setting the stylus at a random point on the canvas
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Listening to keypresses
window.addEventListener('keydown', handleKey);

function handleKey(event) {
  // Checking to see if the keys pressed are from 4 arrow keys
  if (event.key.includes('Arrow')) {
    // Preventing default event to ensure zero window movement while pressing arrow keys, other keys will work as expected
    event.preventDefault();
    // Call drawing function
    drawLine({ key: event.key });
  }
}
// Using destructuring to extract the event.key property
function drawLine({ key }) {
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Clearing the canvas
clearButton.addEventListener('click', () => ctx.clearRect(0, 0, width, height));

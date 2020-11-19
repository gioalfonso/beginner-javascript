// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
const { width, height} = canvas; 
            // const width = canvas.width;
            // const height = canvas.height;

// create randon x and y starting points on the canvas.
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// ======================= stopped @12:41 etch sketch

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw(options) {
  console.log(options);
}

// Write a handler for the keys
function handleKey(e) {
  if(e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key})
    console.log(e.key)
    console.log('HANDLING KEY');
  }
}
// Clear / shake function

// listen for arrow keys
window.addEventListener('keydown', handleKey);

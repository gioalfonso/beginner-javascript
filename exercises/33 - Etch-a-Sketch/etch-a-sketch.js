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

// ======================= stopped @12:41 etch sketch

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// Write a draw function

// Write a handler for the keys

// Clear / shake function

// listen for arrow keys

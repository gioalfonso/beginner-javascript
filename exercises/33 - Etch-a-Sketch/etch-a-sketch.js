// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 40;
// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
const { width, height} = canvas; 
            // const width = canvas.width;
            // const height = canvas.height;

// create randon x and y starting points on the canvas.
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({key}) {      // using destructuring here (object)
  // increment the hue
  hue = hue + 10;
  console.log(hue);
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  console.log(key);
  //start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did
  switch( key ) {
    case 'ArrowUp':
      y = y - MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x = x + MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y = y + MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x = x - MOVE_AMOUNT;
      break;
    
      default:
      break;
  }
  
  ctx.lineTo(x, y);
  ctx.stroke();
}


// Write a handler for the keys
function handleKey(e) {
  if(e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key})
  }
}
// Clear shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0,0, width, height);
  canvas.addEventListener('animationend', function() {
    console.log('Done the shake');
    canvas.classList.remove('shake');
    },
  { once: true}
);

}
// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
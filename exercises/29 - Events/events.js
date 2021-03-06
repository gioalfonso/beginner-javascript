const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!!')  
};

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

//stop an event listener
butts.removeEventListener('click', handleClick);

// LISTEN ON MULTIPLE ITEMS
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  // console.log(parseFloat(event.target.dataset.price))
  
  // or you can do this way also
  console.log('You clicked a button')
  const button = event.target;
  // console.log(button.textContent);

  // or
  console.log(event.currentTarget);
  // console.log(event.target)
  // console.log(event.target === event.currentTarget)
  
  // Stop this event from bubbling UP
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick)
})



window.addEventListener('click', function(event) {
  console.log('You Clicked The Window');
  console.log(event.target)
  console.log(event.type)
  console.log(event.bubbles)
  // event.stopPropagation();
},
  {capture: true}
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
  console.log(e.currentTarget);
  console.log(this);
});





































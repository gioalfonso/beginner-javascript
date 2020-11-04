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
  console.log('You are buying it!');
  console.log(event)
}


buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick)
})

// stopped at 04:06



































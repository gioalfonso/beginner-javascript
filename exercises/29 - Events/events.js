const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!!')  
};

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

//stop an event listener
// butts.removeEventListener('click', handleClick);

// LISTEN ON MULTIPLE ITEMS
const buyButtons = document.querySelectorAll('button.buy');

// console.log(buyButtons);

function buyItem() {  // handler
  console.log('BUYING ITEM');
}

function handleBuyButtonClick(buyButton) {
  console.log('binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

buyButtons.forEach(handleBuyButtonClick);

//using arrow function
buyButtons.forEach((button) =>{
  button.addEventListener('click', () => {
    console.log('YOU CLICKED IT');
  });
});

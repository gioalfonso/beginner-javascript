const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!!')  
};

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

//stop an event listener

// butts.removeEventListener('click', handleClick);
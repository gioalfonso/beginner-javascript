const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick() {
  console.log('YOU CLICKED IT');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))
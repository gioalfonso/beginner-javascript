const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick() {
  console.log('YA CLICKED IT');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))
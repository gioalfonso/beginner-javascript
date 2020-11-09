const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  const shouldChangePage = confirm('This website might be malicious!, do you wish to proceed');
  if( !shouldChangePage) {
    event.preventDefault();
    // window.location = event.currentTarget.href;
  }
  console.log(shouldChangePage);
});


const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = event.currentTarget.name.value;
  if(name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
  // console.log(event.currentTarget.name.value)
  // console.log(event.currentTarget.email.value)
  // console.log(event.currentTarget.agree.checked)
});

function logEvent(event) {
  console.log(event.type)
  console.log(event.currentTarget.value)
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo')
  };
}


photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
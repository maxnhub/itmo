
const myForm = document.querySelector('#myForm');
const formButton = document.querySelector('#send');

formButton.addEventListener('click', event => {
  event.preventDefault();

  if(validateForm(myForm)) {
    renderPopup();
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.lastname)) {
    valid = false;
  }
  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.email)) {
    valid = false;
  }
  if (!validateField(form.elements.date)) {
    valid = false;
  }
  if (!validateField(form.elements.address)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}

function renderPopup() {
  
  const popup = document.querySelector('.main__popup');
  const background = document.querySelector('.main__popup-bg');

  popup.classList.add('main__popup--active');
  background.classList.add('main__popup-bg--active');

  document.querySelector('.main__popup-exit').addEventListener('click' , e=>{
    e.preventDefault();

    popup.classList.remove('main__popup--active');
    background.classList.remove('main__popup-bg--active');
  })

};
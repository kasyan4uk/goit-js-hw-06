const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  
  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert('All fields must be filled!');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);

  event.target.reset();
}

document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById('display');
  const keys = document.querySelectorAll('.key');
  const backspace = document.querySelector('.backspace');
  const enter = document.querySelector('.enter');
  const errorPage = document.querySelector('.error-page');

  let input = '';
  const passcode = '1234'; // Preset passcode

  // Add event listeners to number buttons
  keys.forEach(key => {
    key.addEventListener('click', () => {
      input += key.getAttribute('data-value');
      display.textContent = input;
    });
  });

  backspace.addEventListener('click', () => {
    input = input.slice(0, -1);
    display.textContent = input;
  });

  enter.addEventListener('click', () => {
    if (input === passcode) {
      // Correct passcode entered, perform action here
      window.location.href = "payment_complete.html";
      // Reset input
      input = '';
    } else {
      // Incorrect passcode entered, show error page
      window.location.href = "wrongcode.html";
    }
  });

  // Close error page on click
  errorPage.addEventListener('click', () => {
    errorPage.style.display = 'none';
  });
});


document.querySelector('.shipto-selected').addEventListener('click', function () {
  this.parentElement.classList.toggle('open');
});

document.querySelectorAll('.shipto-options div').forEach(function (option) {
  option.addEventListener('click', function () {
    const selected = document.querySelector('.shipto-selected');
    selected.innerHTML = this.innerHTML;
    selected.setAttribute('data-value', this.getAttribute('data-value'));
    selected.parentElement.classList.remove('open');
  });
});

document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual submission

  // Get textarea value
  const notesValue = document.getElementById('notes').value;

  // Show preview or simulate sending
  document.getElementById('responseMsg').innerHTML =
    `<strong>Preview:</strong> ${notesValue}`;
});
document.getElementById('supplierForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.querySelector('.b2-input').value;
  const message = document.querySelector('.b2-text').value;
  document.getElementById('supplierResponse').innerHTML = `<strong>Thank you,</strong> ${name}. Your message: ${message}`;
});



let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(event) {
  alert('Submitted!');
  event.preventDefault();
});
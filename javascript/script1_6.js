let form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function(event) {
  let line = document.createElement('tr');

  let description = document.querySelector('form input[name=description]').value;
  let quantity = document.querySelector('form input[name=quantity]').value;

  line.innerHTML = `<tr><td>${description}</td><td><input value="${quantity}"></td><td><input type="button" value="Remove"></tr>`;

  let table = document.getElementById('products');
  table.append(line);

  event.preventDefault();
});
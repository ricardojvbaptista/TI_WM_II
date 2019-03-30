console.log(document.getElementsByTagName('form')[0]);

console.log(document.querySelector('form label:nth-child(2) input'));
console.log(document.querySelector('form input[name=quantity]'));  //alternative

let inputs = document.querySelectorAll('form input');
for (let i = 0; i < inputs.length; i++)
  console.log(inputs[i]);

//Then, replace last line with:
//console.log(inputs[i].outerHTML);

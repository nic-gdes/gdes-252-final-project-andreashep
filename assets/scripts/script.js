function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
//conversion tool

//inoutNumberText
function convert(type) {
  const inputNumber = parseFloat(document.getElementById('inputNumberText').value);
  let result;

  switch (type) {
    case 'fahrenheit':
      result = (inputNumber - 32) * (5/9);
      break;
    case 'feet':
      result = inputNumber * 0.000189394; // 1 foot = 0.000189394 miles
      break;
    case 'inches':
      result = inputNumber * 2.54; // 1 inch = 2.54 centimeters
      break;
    default:
      result = 'Invalid conversion type';
  }
  
  document.getElementById('modal-overlay').classList.add('active');
  
  // Display result
  if (!isNaN(result)) {
    document.getElementById('outputResultText').value = result.toFixed(2);
  } else {
    alert('Please enter a valid number.');
  }
}

function reset() {
  document.getElementById('inputNumberText').value = '';
  document.getElementById('outputResultText').value = '';
  document.getElementById('inputNumberText').focus();

  document.getElementById('modal-overlay').classList.remove('active');
}
/*// switch button for dark mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const container = document.querySelector('.container');
toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        container.classList.add('dark');
    } else {
        container.classList.remove('dark');
    }
});*/
const themeToggle = document.getElementById("theme-toggle");
            const body = document.body;

            themeToggle.addEventListener("change", () => {
                body.classList.toggle("dark");
            });
//conversion tool
function convert(type) {
    const inputNumber = document.getElementById("inputNumber");
    
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
    if (!isNaN(result)) {
        document.getElementById('outputResult').value = result.toFixed(2);
      } else {
        alert('Please enter a valid number.');
      }
   
   
    const resetButton = document.getElementById("resetButton");

    function resetButton() {
        document.getElementById("inputNumber").value = "";
        document.getElementById("outputResult").value = "";
    }
    // Reset input field
    };
  
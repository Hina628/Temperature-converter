function convertToFahrenheit() {
    const celsius = parseFloat(document.querySelector('input[type="number"]').value);
    const fahrenheitInput = document.querySelectorAll('input[type="number"]')[1];
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        alert('Please enter a valid Celsius value.');
    }
}

function resetFields() {
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
}

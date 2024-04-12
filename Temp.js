const inputBox = document.querySelector('#tempinput');
const selectType = document.querySelector('#temp_type');
const resultDiv = document.querySelector('.container div');

function convertToCelsius(temperature, unit) {
    switch (unit) {
        case 'Celsius':
            return temperature;
        case 'Fahrenheit':
            return fahrenheitToCelsius(temperature);
        case 'Kelvin':
            return kelvinToCelsius(temperature);
        default:
            return "Invalid Input";
    }
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}

function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
}

function handleConversion() {
    const inputTemperature = parseFloat(inputBox.value);
    const inputUnit = selectType.value;

    const celsiusTemperature = convertToCelsius(inputTemperature, inputUnit);

    if (typeof celsiusTemperature === 'string') {
        resultDiv.innerHTML = `<p>${celsiusTemperature}</p>`;
    } else {
        resultDiv.innerHTML = `<p>Result: ${celsiusTemperature}° Celsius</p>`;

    }
}

document.querySelector('.btn').addEventListener('click', handleConversion);

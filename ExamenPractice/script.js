function transformToCelsius(value, scale) {
    switch (scale) {
        case "F":
            return (value -32) * 5/9;
        case "K":
            return value - 273.15;
        case "R":
            return (value - 491.67) * 5 / 9;
        case "C":
            return value;
        default:
            return value;
    }
}

function transformTemperature(value, initialScale, finalScale) {
    var celsiusTemp = transformToCelsius(value, initialScale);
    var finalTempretature = value;
    
    switch (finalScale) {
        case "C":
            finalTempretature = celsiusTemp;
            break;
        case "F":
            finalTempretature = celsiusTemp * 9/5 + 32;
            break;
        case "K":
            finalTempretature = celsiusTemp + 273.15;
            break;
        case "R":
            finalTempretature = (celsiusTemp + 273.15) * (9/5);
            break;
    }

    return Math.round((finalTempretature + Number.EPSILON) * 100) / 100
}

function updateFinal() {
    var initialTemperature = document.querySelector('#initial-temperature').value;
    var initialScale = document.querySelector("#initial-scale").value;
    var finalScale = document.querySelector("#final-scale").value;

    document.querySelector("#final-temperature").value = transformTemperature(+initialTemperature, initialScale, finalScale);
}

function updateInitial() {
    var initialTemperature = document.querySelector('#final-temperature').value;
    var initialScale = document.querySelector("#final-scale").value;
    var finalScale = document.querySelector("#initial-scale").value;

    document.querySelector("#initial-temperature").value = transformTemperature(+initialTemperature, initialScale, finalScale);
}
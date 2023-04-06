let result = document.getElementById("result");

function updateDisplay(value) {
    result.value += value;
}

function calculate() {
    result.value = eval(result.value);
}

function clearDisplay() {
    result.value = "";
}
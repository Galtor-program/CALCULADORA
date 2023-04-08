let result = document.getElementById('result');

//consulta la persistencia del result, si es exactamente igual a 0
//lo mantiente, si no mantiene la ultima cifra 
function updateDisplay(char) {
  if (result.innerHTML === '0') {
    
    //si aca le pongo el + se queda el cero pero siempre aparece como primer item
    result.innerHTML = char;
    if (result.innerHTML === '.') {
      result.innerHTML = "0"+char;
    }

  } else {   
    result.innerHTML += char;
  }
}
//limpia el visor
function clearDisplay() {
    //si borro el cero aca queda todo limpio pero se achica el visor 
  result.innerHTML = '0';
}
//se agrega funcion de borrar por item
function backspace() {
  let str = result.innerHTML;
  if (str.length > 1) {
    str = str.substring(0, str.length - 1);
  } else {
    str = '0';
  }
  result.innerHTML = str;
}
//funcion separada para cada operacion basica se usa spli para que tome solo el caracter de la operacion
function suma() {
  let nums = result.innerHTML.split('+');
  let sum = parseFloat(nums[0]) + parseFloat(nums[1]);
  result.innerHTML = sum;
}

function resta() {
  let nums = result.innerHTML.split('-');
  let diff = parseFloat(nums[0]) - parseFloat(nums[1]);
  result.innerHTML = diff;
}

function multiplicacion() {
    let nums = result.innerHTML.split('*');
    let mul = parseFloat(nums[0]) * parseFloat(nums[1]);
    result.innerHTML = mul;
}

//la division revisa que el segundo numero no tenga el valor exacto de 0
function division() {
    let numsArray = nums();
    if (parseFloat(numsArray[1]) === 0) {
        alert("No se puede dividir por cero");
        clearResult();
    } else {
        //si no es cero permite realizar la division 
        let quotient = parseFloat(numsArray[0]) / parseFloat(numsArray[1]);
        result.innerHTML = quotient;
    }
}


function nums() {
  //split para recibir solo una instruccion,multiplicacion
  return result.innerHTML.split('/');
}

   
// segun el signo que se seleccione en el dom es la funcion que va a ejecutar
function calculadora() {
    if (result.innerHTML.includes('+')) {
        suma();
    } else if (result.innerHTML.includes('-')) {
        resta();
    } else if (result.innerHTML.includes('*')) {
        multiplicacion();
    } else if (result.innerHTML.includes('/')) {
        division();
    }
}
const process = require('process')

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => b != 0 ? a / b : 'El divisor debe ser distinto a cero.'

function calculadora(n1, n2, operacion) {
  let resultado = null
  switch (operacion) {
    case 'suma':
      resultado = suma(n1, n2)
      break
    case 'resta':
      resultado = resta(n1, n2)
      break
    case 'multiplicacion':
      resultado = multiplicacion(n1, n2)
      break
    case 'division':
      resultado = division(n1, n2)
      break
    default:
      resultado = 'Introduza dos números y la operación que desea realizar.';
  }
  return resultado
}

// CLI

const cli = () => {
  const firstNumber = process.argv[2]
  const secondNumber = process.argv[3]
  const operation = process.argv[4]

  let response = ''

  if (!firstNumber || !secondNumber || !operation) {
    response = 'Debe introducir dos números, seguidos de una operación.'

  } else {
    response = calculadora(parseInt(firstNumber), parseInt(secondNumber), operation)
  }

  console.log(response)
}

cli()

//oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
let oneThroughTwenty = () => {
    let arrayRetorno = [];
    for (let i = 1; i <= 20; i++) {
        arrayRetorno.push(i)
    }
    return arrayRetorno;
}
console.log(oneThroughTwenty())
//evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
let evensToTwenty = () => {
    let numpar = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            numpar.push(i)

        }

    }
    return numpar;
}
console.log(evensToTwenty())


//oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)

const oddsToTwenty = (n) => {
    debugger
    let numimpar = []
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            numimpar.push(i)
        }
    }
    return numimpar;
}
console.log(oddsToTwenty(20))

//multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
const multiplesOfFive = () => {
    let multifive = []
    for (let i = 1; i <= 20; i++) {
        multifive.push(i * 5)

    }
    return multifive;
}
console.log(multiplesOfFive())

//squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)

// function squareNumbers() {
//     let quadperf = []
//     for (let i = 1; i <= 100; i++) {
//         let numraiz = Math.sqrt(i)
//         if (parseInt(numraiz) === parseFloat(numraiz)) {
//             quadperf.push(i)
//         }
//     }
//     return quadperf;
// }
// console.log(squareNumbers());

let squareNumbers2 = () => {
    let quadperf = []
    for (let i = 1; i <= 10; i++) {
        quadperf.push(i ** 2)
    }
    return quadperf;
}
console.log(squareNumbers2());

//countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
let countingBackwards = () => {
    let meuRetorno = [];
    for (let counter = 20; counter >= 1; counter--) {

        meuRetorno.push(counter)

    }
    return meuRetorno;
}
console.log(countingBackwards())

//evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
let evenNumbersBackwards = () => {
    let numpar = []
    for (let i = 20; i >= 1; i--) {
        if (i % 2 === 0) {
            numpar.push(i)

        }

    }
    return numpar;
}
console.log(evenNumbersBackwards())

//oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
let oddNumbersBackwards = () => {
    let numimpar = []
    for (let i = 20; i >= 1; i--) {
        if (i % 2 !== 0) {
            numimpar.push(i)
        }
    }
    return numimpar;
}
console.log(oddNumbersBackwards())

//multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
let multiplesOfFiveBackwards = () => {
    let multifive = []
    for (let i = 20; i >= 1; i--) {
        multifive.push(i * 5)

    }
    return multifive;
}
console.log(multiplesOfFiveBackwards())

//squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
let squareNumbersBackwardsa = () => {
    let quadperf = []
    for (let i = 10; i >= 1; i--) {
        quadperf.push(i ** 2)
    }
    return quadperf;
}
console.log(squareNumbersBackwardsa());


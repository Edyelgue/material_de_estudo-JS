
function getNota(nota) {
    let notaA = nota >= 90
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaE = nota >= 50 && nota <= 59
    let notaF = nota < 50

    let notaFinal;

    if(notaA) {
        console.log('Sua nota foi A')
    } else if(notaB) {
        console.log('Sua nota foi B')
    } else if(notaC) {
        console.log('Sua nota foi C')
    } else if(notaD) {
        console.log('Sua nota foi D')
    } else if(notaE) {
        console.log('Sua nota foi E')
    } else {
        console.log('Sua nota foi F')
    }

    console.log(notaFinal)
}

console.log(getNota(99))
console.log(getNota(60))
console.log(getNota(39))
console.log(getNota(100))
console.log(getNota(69))
console.log(getNota(88))
console.log(getNota(-1))
console.log(getNota(4))

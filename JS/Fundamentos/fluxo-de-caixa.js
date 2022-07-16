const fluxoDeCaixa = {
    receita: [2600.00],
    despesas: [600, 70, 300, 150, 500]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateReceita = sum(fluxoDeCaixa.receita)
    const calculateDespesas = sum(fluxoDeCaixa.despesas)

    const total = calculateReceita - calculateDespesas

    const itsOk = total >= 0

    let balanceText = 'negativo'

    if (itsOk) {
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

console.log(calculateBalance())


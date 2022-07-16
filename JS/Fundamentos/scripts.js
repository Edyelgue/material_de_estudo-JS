//============================================================================
// Graus Fahrenheit para graus Celsius
//============================================================================

console.log('Graus Fahrenheit para graus Celsius')
console.log('')

function celsius() {
    // C = (F - 32) * 5/9

    let fahrenheit = 70
    const constante = -32
    const constate_2 = 5/9

    console.log(`${fahrenheit}°F para °C é igual a:`)

    return (fahrenheit + constante) * constate_2
}

console.log(`${celsius().toFixed(0)}°C`)
console.log('')
console.log('===============================')
console.log('')

//============================================================================
// Celsius para fahrenheit
//============================================================================

console.log('°C para °F')
console.log('')

function fahrenheit_() {
    // F = C * 9/5 + 32

    let celsius2 = 21
    const constante = 9/5
    const constante_2 = 32

    return celsius2 * constante + (constante_2)
}
console.log('21°C para fahrenheit é igual a:')
console.log(`${fahrenheit_().toFixed(0)}°F`)


// callback function

function sayMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('estou em uma callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
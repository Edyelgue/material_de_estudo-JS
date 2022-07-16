// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.8
}

for( let property in person) {
    console.log(property)
    console.log(person[property])
    // ou
    // console.log(person["name"])
    // ou
    // console.log(person.name)
}
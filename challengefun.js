

function printInfo(firstName, lastName) {
    console.log(`My name is ${firstName} ${lastName}.`)
}
printInfo('Dustin', 'Burkert')

function printInfo(firstName, lastName) {
    return firstName + ' ' + lastName
}

printInfo('Dustin', 'Burkert')

console.log(`My name is ${printInfo('Dustin', 'Burkert')}.`)

function printInfo(firstName, lastName, title) {
    if (title == undefined) {
        return `${firstName} ${lastName}`
    } else {
        return `${title} ${firstName} ${lastName}`
    }
}
console.log(`My name is ${printInfo('Dustin', 'Burkert')}.`)
console.log(`My name is ${printInfo('Dustin', 'Burkert', 'King')}.`)

function printInfo(firstName, lastName, title) {
    return title ? `${title} ${firstName} ${lastName}` : `${firstName} ${lastName}`
}

console.log(`My name is ${printInfo('Dustin', 'Burkert')}.`)
console.log(`My name is ${printInfo('Dustin', 'Burkert', 'King')}.`)


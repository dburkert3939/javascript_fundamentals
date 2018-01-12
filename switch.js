let position = 'cook'
let payRate 
let amountOfWork = 'part-time'
let hoursWorked

switch (position.toLowerCase()) {
    case 'cashier':
        payRate = 8
        break
    case 'cook':
        payRate = 10
        break
    case 'manager':
        payRate = 14
        break
    case 'owner':
        payRate = 50
        break  
    default:
        payRate = 0
        break 
}
switch (amountOfWork.toLowerCase()) {
    case 'none':
        hoursWorked = 0
        break
    case 'little':
        hoursWorked = 10
        break
    case 'part-time':
        hoursWorked = 20
        break
    case 'medium': 
        hoursWorked = 30
        break
    case 'full-time':
        hoursWorked = 40
        break
    case 'insane':
        hoursWorked = 50
        break
    default:
        hoursWorked = 0
        break
}

console.log(`I work as a ${position}, so I earn $${payRate} per hour. I work ${hoursWorked} per week, so I make $${payRate*hoursWorked} weekly.`)




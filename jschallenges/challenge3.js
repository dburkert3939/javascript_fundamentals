let orderTotal = 120
let limitForFreeShipping = 100
let discounted = true
let specialCode = true

if(orderTotal >= 100) {
    console.log('You qualify for free shipping!')
} else {
    console.log('You need to pay for shipping.')
}

if(orderTotal >= limitForFreeShipping) {
    console.log('You qualify for free shipping!')
} else {
    console.log('You need to pay for shipping')
}

if(orderTotal >= limitForFreeShipping && !discounted) {
    console.log('You qualify for free shipping!')
} else {
    console.log('You need to pay for shipping')
}




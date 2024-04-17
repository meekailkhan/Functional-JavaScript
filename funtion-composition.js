// function composition
function addFive(n){
    return n+5
}

function multiplyByTwo(n){
    return n*2
}

function composeFunction(addFn,multiplyFn){
    return function(x){
        return addFn(multiplyFn(x))
    }
}

let forExecute = composeFunction(addFive,multiplyByTwo)
console.warn(forExecute(4))// in this case 4 is argument and it first multiply and then add 5 so => 4*2+5=13
let next = composeFunction(multiplyByTwo,addFive)
console.warn(next(4)) // in this case 4 is argument and it first adding and then multiply by two so => (4+5)*2

// plural word
function pluralWord(word){
    return `${word}s`
}

console.warn(pluralWord("head")) // heads
console.warn(pluralWord("tail")) // tails
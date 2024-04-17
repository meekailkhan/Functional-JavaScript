// iteration
for(let i = 0; i<=5;i++){
    console.log(i*i)
}

function iterationFactorial(num){
    let total = 1;
    while(num>0){
        total = total*num;
        --num
    }
    return total
}
console.log(iterationFactorial(8))




// recursion
function factorial(num){
    if(num===0 || num===1){
        return 1
    }else{
        return num*(factorial(num-1))
    }
}

console.log(factorial(5)) // output:120

function recursiveFibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return recursiveFibonacci(n-2) + recursiveFibonacci(n-1)
}

console.log(recursiveFibonacci(2)) // 1
console.log(recursiveFibonacci(6)) // 8
console.log(recursiveFibonacci(10)) // 55
console.log(recursiveFibonacci(20)) // 6765
console.log(recursiveFibonacci(13)) // 233




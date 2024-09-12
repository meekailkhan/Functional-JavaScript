// itration function 
function itresiveFibonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;

    let previous = 0;
    let current = 1;
    for(let i=n;i>1;i--){
        let next = previous + current;
        previous = current;
        current = next
    }
    return current
}

console.log(itresiveFibonacci(2)) // 1
console.log(itresiveFibonacci(6)) // 8
console.log(itresiveFibonacci(10)) // 55
console.log(itresiveFibonacci(20)) // 6765
console.log(itresiveFibonacci(13)) // 233



// recursive funtion
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
console.log(recursiveFibonacci(8))  //  
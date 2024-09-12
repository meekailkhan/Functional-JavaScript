// recursion function

function factorial(num){
    if(num===0){
        return 1
    }else{
        return num*(factorial(num-1))
    }
}
console.log(factorial(3)) //output: 6
console.log(factorial(4)) //output: 24
console.log(factorial(5)) //output: 120
console.log(factorial(6)) //output: 720

function countDown(num){
    if(num===0){
        return "Boom"
    }else{
        return countDown(num-1),num
    }
}
console.log(countDown(12))

function counting(num){
    console.log(num)
    if(num<100){
        counting(num+1)
    }
    
}
let data = 0
counting(data)

function sum(arr){
    if(arr.length === 1){
        return arr[0]
    }else{
        return arr[0] + sum(arr.slice(1))
    }
}
console.log(sum([1,2,3,4])) // output:10

// avoididng imutability in javascript

let arr = [1,2,3,4];

function addNumInArray(array,num){
    return [...array,num] //ye function aik array return karega jisme first argument wala array or second argument me jo number hoge wo dona hoge
}

let newArr = addNumInArray(arr,6);
console.warn(arr); //[1,2,3,4]
console.warn(newArr); //[1,2,3,4,6]
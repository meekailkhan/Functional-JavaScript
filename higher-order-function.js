// let num = 20;

// Number.prototype.coustomFn = function(x){
//     return x(this)
// };

// let result = num.coustomFn((x)=>x*5); //output
// console.warn(result)

// costom function for array itreate

let arr = [1,2,3,4,5,6]

Array.prototype.coustomMap = function(x){
    let index = this.length-1;
    let result = [];
    for(let i =0;i<index;++i){
        result.push(x(this[i]))
    }
    return result
    
}

let output = arr.coustomMap((item)=>item*10)
console.warn(output)


let arr2 = [2,4,78,5,7,91,6,4,];
 
let newArr = arr2.reduce((accumulator,value)=>{
    return value>accumulator ? value : accumulator;
})

console.warn(newArr)
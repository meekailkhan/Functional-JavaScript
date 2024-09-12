# pure function
> pure function is funtion who not include not variable of outer world and do not access variable of global scope but lexical scope

# not pure function
>not pure function is function who includes variable of outer world and can access variable of global scope


# side effect in funcion
> function who includes rest and further element that called side effect of function

# without side effect function
>function who take only input and give only output

# exercise of pure & not pure function
```js
function getDate(){
    return new Date.toDateString();
}
```
>this is not pure becuase new date is from outer world and every time given random result

```js
function getWorkshopDate(){
    return new Date(2024, 1 ,27).toDateString()
}
console.log(getWorkshopDate())
```
this is pure function just becuse it,s show every time same result

```js
function toHex(n){
    let hex = n.toString(16);
    return hex.padStart(4,0);
};
console.log(toHex(19));
```
this is pure function becuase this it,s show every time same output with same input 

```js
function rgbToHex(R,G,B){
    return "#"+[toHex(R),toHex(G),toHex(B)];
};
console.log(rgbToHex(123,233,167))
```
this function is pure just becuase the last function toHex(). who we write is pure so this function is pure

# Itretion Vs Recursion
>In javascript itertion and recursion are tecnique of programming of implimante loop
## `Itretion` 
```js
for(let i = 0; i<=5;i++){
    console.log(i*i)
}
```
>In itretion we run loop with loops like for loop ,while loop and do while loop
### `recursion`
```js
function factorial(num){
    if(num===0 || num===1){
        return 1
    }else{
        return num*(factorial(num-1))
    }
}
console.log(factorial(5)) // output:120
```

>In recursion we run our loop with function recursion is always functional and it self refrencial in this

# Higher Order Function
>Higher order function who function take an anothe function as a argument or provide function as a output may be both of them 

```js
Array.prototype.coustomMap = function(x){
    let index = this.length-1;
    let result = [];
    for(let i =0;i<index;++i){
        result.push(x(this[i]))
    }
    return result
    
}
```
# Clojures
>Clojures function who return another function or inner funcion. inner function can access variable and other data from our parent function 
>two type to write argument of there function,s
>1.) we can store man function in a variable with this argument and call variable with inner function argument varible whoever we difined
>2.) we can pass argument back to back when we call function which in first argument represent man function argument and second argument represent our inner function argument and this case we called currying

```js

function moodToday(day){
    return function(mood){
        return `${day} my mood is ${mood}.`
    }
}

let clearify = moodToday("today");
console.warn(clearify("happy"))
console.warn(moodToday("today")("neutral")) // this is currying 

```
# avoiding imutability
> we can do some changes in javascript variable and data without imutability with help of function acctully we dont chages in data but coping data and concat some value

```js
let arr = [1,2,3,4];

function addNumInArray(array,num){
    return [...array,num] //ye function aik array return karega jisme first argument wala array or second argument me jo number hoge wo dona hoge
}

let newArr = addNumInArray(arr,6);
console.warn(arr); //[1,2,3,4]
console.warn(newArr); //[1,2,3,4,6]

```

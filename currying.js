// currying in javasript

function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.warn(addition(1)(2)(3))

let user = {
    name:"meekail",
    age:18
}

function userInfo(obj){
    return function(objInfo){
        return obj[objInfo]
    }
    
}

let result = userInfo(user)

console.warn(result("age")) // 18
console.warn(result("name")) // meekail
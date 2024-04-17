// function with side effect

let obj = {name:"meekail",age:18};

function renameFunction(newName){
    obj.name = newName; //this is side effed of this function
    console.log("mujaahid") // this only console not string side effect
}

renameFunction("abcd")//mujaahid

// function without any side effect
let person = {
    name : "meekail",
    age :2005
}

function changes(oldPerson,newName){
    return {
        name: newName,
        age : oldPerson.age
    }
}

let person2 = changes(person,"mujaahid")

console.log(person) //{name:"meekail,age:2005"}
console.log(person2)// //{name:"mujaahid",age:2005"}

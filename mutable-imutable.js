// mutable and imutable

let oldCities = ["Delhi","Bombay","Bangalore"];
console.warn(oldCities[1])//Bombay : we can access the value
oldCities[1] = "Mumbai" // but we can not assinge value to saprate index

// but we can do with function
let newCities = oldCities.map((city)=>{
    if(city === "Bombay") return "Mumbai";
    if(city === "Bangalore") return "Bangluru";
    return city
})
console.warn(oldCities)
console.warn(newCities)

let str = "teekail";
console.warn(str);
console.warn(str[0])
str[0]= "M";
console.warn(str)
// function no.1
function getDate(){
    return new Date();
};
console.log(getDate());
// not pure

// function no.2
function getWorkshopDate(){
    return new Date(2024, 1 ,27).toDateString();
};
console.log(getWorkshopDate());
// pure

// function no.3 
function toHex(n){
    let hex = n.toString(16);
    return hex.padStart(4,0);
};
console.log(toHex(19));
// pure

// function no.4 
function rgbToHex(R,G,B){
    return "#"+[toHex(R),toHex(G),toHex(B)];
};
console.log(rgbToHex(123,233,167))
// pure 
// not pure function
let name = "meekail"

function hello(){
    console.log(`hello $${name}`)
}
hello() // hello meekail 
// this function is not pure becuase kyu ki ye funtion out world ki chijo ko access kar rha hai isliye ye function pure nhi hai
name = "mujaahid"
hello() // hello mujaahid

// pure function 
 
function fn(newName){
    console.log(`hello ${newName}`)
}

fn("meekail") // hello meekail
fn("mujaahid") // hello mujaahid
// this is pure function kyu ki is function me newName is function ka hi perameter hai aur ye funtion bahar ki chijo ka accrss nhi kar rha hai
// clojure,s

function moodToday(day){
    return function(mood){
        return `${day} my mood is ${mood}.`
    }
}

let clearify = moodToday("today");
console.error(clearify("happy"))
console.error(moodToday("today")("neutral"))
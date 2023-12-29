let num = 103.945

console.log(num.toFixed(2))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 10

let randomNum = Math.floor(Math.random() *(max - min +1 ))+ min
console.log(randomNum)

//challenge area 

let makeGues = function(guess){
    let min = 0
    let max = 4
    let randomNum = Math.floor(Math.random() *(max - min +1 ))+ min
    console.log(randomNum)
    return randomNum === guess
}

console.log(makeGues(2))
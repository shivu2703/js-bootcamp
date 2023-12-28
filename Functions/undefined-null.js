// undefined for variable

let name = 'jen'

if(name === undefined){
    console.log('Please provide a name')
} else{
    console.log(name)
}

//undefined for function argument
let square = function (num){
    console.log(num) // num will be undefined because while caling function we are not providing any arguments
}

let result = square() // function is not returning any thing
console.log(result)

// null as assigned value

let age = 27

age = null

console.log(age)
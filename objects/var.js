var firstName = 'Shivangi'

firstName = 'Katiyar'

var firstName ='Diksha' //  this is correct var allows this but let doesn't allow this

// var is a function based variable however let is a block based variable

if(10 === 10){
    var lastName = 'Gurjar'
}

console.log(lastName) // function based variable, present in scope of main function

const setName = function(){
    var name = 'jen'
}

setName()
//console.log(name) // function based variable , only accessible in the defined function
age =10
console.log(age) // hoisting is happening here
var age // see the explanation in below comments

// var age
// console.log(age)
// age =10
let name = '  Shivangi Katiyar  '

//length property
console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())

//convert to lowercase
console.log(name.toLowerCase())

let password = 'abc983password'

//includes method
console.log(password.includes('password'))

//trim method
console.log(name.trim())

//challenge area  

let isValidPassword = function(password){
    return password.length>8 && (!password.includes('password'))
}

console.log(isValidPassword('hihi'))
console.log(isValidPassword('abc2389^*&*(&'))
console.log(isValidPassword('hikspassword'))
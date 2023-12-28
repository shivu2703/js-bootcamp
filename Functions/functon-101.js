// Function - input(arguments),  code , output (return value)

let greetUser = function(){
    console.log(' welcome user!!')
}

greetUser()
greetUser()


let square = function(num){
    let result = num * num
    return result
}

let value = square(3)
let anotherValue = square(10)
console.log(value , anotherValue)


//convert fahrenheit to celcius

let fahrToCelci = function(fahrenTemp){
    let celcius = (( fahrenTemp - 32)/9)*5
    return celcius
}

let celcitemp_32 = fahrToCelci(32)
let  celcitemp_68= fahrToCelci(68)

console.log(celcitemp_32,celcitemp_68)
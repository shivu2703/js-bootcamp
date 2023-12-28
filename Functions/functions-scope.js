// global scope (fahrToCelci, celcitemp_32, celcitemp_68)
// local scope (fahrenTemp, celcius)
   // local scope (isFreezing)

let fahrToCelci = function(fahrenTemp){
    let celcius = (( fahrenTemp - 32)/9)*5

    if (celcius <= 0){
        let isFreezing = true
    }
    return celcius
}

let celcitemp_32 = fahrToCelci(32)
let  celcitemp_68= fahrToCelci(68)

console.log(celcitemp_32,celcitemp_68)
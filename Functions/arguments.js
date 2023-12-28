// Multiple Arguments

let add = function( a, b , c){
    return a + b + c
}

let result = add(12,3,6)
console.log(result)

// default Arguments

let getScoreText = function ( name = 'Anonymous', score = 0){
    //return 'NAME: '+ name + " - SCORE: "+ score
    return `NAME: ${name} - SCORE: ${score}`
}

//let value= getScoreText('shivangi')
let value = getScoreText(undefined, 90)
console.log(value)

//Challenge
// A 25% tip on $100 would be $25
let getTip = function( total , tipPercent = .2){
    //return total * tipPercent
    let percent = tipPercent*100
    let tip = total * tipPercent
     return `A ${percent}% on $${total} would be $${tip}`
     //return `A ${tipPercent*100}% on $${total} would be $${total * tipPercent}`
}

let tip = getTip(100)
console.log(tip)
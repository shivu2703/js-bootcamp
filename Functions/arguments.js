// Multiple Arguments

let add = function( a, b , c){
    return a + b + c
}

let result = add(12,3,6)
console.log(result)

// default Arguments

let getScoreText = function ( name = 'Anonymous', score = 0){
    return 'NAME: '+ name + " - SCORE: "+ score
}

//let value= getScoreText('shivangi')
let value = getScoreText(undefined, 90)
console.log(value)

//Challenge

let getTip = function( total , tipPercent = .2){
    return total * tipPercent
}

let tip = getTip(100, .25)
console.log(tip)
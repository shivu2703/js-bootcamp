//lexical scope (static scope)
//global scope - defined outside of all code blocks
// local scope - defined inside a code block

// global scope (varOne)
// local scope (varTwo)


let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'

    if(true){
        let varFour = 'varFour'
        console.log(varOne,varTwo,varFour)
    }
}

if(true){
    let varThree = 'varThree'
}


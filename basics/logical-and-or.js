let temp = 65

// logical and operator - true if both sides are true, false otherwise
//logical or operator - true if at least one side is true, false otherwise

if(temp>=60 && temp<=90){
    console.log('It is pretty nice out')
}


if( temp<=0 || temp>=120){
    console.log('Do not go outside')
}


let isGuestOneVegan = true
let isGuestTwoVegan = true

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Offering vegan dishes!!')
} else if( isGuestOneVegan || isGuestTwoVegan){
    console.log('offering something from vegan')
} else{
    console.log('offering anything from menu!!')
}
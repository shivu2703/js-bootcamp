let accountLocked = false
let userRole= 'admin'

if(accountLocked){
    console.log('Account is locked!')
} else if(userRole === 'admin'){
    console.log('Welcome admin!')
} else{
    console.log('Welcome!!')
}


//challenge
let temp =45

if(temp <= 32){
    console.log('It is freezing outside!')
} else if (temp >= 110){
    console.log('It is pretty hot outside!')
} else {
    console.log('Go for it its pretty nice out there !')
}
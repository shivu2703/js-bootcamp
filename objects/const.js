// difference between const and let - we can't re-assign the value of const

const isRaining = true

// isRaining = false // this is wrong we can't re-assign const value

console.log(isRaining)

const person ={
    age : 27
}

// person= {} // this is wrong we can't re-assign const value

person.age=26 // this is correct , we can still modify the object property if we declare it as const

console.log(person)
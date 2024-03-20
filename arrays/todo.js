const todos = ['Do some Yoga' , 'Read the book' , 'Have dryfruits' , 'Do some painting' , 'Do skin care']

//challenge
// todos.splice(2,1)
// todos.push('have your breaksfast on time')
// todos.shift()

todos.forEach(function(todo,index){
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

// console.log(`You have ${todos.length} todos`)
// console.log(todos)  

// for(let i=0;i<3;i++){
//     console.log(i)
// }

for ( let count =0 ;count<todos.length;count++){
    console.log(`${count +1}. ${todos[count]}`)
}


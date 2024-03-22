const todos = [{
    text:'Do some Yoga',
    completed: true
}, {
    text:'Read the book',
    completed:false
}, {
    text:'Have dryfruits',
    completed:true 
},{ 
    text:'Do some painting',
    completed:false
},{ 
    text:'Do skin care',
    completed:true
}]


const deleteTodo = function(todos,todoText){
      const index=todos.findIndex(function(todo,index){
            return todo.text.toLowerCase() === todoText.toLowerCase()
      })
      
      if(index > -1){
        todos.splice(index,1)
      }
}

const getThingsToDo = function(todos){
    const filtererdTodos= todos.filter(function(todo){
        return !todo.completed
    })
    return filtererdTodos
}


console.log(getThingsToDo(todos))

// deleteTodo(todos,'do skin care')
// console.log(todos)
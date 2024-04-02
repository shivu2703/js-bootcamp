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

const filters={
    searchText:'',
    hideCompleted:false
}



const renderedTodos= function(todos,filters){
    const filteredTodos= todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch= !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#todos').innerHTML=''
 
    let count=0
    filteredTodos.forEach(function(todo){
        if(todo.completed ===  false){
            count++
        }
    })

    const paragraphTodoLeft=document.createElement('h2')
    paragraphTodoLeft.textContent=`You have ${count} todos left!`
    document.querySelector('#todos').appendChild(paragraphTodoLeft)
    
    filteredTodos.forEach(function(todo){
        const todoEl=document.createElement('p')
        todoEl.textContent=todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderedTodos(todos,filters)
document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText=e.target.value
    renderedTodos(todos,filters)
})

document.querySelector('#new-todo').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.text.value,
        completed: false
    })
    renderedTodos(todos,filters)
    e.target.elements.text.value=''
})

document.querySelector('#hide-completed').addEventListener('change',function(e){
      filters.hideCompleted=e.target.checked
      renderedTodos(todos,filters)
})

// //listen for new todo-creation
// document.querySelector('#add-todo').addEventListener('click',function(e){
//     console.log('adding new todo')
// })

// //listen for todo text change
// document.querySelector('#new-todo-text').addEventListener('input',function(e){
//     console.log(e.target.value)
// })
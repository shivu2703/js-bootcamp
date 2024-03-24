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

let count=0
todos.forEach(function(todo){
    if(todo.completed ===  false){
        count++
    }
})

const paragraphTodoLeft=document.createElement('h2')
paragraphTodoLeft.textContent=`You have ${count} todos left!`
document.querySelector('body').appendChild(paragraphTodoLeft)

todos.forEach(function(todo){
    const paragraphTodo=document.createElement('p')
    paragraphTodo.textContent=todo.text
    document.querySelector('body').appendChild(paragraphTodo)
})




// const paragraphs=document.querySelectorAll('p')

// paragraphs.forEach(function(todo){
//     if(todo.textContent.includes('the')){
//         todo.remove()
//     }
// })

document.querySelector('button').addEventListener('click',function(e){
    console.log('adding new todo')
})
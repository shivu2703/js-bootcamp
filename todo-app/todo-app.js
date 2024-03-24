const paragraphs=document.querySelectorAll('p')

paragraphs.forEach(function(todo){
    if(todo.textContent.includes('the')){
        todo.remove()
    }
})
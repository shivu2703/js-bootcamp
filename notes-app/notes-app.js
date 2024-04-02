const notes=[{
    title:'Next trip',
    body:'Kasol'
},{
    title:'habbits to work on',
    body:'Exercise'
},{
    title:'office modification',
    body:'get a new seat'
}]

document.querySelector('#create-note').addEventListener('click',function(e){
    e.target.textContent='The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click',function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('change',function(e){
    console.log(e.target.value)
})


// document.querySelector('button').addEventListener('click',function(e){
//     e.target.textContent='The button was clicked'  

// })

// document.querySelectorAll('button')[1].addEventListener('click',function(e){
//     console.log("delete all notes!!")
// })
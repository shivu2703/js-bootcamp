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

const filters={
    searchText: ''
}

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML= ''

    filteredNotes.forEach(function(note){
        const noteEL= document.createElement('p')
        noteEL.textContent= note.title
        document.querySelector('#notes').appendChild(noteEL)
    })
}

renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click',function(e){
    e.target.textContent='The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click',function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText=e.target.value
    renderNotes(notes,filters)
})
// document.querySelector('#search-text').addEventListener('change',function(e){
//     console.log(e.target.value)
// })


// document.querySelector('button').addEventListener('click',function(e){
//     e.target.textContent='The button was clicked'  

// })

// document.querySelectorAll('button')[1].addEventListener('click',function(e){
//     console.log("delete all notes!!")
// })
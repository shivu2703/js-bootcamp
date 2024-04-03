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

const user={
    name:'Shivangi',
    age: 27
}

const userJson=JSON.stringify(user)
console.log(userJson)
localStorage.setItem('user',userJson)

const userJsonString = localStorage.getItem('user')
const userobject=JSON.parse(userJsonString)
console.log(`${userobject.name} is ${userobject.age}`)






//CRUD Operations

// c -> create -> setItem
// localStorage.setItem('location', 'kanpur')

// R-> Read -> getItem
// console.log(localStorage.getItem('location'))

// u-> update -> setItem
// localStorage.setItem('name','shivangi')

//  d -> delete -> removeItem
// localStorage.removeItem('location')
// localStorage.removeItem('name')

// to delete everthing from local storage - > clear()
// localStorage.clear()

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

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText=e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#create-note').addEventListener('click',function(e){
    e.target.textContent='The button was clicked'
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})



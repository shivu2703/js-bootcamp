let notes=[]

const filters={
    searchText: ''
}

//check the existing saved data
const notesJSON = localStorage.getItem('notes')
if(notesJSON !== null){
   notes=JSON.parse(notesJSON)
}

// const user={
//     name:'Shivangi',
//     age: 27
// }

// const userJson=JSON.stringify(user)
// console.log(userJson)
// localStorage.setItem('user',userJson)

// const userJsonString = localStorage.getItem('user')
// const userobject=JSON.parse(userJsonString)
// console.log(`${userobject.name} is ${userobject.age}`)






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

    console.log(filteredNotes)
    
    document.querySelector('#notes').innerHTML= ''

    filteredNotes.forEach(function(note){
        const noteEL= document.createElement('p')
        if(note.title.length >0){
            noteEL.textContent= note.title
        }else{
            noteEL.textContent='Unnamed notes'
        }
       
        document.querySelector('#notes').appendChild(noteEL)
    })
}

// renderNotes(notes,filters)

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText=e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#create-note').addEventListener('click',function(e){
    notes.push({
        title:'',
        body:''
    })
    localStorage.setItem('notes',JSON.stringify(notes))
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})



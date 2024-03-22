const notes=[{},{
  title:'Next trip',
  body:'Kasol'
},{
  title:'habbits to work on',
  body:'Exercise'
},{
  title:'office modification',
  body:'get a new seat'
}]

const index= notes.findIndex(function(note,index){
    console.log(note)
    return note.title === 'habbits to work on'
})

console.log(index)


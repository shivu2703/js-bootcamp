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

const findNote=function(notes,noteTitle){
    const index=notes.findIndex(function(note,index){
      return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
  return notes[index]
}

const note= findNote(notes,'Habbits to work on')
console.log(note)
// const index= notes.findIndex(function(note,index){
//     console.log(note)
//     return note.title === 'habbits to work on'
// })

// console.log(index)


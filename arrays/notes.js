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
    const note=notes.find(function(note,index){
      return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
  return note
}

const findNotes = function(notes,query){
  const filtererdNotes = notes.filter(function(note,index){
    const isTitleMatched= note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatched= note.body.toLowerCase().includes(query.toLowerCase())
    return isBodyMatched || isTitleMatched
  })
  return filtererdNotes
}

// const findNote=function(notes,noteTitle){
//   const index=notes.findIndex(function(note,index){
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
// return notes[index]
// }

const note= findNotes(notes,'trip')
console.log(note)



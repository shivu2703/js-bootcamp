const notes =[ 'Note 1', 'Note 2', 'Note 3']

console.log(notes.length)
// pop and push - delete and add element in the end
notes.push('Note 4')
notes.pop()

//shift and unshift - delete and add element in the start of array
notes.shift()
notes.unshift('Note 1')

//splice- we use add and remove elemet at the same time 
// (index from where you want to delete, how many element you want to delete, element you want to add at the given index)
notes.splice(2,0,'hi')

const name=['shivangi','katiyar']

name.forEach(function(elem,index){
  console.log(`${index+1}. ${elem}`)
})
notes.forEach(function(note,index){
    console.log(index)
    console.log(note)
  })
  console.log(`We have ${notes.length} notes`)
  console.log(notes)
  
  // for(let count =0;count<notes.length;count++){
  //     console.log(notes[count])
  // }

  // const index= notes.findIndex(function(note,index){
//     console.log(note)
//     return note.title === 'habbits to work on'
// })

// console.log(index)
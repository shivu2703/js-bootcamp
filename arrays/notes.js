const notes =[ 'Note 1', 'Note 2', 'Note 3']

// pop and push - delete and add element in the end
// notes.push('Note 4')
// notes.pop()

//shift and unshift - delete and add element in the start of array
// notes.shift()
// notes.unshift('Note 1')

//splice- we use add and remove elemet at the same time 
// (index from where you want to delete , how many element you want to delete, element you want to add at the given index)
// notes.splice(2,0,'hi')

notes.forEach(function(note,index){
  console.log(index)
  console.log(note)
})
console.log(`We have ${notes.length} notes`)
console.log(notes)

// for(let count =0;count<notes.length;count++){
//     console.log(notes[count])
// }
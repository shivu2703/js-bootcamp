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
//DOM- Document Object Model

// Query and Remove
// const p=document.querySelector('h1')
// p.remove()

// Query All and remove
const ps=document.querySelectorAll('p')
ps.forEach(function(p){
    //p.remove()
    // console.log(p.textContent)
    p.textContent="**************"
})

//Add a new element 

//create a new element
const newParagraph= document.createElement('p')

// give some meaning content to this above created element
newParagraph.textContent='This is new element from javascript.'

//place that element in html file
document.querySelector('body').appendChild(newParagraph)
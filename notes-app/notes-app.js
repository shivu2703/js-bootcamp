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
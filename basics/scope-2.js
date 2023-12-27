// global (name)
  // local
    // local
  // local



let name = 'Shivangi'

if(true){
    let name = 'Shivangi Katiyar' // variable shodowing 

    if(true){
        name = 'Katiyar' // replace it's parents variable value 
        // create name as a global variable if we didn't define anywhere in program
        console.log(name)
    }
}

if(true){
   console.log(name)
}
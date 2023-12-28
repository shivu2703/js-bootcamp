let myBook = {
    title: 'The monk who sold his ferrari',
    author: 'Robin Sharma',
    pageCount: 160
}

console.log(`${myBook.title} by ${myBook.author} having pagecount as ${myBook.pageCount}`)

myBook.title='The 5am club'

console.log(`${myBook.title} by ${myBook.author} having pagecount as ${myBook.pageCount}`)

//challenge

let person = {
    name: 'Shivangi',
    age: 26,
    location: 'Kanpur'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age=person.age+1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
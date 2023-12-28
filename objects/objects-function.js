let myBook = {
    title: 'The monk who sold his ferrari',
    author: 'Robin Sharma',
    pageCount: 160
}

let otherBook = {
    title: 'Do epic shit',
    author: 'Ankur warikoo',
    pageCount: 130
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

    // console.log(`${book.title} by ${book.author} having pagecount as ${book.pageCount}`)
}

let bookSummary= getSummary(myBook)
let anotherBookSummary= getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//challenge
//create function - take fahrenheit in - return object with all three

let fahrtoAll = function(fahren){
    // let celcius = (( fahren - 32)/9)*5
    // let kelvin = (fahren + 459.67)* 5/9
    return {
        celciusTemp: (( fahren - 32)/9)*5,
        kelvinTemp: (fahren + 459.67)* 5/9,
        fahrenTemp: fahren
    }
}

let tempAll= fahrtoAll(32)
console.log(tempAll)
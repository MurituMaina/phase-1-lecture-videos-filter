let books = [
    {
      title: "Eloquent JavaScript",
      price: 16.00,
      inventory: 5
    },
    {
      title: "JavaScript: The Good Parts",
      price: 10.50,
      inventory: 10
    },
    {
      title: 'Learn JavaScript VISUALY',
      price:  25.00,
      inventory: 2
    },
    {
      title: 'You don\'t Know JavaScript',
      price: 60.00,
      inventory: 8
    },
    {
      title: 'JavaScript: The Definitive Guide',
      price: 18.95,
      inventory:7
    },
  ]

  // will loop through the inventory
  //Find the first object whose condition returns true based on a callback
//   function loopThroughAndFind(inventory, finder){
// let result = null
// for(let item of inventory){
//     if(finder(item)=== true){
//         result = item
//         break;
//     }
// }
// return result
//   }
//use .find
let foundItem = books.find(stockFirst)
let foundItem2 = books.find(buk =>  buk.title === 'JavaScript: The Definitive Guide')
console.log(foundItem)
console.log(foundItem2)
  // will find a  given book
//   function isBook(buk){
//     let bookt = buk.title === 'JavaScript: The Definitive Guide'
//     if(bookt === true){
//         console.log(`The Book ${buk.title} rocks!!!`)
//     }
//     return buk.title === 'JavaScript: The Definitive Guide'
//   }

  //Will find the first book that needs to be restocked
  function stockFirst(item){
    let guess = item.inventory < 3
    if(guess === true)
    {console.log(` The Book: ${item.title} needs to be restocked`)}
    return item.inventory < 3
}


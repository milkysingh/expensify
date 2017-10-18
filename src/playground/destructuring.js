// const book={
//     name:"Maldives dairies",
//     "author":"Malkeet Singh",
//     publisher:{
//         // name:"General penguins"
//     }
// }
// const {name:publisherName='self-published'}=book.publisher;
// console.log(publisherName);

const coffeeShop=[,'2.50','3.0','3.50'];

const [name='item',,medium]=coffeeShop;
console.log(`${name} costs ${medium}$`)
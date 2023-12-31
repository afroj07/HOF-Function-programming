let store ={
    item1:10,
    item2:43,
    item3:79,
    item4:89,
}

let rupees = 80;
 
function convertDollerToRupee(stores,rupees){
   return Object.fromEntries((Object.entries(stores).map(([item, price])=>[item, (price*rupees)+' Rs']))); // save typeError problem
}

let newPrice = convertDollerToRupee(store, rupees);

console.log(`item in Doller:`, store)
console.log(`item in Ruppees :`, newPrice);
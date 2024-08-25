//CommonJs, Every Js is a module by default
//Modules- Encapsulated Code (only share minumun)
const names=require('./4-names');
const sayHi=require('./5-utils');
const {items,singlePerson}=require('./6-alternative-flavour')

console.log(items)
console.log(singlePerson)

// sayHi("Zaibi")
// sayHi(names.zohaib)
// sayHi(names.saeed)
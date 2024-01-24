const sys= Symbol("kale")
const person={
    name:"ayush",
    email:"ayushkale.com",
    "password":"1234567",
    [sys]:"lkjh"
}
//console.log(person.name)
const {name :n,email:e}=person
console.log(n)
console.log(e)
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.hasOwnProperty('name'))
//console.log(person)
// console.log(person.name)
// console.log(person.password)
// console.log( person[sys])
// person.email="microsoft.com"
// Object.freeze(person)
// person.email='google.com';
// console.log(person)

// person.gretting=function(){
//     console.log(`this is my function`)
// }
// person.grettingtwo=function(){
//     console.log(`this is my function ${this.email} skdj ${this.password}`)
// }
// person.gretting()
// person.grettingtwo();
// console.log(person.grettingtwo())

// const obj1={
//     1:"a",
//     2:"b"
// }
// const obj2={
//     3:"c",
//     4:"d"
// }
// //const obj3={obj1,obj2}
// // console.log(obj3)
// //const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3)
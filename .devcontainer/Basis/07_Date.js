let myDate=new Date()
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleTimeString())  

let myCreatedDate=new Date(2024,0,22)
let newDate=new Date();
console.log(newDate.toLocaleDateString('en-IN'))
console.log(newDate.toDateString());
console.log(myCreatedDate.toJSON())
console.log(myCreatedDate.toDateString())
// function myfunction (num1,num2){
//     console.log(num1+num2)
// }
// myfunction(10,20)

// function myFunction(num1,num2){
//     return num1+num2
// }
// myFunction(10,20)
// function myfucntion1(...num1){
//     console.log(num1)
// }
// myfucntion1(10,203,4,"ayush")
// function objectHandel(anyobject){
//     console.log(`this is my object value ${anyobject.name} and ${anyobject.age}`)
// }
// objectHandel({
//     name:"ayush",
//     age:34
// })
// console.log(myfunction(23))

// function myfunction1(num1)
// {
//     return num1+12
// }
// console.log(myfunction(23))
// const myfunction=function(num2){
//     return num2+34
// }

// const user={
//     name:'ayush',
//     price:300,

//    const  GetDetailsfunction(){
//         console.log(`user name is${this.name} and price is ${this.price}`)
//     }
// }

// user.GetDetailsfunction();
// user.name="rajesh"
// user.GetDetailsfunction();
// console.log(this)

// const user=function(){
//     console.log("hello world")
// }
// user();

// const person=()=>{
//     console.log(23+45)
//     console.log(this)
// }
// person();

// const add=(...values)=>(values+10)

// console.log(add(12,23,34,45))

// (function ayush (){
//     //nameed IIfe 
//     console.log(`function`)
// })();


// (()=>{
//     console.log("database connection")
// })();

const map=new Map()
map.set('1','indore')
map.set('2','surat')
map.set('3','rajkot')
for (const [key ,value] of map) {
    console.log(`value are ${key} :- ${value}`)
}

// ((object)=>{
// console.log(`database connection done ${object.name} and ${object.email}`)
// })({
//     name:'ayush',
//     email:"ayushkale@gmail.com"
// });
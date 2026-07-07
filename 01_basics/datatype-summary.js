// whole data type divide into  two catogry 1.primitive(call by value:it gives copy data): 7 types  String,Number,Boolean,null,undefine,Symbol,BigInt
const score=100
console.log(typeof(score))

const scoreValue=100.3
console.log(typeof(scoreValue))


const isLoggedIn=false
console.log(typeof(isLoggedIn))


let outSideTemp=null
console.log(typeof(outSideTemp))


const id=Symbol('123')
console.log(typeof(id))


const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber=3625327746643438n
  //bigint
  console.log(typeof(bigNumber))






//2.Reference Type/non-primitive:Function,Object,Array

const heros=["shaktiman","naagraj"]
console.log(typeof(heros))


let my_obj={
    name:"adarsh",
    age:22
}
console.log(typeof(my_obj))


const my_fun=function(){
    console.log("Hello world !")
}
console.log(typeof(my_fun))

//javaScript:dynamic type

console.log(typeof(bigNumber))


//Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 123435232545233n


//Reference (Non primitive)

//Array, Objects, Functions  

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"sanket",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}



//+++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "creativeThinkers"
let anothername = myYoutubename
anothername = "ImpossibleDream"


console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "sanketmondal@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

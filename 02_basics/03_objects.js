//singleton


//object literals
// object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Sanket",
    "full name":"Sanket Mondal",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"sanketmondal893@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "sanket89.com"
// Object.freeze(JsUser)
JsUser.email = "sanket830.com"
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




 
//const tinderuser = new object() //This is singleton object
const tinderuser = {} //This is non singleton object
tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sanket",
            lastname:"Mondal"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2};
// console.log(obj3);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLogged'));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}


//course.courseInstructor
const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name" :"sanket",
//     "coursename":"Js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]

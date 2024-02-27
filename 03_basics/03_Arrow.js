const user = {
    username:"sanket",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to wesite`);
        // console.log(this)
    }

}
//We can use this pointer in object


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)



// function chai(){
//     let username = "sanket"
//     console.log(this.username);
// }
// chai()
//we can not use this pointer in function



// const chai = function(){
//     let username = "sanket"
//     console.log(this.username)
// }
// chai()


//This is call arrow function
const chai = () => {
    let username = "sanket"
    console.log(this);
}

// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }

// const addTwo = (num1,num2) => num1+num2;

// const addTwo = (num1,num2) => (num1+num2);

const addTwo = (num1,num2) => ({username: "sanket"})


console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]

// myArray.forEach()
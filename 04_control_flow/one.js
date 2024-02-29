//if 
const isUserloggedIn = true
const temperature = 41
if(temperature < 50){
    // console.log("less than 50");

}
else{
    // console.log("temperatue is greate than 50");
}


const score = 200
if(score>100)
{
    const power = "fly"
    console.log(`user power:${power}`);
}

// const balance = 1000
// if(balance>500) console.log("test");

// if(balance > 500){
//     console.log("less than");
// }
// else if(balance<750)
// {
//     console.log("less than 750");
// }
// else {
//     console.log("lest than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard){
    console.log("Allow to buy user");
}
if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("user logged in");
}

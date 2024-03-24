import inquirer from "inquirer";

type anstype = {
    guessuser:number
}
const sysgenno=Math.floor(Math.random()*100);


const answers = await inquirer.prompt([
    {
        type:"number",
        name:"guessuser",
        message:"Guess user a number :",

    }
])
 const {guessuser}=answers
 console.log(guessuser,"guessuser",sysgenno,"sysgenno");
 if(guessuser==sysgenno){

    console.log("Hurray ! you guessed the right number\n you won");
 }else{
console.log("Sorry ! you guessed the wrong number\n better luck next time");
 }



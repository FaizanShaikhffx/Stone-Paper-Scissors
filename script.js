let userScore = 0; 
let compScore = 0; 

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score"); 

const genCompChoice=()=>{
    // rock, paper, Scissors
    const options = ["rock", "paper", "scissors"]; 
    /* in javaScript this method is available but problem is it genrate number 
        0.6755677149981543 and we want to genrate numbers in 0 to 2 range 
        so we multiply that number with 3 ---->   
    */
    /* Math.floor is use for removing the fractional part of the number */ 
        const randomIdx = Math.floor(Math.random()*3); 
        return options[randomIdx]; 
    }
    const drawgame = ()=>{
        console.log("Game was draw ");   
        msg.innerText = "Game was draw. Play Again. "; 
        msg.style.backgroundColor = "#081b31";
    }
    const showWinner = (userWin, userChoice, compChoice)=>{
        if(userWin){
            userScore++; 
            userScorePara.innerText = userScore; 
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; 
            msg.style.backgroundColor = "green";
        }else{ 
            compScore++; 
            compScorePara.innerText = compScore; 
            console.log("you lose"); 
            msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`; 
            msg.style.backgroundColor = "red";
           
        }
    }

const playGame = ( userChoice) =>{  
    //  Users Choice --->
    console.log("user choice = ", userChoice);
    //  Computer Choice --->
    const compChoice = genCompChoice(); 
    console.log("computer choice = ", compChoice);


    if(userChoice===compChoice){
        // draw condition
        drawgame();
    }else{
        let userWin = true; 
        if(userChoice==="rock"){
            // scissors, paper 
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice==="paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // user choice Scissors
            //computer choice --->   rock, Paper 
            userWin = compChoice==="rock" ? false : true;  
        }
        showWinner(userWin, userChoice, compChoice); 
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
    const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    })
})



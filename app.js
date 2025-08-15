let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let para1 = document.getElementById("user-score");
let para2 = document.getElementById("comp-score");

const generateComputerChoice=()=>{
    const options=["rock","paper","scissor"]
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawgame=()=>{
    console.log("game was draw");
     msg.innerText="Game was Draw.Play Again";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        para1.innerText=userScore;
        console.log("you Win");
        msg.innerText=`you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        para2.innerText=compScore;
        console.log("you lose");
         msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
          msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("user choice =" ,userChoice);
    //generate computer choice

    const compChoice=generateComputerChoice();
    console.log("comp choice =",compChoice);
    if(userChoice===compChoice){
        drawgame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
             userWin = compChoice === "scissor"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
    
    showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });

});
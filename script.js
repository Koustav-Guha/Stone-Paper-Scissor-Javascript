let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#userscore");
const compscorePara = document.querySelector("#compscore");


const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin ) {
        userscore++;
        userscorePara.innerText = userscore;

        msg.innerText = `You Win , ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorePara.innerText = compscore;

        msg.innerText = `You Lose, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoce = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    const compChoice = genCompChoce();
    console.log("Computer Choice = ",compChoice);

    if(userChoice == compChoice){
        msg.innerText = "Draw Game, Try again !";
        msg.style.backgroundColor = "blue";
    }
    else{
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice == "paper"? false:true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice == "scissors" ? false:true;
        }
        else{
            userWin = compChoice == "rock" ? false:true;
        }
        showWinner(userWin ,userChoice,compChoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
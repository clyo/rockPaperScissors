

function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    let random = choices[Math.floor(Math.random()*choices.length)];
    //console.log(random);
    return random;
}

/*const buttonpress = document.querySelector('#btn1');
buttonpress.addEventListener('click', () =>{
    let playerChoice = btn1.innerHTML;
    playRound(getComputerChoice(),playerChoice);
});*/

const buttons = document.querySelectorAll('#btn');
buttons.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        let playerChoice = btn.innerHTML;
        playRound(getComputerChoice(),playerChoice);
    });
});


let playerScore = 0;
let compScore =0

function playRound(computerChoice, playerChoice){

console.log(computerChoice);
console.log(playerChoice);

document.getElementsByClassName('results');
let result = document.getElementsByClassName("results");
let content = document.createElement("div");
content.innertText = "Computer chose " + computerChoice.toLowerCase();
result[0].appendChild(content);


    if (computerChoice == playerChoice){
        alert("It's a tie");
        return 0;
    } else if (computerChoice == "Rock" & playerChoice == "Paper"){
        alert("You win!");
        return playerScore++;
    } else if (computerChoice == "Rock" & playerChoice != "Paper"){
        alert("You lose!");
        return compScore++;
    } else if (computerChoice == "Paper" & playerChoice == "Scissors"){
        alert("You win!");
        return playerScore++;
    } else if (computerChoice == "Paper" & playerChoice != "Scissors"){
        alert("You lose!");
        return compScore++;
    } else if (computerChoice == "Scissors" & playerChoice == "Rock"){
        alert("You win!");
        return playerScore++;
    } else if (computerChoice == "Scissors" & playerChoice != "Rock"){
        alert("You lose!");
        return compScore++;
    }

} 






//playRound(computerChoice, playerChoice);
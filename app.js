const playerChoiceElement = document.getElementById("player-choice");

const computerChoiceElement = document.getElementById("computer-choice");

const resultElement = document.getElementById("result");

const resultElement2 = document.getElementById("result2");

const counterElement = document.getElementById("counter");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

counterPc = 0;

counterPlayer = 0;

function startGame(event) {
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  const computerChoice = getComputerChoice();

  const result = calculateResult(playerChoice, computerChoice);

  
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  resultElement.innerText = result + ` usando ${playerChoice} , contra  ${computerChoice}`;

  showCounter(result);

}







const resetGame = function resetGame() {
  resultElement.innerText = "";
  counterElement.innerText = "0" + "-" + "0";
};

let showCounter = function showCounter(result) {
  if (result === "ganaste") {
    counterPlayer++;

    counterElement.innerHTML = counterPlayer + "-" + counterPc;

    if (counterPlayer >2) {
      
      alert("Has ganado !");
      counterPlayer = 0;
      counterPc = 0;

      resetGame();
    }
  } else if (result === "perdiste") {
    counterPc++;

    counterElement.innerHTML = counterPlayer + "-" + counterPc;

    if (counterPc >2) {
      alert("Has Perdido !");
      counterPlayer = 0;
      counterPc = 0;

      resetGame();
    }
  } else {
    counterPlayer = counterPlayer;
    counterPc = counterPc;
  }
};

//2 - Mejorar el <p id="result /> para que muestre la oración `Ganaste/Perdiste/Empataste con ${playerChoice} contra ${computerChoice}`.

//3 - Agregar un <p id="counter" /> que muestre cuántas veces ganó el jugador y cuántas la computadora.

//EXTRA (Opcional):

//1 - Que el <p id="counter" /> arranque en 0 - 0 y vaya sumando 1 cada vez que gana el jugador o la computadora.
//2 - El primero que llega a 3 victorias es el ganador real.

const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  return possibleChoices[computerChoice];
}

 function winnerHand (result){
  if (result==="ganaste") {
    resultElement2.innerHTML=`perdiste usando ${playerChoice} , contra  ${computerChoice}`;
  } else if (result==="perdiste") {
    resultElement2.innerHTML=`perdiste usando ${playerChoice} , contra  ${computerChoice}`;
 
    
  }
}


 function calculateResult(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    
    return "ganaste";
  } else if (playerChoice === computerChoice) {
   
    return "empataste";
  }
  {
  
    return "perdiste";
  }
}


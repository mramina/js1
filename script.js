
function getComputerChoice() {
  const choices = ['Камень', 'Ножницы', 'Бумага'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Ничья!";
  } 
  
  if (
    (playerSelection === 'камень' && computerSelection === 'ножницы') ||
    (playerSelection === 'ножницы' && computerSelection === 'бумага') ||
    (playerSelection === 'бумага' && computerSelection === 'камень')
  ) {
    return `Вы выиграли! ${capitalize(playerSelection)} побеждает ${capitalize(computerSelection)}`;
  } else {
    return `Вы проиграли! ${capitalize(computerSelection)} побеждает ${capitalize(playerSelection)}`;
  }
}


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playGame(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  document.getElementById('result').textContent = result;
}

document.getElementById('rock').addEventListener('click', () => playGame('камень'));
document.getElementById('scissors').addEventListener('click', () => playGame('ножницы'));
document.getElementById('paper').addEventListener('click', () => playGame('бумага'));
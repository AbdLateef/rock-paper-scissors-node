
const writeEvent = (text) => {
  const event = document.querySelector('#events');
  event.innerText = text;
};

const writeYourScore = (yourScore) => {
  var currentScore = parseInt(document.querySelector('#your-score').innerHTML);
  var newScore = currentScore + yourScore;
  document.querySelector('#your-score').innerText = newScore;
};

const writeOpponentScore = (opponentScore) => {
  var currentScore = parseInt(document.querySelector('#opponent-score').innerHTML);
  var newScore = currentScore + opponentScore;
  document.querySelector('#opponent-score').innerText = newScore;
};

const writeRound = (round) => {
  var currentRound = parseInt(document.querySelector('#round').innerHTML);
  var nextRound = currentRound + round;
  document.querySelector('#round').innerText = nextRound;
};

const addButtonListeners = () => {
  var hand = document.getElementById('hand').children;
  ['rock', 'paper', 'scissors'].forEach((id) => {
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
      for (i = 0; i < hand.length; i++) {
        hand[i].style.display = "none";
      }
      if(id == 'rock') {
        document.querySelector('#hand-rock').style.display = 'block';  
      } else if(id == 'paper') {
        document.querySelector('#hand-paper').style.display = 'block';  
      } else if(id == 'scissors') {
        document.querySelector('#hand-scissors').style.display = 'block';  
      }
      sock.emit('turn', id);
    });
  });
};

writeEvent('Rock Paper Scissors');

const sock = io();
sock.on('message', writeEvent);
sock.on('yourScore', writeYourScore);
sock.on('opponentScore', writeOpponentScore);
sock.on('round', writeRound);

addButtonListeners();

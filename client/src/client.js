var myChoice = null;

const writeEvent = (text) => {
  const event = document.querySelector('#events');
  event.innerText = text;
};

const oppCome = (status) => {
  if(status) {
    document.querySelector(".duck-opponent").style.display = "block";
  }
}

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

const writeOpponentChoice = (turns) => {
  oppChoice = turns.filter( item => item !== myChoice);
  var hand = document.getElementById('opponent-hand').children;
  for (i = 0; i < hand.length; i++) {
    hand[i].style.display = "none";
  }
  if(oppChoice[0] == 'rock') {
    document.querySelector('#opponent-hand-rock').style.display = 'block';  
  } else if(oppChoice[0] == 'paper') {
    document.querySelector('#opponent-hand-paper').style.display = 'block';  
  } else if(oppChoice[0] == 'scissors') {
    document.querySelector('#opponent-hand-scissors').style.display = 'block';  
  }
}

const writeRound = (round) => {
  var currentRound = parseInt(document.querySelector('#round').innerHTML);
  var nextRound = currentRound + round;
  if(currentRound < 5){
    document.querySelector('#round').innerText = nextRound;
  }else{
    document.querySelector('#round').innerText = 'Round Completed';
    document.querySelectorAll('.turn').forEach(elem => {
      elem.disabled = true;
    });
    var youScore = parseInt(document.querySelector('#your-score').innerHTML);
    var oppScore = parseInt(document.querySelector('#opponent-score').innerHTML);
    if(youScore > oppScore) {
      document.querySelector('#events').innerText = 'Done ! You Win.'
    }else{
      document.querySelector('#events').innerText = 'Game Over ! You Lost.'
    }
  }
  
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
      myChoice = id;
    });
  });
};

writeEvent('Rock Paper Scissors');

const sock = io();
sock.on('message', writeEvent);
sock.on('yourScore', writeYourScore);
sock.on('opponentScore', writeOpponentScore);
sock.on('round', writeRound);
sock.on('turns', writeOpponentChoice);
sock.on('opponentCome', oppCome);

addButtonListeners();

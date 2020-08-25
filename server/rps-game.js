
class RpsGame {

  constructor(p1, p2) {
    this._players = [p1, p2];
    this._turns = [null, null];

    this._sendToPlayers('Rock Paper Scissors Starts!');
    this._opponentCome();
    this._gameStartStatus();
    this._players.forEach((player, idx) => {
      player.on('turn', (turn) => {
        this._onTurn(idx, turn);
      });
    });
  }

  _gameStartStatus(){
    this._players.forEach((player) => {
      player.emit('startStatus', true);
    });
  }

  _opponentCome() {
    this._players.forEach((player) => {
      player.emit('opponentCome', true);
    });  
  }

  _sendToPlayer(playerIndex, msg) {
    this._players[playerIndex].emit('message', msg);
  }

  _sendToPlayers(msg) {
    this._players.forEach((player) => {
      player.emit('message', msg);
    });
  }

  _tellOpponentChoice(turn) {
    this._players.forEach((player) => {
      player.emit('turns', turn);
    });
  }
  
  _setRound(number) {
    this._players.forEach((player) => {
      player.emit('round', number);
    });
  }

  _onTurn(playerIndex, turn) {
    this._turns[playerIndex] = turn;
    this._sendToPlayer(playerIndex, `You selected ${turn}`);
    this._checkGameOver(turn);
  }

  _checkGameOver(myTurn) {
    const turns = this._turns;
    if (turns[0] && turns[1]) {
      this._tellOpponentChoice(turns);
      //this._sendToPlayers('Game over ' + turns.join(' : ')); // nanti coba pake ini masukin ke array trus filternya di client
      this._getGameResult();
      this._turns = [null, null];
    }
  }

  _getGameResult() {
    const p0 = this._decodeTurn(this._turns[0]);
    const p1 = this._decodeTurn(this._turns[1]);
    const distance = (p1 - p0 + 3) % 3;

    switch (distance) {
      case 0:
        this._sendToPlayers('Draw!');
        break;

      case 1:
        this._sendWinMessage(this._players[0], this._players[1]); //win player 0
        break;

      case 2:
        this._sendWinMessage(this._players[1], this._players[0]); //win player 1
        break;
    }
  }

  _sendWinMessage(winner, loser) {
    winner.emit('message', 'You won!');
    winner.emit('yourScore', 1);
    winner.emit('opponentScore', 0);

    loser.emit('message', 'You lost!.');
    loser.emit('yourScore', 0);
    loser.emit('opponentScore', 1);

    this._setRound(1);
  }

  _decodeTurn(turn) {
    switch (turn) {
      case 'rock':
        return 0;
      case 'scissors':
        return 1;
      case 'paper':
        return 2;
      default:
        throw new Error(`Could not decode turn ${turn}`);
    }
  }


}

module.exports = RpsGame;

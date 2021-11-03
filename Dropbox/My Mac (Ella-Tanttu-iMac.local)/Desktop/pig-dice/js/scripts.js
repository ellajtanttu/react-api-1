function Player() {
  
}



function rollDice() {
  return Math.ceil(Math.random() * 6);
}


Player.prototype.turnChange = function (){
  if (this.roll ===  1) {
    this.turnChange = false ;
  } else if (holdVariable === true ){
    totalScoreNumber += turnScore;
    this.turnChange = false;
  } else {
    this.turnChange = true;
  }
}
# _Pig Dice_

#### _EPICODUS PRACTICE: Create a web app to play Pig Dice_

#### By
* _**Ella Tanttu**_
* _**Kate Kiatsiri**_
* _**Jeff Terrell**_

## Technologies Used

* _CSS3_
* _HTML5_
* _JAVAscript_

## Description

_See prompt here: https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/game-of-choice-two-day-project_

## Setup/Installation Requirements

* _Navigate to https://github.com/pig-dice in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Connect to your github repository_
* _open pig-dice/index.html in your browser_
* _Open files in VS Code to edit_

## Known Bugs

_No known issues_

## License

_MIT Copyright (c) 2021 Ella Tanttu, Kate Kiatsiri, Jeff Terrell_
_https://opensource.org/licenses/MIT_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_
_Kate Kiatsiri keidsiri@gmail.com_
_Jeff Terrell jeffaterrell@gmail.com_

# TDD

## Problem Evaluation
Pig Dice (Recommended)
Write a program where two users can play Pig dice against each other.
Don't forget to write plain English specifications with example inputs and outputs before you begin coding!

Rules:
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
  - 2 players, switch off turns
  - each player rolls until HOLD || 1 is rolled

If the player rolls a 1, they score nothing and it becomes the next player's turn.
  - if 1 is rolled --> score = 0 , switch turns
If the player rolls any other number, it is added to their turn total and the player's turn continues.
  - if 2-6 is rolled --> score roll.val(), add roll.val() to turn total
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
  - if hold --> turn total is added to total score
The first player to score 100 or more points wins.
  - if total score === 100, game over

<!-- Further Exploration
  Add options to play one of the other variations of Pig Dice using two or more dice
  Add option to play the computer - easy or hard levels:
  Easy: Computer always stops after second roll.
  Hard: Computer uses strategy based on current total and rolled dice. -->

We will need:
  Dice - function/method (generates a random number)
  Five Buttons:
    - Hold (p1)
    - Roll (p1)
    - Hold (p2)
    - Roll (p2)
    - Reset Game
  turnScoreKeeper - function that adds each roll value to turnTotal
  ScoreKeeper - function that adds 0 or turnTotal to Scoreboard object
  Scoreboard - object or array that holds totalScore
  totalScore method - objectloop that adds each object together
  win method - if total score of 1 or 2 is >= 100, game over.
  changeTurn method

1. Dice Roll Function
2. ScoreKeeper Function: create turnTotal variable (update score for each player)
  -checks value of diceRoll method
  - if 1, score 0
    if 0 --> trigger scoreboard function
  - if 2-6, score that number
    store that in SCOREBOARD object
  - continue to click roll === ok
    until 100 is met
    or player clicks hold
  - incorporate changeTurn : if 1 or hold === true, { add message to DOM: "change to other player"}


Object Player
<!-- - String - "Name" -->
- this.roll = 0;
- this.turnScore = turnScore;
- this.totalScore = totalScoreNumber;
<!-- - this.turnChange = turn; -->


if player.turn === true 
  then add score to that player object


let player1 = 6;
let player2 = 0;

Player.prototype.turnChange = function (){
  if (this.roll ===  1) {
    this.turn = false ;
  } else if (holdVariable === true ){
    totalScoreNumber += turnScore;
    this.turn = false;
  } else {
    this.turn = true;
  }
}

total = 0;
if ( num === 1 || click hold) {
  return another player
} else {
  total += num;
}

function Player(roll, turn, turnScore, totalScore) {
  this.roll = roll;
  this.turnScore = turnScore;
  this.totalScoreNumber = totalScore;
  this.turn = turn;
}

1. PLAYER OBJECT CONSTRUCTOR
X 2. ROLL METHOD - tiggered by: roll button pushed
 - run roll method
 - number is returned
 - player.roll = number
3. TURN CHANGE METHOD - triggered by: player.roll.val() = 1
 X - roll value > player.turn
 - hold button trigger > player.turn
 - final result > player.turn = false
4. WIN METHOD -
 - if player.totalScore >= 100;
 - game over
MAIN FUNCTION


<!-- UI -->
1. Form Submit - Creates a player object
2. Second Form Submit - Creates another player object
3. First player hits roll -
    a. number 1 is returned
    b. number 2-6 is returned
      a. player rolls again, go to a. 
      b. player hits hold
4. Player ends turn (either way)
5. same sequence for Player 2
6. Player wins game (100 points)
7. player resets game

<!-- How to test a constructor--------
"It should create a new instance of a player object"
test: let player1 = new Player(..., ..., ....)
Expected Result: player1.score. >... -->

<!-- How to test a method--------

Code:
player1.turnChange();
expected output:
player1.turnchange = false -->


## Tests

Describe: Player Constructor

Test: "It should create a new instance of a Player object"
Code: let testPlayer = new Player(5, 0, 0, true);
Expected Result: testPlayer = Player { roll: 5, turnScore: 0, totalScoreNumber: 0, turn: true }

Describe: rollDice()

Test: "It should return a random number between 1-6"
Code: rollDice();
Expected Result: 5 (or other random number between 1-6)


Describe: Object.prototype.turnChange()

Test: "It should return false if this.roll === 1"
Code:
const rollValue = 1;
Player.turnChange(rollValue)
Expected Result: False

Test:
Code:
Expected Result:

Test:
Code:
Expected Result:

Test:
Code:
Expected Result:



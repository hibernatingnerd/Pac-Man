document.addEventListener('DOMContentLoaded', function(){
// a functional Tic Tac Toe javascript game.

//victory conditions array.
var victoryArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3]
];

// user can click a cell
var ticTacToeCell = document.querySelectorAll('td');

// these functions grabbed an array of number, then .every goes through each number //
// to match it against that answersArray[index] to see if it equals mark. //
var allCheckedX = function allCheckedX(indexes) {
  return indexes.every(function(i) {
      return answersArray[i] === 'X';
  });
}

var allCheckedO= function allCheckedO(indexes) {
  return indexes.every(function(i) {
      return answersArray[i] === 'O';
  });
}


// Main game state, iterate through ticTacToe array and let users pick squares.
var turnToggle = false;
var answersArray = [];
for(i = 0; i < ticTacToeCell.length; i ++) {
  answersArray.push(i + 1);
};
console.log(answersArray);

ticTacToeCell.forEach(function(i, index) {
    i.addEventListener('click', function(e, index) {
// turnToggle tracks where its X or O turn, answersArray tracks answersArray //
// finally winCheck sees if any conditions for victory have been met.
      if (turnToggle === false) {
        this.innerText = 'X';
        turnToggle = true;
        answersArray[i.className] = "X";
        winCheck();
      } else {
        this.innerText = 'O';
        turnToggle = false;
        answersArray[i.className] = "O";
        winCheck();
      }
    });
});
// win check. ugly. proceed with caution.
function winCheck() {
victoryArray.forEach(function (e) {
    if (allCheckedX(e) || allCheckedO(e)){
        window.alert('win');
    }
    });
  }

});

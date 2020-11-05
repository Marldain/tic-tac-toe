let currentPlayer = "X";
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll(".grid-cell");

// Loop over each element in our cellElementArray:
for (
  let elementIndex = 0;
  elementIndex < cellElementArray.length;
  elementIndex += 1
) {
  // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
  const currentCellElement = cellElementArray[elementIndex];

  // Add an event listener to the currentCellElement:
  currentCellElement.addEventListener("click", function (event) {
    // event.target tells us which element the user clicked (see Resources links below):
    const clickedCellElement = event.target;

    if (currentPlayer === "X") {
      clickedCellElement.innerHTML = "X";
      currentPlayer = "O";
      playerXSelections.push(clickedCellElement.id);
    } else {
      clickedCellElement.innerHTML = "O";
      currentPlayer = "X";
      playerOSelections.push(clickedCellElement.id);
    }

    // Log the ID of the cell which was just clicked:
    console.log("You clicked on cell number: " + clickedCellElement.id);
  });
}

//define a function named checkForWin which accepts two arrays as arguments: winningCombination and playerSelections
//    for every winning combination array in winningCombination
//        create a matches variable to keep track of the number of matches we find in playerSelections
//        for every number in the current combination array
//           if the playerSelections array contains the current number, increment matches by 1
//            if matches is **equal** to 3, we found a win, so return true (which will stop the loop and exit the function)
//    if we got through all combinations without returning true, then return false because no win was found

function checkForWin(winningCombinations, playerSelections) {
  for (let i = 0; i < winningCombinations.length; i++) {
    let matches = 0;
    let currentCombination = winningCombinations[i];

    for (let j = 0; j < currentCombination.length; j++) {
      let newCombination = currentCombination[j];
      if (playerSelections.includes(newCombination)) {
        matches++;
        if (matches === 3) {
          return true;
        }
      }
    }
  }
  return false;
}
//if ((playerXSelections.matches = true)) {
//  alert("Player X wins");
//}

//When a player wins, create an alert (or something on the page) stating which player won and then reset the board for a new game.
//To reset the board, we’ll need to clear the player selection arrays and erase our X’s and O’s.

//Make sure you check for a draw!
//One way you could do this is by checking the combined .length of the player selection arrays and seeing if 9 moves have been made.
//If 9 have been made, then you know the board is full without anyone having selected a winning combination.

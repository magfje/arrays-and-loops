let board = ["x", "o", "", "", "", "", "", "", ""];
let winner = "";

function view() {
  document.getElementById("main").innerHTML = `
          <div id="grid-container"></div>
          <button onclick="resetBoard()" class="reset">reset</button>
          <div>${winner}</div>
        `;

  createBoard();
}

function createBoard() {
  for (let i = 0; i < board.length; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-item");
    square.id = "square" + i;
    square.textContent = board[i];
    if (square.textContent == "" && !checkWinning()) {
      square.addEventListener("click", function () {
        setX(i);
      });
    }
    document.getElementById("grid-container").appendChild(square);
  }
}

function setX(squareID) {
  board.splice(squareID, 1, "x");
  checkWinning();
  setRandom();
  view();
}

function setRandom() {
  let isBlank = Array.from(board.keys()).filter((i) => board[i] === "");
  let random = Math.floor(Math.random() * isBlank.length);
  let randomBlank = isBlank[random];

  if (randomBlank !== undefined) {
    board.splice(randomBlank, 1, "o");
  }

  checkWinning();
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  winner = "";
  view();
}

function checkWinning() {
  // Row
  for (let i = 0; i < 9; i += 3) {
    if (
      board[i] === board[i + 1] &&
      board[i + 1] === board[i + 2] &&
      board[i] !== ""
    ) {
      winner = board[i] + " is the winner";
      return true;
    }
  }

  // Column
  for (let i = 0; i < 3; i++) {
    if (
      board[i] === board[i + 3] &&
      board[i + 3] === board[i + 6] &&
      board[i] !== ""
    ) {
      winner = board[i] + " is the winner";
      return true;
    }
  }

  // Diagonal
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
    winner = board[0] + " is the winner";
    return true;
  }
  if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
    winner = board[2] + " is the winner";
    return true;
  }
  // Check Tie
  let isBlank = Array.from(board.keys()).filter((i) => board[i] === "");
  if (isBlank == 0) winner = "TIE!";

  return false;
}
view();

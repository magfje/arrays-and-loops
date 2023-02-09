let numbers = [1, 3, 2, 5, 4, 7, null, 8, 6];
let winNumbers = [1, 2, 3, 4, 5, 6, 7, 8, null];
let clicks = "0";
let a, b, c, d;
let countText = "Count: ";
view();

function view() {
  document.getElementById("main").innerHTML = `
            <div class="grid-container" id="gridID"></div>
            <h2 id="clickCount">${countText}${clicks}</h2>
            `;
  numView();
}

function numView() {
  for (i = 0; i < numbers.length; i++) {
    let newNum = document.createElement("div");
    newNum.classList.add("grid-item");
    newNum.id = "grid" + i;
    newNum.innerHTML = numbers[i];
    document.getElementById("gridID").appendChild(newNum);
  }
  addButtons();
}

function addButtons() {
  isBlank = numbers.indexOf(null);
  findButtons();
  const divs = document.querySelectorAll(".grid-item");

  for (let i = 0; i < divs.length; i++) {
    if (i == a || i == b || i == c || i == d) {
      divs[i].addEventListener("click", function () {
        swapPos(i);
      });
      divs[i].style.backgroundColor = "#EB6440";
      divs[i].classList.add("test");
    }
  }

  checkWin();
}

function swapPos(swap) {
  clicks++;
  let temp = numbers[swap];
  numbers[swap] = numbers[isBlank];
  numbers[isBlank] = temp;
  view();
}

function findButtons() {
  a = Number(isBlank) - 3;
  b = Number(isBlank) - 1;
  c = Number(isBlank) + 1;
  d = Number(isBlank) + 3;
  if (isBlank == 3 || isBlank == 6) {
    b = null;
  } else if (isBlank == 5 || isBlank == 2) {
    c = null;
  }
}

function checkWin() {
  if (numbers.join(",") === winNumbers.join(",")) {
    document.getElementById("clickCount").style.backgroundColor = "#EB6440";
    countText = `Won with: `;
    return true;
  } else {
    return false;
  }
}

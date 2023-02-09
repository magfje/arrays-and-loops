let numCircles = 25;
let finishTime;
let startTime;

function createCricles() {
  startTime = new Date().getTime();
  let randomNumber = Math.floor(Math.random() * numCircles);
  console.log(randomNumber);
  for (let i = 0; i < numCircles; i++) {
    let newCricle = document.createElement("div");
    if (i == randomNumber) {
      newCricle.classList.add("lightOn");
      newCricle.addEventListener("click", timeClear);
    }
    newCricle.classList.add("circleDiv");
    newCricle.id = "circle" + i;
    document.getElementById("main").appendChild(newCricle);
  }
}

function timeClear() {
  finishTime = new Date().getTime();
  let spentMilliseconds = Math.floor(finishTime - startTime);
  let spentSeconds = spentMilliseconds / 1000;
  document.getElementById(
    "timer"
  ).innerHTML = `${spentSeconds}s </br> ${spentMilliseconds}ms`;
  document.getElementById("main").innerHTML = "";
  createCricles();
}

/* function addLight() {
        for (let u = 0; u < numCircles; u++) {
          let circSel = document.getElementById("circle" + u);
          if ((u = randomNumber)) {
            circSel.classList.add("lightOn");
            circSel.addEventListener("click", createCricles);
          }
        }
      }
 */
createCricles();

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame_btn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turno = true;
let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turno = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const checkDraw = () => {
  let allFilled = [...boxes].every((box) => box.innerText !== "");

  if (allFilled) {
    msg.innerText = "It's a tie!";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner}!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkwinner = () => {
  for (let pattern of win) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;
    if (pos1Value != "" && pos1Value != "" && pos1Value != "") {
      if (pos1Value == pos2Value && pos2Value == pos3Value) {
        showWinner(pos1Value);
      }
    }
  }
  checkDraw();
};

newGame_btn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

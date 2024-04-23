let currentPlayer = "X";
let arr = Array(9).fill(null);
console.log(arr);

function handleClick(element) {
  let id = Number(element.id);
  arr[id] = currentPlayer;
  element.innerText = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  console.log(arr);
}

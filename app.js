const gameBoard = document.querySelector("#gameBoard");
const info = document.querySelector("#info");

const startCells = [
	"", "", "", "", "", "", "", "", "",
];
let go = "circle";


console.log('pop');
function createBoard() {
	startCells.forEach((_cell, index) => {
		const cellElement = document.createElement("div");
		cellElement.classList.add("square");
		cellElement.id = index;
		cellElement.addEventListener("click", addGo);
		gameBoard.append(cellElement);

	});
}

createBoard();

function addGo(e) {
	const goDisplay = document.createElement('div');
	goDisplay.classList.add(go);
	e.target.append(goDisplay);
	go = go === "circle" ? "cross" : "circle";
	info.textContent = `let ${go} go first`;
	e.target.removeEventListener('click', addGo);
	checkScore();
}

function checkScore() {
	const squareIt = document.querySelectorAll(".square");
	console.log(squareIt);
	const winingCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8]
	[0, 3, 6], [1, 4, 7], [2, 5, 8]
	[0, 4, 8], [2, 4, 6]
	];

}
winningCombos.forEach((array) => {
	array.every(() => { });
});
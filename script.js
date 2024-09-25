const Gameboard = (function () {
const board = ["","","","","","","","",""];

const getBoard = () => board;

const placeMarker = function(marker, index) {
    if (board[index] === "") {
        board[index] = marker;
    } else console.log('That spot is already taken. Try another one.');
};

const clearBoard = () => {
    board.fill("");
};

return {getBoard, placeMarker, clearBoard}
})();


function Player (name, marker) {
    return {name, marker};
}

const playerOne = Player("Andy", "O")
const playerTwo = Player("Dot", "X")

console.table({playerOne,playerTwo});

// console.log(Gameboard.getBoard());
// console.log(Gameboard.placeMarker('X', 0));
// console.log(Gameboard.getBoard());
// console.log(Gameboard.clearBoard());
// console.log(Gameboard.getBoard());




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


console.log(Gameboard.getBoard());
console.log(Gameboard.placeMarker('X', 0));
console.log(Gameboard.getBoard());
console.log(Gameboard.clearBoard());
console.log(Gameboard.getBoard());

// console.log(Gameboard.placeMarker('0', 0));


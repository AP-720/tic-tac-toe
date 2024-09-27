// Gameboard IIFE
const gameBoard = (function () {
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

// Create Player
function CreatePlayer (name, marker) {
    return {name, marker};
}

// const playerOne = createPlayer("Andy", "O")
// const playerTwo = createPlayer("Dot", "X")

const gameController =(function(playerOneName = "Player One", playerTwoName = "Player Two") {

    const board = gameBoard;

    const players = [
        CreatePlayer(playerOneName, "O"),
        CreatePlayer(playerTwoName, "X"),
    ];

    let currentPlayer = players[0];

    const switchPlayerTurn = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

    const getCurrentPlayer = () => currentPlayer;

    const printNewRound = () => {
        console.log(board.getBoard());
        console.log(`It's ${getCurrentPlayer().name}'s turn`)
    }

    const playRound = (index) => {
        board.placeMarker(getCurrentPlayer().marker, index)

        switchPlayerTurn();
        printNewRound();
    }

    printNewRound();

    return {playRound, getCurrentPlayer}

})();

const game = gameController;






// console.log(Gameboard.getBoard());
// console.log(Gameboard.placeMarker('X', 0));
// console.log(Gameboard.getBoard());
// console.log(Gameboard.clearBoard());
// console.log(Gameboard.getBoard());




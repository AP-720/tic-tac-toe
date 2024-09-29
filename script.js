// Gameboard IIFE
const gameBoard = (function () {
const board = ["","","","","","","","",""];

const getBoard = () => board;

const placeMarker = function(marker, index) {
    if (board[index] === "") {
        board[index] = marker;
    }
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

const gameController =(function(playerOneName = "Player One", 
    playerTwoName = "Player Two") {

    const board = gameBoard;

    const players = [
        CreatePlayer(playerOneName, "X"),
        CreatePlayer(playerTwoName, "O"),
    ];

    let currentPlayer = players[0];

    const switchPlayerTurn = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

    const getCurrentPlayer = () => currentPlayer;

    const playRound = (index) => {
        board.placeMarker(getCurrentPlayer().marker, index)

        switchPlayerTurn();
    }

    return {playRound, getCurrentPlayer}

})();

const renderDisplay = (function (){
    const game = gameController;
    const cells = document.querySelectorAll('[data-cell]')
    const currentPlayer = game.getCurrentPlayer();

    const renderBoard = () => {
        const board = gameBoard.getBoard();
        cells.forEach((cell, index) => {
            cell.textContent = board[index];
        })
    }

    function clickHandlerBoard(e) {
        const index = e.target.dataset.cell;
        if (!gameBoard.getBoard()[index]) {
            game.playRound(index);
            renderBoard();
        }
    }

    cells.forEach(cell => cell.addEventListener('click', clickHandlerBoard));

    renderDisplay()
    // console.log();
    // return {renderBoard}
    
})();





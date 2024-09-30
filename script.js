// Gameboard IIFE
const gameBoard = (function () {
const board = ["","","","","","","","",""];

const getBoard = () => board;

const placeMarker = function(marker, index) {
    if (board[index] === "") {
        board[index] = marker;
    }
    gameController.checkWin()
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

// Game Controller 

const gameController =(function(playerOneName = "Player One", 
    playerTwoName = "Player Two") {

    const board = gameBoard;

    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const players = [
        CreatePlayer(playerOneName, "X"),
        CreatePlayer(playerTwoName, "O"),
    ];

    let currentPlayer = players[0];

    const switchPlayerTurn = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

    const getCurrentPlayer = () => currentPlayer;

    const checkWin = function(board) {
        board = gameBoard.getBoard();

        for (let i = 0; i < winCombinations.length; i++) {
            if (board[winCombinations[i][0]] !== "") {
                if (board[winCombinations[i][0]] === board[winCombinations[i][1]] && 
                    board[winCombinations[i][1]] === board[winCombinations[i][2]]) {
                    return getCurrentPlayer().name;
                }
            }
        }
        return false;
    };


    const playRound = (index) => {
        board.placeMarker(getCurrentPlayer().marker, index);

        const winner = checkWin();
        if (winner){
            renderDisplay.showResults();
            console.log(checkWin())
        } else {
            switchPlayerTurn();
        }
        

        
        
        
    }
    
    return {playRound, getCurrentPlayer, checkWin}

})();

const renderDisplay = (function (){
    const game = gameController;
    const cells = document.querySelectorAll('[data-cell]')
    const enterName = document.querySelector('[data-enter-name-btn]')
    const resultModal = document.querySelector('[data-outcome-modal]')
    const currentPlayer = game.getCurrentPlayer();
    const resultText = document.querySelector('[date-outcome-text]')

    const renderBoard = () => {
        const board = gameBoard.getBoard();
        cells.forEach((cell, index) => {
            cell.textContent = board[index];
        })
    }

    // Place Marker Click Event
    function clickHandlerBoard(e) {
        const index = e.target.dataset.cell;
        if (!gameBoard.getBoard()[index]) {
            game.playRound(index);
            renderBoard();
        }
    }

    cells.forEach(cell => cell.addEventListener('click', clickHandlerBoard));

   const showResults = () => {
    resultModal.showModal();
    resultText.textContent = `${gameController.checkWin()} is the winner!`;
   }
   

    renderBoard()
    // console.log();
    return {renderBoard, showResults}
    
})();





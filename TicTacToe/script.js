let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameEnded = false;
let turn = 0;

function place(index){
    if(gameEnded || board[index] != '') return;

    board[index] = currentPlayer;
    document.getElementById('cell' + index).innerText = currentPlayer;
    turn++;

    if(checkWinner()){
        document.getElementById('currPlayer').innerHTML = 'Winner : ' + currentPlayer;
        gameEnded = true;
    } else if(turn == 9) {
        document.getElementById('currPlayer').innerHTML = 'Tie game';
        gameEnded = true;
    }
    else {
        if(currentPlayer == 'X'){
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
        document.getElementById('currPlayer').innerHTML = 'current Player : ' + currentPlayer;
    }
}

function checkWinner(){

    if(board[0] == currentPlayer && board[1] == currentPlayer && board[2] == currentPlayer) return true;
    if(board[3] == currentPlayer && board[4] == currentPlayer && board[5] == currentPlayer) return true;
    if(board[6] == currentPlayer && board[7] == currentPlayer && board[8] == currentPlayer) return true;
    if(board[0] == currentPlayer && board[3] == currentPlayer && board[6] == currentPlayer) return true;
    if(board[1] == currentPlayer && board[4] == currentPlayer && board[7] == currentPlayer) return true;
    if(board[2] == currentPlayer && board[5] == currentPlayer && board[8] == currentPlayer) return true;
    if(board[0] == currentPlayer && board[4] == currentPlayer && board[8] == currentPlayer) return true;
    if(board[2] == currentPlayer && board[4] == currentPlayer && board[6] == currentPlayer) return true;
    return false;
}

function resetBoard(){
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameEnded = false;
    turn = 0;
    document.getElementById('currPlayer').innerHTML = 'current Player : ' + currentPlayer;
    for(let i = 0; i < 9; i++){
        document.getElementById('cell' + i).innerText = '';
    }
}
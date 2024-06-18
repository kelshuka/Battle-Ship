import './style.css';

import { gridStructure } from "./DOM/board";

const board1 = document.querySelector('.board1');
const board2 = document.querySelector('.board2');

let boards = new gridStructure();

boards.player1(board1);
boards.player2(board2);

const restartButtn = document.querySelector('.clean');
const winner = document.querySelector('.winner');

restartButtn.addEventListener('click', () => {
    
    while(board1.firstChild){
        board1.removeChild(board1.firstChild);
    }

    while(board2.firstChild){
        board2.removeChild(board2.firstChild);
    }

    boards = new gridStructure();

    boards.player1(board1);
    boards.player2(board2);
    winner.textContent ="";
})




import './style.css';

import { gridStructure } from "./DOM/board";
import { Ship, Gameboard, Player } from './battleShip';

const board1 = document.querySelector('.board1');
const board2 = document.querySelector('.board2');

const boards = new gridStructure();

boards.player1(board1);
boards.player2(board2);

/* gridStructure(board1,1);
gridStructure(board2,2);
 */


import './style.css';

import { gridStructure } from "./DOM/board";
import { Ship, Gameboard, Player } from './battleShip';

const board1 = document.querySelector('.board1');
const board2 = document.querySelector('.board2');

gridStructure(board1,1);
gridStructure(board2,2);


/* const contents = document.querySelectorAll('.board1 .contents');

contents.forEach(contents => {
    if(contents.id == "0,0" || contents.id == "1,0" || contents.id == "2,0"){
        contents.style.backgroundColor = 'grey';
        //console.log(contents.id[0]); // id[0] and id[2]. id[1] gives the comma.
    }

    
});
 */

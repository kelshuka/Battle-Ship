import './style.css';

import { gridStructure } from "./DOM/board";
import { Ship, Gameboard, Player } from './battleShip';

const board1 = document.querySelector('.board1');
const board2 = document.querySelector('.board2');
gridStructure(board1);
gridStructure(board2);

const ship1 = new Ship(2); const ship2 = new Ship(3); const ship3 = new Ship(4);
const ship4 = new Ship(5);

const AllShips = new Gameboard(); 

AllShips.placeShip(ship1, [1,3], "horizontal");
AllShips.placeShip(ship2, [0,0], "vertical");
AllShips.placeShip(ship3, [8,6], "horizontal");
AllShips.placeShip(ship4, [2,9], "vertical");

/* AllShips.receiveAttack(4,5);// missed
AllShips.receiveAttack(3,9);// Hit 4 */

const arr = AllShips.coords;
//console.log(arr);
//console.log(arr[1]);

const contents = document.querySelectorAll('.board1 .contents');

contents.forEach(contents => {
    if(contents.id == "0,0" || contents.id == "1,0" || contents.id == "2,0"){
        contents.style.backgroundColor = 'grey';
        //console.log(contents.id[0]); // id[0] and id[2]. id[1] gives the comma.
    }

    
});


/* contents.forEach(contents => {
    contents.addEventListener('click', (e) => {

        let arr = gameB;
        let ind = e.target.id;
        console.log(ind);

        for (let i =1; i< 10; i++){
            if
        }
        
    });
}); */

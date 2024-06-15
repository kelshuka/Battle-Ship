
//import './style.css';

/* const board1 = document.querySelector('.board1');
const board2 = document.querySelector('.board2'); */

import { Ship, Gameboard, Player } from "../battleShip";


function gridStructure(board, num =10) {
    //let gSize = 640 / num;
    let gSize = 400 / num;
    const AllShips = new Gameboard(); 
    const ship1 = new Ship(2); const ship2 = new Ship(3); 
    const ship3 = new Ship(4); const ship4 = new Ship(5);

    AllShips.placeShip(ship1, [1,3], "horizontal");
    AllShips.placeShip(ship2, [0,0], "vertical");
    AllShips.placeShip(ship3, [8,6], "horizontal");
    AllShips.placeShip(ship4, [2,9], "vertical");

    let arr = AllShips.coords;
    console.log(arr);
    
    for (let i=0;i<num ; i++ ) {
        const content = document.createElement('div');
        //content.classList.add('content');
        content.innerText = i;

        for (let j=0;j< num ; j++) {
            const contents = document.createElement('div');
            contents.classList.add('contents');
            contents.id = `${j},${i}`;
            //contents.append(arr[j][i]);

            const span = document.createElement('span');
            span.append(arr[j][i]);
            span.classList.add('styNone');

            contents.append(span);
            //contents.innerText = (i * num) + j;
            contents.style.height = `${gSize}px`;
            contents.style.width = `${gSize}px`;
            content.appendChild(contents);
        }
        board.appendChild(content);
        board.classList.add('container');
    }

    const contents = document.querySelectorAll('.contents');

    contents.forEach(contents => {
        contents.addEventListener('click', (e) => {

            let ind = e.target.id;
            if(contents.textContent === "null"){
                contents.style.backgroundColor = 'blue';
                AllShips.receiveAttack(ind[0],ind[2]);
                console.log(arr);
            }else if(contents.textContent !== "null"){
                contents.style.backgroundColor = 'red';
                AllShips.receiveAttack(ind[0],ind[2]);// Hit 
                console.log(arr);

            }
            
        });
    });
   
    contents.forEach(contents => {
        if(contents.textContent !== "null"){
            contents.style.backgroundColor = 'grey';
        }
    });


}


export {gridStructure};

/* function gridStructure(board, num =10) {
    //let gSize = 640 / num;
    let gSize = 400 / num;
    for (let i=0;i<num ; i++ ) {
        const content = document.createElement('div');
        //content.classList.add('content');
        content.innerText = i;

        for (let j=0;j< num ; j++) {
            const contents = document.createElement('div');
            contents.classList.add('contents');
            contents.id = `${j},${i}`
            //contents.innerText = (i * num) + j;
            contents.style.height = `${gSize}px`;
            contents.style.width = `${gSize}px`;
            content.appendChild(contents);
        }
        board.appendChild(content);
        board.classList.add('container');
    }

    const contents = document.querySelectorAll('.contents');
    contents.forEach(contents => {
        contents.addEventListener('click', function(){
            contents.style.backgroundColor = 'grey';
        })
    });
}
 */
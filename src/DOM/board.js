
//import './style.css';


import { Ship, Gameboard, Player } from "../battleShip";


function gridStructure(board,player, num =10) {
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
        content.classList.add(`content${player}`);
        content.innerText = i;

        for (let j=0;j< num ; j++) {
            const contents = document.createElement('div');
            contents.classList.add(`contents${player}`);
            contents.classList.add('contents');
            contents.id = `${j},${i},${player}`;

            const span = document.createElement('span');
            span.append(arr[j][i]);
            span.classList.add('styNone');

            contents.append(span);
            contents.style.height = `${gSize}px`;
            contents.style.width = `${gSize}px`;
            content.appendChild(contents);
        }
        board.appendChild(content);
        board.classList.add('container');
    }

    const contents = document.querySelectorAll(`.contents${player}`);

    const contents2 = document.querySelectorAll('.contents2.contents');
    const cont = document.querySelectorAll('.contents1.contents');

    ////if(player == 2){ }
    contents2.forEach(contents => {
        contents.addEventListener('click', (e) => {

            let ind = e.target.id;
            if(contents.textContent === "null"){
                contents.style.backgroundColor = 'blue';
                AllShips.receiveAttack(ind[0],ind[2]);
                //console.log(arr);
            }else if(contents.textContent !== "null"){
                contents.style.backgroundColor = 'red';
                AllShips.receiveAttack(ind[0],ind[2]);// Hit 
                
                if( AllShips.allSank()== "All ships have been sunk" ){
                    console.log("Ships sank, player 1 wins");
                    return;
                }
                //console.log(arr);
            }  

            
            let indComp = getComputerChoice(arr, "X", "M"); 
            
            console.log(indComp[0],indComp[1],indComp[2]);

            const cont1 = document.getElementById(`${indComp[0]},${indComp[1]},1`);
            console.log(cont1.textContent);
            
            if(cont1.textContent === "X" || cont1.textContent === "M"){
                indComp = getComputerChoice(arr); 
            }

            if(cont1.textContent === "null"){
                cont1.style.backgroundColor = 'blue';
                AllShips.receiveAttack(indComp[0],indComp[2]);
                console.log(arr);
            }else if(cont1.textContent !== "null"){
                cont1.style.backgroundColor = 'red';
                AllShips.receiveAttack(indComp[0],indComp[2]);// Hit 
                
                if( AllShips.allSank()== "All ships have been sunk" ){
                    console.log("Ships sank, player2 wins");
                    return;
                }
                console.log(arr);
            }  
            

            
        });
    });
    
 
    if(player == 1){
        contents.forEach(contents => {
            if(contents.textContent !== "null"){
                contents.style.backgroundColor = 'grey';
            }
        });
    }


}

function getComputerChoice(choices,a,b) {
    //const choices = ["Rock","Paper","Scissors"];
    /* const randomChosen = choices[Math.floor(Math.random()*choices.length)];
    const randomNumber = randomChosen[Math.floor(Math.random()*randomChosen.length)] */
    let randomChosen = Math.floor(Math.random()*choices.length);
    let ran1d = choices[randomChosen];
    let randomNumber = Math.floor(Math.random()*ran1d.length);
    let ran2d = ran1d[Math.floor(Math.random()*ran1d.length)];

    while(ran2d == a || ran2d == b){
        randomChosen = Math.floor(Math.random()*choices.length);
        ran1d = choices[randomChosen];
        randomNumber = Math.floor(Math.random()*ran1d.length);
        ran2d = ran1d[Math.floor(Math.random()*ran1d.length)];
    }

    return [randomChosen, randomNumber,ran2d]; //, randomNumber, ran1d, ran2d;
}

function compPlay(arr, contents){
            
    let indComp = getComputerChoice(arr); 
    console.log(indComp);
    if(contents.id == indComp ){
        if(contents.textContent === "null"){
            contents.style.backgroundColor = 'blue';
            AllShips.receiveAttack(indComp[0],indComp[2]);
            console.log(arr);
        }else if(contents.textContent !== "null"){
            contents.style.backgroundColor = 'red';
            AllShips.receiveAttack(indComp[0],indComp[2]);// Hit 
            
            if( AllShips.allSank()== "All ships have been sunk" ){
                console.log("Ships sank");
                return;
            }
            console.log(arr);
        }  
    }
}



export {gridStructure};

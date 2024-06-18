
//import './style.css';


import { Ship, Gameboard, Player } from "../battleShip";

const winner = document.querySelector('.winner');

class gridStructure{
    
    constructor(num=10){
        this.gSize = 400 / num;
        this.play1 = new Gameboard();
        this.play2 = new Gameboard();
        this.ship1 = new Ship(2);
        this.ship2 = new Ship(3);
        this.ship3 = new Ship(4);
        this.ship4 = new Ship(5);
        this.ship12 = new Ship(2);
        this.ship22 = new Ship(3);
        this.ship32 = new Ship(4);
        this.ship42 = new Ship(5);
        this.arr1 = this.play1.coords;
        this.arr2 = this.play2.coords;
        this.validClick = true; 
    }

    player1(board){
        this.play1.placeShip(this.ship1, [1,3], "horizontal");
        this.play1.placeShip(this.ship2, [0,0], "vertical");
        this.play1.placeShip(this.ship3, [8,6], "horizontal");
        this.play1.placeShip(this.ship4, [2,9], "vertical");
        
        console.log(this.arr1);
        for (let i=0;i<10 ; i++ ) {
            const content = document.createElement('div');
            content.classList.add('content1');
            content.innerText = i;
    
            for (let j=0;j< 10 ; j++) {
                const contents = document.createElement('div');
                contents.classList.add('contents1');
                contents.classList.add('contents');
                contents.id = `${j},${i},1`;
    
                const span = document.createElement('span');
                span.append(this.arr1[j][i]);
                span.classList.add('styNone');
    
                contents.append(span);
                contents.style.height = `${this.gSize}px`;
                contents.style.width = `${this.gSize}px`;
                content.appendChild(contents);
            }
            board.appendChild(content);
            board.classList.add('container');
        }

        const contents1 = document.querySelectorAll('.contents1');
        contents1.forEach(contents => {
            if(contents.textContent !== "null"){
                contents.style.backgroundColor = 'grey';
            }
        });

    }

    player2(board){
        /* this.play2.placeShip(this.ship12, [1,3], "horizontal");
        this.play2.placeShip(this.ship22, [0,0], "vertical");
        this.play2.placeShip(this.ship32, [8,6], "horizontal");
        this.play2.placeShip(this.ship42, [2,9], "vertical"); */

        // randomly places computer ships
        const comShipNo = placeComputerShips();
        console.log(comShipNo);

        this.play2.placeShip(this.ship12, [comShipNo[0],comShipNo[4]], "horizontal");
        this.play2.placeShip(this.ship22, [comShipNo[1],comShipNo[5]], "vertical");
        this.play2.placeShip(this.ship32, [comShipNo[2],comShipNo[1]], "horizontal");
        this.play2.placeShip(this.ship42, [comShipNo[3],comShipNo[7]], "vertical");

        console.log(this.arr2);
        for (let i=0;i<10 ; i++ ) {
            const content = document.createElement('div');
            content.classList.add('content2');
            content.innerText = i;
    
            for (let j=0;j< 10 ; j++) {
                const contents = document.createElement('div');
                contents.classList.add('contents2');
                contents.classList.add('contents');
                contents.id = `${j},${i},2`;
    
                const span = document.createElement('span');
                span.append(this.arr2[j][i]);
                span.classList.add('styNone');
    
                contents.append(span);
                contents.style.height = `${this.gSize}px`;
                contents.style.width = `${this.gSize}px`;
                content.appendChild(contents);
            }
            board.appendChild(content);
            board.classList.add('container');
        }

        const contents = document.querySelectorAll('.contents2');

        contents.forEach(contents => {
            if(contents.textContent !== "null"){
                contents.style.backgroundColor = 'grey';
            }
        });

        contents.forEach(contents => {
            contents.addEventListener('click', (e) => {
    
                let ind = e.target.id;
                if(contents.textContent === "null"){
                    contents.style.backgroundColor = 'blue';
                    this.play2.receiveAttack(ind[0],ind[2]);
                    console.log(this.arr2);
                }else if(contents.textContent !== "null"){
                    contents.style.backgroundColor = 'red';
                    this.play2.receiveAttack(ind[0],ind[2]);
                    
                    if( this.play2.allSank()=== "All ships have been sunk" ){
                        console.log("Ships sank, player 1 wins");
                        winner.textContent = "Ships sank, player 1 wins!!";
                        return;
                    }
                }
                
                let indComp = getComputerChoice(this.arr1, "X", "M"); 
            
                console.log(indComp[0],indComp[1],indComp[2]);

                const cont1 = document.getElementById(`${indComp[0]},${indComp[1]},1`);

                if(cont1.textContent === "null"){
                    cont1.style.backgroundColor = 'blue';
                    this.play1.receiveAttack(indComp[0],indComp[1]);
                    console.log(this.arr1);
                }else if(cont1.textContent !== "null" ){
                    cont1.style.backgroundColor = 'red';
                    this.play1.receiveAttack(indComp[0],indComp[1]);
                    
                    if( this.play1.allSank()=== "All ships have been sunk" ){
                        console.log("Ships sank, player2 wins");
                        winner.textContent = "Ships sank, computer wins!!";
                        return;
                    }
                }  
            
                     
            });
        }); 

    }

}

function getComputerChoice(choices,a,b) {
    let randomChosen = Math.floor(Math.random()*choices.length);
    let ran1d = choices[randomChosen];
    let randomNumber = Math.floor(Math.random()*ran1d.length);
    let ran2d = ran1d[randomNumber];
    
    while(ran2d == a || ran2d == b){
        randomChosen = Math.floor(Math.random()*choices.length);
        ran1d = choices[randomChosen];
        randomNumber = Math.floor(Math.random()*ran1d.length);
        ran2d = ran1d[randomNumber];
        
    }

    return [randomChosen, randomNumber,ran2d]; 
}

function placeComputerShips(){
    let allNum = [];
    let a1 = Math.floor(Math.random()*6);
    allNum.push(a1);
    let a2 = Math.floor(Math.random()*6);
    if(!allNum.includes(a2)) allNum.push(a2);
    else {
        a2 = Math.floor(Math.random()*6);
        allNum.push(a2);
    }
    let a3 = Math.floor(Math.random()*6);
    if(!allNum.includes(a3)) allNum.push(a3);
    else {
        a3 = Math.floor(Math.random()*6);
        allNum.push(a3);
    }
    let a4 = Math.floor(Math.random()*6);
    if(!allNum.includes(a4)) allNum.push(a4);
    else {
        a4 = Math.floor(Math.random()*6);
        allNum.push(a4);
    }

    for(let i=0; i<4; i++){
        let randNumber = Math.floor(Math.random()*9);
        allNum.push(randNumber);
    }

    return allNum;
    
}


export {gridStructure};




//import './style.css';


import { Ship, Gameboard, Player } from "../battleShip";


class gridStructure{
    //let gSize = 640 / num;
    constructor(num=10){
        this.gSize = 400 / num;
        this.play1 = new Gameboard();
        this.play2 = new Gameboard();
        this.ship1 = new Ship(2);
        this.ship2 = new Ship(3);
        this.ship3 = new Ship(4);
        this.ship4 = new Ship(5);
        this.arr1 = this.play1.coords;
        this.arr2 = this.play2.coords;
        this.validClick = true; 
    }

    player1(board){
        this.play1.placeShip(this.ship1, [1,3], "horizontal");
        this.play1.placeShip(this.ship2, [0,0], "vertical");
        this.play1.placeShip(this.ship3, [8,6], "horizontal");
        this.play1.placeShip(this.ship4, [2,9], "vertical");
        //let arr = this.play1.coords;
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
        this.play2.placeShip(this.ship1, [1,3], "horizontal");
        this.play2.placeShip(this.ship2, [0,0], "vertical");
        this.play2.placeShip(this.ship3, [8,6], "horizontal");
        this.play2.placeShip(this.ship4, [2,9], "vertical");
        //let arr2 = this.play2.coords;
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
            contents.addEventListener('click', (e) => {
    
                let ind = e.target.id;
                if(contents.textContent === "null"){
                    contents.style.backgroundColor = 'blue';
                    this.play2.receiveAttack(ind[0],ind[2]);
                    console.log(this.arr2);
                }else if(contents.textContent !== "null"){
                    contents.style.backgroundColor = 'red';
                    this.play2.receiveAttack(ind[0],ind[2]);// Hit 
                    
                    if( this.play2.allSank()== "All ships have been sunk" ){
                        console.log("Ships sank, player 1 wins");
                        return;
                    }
                    //console.log(this.arr2);
                }
                
                let indComp = getComputerChoice(this.arr1, "X", "M"); 
            
                console.log(indComp[0],indComp[1],indComp[2]);

                const cont1 = document.getElementById(`${indComp[0]},${indComp[1]},1`);
                //console.log(cont1.textContent);
                
                /* if(cont1.textContent === "X" || cont1.textContent === "M"){
                    indComp = getComputerChoice(this.arr1); 
                } */

                if(cont1.textContent === "null"){
                    cont1.style.backgroundColor = 'blue';
                    this.play1.receiveAttack(indComp[0],indComp[1]);
                    console.log(this.arr1);
                }else if(cont1.textContent !== "null" ){
                    cont1.style.backgroundColor = 'red';
                    this.play1.receiveAttack(indComp[0],indComp[1]);// Hit 
                    
                    if( this.play1.allSank()== "All ships have been sunk" ){
                        console.log("Ships sank, player2 wins");
                        return;
                    }
                    //console.log(this.arr1);
                }  
            
                     
            });
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
    let ran2d = ran1d[randomNumber];
    //let ran2d = ran1d[Math.floor(Math.random()*ran1d.length)];

    
    while(ran2d == a || ran2d == b){
        randomChosen = Math.floor(Math.random()*choices.length);
        ran1d = choices[randomChosen];
        randomNumber = Math.floor(Math.random()*ran1d.length);
        ran2d = ran1d[randomNumber];
        
    }
    //else return [randomChosen, randomNumber,ran2d];
    

    return [randomChosen, randomNumber,ran2d]; 
}



export {gridStructure};


/* function gridStructure(board,player, num =10) {
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


} */
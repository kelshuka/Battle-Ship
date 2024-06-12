
class Ship{
    constructor(length=null, timesHit=null, sunk="no"){
        this.length = length;
        this.timesHit = timesHit;
        this.sunk = sunk;
    }
    hit(){
        return this.timesHit++;
    }
    isSunk(){
        if (this.len == this.timesHit) return this.sunk = "yes";
    }
}

const Gameboard = () => {
    const destroyer = new Ship(length = 2);
    const submarine = new Ship(length = 3);
    const cruiser = new Ship(length = 3);
    const battleShip = new Ship(length = 4);
    const carrier = new Ship(length = 5);

    
    let rows = 10, columns = 10;
    const coords = [];
    for(let i =0; i <rows; i++){
        coords[i] = [];
        for(let j = 0; j < columns; j++){
            coords[i][j] = null;
        }
    }

    coords[1][3]=1;coords[1][4]=1;//destroyer
    coords[0][0]=2;coords[1][0]=2;coords[2][0]=2; // submarine
    coords[8][7]=3;coords[8][8]=3;coords[8][9]=3; // cruiser
    coords[2][9]=4;coords[3][9]=4;coords[4][9]=4;coords[5][9]=4;// battleShip
    coords[9][2]=5;coords[9][3]=5;coords[9][4]=5;coords[9][5]=5;coords[9][6]=5;//carrier
    
    const receiveAttack = (x,y) => {
        //const missed =[];
        if(coords[x][y] == null){
            coords[x][y] = 0;
            //missed
        }
        else{
            if(coords[x][y] == 1) {
                coords[x][y] = "X";
                destroyer.hit();
            }
            if(coords[x][y] == 2) {
                coords[x][y] = "X";
                submarine.hit();
            }
            if(coords[x][y] == 3) {
                coords[x][y] = "X";
                cruiser.hit();
            }
            if(coords[x][y] == 4) {
                coords[x][y] = "X";
                battleShip.hit();
            }
            if(coords[x][y] == 5) {
                coords[x][y] = "X";
                carrier.hit();
            }
            
        }
    };
    receiveAttack();

};

export {Ship, Gameboard};

/* const ship1 = new Ship(length = 3);
ship1.hit(); ship1.hit(); ship1.hit();
console.log(ship1);
ship1.isSunk();
console.log(ship1.isSunk());
console.log(ship1); */
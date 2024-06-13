
class Ship{
    constructor(length=null, timesHit=null, sunk=false){
        this.length = length;
        this.timesHit = timesHit;
        this.sunk = sunk;
    }
    hit(){
        return this.timesHit++;
    }
    isSunk(){
        if (this.length == this.timesHit) return this.sunk = true;
    }
}

class Gameboard {

    constructor(){
       this.ships = [];
       this.coords =[];

       let rows = 10, columns = 10;
        //const coords = [];
        for(let i =0; i <rows; i++){
            this.coords[i] = [];
            for(let j = 0; j < columns; j++){
                this.coords[i][j] = null;
            }
        }
    }
    
    placeShip(ship, cord, direcTion){
        
        for(let i=1; i < ship.length; i++){
            if(direcTion == "vertical"){
                this.coords[ cord[0] ][ cord[1] ] = ship.length - 1;
                this.coords[ cord[0] + i][ cord[1] ] = ship.length -1;
            }
            else if(direcTion == "horizontal"){
                this.coords[ cord[0] ][ cord[1] ] = ship.length - 1;
                this.coords[ cord[0] ][ cord[1] + i] = ship.length - 1;
            }
        }

        this.ships.push(ship);
        return this.ships;
    }

    receiveAttack(x,y){
        //const missed =[];
        if(this.coords[x][y] == null){
            this.coords[x][y] = "M";
            //missed
        }
        else{
            for (let ship of this.ships){
                if(this.coords[x][y] == ship.length - 1) {
                    this.coords[x][y] = "X";
                    ship.hit();
                    ship.isSunk();
                } 
            }
        }

        return this.coords;
       /*  if(destroyer.isSunk() && submarine.isSunk() && cruiser.isSunk() && battleShip.isSunk() && carrier.isSunk()){
            return "All ships have been sunk";
        } */
    }

    allSank(){
        let count=0;
        for (let ship of this.ships){
            if(ship.sunk == true) count++;
        }
        if (count == this.ships.length) return "All ships have been sunk";
    }

}

export {Ship, Gameboard};

/* const ship1 = new Ship(length = 3);
ship1.hit(); ship1.hit(); ship1.hit();
console.log(ship1);
ship1.isSunk();
console.log(ship1.isSunk());
console.log(ship1); */




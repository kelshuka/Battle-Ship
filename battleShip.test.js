
import { Ship, Gameboard } from "./battleShip";

describe('description of ship', () => {
    test('ship is accurate', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    const ship1 = new Ship(2);
    ship1.hit();
    test('ship1', () => {
        expect(ship1.timesHit).toEqual(1);
    });
    test('ship1', () => {
        expect(ship1).toEqual({"length":2, "timesHit":1, "sunk":"no"});
    });

    const ship2 = new Ship(3);
    ship2.hit(); ship2.hit();ship2.hit();

});

describe.only('Gameboard', () =>{

    const ship1 = new Ship(2); const ship2 = new Ship(3); const ship3 = new Ship(4);
    const ship4 = new Ship(5);

    const AllShips = new Gameboard(); 

    AllShips.placeShip(ship1, [1,3], "horizontal");
    AllShips.placeShip(ship2, [0,0], "vertical");
    AllShips.placeShip(ship3, [8,6], "horizontal");
    AllShips.placeShip(ship4, [2,9], "vertical");


    AllShips.receiveAttack(4,5);// missed
    AllShips.receiveAttack(3,9);// Hit 4
    AllShips.receiveAttack(1,3); // Hit 1
    AllShips.receiveAttack(1,4); // Hit 1 again
    AllShips.receiveAttack(0,0); // Hit 2
    AllShips.receiveAttack(1,0); // Hit 2 again
    AllShips.receiveAttack(2,0); // Hit 2 again
    AllShips.receiveAttack(8,6); // Hit 3
    AllShips.receiveAttack(8,7); // Hit 3 again
    AllShips.receiveAttack(8,8); // Hit 3
    AllShips.receiveAttack(8,9); // Hit 3
    AllShips.receiveAttack(2,9); // Hit 4
    AllShips.receiveAttack(3,9); // Hit 4 again
    AllShips.receiveAttack(4,9); // Hit 4
    AllShips.receiveAttack(5,9); // Hit 4
    AllShips.receiveAttack(6,9); // Hit 4

 
    test.skip('Hit or miss', () => {
        /* expect(AllShips.ships).toEqual([{"length": 2, "sunk": false, "timesHit": null}, 
        {"length": 3, "sunk": false, "timesHit": null}, 
        {"length": 4, "sunk": false, "timesHit": null}, 
        {"length": 5, "sunk": false, "timesHit": null}]); */

        expect(AllShips.ships).toEqual([{"length": 2, "sunk": true, "timesHit": 2}, 
        {"length": 3, "sunk": true, "timesHit": 3}, 
        {"length": 4, "sunk": true, "timesHit": 4}, 
        {"length": 5, "sunk": true, "timesHit": 5}]);
    });

    test('ship sank', () => {
        expect(AllShips.allSank()).toMatch("All ships have been sunk");
    });

    test.skip('a', () => {
        expect(AllShips.coords).toEqual([0,0,null]);
    });
});
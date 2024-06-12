
import { Ship } from "./battleShip";

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

    /* beforeEach( () => {
        ship2.isSunk();
    });
    
    test('ship2', () => {
        expect(ship2.sunk).toMatch("yes");
    });
    test('ship2', () => {
        expect(ship2).toEqual({"length":3, "timesHit":3, "sunk":"yes"});
    }); */

});
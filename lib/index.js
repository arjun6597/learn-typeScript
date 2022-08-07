"use strict";
let message = 'hello world';
message += 'again';
console.log(message);
let array = [1, 2, 3];
array = [1];
// Tuple
let tupleArray = [1, 2];
// object
let center = {
    x: 0,
    y: 0
};
let unit = {
    x: 1,
    y: 2,
};
let unitWithAliasType = {
    x: 1,
    y: 2,
};
function add(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
console.log(add(1, 2));
console.log(add(2, 3, 4, 5));
// classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeter) {
        console.log(`${this.name} moved ${distanceInMeter} m`);
    }
}
let cat = new Animal('cat');
cat.move(10);
class Bird extends Animal {
    fly(distanceInMeter) {
        console.log(`${this.name} flew ${distanceInMeter} m`);
    }
}
let dove = new Bird('dove');
dove.fly(20);

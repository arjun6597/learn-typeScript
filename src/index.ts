let message : string = 'hello world';
message += 'again'
console.log(message)

let array: number[] = [1,2,3]
array = [1]

// Tuple

let tupleArray: [number, number]= [1,2] ;

// object

let center: {x: number, y: number} = {
    x:0,
    y:0
}

let unit: {x: number, y: number} = {
    x:1,
    y:2,
}

// Type Alias
type Point = {x: number, y: number}

let unitWithAliasType: Point = {
    x:1,
    y:2,
}

function add(...values: number[]){
    return values.reduce((previous, current)=>{
        return previous + current;
    })
}

console.log(add(1,2));
console.log(add(2,3,4,5));


// classes

class Animal{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    move(distanceInMeter: number){
        console.log(`${this.name} moved ${distanceInMeter} m`)
    }
}

let cat = new Animal('cat');
cat.move(10);

class Bird extends Animal{
    fly (distanceInMeter: number){
        console.log(`${this.name} flew ${distanceInMeter} m`)
    }
}

let dove = new Bird('dove');
dove.fly(20)
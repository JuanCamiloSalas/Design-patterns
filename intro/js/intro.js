

function sum(a, b) {
    return a + b;
}

let res = sum(1,2);
console.log(res);

const fSum = sum;
res = fSum(5,6);
console.log(res);

// Función de orden superior
function operation(fn, a, b) {
    console.log("se hace algo");
    console.log(fn(a, b));
}

// operation(sum, 10, 20);

// Arrow functions
operation((a,b)=>a*b, 5, 7);
operation((a,b)=>{
    const c = a+b;
    return c*2;
}, 1, 2 );

// foreach
const names = ["juan", "sara", "pepita"];
names.forEach((name) => console.log(name[0].toUpperCase() + name.slice(1)));
const namesSorted = names.toSorted();
console.log(namesSorted);
console.log(names);

// map
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);

// reduce
const numbers = [5,4,7,8,9];
const total = numbers.reduce((acc, number) => acc + number, 1);

console.log(total);

// PROGRAMACIÓN ORIENTADA A OBJETOS
// Clase
class Drink{
    constructor(name){
        this.name = name;
    }

    info(){
        return `Esta bebida es ${this.name}`;
    }
}

// Funcional
function Drink2(name) {
    this.name = name;
    this.info = function () {
        return `Esta bebida es ${this.name}`;
    }
}

const drink = new Drink("agua");
console.log(drink.info());

const drink2 = new Drink2("agua");
console.log(drink.info());

// Herencia
class Beer extends Drink{
    constructor(name, alcohol){
        //Debo responder por la prop name ya que el padre ka necesita en su constructor
        super(name); 
        this.alcohol = alcohol;
    }

    // El método info no es obligatorio declararlo; sin embargo, si lo declaramos en esta clase podríamos hacer que el método info sea diferente para esta clase en específico o también, agregarle una funcionalidad extra como lo es en este caso con el uso de la palabra reservada super. 
    info(){
        return `${super.info()}, con ${this.alcohol}% de alcohol.`
    }
}

const beer = new Beer("erginder", 8.5);
console.log(beer.info());
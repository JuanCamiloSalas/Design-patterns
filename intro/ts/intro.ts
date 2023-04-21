console.log("Hola mundo desde ts");

class Drink{

    private name: string;

    constructor(name: string){
        this.name = name;
    }

    info(): string{
        return this.name;
    }
}

const drink1 = new Drink("agua");
console.log(drink1.info());

// Interface
interface Product{
    price: number;
    getPrice():string;
}

// Herencia
class Beer extends Drink implements Product{
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number){
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    getPrice(): string {
        return `$ ${this.price}`;
    }

    info(): string {
        return super.info() + `, tiene ${this.alcohol}% de alcohol.`;
    }
}

// Implementación de interface
class Snack implements Product{
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return `$ ${this.price}`
    }
}

const beer1 = new Beer("erdinger", 8.5, 10);
console.log(beer1.info());

const products: Product[] = [
    new Beer("Corona", 4.5, 1),
    new Snack("Papas", 0.5),
    new Beer("Heineken", 5, 1.2),
];

function getPrices(items: Product[]) {
    for (const item of items) {
        console.log(item.getPrice());
    }
}

getPrices(products);
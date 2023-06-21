class SaleContext{
    constructor (strategy) {
        this.strategy = strategy;
    }

    setStrategy (strategy) {
        this.strategy = strategy;
    }

    calculate (amount) {
        return this.strategy.calculate(amount);
    }
}

class RegularSaleStrategy{
    constructor (tax) {
        this.tax = tax;
    }

    calculate (amount) {
        return amount + (amount * this.tax);
    }
}

class DiscountSaleStrategy{
    constructor (tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate (amount) {
        return amount + (amount * this.tax) - this.discount;
    }
}

class ForeignSaleStrategy{
    calculate (amount) {
        return amount / this.getDollarPrice();
    }

    getDollarPrice () {
        return Math.floor(Math.random() * (4800 - 3500 + 1) + 3500);
    }
}

// const regularSale = new RegularSaleStrategy(0.19);
// const discountSale = new DiscountSaleStrategy(0.19, 2000);
// const foreignSale = new ForeignSaleStrategy();

// const sale = new SaleContext(regularSale);
// console.log(sale.calculate(20000));

// sale.setStrategy(discountSale);
// console.log(sale.calculate(20000));

// sale.setStrategy(foreignSale);
// console.log(sale.calculate(20000));


/*************************** CASO APLICADO ***************************/
// El patrón strategy sirve para cuando tenemos que cambiar ciertos comportamientos de un objeto en tiempo de ejecución

const data = [
    {
        name: "Erdinger Pikantus",
        country: "Alemania",
        info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",
        img: "https://dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/pikantus-2020-v2.png"
    },
    {
        name: "Corona",
        country: "México",
        info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Corona-6Pack.JPG"
    },
    {
        name: "Delirium Tremens",
        country: "Bélgica",
        info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",
        img: "https://www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png"
    }
];

class InfoContext{
    constructor (strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy (strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy{
    
    show(data, element) {
        element.innerHTML = data.reduce((acc, beer) => {
            return acc + `
            <div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
            </div>
            <hr>
            `;
        }, "");
    }
}

class ListStrategyWithDetails{
    
    show(data, element) {
        element.innerHTML = data.reduce((acc, beer) => {
            return acc + `
            <div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
                <p>${beer.info}</p>
            </div>
            <hr>
            `;
        }, "");
    }
}

class ListStrategyWithImages{
    
    show(data, element) {
        element.innerHTML = data.reduce((acc, beer) => {
            return acc + `
            <div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
                <img width="10%" src="${beer.img}">
            </div>
            <hr>
            `;
        }, "");
    }
}

const strategies = [
    new ListStrategy(),
    new ListStrategyWithDetails(),
    new ListStrategyWithImages(),
]

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
});
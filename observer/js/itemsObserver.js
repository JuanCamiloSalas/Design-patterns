class Subject {

    constructor(){
        this.observers = [];
    }

    subscribe(observer){
        this.observers.push(observer);
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data){
        this.observers.forEach(obs => {
            obs.refresh(data);
        });
    }
}

class ItemsSubject extends Subject {

    constructor(){
        super(); // Hará lo del constructor del padre

        this.data = [];
    }

    add(item){
        this.data.push(item);
        this.notify(this.data);
    }
}

// Observador con una función ya seteada, brinda más seguridad y estandarización
class HtmlElementObserver{

    constructor(element){
        this.element = element;
    }

    refresh(data){
        this.element.innerHTML = data.reduce((acc, cur) => {
            return acc + `<p>${cur}</p>`
        });
    }
}

// Observador con una función variable, brinda más adaptabilidad pero se pierde control
class VariableObserver{
    
    constructor(fn){
        this.fn = fn;
    }

    refresh(data){
        this.fn(data);
    }
}

const items = new ItemsSubject();

const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);
const div3Observer = new VariableObserver((data) => {
    div3.innerHTML = data.length;
});

items.subscribe(div1Observer);
items.subscribe(div2Observer);
items.subscribe(div3Observer);
items.unsubscribe(div2Observer);

function add() {
    const name = txtName.value;
    items.add(name)
}
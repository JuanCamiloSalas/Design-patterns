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

class Observer{
    
    constructor(fn){
        this.fn = fn;
    }

    refresh(data){
        this.fn(data);
    }
}

const newSubject = new Subject();
const observer1 = new Observer(d=>console.log(`Hola soy el observador 1 ${d}`));
const observer2 = new Observer(d=>{
    div1.innerHTML = d;
});
const observer3 = new Observer(d=>{
    div2.innerHTML = d.split("").reverse().join("");
});

newSubject.subscribe(observer1);
newSubject.subscribe(observer2);
newSubject.subscribe(observer3);
newSubject.unsubscribe(observer1);

function change() {
    newSubject.notify(myText.value);
}
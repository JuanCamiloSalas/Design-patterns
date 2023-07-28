// INTERFACES
interface IObserver<T>{
    refresh(value: T) : void;
}

interface ISubject<T> {
    
    observers: IObserver<T>[];

    suscribe(observer: IObserver<T>) : void;
    unsuscribe(observer: IObserver<T>) : void;
    notify(value: T):void;
}

// CLASSES
class Subject<T> implements ISubject<T> {
    observers: IObserver<T>[];

    constructor(){
        this.observers = [];
    }

    suscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    unsuscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach(e => {
            e.refresh(value);
        });
    }
}

class Observer<T> implements IObserver<T> {

    private fn: (value: T) => void;

    constructor(fn: (value: T) => void){
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}

// EXAMPLE WITH NUMBERS
const subject = new Subject<number>();

const obs1 = new Observer<number>((n)=>{
    console.log(`Hello from observer 1 ${n}`);    
});

const obs2 = new Observer<number>((n)=>{
    console.log(`Hola desde el observer 2 ${n}`);    
});

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(1.2);
subject.notify(30);

// EXAMPLE WITH STRINGS
const subjectString = new Subject<string>();

const obs1String = new Observer<string>((s) => {
    console.log(s.toUpperCase());
});

const obs2String = new Observer<string>((s) => {
    console.log(s.toLowerCase());
});

subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);
subjectString.notify("Juan Salas");

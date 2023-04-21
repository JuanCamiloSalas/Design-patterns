class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    constructor () {
        
        this.random = Math.random();

        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
    }
}

/* const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();
console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton === singleton2);
console.log(singleton3 === singleton2); */

// NOTA
// Cuando tenemos el this en la definiciñón de la clase le pertenece al objeto o instancia
// Cuando tenemos el nombre de la clase en su definición le pertenece a la clase; es decir, que es estático


/*************************** CASO APLICADO ***************************/
// En este caso vemos la necesidad de crear una clase WeekDays para los días de la semana, solo se necesita crear una instancia de Weekdays por que no puede haber otra con otros días distintos.

class WeekDays {
    daysEs =  [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ]

    daysEn = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    constructor (lang) {
        this.lang = lang;

        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es"
            ? this.daysEs
            : this.daysEn
    }
}

const weekDays = new WeekDays("en");
const diasSemana = new WeekDays("es");
console.log(weekDays.getDays()); //  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(diasSemana.getDays()); //  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// En JavaScript se presenta un problema; que aunque se pueda solucionar no es la mejor manera comparado con una solución que nos brinda TypeScript, el problma surge en cuanto a la variable estática "instance" del primer ejemplo, esta puede ser reasignada ssin problema alguno, lo que significaría que el patrón Singletón no cumpla con su propósito:

// Singleton.instance = new Singleton();
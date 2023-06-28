interface Strategy {

    loggin(user: string, password: string) : boolean;
}

class LoginContext {

    private strategy: Strategy;

    constructor (strategy: Strategy) {
        this.strategy = strategy // Al ser TS nos pide definir algo
    }
    
    setStrategy (strategy: Strategy) {
        this.strategy = strategy
    }

    login(user: string, password: string) : boolean {
        return this.strategy.loggin(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    loggin(user: string, password: string): boolean {
        console.log("nos dirigimos a la base de datos...");
        if (user === "admin" && password === "correcta") {
            return true;
        }
        return false;
    }
}

class LoginServiceStrategy implements Strategy {
    loggin(user: string, password: string): boolean {
        console.log("nos dirigimos a un servicio de autentificación...");
        if (user === "admin" && password === "correcta") {
            return true;
        }
        return false;
    }
}

class LoginGoogleStrategy implements Strategy {
    loggin(user: string, password: string): boolean {
        console.log("nos dirigimos al servicio de auth Google...");
        if (user === "admin" && password === "correcta") {
            return true;
        }
        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy);
const res = auth.login("admin", "correcta");
console.log(res);

auth.setStrategy(new LoginServiceStrategy);
const res1 = auth.login("admin", "correcta");
console.log(res1);

auth.setStrategy(new LoginGoogleStrategy);
const res2 = auth.login("admin", "correcta");
console.log(res2);

/**
 * Ts nos está asegurando dos cosas:
 * 1. Cada estrategia creada debe implementar la interface, y al estar obligada a cumplir ese contrato
 *    sus métodos (en este caso loggin) deben estar presentes.
 * 2. Estos métodos deben cumplir con los paràmetros descritos en la interface y con el tipo de dato que
 *    se va a retornar.
*/
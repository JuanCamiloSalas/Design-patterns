class SingletonTS {
    private static instance: SingletonTS;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS {
        if (!this.instance) {
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}

const mySingleton = SingletonTS.getInstance();
const mySingleton2 = SingletonTS.getInstance();

console.log(mySingleton.random); // Arrojan el mismo valor
console.log(mySingleton2.random); // Arrojan el mismo valor

mySingleton.random = 7;

console.log(mySingleton.random); // 7
console.log(mySingleton2.random); // 7

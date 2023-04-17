

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
names.sort();
console.log(names);

// map
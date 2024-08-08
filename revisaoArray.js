let carro1 = "fusca";
let carro2 = "brasília";
let carro3 = "fiesta";

const carro = [];
carro[0] = "celta";
carro[1] = "corsa";
carro[2] = "fusca";
carro[3] = "brasília";
carro[4] = "fiesta";
carro[5] = "ka";

const frutas = ["uva", "maçã", "banana", "morango"];

console.table(frutas);

frutas.pop();
frutas.push("kiwi Selvagem")

console.table(frutas);

console.log(carro);
console.table(carro);
console.log(carro.length);
console.clear();

let carroCopia1 = [...carro];
console.log(carro);
console.log(carroCopia1);
console.log(carro == carroCopia1);

let carroCopia2 = carro.slice;
let carroCopia3 = [].concat(carro);
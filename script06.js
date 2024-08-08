let armas = ["misseis", "lasers", "chineloDeMãe", "cintoDePai", "metralhadoras"];

let ataques = [];

ataques.push("Gipsy Avenger");

ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[1]);
ataques.push(armas[2]);


for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {

        console.log('Nome do Robô: ' + ataques[i]);

    } else {

        console.log('Ataques ' + i + ': ' + ataques[i]);
        
    }
}



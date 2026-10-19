let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let nbVentes = ventes.length;
let max = ventes[0];
let min = ventes[0];
let somme = 0;
let nbExcep = 0;
let sommeExcep = 0;

console.log("Nombres des ventes :", nbVentes);

for(i = 0 ; i < ventes.length ; i++){
    somme = somme + ventes[i];

    if(ventes[i] > max){
        max = ventes[i];
    }

    if(ventes[i] < min){
        min = ventes[i];
    }

    if(ventes[i] >= 130){
     nbExcep++;
     sommeExcep = sommeExcep + ventes[i];
    }
}

console.log("Somme :",somme);

console.log("Max :",max);

console.log("Min :", min);

console.log("NombresExceptionnelle :", nbExcep);

console.log("Somme des Excep :",sommeExcep);
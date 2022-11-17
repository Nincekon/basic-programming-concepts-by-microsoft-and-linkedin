// Show a message in the browser
// and in the console  
alert("Hello world !");
console.log("Hello world !");

let prenom = "Bob";
alert("Hello " + prenom);
 // Show in the console 
console.log("Hello " + prenom);

// Concaténation
let age = " J'ai 20 ans.";
let message = "Je m'appelle" + " Tony." + age;
document.write(message);

// Conditions
let meteo = "pluie";

if (meteo === "pluie") {
    alert("Je prends mon parapluie");
    console.log("Je prends mon parapluie");
}

let nombre = 0;

if (nombre <= 0) {
    alert("Le nombre est nul ou négatif");
    console.log("Le nombre est nul ou négatif");
} else {
    alert("Le nombre est nul ou positif");
    console.log("Le nombre est nul ou positif");
}

if (nombre <= 0 && nombre === 0) {
    alert("Le nombre est nul");
    console.log("Le nombre est nul");
} else {
    alert("Le nombre est positif");
    console.log("Le nombre est positif");
}

// Loops
let compteur = 1;

while (compteur <= 5) {
    alert("Nous sommes à " + compteur);
    console.log("Nous sommes à " + compteur);
    compteur++;
}

let porte = 1;

for (let porte = 0; porte < 10; porte++) {
    alert("J'entre par la porte " + compteur);
    console.log("J'entre par la porte " + compteur);
    
}

// Functions
function direBonjour(name) {
    return "Bonjour " + name;
}

console.log(direBonjour("Wilfried"));

// Arrays
let superHero = ["Batman", "Iron Man", "Flash"];

for (let index = 0; index < superHero.length; index++) {
    alert(superHero[index]);
    console.log(superHero[index]);
    document.write(superHero[index]);
    
}

superHero.forEach(element => {
    alert(superHero[element]);
    console.log(superHero[element]);
    document.write(superHero[element]);

});

// Objects
let stylo = {

    // Properties to describe this character
    marque: "Bic",
    couleur: "bleu",
    type: "bille",

    // Methods to define this object behavior
    ecrire: function (params) {
        return "J'écris " + params;
    }
};

let Voiture = {

    constructor(param1, param2, param3){
        this.marque = param1;
        this.couleur = param2;
        this.concessionneur = param3;
    },

    decrire: function () {
        return "Il s'agit de " + this.marque + " " + this.couleur + " , livrée par " + this.concessionneur;
    }
};

let vehicule1 = Voiture("Toyota", "blanc", "CFAO Motors");
let vehicule2 = Voiture("Pajero", "bleu", "CFAO Motors");

alert(vehicule1.marque);
console.log(vehicule2.marque);
document.write(vehicule1.decrire);


// Events
document.addEventListener('click', function(params) {
    document.write("C'est cliqué");
});
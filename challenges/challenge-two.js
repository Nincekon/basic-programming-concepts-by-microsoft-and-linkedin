/* Compléter le code ci-dessous pour que
- si la variable heure est inférieure à 10, on affiche "Bonjour !"
- sinon, si heure est inférieure à 18, on affiche "Bon après-midi !"
- sinon, on affiche "Bonsoir"

*/

let heure = 8;

if (heure > 0) {

    if (heure < 10) {
        alert("Bonjour");
        console.log("Bonjour");
    } else if (heure > 10 && heure < 18) {
        alert("Bon après-midi !");
        console.log("Bon après-midi !");
    } else if (heure > 18 && heure <= 23) {
        alert("Bonsoir !");
        console.log("Bonsoir !");
    } else {
        alert("Cette valeur n'est pas valide. Veuillez reéssayer plus tard !");
        console.log("Cette valeur n'est pas valide. Veuillez reéssayer plus tard !");
    }

} else {
    alert("Cette valeur n'est pas valide. Veuillez reéssayer plus tard !");
    console.log("Cette valeur n'est pas valide. Veuillez reéssayer plus tard !");
}
function valider_envoi(){
    let button = document.getElementById("env");
    let el1 = document.getElementsByName("mand_nom")[0];
    let el2 = document.getElementsByName("mand_email")[0];
    let el3 = document.getElementsByName("mand_car")[0];

    // si tous les messages d'alerte sont désactivés, cela veut dire que les champs sont valides
    if (el1.style.display == "none" && el2.style.display == "none" && el3.style.display == "none"){
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}

function verif_nom(){
    let form = document.getElementsByName("prenom_nom")[0];
    let el = document.getElementsByName("mand_nom")[0];
    // si il y a bien deux mots et pas juste un mot et un espace
    if (form.value.includes(" ") && form.value[form.value.length - 1] != " "){
        el.style.display = "none"; // cache l'élément
        console.log("hidden");
    }
    else {
        el.style.display = "block"; // montre l'élement
        console.log("shown");
    }
    valider_envoi();
}

function verif_email(){
    let form = document.getElementsByName("email")[0];
    let el = document.getElementsByName("mand_email")[0];
    if (form.value.includes("@") && form.value.includes(".")){
        el.style.display = "none"; // cache l'élément
        console.log("hidden");
    }
    else {
        el.style.display = "block"; // montre l'élement
        console.log("shown");
    }
    valider_envoi();
}

function verif_champ(){
    let form = document.getElementsByName("zone_texte")[0];
    let el = document.getElementsByName("mand_car")[0];
    if (form.value.length > 19 && form.value.length < 1001){
        el.style.display = "none"; // cache l'élément
        console.log("hidden");
    }
    else {
        el.style.display = "block"; // montre l'élement
        console.log("shown");
    }
    valider_envoi();
}

env.addEventListener("click", function() { //attache le bouton à un évènement quand on clic dessus
    var a = prompt("Pile ou Face ?");
    var a = Math.random();
 
    if (a =="pile" && a<0.5){
        alert ("Tu as gagné, le message a bien été envoyé !");
        FomulaireContact.submit();
    }
    if (a =="pile" && a>=0.5){
        alert ("Perdu ! Je t'invite à recommencer.");
        FomulaireContact.reset(); //supprime tout le formulaire et ne l'envoie pas
    }
    if ((a =="face") && (a>=0.5)){
        alert ("Tu as gagné, le message a bien été envoyé !"); 
        FomulaireContact.submit();
    }
    else{
        alert ("Perdu ! Je t'invite à recommencer.");
        FomulaireContact.reset();
    }
});
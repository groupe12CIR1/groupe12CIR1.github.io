setInterval(showTime, 1000);
var chrono_sec = 0;
var prix = "5 à 10";
var disable_loader = false; // changez ça sur "true" pour zapper le loader

// met à jour l'horloge et le chrono de la barre de menu à chaque seconde qui passe
function showTime() {
    // met à jour l'horloge
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" + min + ":" + sec;

    // met à jour le chrono
    chrono_sec++;
    let displayChrono = `${chrono_sec%60}`;
    displayChrono = chrono_sec%60 < 10 ? "0" + displayChrono : displayChrono; // on ajoute un 0 si nécessaire
    if (chrono_sec > 59){
        displayChrono = `${Math.floor(chrono_sec/60)}:${displayChrono}`; // ajoute les minutes
    } // le compteur va commencer à être bizarre si le site reste ouvert plus de 59 minutes mais bon, balec, il le restera pas. sagesse > intelligence
    currentTime += "\n" + displayChrono;

    // envoie tout au HTML
    document.getElementById("clock").innerHTML = currentTime;
}

function button_click(page){
    loader_transition(1); // on rend le loader visible, le css et l'import automatique de JS feront le reste feront le reste
    setTimeout(() => window.location.replace(page), 2000); // une fois la transition de 2 secondes terminée, on redirige
}


function members_click(){
    if (confirm(`WARNING : Visualiser nos membre coûte ${prix} euros par seconde, êtes vous sûr ?`)) {
        button_click("Membres.html");
    } else {
        prix = "4";
        alert("allez... 4 euros ?");
    }
}

function button_hover(){
    // c'est la couleur du bouton ou pas ? ;)
    console.log("#dcd1f4");
}

// se charge de faire disparaître la chips et le fond noir du chargement
function loader_transition(set){
    console.log(set);
    let lgif = document.getElementById("loader_gif");
    console.log(lgif);
    let lback = document.getElementById("loader_background");
    

    if (disable_loader){
        // on zappe le chargement
        lgif.hidden = true, 0;
        lback.hidden = true, 0;
    }
    else {
        // lance la transition
        setTimeout(() => lback.style.opacity = `${set}`, 1000*set); // si on cherche à la faire apparaître, le début de la tr doit être délayée
        lgif.style.opacity = `${set}`;
        // après 2 secondes, les deux sont cachés
        lgif.hidden = false;
        lback.hidden = false;
        setTimeout(() => lgif.hidden = true, 2000);
        setTimeout(() => lback.hidden = true, 2000);
    }

    //$('#loader_gif').hide(); // cache le loader
    //$('#loader_background').hide(); // cache le loader
}

//$(window).ready(loader_transition); // dès que la page est chargée, on commence la transition
// "cache le loader" après 5 secondes
//setTimeout(hideLoader, 5000);

loader_transition(0); // on lance la transition d'effacement des loaders
showTime();
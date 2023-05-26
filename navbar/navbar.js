setInterval(showTime, 1000);
var chrono_sec = 0;
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


function members_click(arg){
    console.log(arg);
    if (confirm("WARNING : Visualiser nos membre coûte 5 à 10 euros par seconde, êtes vous sûr ?")) {
        window.location.replace("Membres.html");
    } else {
        alert("allez... 4 euros ?");
    }
}

function button_hover(){
    // c'est la couleur du bouton ou pas ? ;)
    console.log("#dcd1f4");
}

// se charge de faire disparaître la chips et le fond noir du chargement
function loader_transition(){
    let lgif = document.getElementById("loader_gif");
    let lback = document.getElementById("loader_background");
    // l'opacité finale des éléments de chargement avant de disparaître
    lgif.style.opacity = '0';
    lback.style.opacity = '0';

    if (disable_loader){
        // on zappe le chargement
        setTimeout(() => lgif.remove(), 0);
        setTimeout(() => lback.remove(), 0);
    }
    else {
        // le chargement dure 4 secondes pour la chips, 2 secondes pour le fond
        setTimeout(() => lgif.remove(), 4000);
        setTimeout(() => lback.remove(), 2000);
    }

    //$('#loader_gif').hide(); // cache le loader
    //$('#loader_background').hide(); // cache le loader
}

//$(window).ready(loader_transition); // dès que la page est chargée, on commence la transition
// "cache le loader" après 5 secondes
//setTimeout(hideLoader, 5000);

loader_transition();
showTime();
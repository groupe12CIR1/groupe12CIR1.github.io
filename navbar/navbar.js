setInterval(showTime, 1000);
var chrono_sec = 0;

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


function members_click(){
    if (confirm("WARNING : Visualiser nos membre coûte 5 à 10 euros par seconde, êtes vous sûr ?")) {
        window.location.replace("Membres.html");
    } else {
        alert("allez... 4 euros ?");
    }
}

showTime();
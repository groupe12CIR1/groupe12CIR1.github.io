setInterval(showTime, 1000);
var chrono_sec = 0;
var chrono_min = 0;
var chrono_hour = 0;

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
    if (chrono_sec > 59){
        chrono_min++;
        chrono_min = chrono_min < 10 ? "0" + chrono_min : chrono_min;
        chrono_sec = "0";
    }
    if (chrono_min > 59){
        chrono_hour++;
        chrono_hour = chrono_hour < 10 ? "0" + chrono_hour : chrono_hour;
        chrono_min = "0";
    }



    currentChrono = chrono_sec + " ";
    if (chrono_min != 0){
        currentChrono = chrono_min + ":" + currentChrono;
    }
    if (chrono_hour != 0){
        currentChrono = chrono_hour + ":" + currentChrono;
    }

    currentTime += "\n" + currentChrono;

    // envoie tout au HTML
    document.getElementById("clock").innerHTML = currentTime;
}


function members_click(){
    if (confirm("WARNING : certains de nos membres sont très moches. êtes vous sûr ?")) {
        window.location.replace("Membres.html");
    } else {
        alert("ils sont pas si moches quand même :(");
    }
}

showTime();
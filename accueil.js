setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}


function members_click(){
    if (confirm("WARNING : certains de nos membres sont très moches. êtes vous sûr ?")) {
        window.location.replace("Membres.html");
    } else {
        alert("ils sont pas si moches quand même :(");
    }
}

showTime();
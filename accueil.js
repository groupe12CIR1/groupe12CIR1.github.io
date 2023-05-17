

function members_click(){
    if (confirm("WARNING : certains de nos membres sont très moches. êtes vous sûr ?")) {
        window.location.replace("Membres.html");
    } else {
        alert("ils sont pas si moches quand même :(");
    }
}
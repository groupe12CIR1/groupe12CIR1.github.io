function main(){
    load();
    timePage();
}
main();

function load(){
    let load = document.getElementById('load');

    // Créez un élément <img> pour afficher le GIF
    const gif = document.createElement('img');
    gif.src="Images_H/loading.gif";
    gif.style.position = 'fixed';
    gif.style.top = '10%';
    gif.style.left = '32%';

    // Insérez le GIF dans l'élément spécifié
    load.appendChild(gif);

    // Supprimez le GIF après 2 secondes
    setTimeout(() => {
    load.removeChild(gif);
    
    }, 4000);
    
}
function timePage(){
    let elem = document.getElementById("body");
    elem.style.display = 'block';
    setTimeout(() => {
        elem.style.display = 'none';
        
    }, 4000);
}
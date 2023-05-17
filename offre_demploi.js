function main(){
    load();
    
}
main();

function load(){
    let load = document.getElementById('body');
    

    // Créez un élément <img> pour afficher le GIF
    const gif = document.createElement('img');
    gif.src="Images_H/loader.gif";
    gif.style.position = 'fixed';
    gif.style.top = '0';
    gif.style.left = '0';
    gif.style.width = '100%';
    gif.style.opacity = '0.8';

    // Insérez le GIF dans l'élément spécifié
    load.appendChild(gif);

    // Supprimez le GIF après 2 secondes
    setTimeout(() => {
    load.removeChild(gif);
    }, 4000);
    
}
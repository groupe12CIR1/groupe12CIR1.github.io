let heading = document.getElementById("desc");    //vise l'élément où 'qui sommes-nous' s'affiche
let text = heading.textContent;
heading.textContent = "";   //commence par marqué rien a la place du texte

function animateHeading() {
    let currentCharIndex = 0;   //initialisation d'un indice à 0
    let interval = setInterval(function() {
      if (currentCharIndex < text.length) {   //si l'indice est < que la taille on affiche un caractere apres l'autre
        heading.textContent += text[currentCharIndex];
        currentCharIndex++;
      } 
      else {
        clearInterval(interval);    // quand l'indice devient = à la taille alors on "clear" le text puis on recommence 
        setTimeout(function() {
          heading.textContent = "";
          currentCharIndex = 0;
          animateHeading();
        }, 1000); // Temps d'attente avant de recommencer l'animation
      }
    }, 75); // Temps d'affichage entre les caractères
}

animateHeading();

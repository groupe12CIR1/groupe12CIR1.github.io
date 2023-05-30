let heading = document.getElementById("desc");
let text = heading.textContent;
heading.textContent = "";

function animateHeading() {
  let currentCharIndex = 0;
  let interval = setInterval(function() {
    if (currentCharIndex < text.length) {
      heading.textContent += text[currentCharIndex];
      currentCharIndex++;
    } else {
      clearInterval(interval);
      setTimeout(function() {
        heading.textContent = "";
        currentCharIndex = 0;
        animateHeading();
      }, 1000); // Temps d'attente avant de recommencer l'animation (en millisecondes)
    }
  }, 75); // Temps d'affichage d'un caractère (en millisecondes)
}

animateHeading();

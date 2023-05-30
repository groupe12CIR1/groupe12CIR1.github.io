
// Écouteur d'événement pour le clic sur le bouton de soumission
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupération des valeurs des filtres
    var authorFilter = document.getElementById('author-filter').value.toLowerCase().trim();
    var titleFilter = document.getElementById('title-filter').value.toLowerCase().trim();
    var yearFilter = document.getElementById('year-filter').value;
    var publicationType = document.querySelector('input[name="publication-type"]:checked').value; // input[name="publication-type"]:checked => sélectionner l'élément <input> de type radio avec le nom "publication-type" qui est actuellement coché.

    // Filtrage des publications
    var publications = document.querySelectorAll('.publication');
    console.log(publications);
    publications.forEach(function(publication) {
        var author = publication.querySelector('h3').textContent.toLowerCase();
        var title = publication.querySelector('p').textContent.toLowerCase();
        var year = publication.querySelector('p').textContent.match(/\d{4}/); // match(/\d{4}/) => pour vérifier si l'année de publication correspond au format "AAAA" (quatre chiffres).

        // Vérification des conditions de filtrage
        var authorMatch = author.includes(authorFilter);
        var titleMatch = title.includes(titleFilter);
        var yearMatch = !yearFilter || (year && year[0] === yearFilter);
        var typeMatch = publicationType === 'all' || (publication.classList.contains(publicationType));

        // Affichage ou masquage des publications selon les filtres
        if (authorMatch && titleMatch && yearMatch && typeMatch) {
            publication.style.display = 'block';
        }
        else {
            publication.style.display = 'none';
        }
    });
});


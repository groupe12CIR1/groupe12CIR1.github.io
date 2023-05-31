/*
PARTIE CARTE GRATTABLE
*/

var canvas = document.getElementById("image_grattage");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgba(185, 185, 185, 255)";
ctx.fillRect(0, 0, 500, 500); // remplis le canvas de gris 

var mousedown = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;
    
w = 500;
h = 500;

canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
}, false);
canvas.addEventListener("mousedown", function (e) {
    findxy('down', e)
}, false);
canvas.addEventListener("mouseup", function (e) {
    findxy('up', e)
}, false);
canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
}, false);

function findxy(res, e) {
    if (res == 'down') { // si on commence à gratter
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        mousedown = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") { // si on relâche la souris ou sors du cadre
        mousedown = false;
    }
    if (res == 'move') {
        if (mousedown) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            ctx.clearRect(prevX - 20,prevY / 2 - 10,20,10);
        }
    }
}

/*
PARTIE EDIT MODE
*/

var debug_mode = false;
var isEditMode = false;

var editButton = document.getElementById('editButton');
var editNameButtons = document.getElementsByClassName('editNameButton');
var deleteButtons = document.getElementsByClassName('deleteButton');
/*
console.log(`deleteButtons : ${deleteButtons}`);
for (var i = 0; i < deleteButtons.length; i++) {
  console.log(deleteButtons[i]);
} */
var addMemberButton = document.getElementById('addMemberButton');
var addMemberForm = document.getElementById('addMemberForm');
var newMemberNameInput = document.getElementById('newMemberName');

editButton.addEventListener('click', function() {
  if (isEditMode) {
    if (confirm("Êtes-vous sûr de vouloir quitter le mode édition ?")) {
      exitEditMode();
    }
  } else {
    if (debug_mode){
      enterEditMode();
      return;
    }
    // si le nom d'administrateur est correct
    if (prompt("Veuillez entrer le nom d'utilisateur administrateur", "") === "admin") {
      // si le mot de passe du compte admin est correct
      if (prompt("Veuillez entrer le mot de passe administrateur", "") === "admin_pwd") {
        enterEditMode();
      } else {
        alert("Mot de passe incorrect");
      }
    } else {
      alert("Nom d'utilisateur administrateur incorrect");
    }
  }
});

// ne pas utiliser de "foreach" (raison : javascript est nul)
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', function() {
    if (isEditMode) {
      var confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer ce membre ?");
      if (confirmDelete) {
        this.parentNode.parentNode.remove(); // autodestruction
      }
    }
  });
}

for (var i = 0; i < editNameButtons.length; i++) {
  editNameButtons[i].addEventListener('click', function() {
    if (isEditMode) {
      let newName = prompt("Veuillez entrer un nouveau nom", "");
      this.previousSibling.previousSibling.textContent = newName;
    }
  });
}

// mamma mia
addMemberButton.addEventListener('click', function() {
  var newMemberName = newMemberNameInput.value;
  if (newMemberName !== "") {
    var newMember = document.createElement('div');
    newMember.className = 'carte_version_petite';
    newMember.innerHTML = `<div><section><h2>${newMemberName}</h2><p>Période : inconnue<br>Projet : inconnu<br><br>ISEN Yncréa Ouest –Nantes</p><button class='deleteButton'>supprimer</button></section>`
    document.getElementsByTagName("main")[0].appendChild(newMember);
    // on "active" le bouton d'autodestruction
    document.getElementsByClassName('deleteButton')[document.getElementsByClassName('deleteButton').length - 1].addEventListener('click', function() {
      if (isEditMode) {
        var confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer ce membre ?");
        if (confirmDelete) {
          this.parentNode.parentNode.parentNode.remove(); // autodestruction
        }
      }
    });
    //document.getElementById('members').appendChild(newMember);
    newMemberNameInput.value = "";
  }
});

function enterEditMode() {
  isEditMode = true;
  editButton.style.backgroundColor = "#4CAF50";
  editButton.textContent = "Mode normal";
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].style.display = "inline-block";
  }
  for (var i = 0; i < editNameButtons.length; i++) {
    editNameButtons[i].style.display = "inline-block";
  }
  addMemberForm.style.display = "block";
}

function exitEditMode() {
  isEditMode = false;
  editButton.style.backgroundColor = "#f44336";
  editButton.textContent = "Mode édition";
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].style.display = "none";
  }
  for (var i = 0; i < editNameButtons.length; i++) {
    editNameButtons[i].style.display = "none";
  }
  addMemberForm.style.display = "none";
}

exitEditMode()
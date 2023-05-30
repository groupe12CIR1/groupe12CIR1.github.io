var canvas = document.getElementById("image_grattage");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgba(185, 185, 185, 255)";
ctx.fillRect(0, 0, 500, 500);

var flag = false,
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
    if (res == 'down') { /* si on gratte */
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            ctx.clearRect(prevX - 20,prevY / 2 - 10,20,10);
        }
    }
}

var isEditMode = false;
var isAdminAuthenticated = false;

var editButton = document.getElementById('editButton');
var deleteButtons = document.getElementsByClassName('deleteButton');
var addMemberButton = document.getElementById('addMemberButton');
var addMemberForm = document.getElementById('addMemberForm');
var newMemberNameInput = document.getElementById('newMemberName');

editButton.addEventListener('click', function() {
  if (isEditMode) {
    var confirmExit = confirm("Êtes-vous sûr de vouloir quitter le mode édition ?");
    if (confirmExit) {
      exitEditMode();
    }
  } else {
    var username = prompt("Veuillez entrer le nom d'utilisateur administrateur", "");
    if (username === "admin") {
      var password = prompt("Veuillez entrer le mot de passe administrateur", "");
      if (password === "admin_pwd") {
        enterEditMode();
      } else {
        alert("Mot de passe incorrect");
      }
    } else {
      alert("Nom d'utilisateur administrateur incorrect");
    }
  }
});

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', function() {
    if (isEditMode) {
      var confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer ce membre ?");
      if (confirmDelete) {
        this.parentNode.remove();
      }
    }
  });
}

addMemberButton.addEventListener('click', function() {
  var newMemberName = newMemberNameInput.value;
  if (newMemberName !== "") {
    var newMember = document.createElement('div');
    newMember.className = 'member';
    newMember.innerHTML = '<span class="name">' + newMemberName + '</span>' +
      '<button class="deleteButton">Supprimer</button>';
    document.getElementById('members').appendChild(newMember);
    newMemberNameInput.value = "";
  }
});

function enterEditMode() {
  isEditMode = true;
  isAdminAuthenticated = true;
  editButton.style.backgroundColor = "#4CAF50";
  editButton.textContent = "Mode normal";
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].style.display = "inline-block";
  }
  addMemberForm.style.display = "block";
}

function exitEditMode() {
  isEditMode = false;
  isAdminAuthenticated = false;
  editButton.style.backgroundColor = "#f44336";
  editButton.textContent = "Mode édition";
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].style.display = "none";
  }
  addMemberForm.style.display = "none";
}

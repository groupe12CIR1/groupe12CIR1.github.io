function main(){
    modal();
    modal1();
}
main();

function modal(){
    let openModalButton = document.getElementById('openModal');
    let closeModalButton = document.getElementById('closeModal');
    let modal = document.getElementById('modal');

    openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    });
}

function modal1(){
    let openModalButton2 = document.getElementById('openModal2');
    let closeModalButton2 = document.getElementById('closeModal2');
    let modal2 = document.getElementById('modal2');

    openModalButton2.addEventListener('click', function() {
      modal2.style.display = 'block';
    });

    closeModalButton2.addEventListener('click', function() {
      modal2.style.display = 'none';
    });
}


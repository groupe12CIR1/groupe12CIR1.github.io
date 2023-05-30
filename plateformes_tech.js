function main(){
    modal();
    modal1();
}
main();

function modal(){
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const modal = document.getElementById('modal');

    openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    });
}

function modal1(){
    const openModalButton2 = document.getElementById('openModal2');
const closeModalButton2 = document.getElementById('closeModal2');
const modal2 = document.getElementById('modal2');

openModalButton2.addEventListener('click', function() {
  modal2.style.display = 'block';
});

closeModalButton2.addEventListener('click', function() {
  modal2.style.display = 'none';
});

}


function main(){
    modal();
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
const refs = {
    modalOpen: document.querySelector('.burger'),
    burgerModal: document.querySelector('.burger-modal'),
}
refs.modalOpen.addEventListener('click', openModal)
function openModal() {
    if (refs.burgerModal.classList.contains('hidden')) {
        refs.burgerModal.classList.remove('hidden');
    }
    else{
        refs.burgerModal.classList.add('hidden');
    }
}
const refs = {
    modalOpen: document.querySelector('.burger'),
    burgerModal: document.querySelector('.burger-modal'),
}
refs.modalOpen.addEventListener('click', openModal(refs.burgerModal))
function openModal(modalName) {
    if (modalName.classList.contains('hidden')) {
        modalName.classList.remove('hidden');
    }
    else{
        modalName.classList.add('hidden');
    }
}
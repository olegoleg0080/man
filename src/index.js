const refs = {
    modalOpen: document.querySelector('.burger'),
    burgerModal: document.querySelector('.burger-modal'),
    modalClose: document.querySelector('.modal__close'),
}
refs.modalOpen.addEventListener('click', () => {
    refs.burgerModal.classList.remove('hidden');
})
refs.modalClose.addEventListener('click', () => {
    refs.burgerModal.classList.add('hidden');
})
refs.burgerModal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal__container')) {
        refs.burgerModal.classList.add('hidden');
    }
});

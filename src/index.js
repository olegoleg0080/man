const refs = {
  modalOpen: document.querySelector('.burger'),
  burgerModal: document.querySelector('.burger-modal'),
  modalClose: document.querySelector('.modal__close'),
  loginModal: document.querySelector('.login'),
  accountBtn: document.querySelector('.support__btn-account'),
  containerScroll: document.querySelector('.container-scroll'),
  redactContainer: document.querySelector('.redact__container'),
  redactClose: document.querySelector('.redact__close'),
};
refs.modalOpen.addEventListener('click', () => {
  refs.burgerModal.classList.remove('hidden');
});
refs.accountBtn.addEventListener('click', () => {
  refs.loginModal.classList.remove('hidden');
  document.body.style = 'overflow: hidden';
});
refs.modalClose.addEventListener('click', () => {
  refs.burgerModal.classList.add('hidden');
});
refs.burgerModal.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__container')) {
    refs.burgerModal.classList.add('hidden');
  }
});
refs.containerScroll.addEventListener('click', (e) => {
    if (e.target.closest('tr')) {
      refs.redactContainer.classList.remove('hidden');
      document.body.style = 'overflow: hidden';
    }
  });
refs.redactClose.addEventListener('click', ()=>{
    refs.redactContainer.classList.add('hidden');
})

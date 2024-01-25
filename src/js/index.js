import { refs } from "./refs";
function modalOpen(btnName, modalBlock) {
  btnName.addEventListener('click', () => {
    modalBlock.classList.remove('hidden');
    document.body.style = 'overflow: hidden';
  });
}
function modalClose(btnName, modalBlock) {
  if (btnName) {
    btnName.addEventListener('click', () => {
      modalBlock.classList.add('hidden');
      document.body.style = 'overflow-y: scroll';
    });
  }
}
function modalCloseOut(btnName, className, modalBlock) {
  //? btnName при нажатті на що буде закриватися модалка
  //? className буде перевірятися чи не надато на className
  //? modalBlock те що буде ховатися
  if(btnName && modalBlock){btnName.addEventListener('click', e => {
    if (!e.target.closest(className)) {
      modalBlock.classList.add('hidden');
      document.body.style = 'overflow: scroll';
    }
  })}
}
function modalRadio2(btnName1, btnName2, modalBlock1, modalBlock2) {
  btnName1.addEventListener('click', () => {
    if (modalBlock1.classList.contains('hidden')) {
      modalBlock1.classList.remove('hidden');
      modalBlock2.classList.add('hidden');
    } else {
      modalBlock1.classList.add('hidden');
    }
  });
  btnName2.addEventListener('click', () => {
    if (modalBlock2.classList.contains('hidden')) {
      modalBlock2.classList.remove('hidden');
      modalBlock1.classList.add('hidden');
    } else {
      modalBlock2.classList.add('hidden');
    }
  });
  //? при натисканні одної модалки інша ховається
}
// modalRadio2(
//   refs.modalBtnGroup,
//   refs.modalBtnVac,
//   refs.modalGroup,
//   refs.modalVac
// );
// modalOpen(refs.modalOpen, refs.burgerModal);
// modalOpen(refs.accountBtn, refs.loginModal);
// modalClose(refs.modalClose, refs.burgerModal);
// modalClose(refs.redactClose, refs.redactContainer);
// modalCloseOut(refs.burgerModal, '.modal__container', refs.burgerModal);
// modalCloseOut(document.body, '.header__sort-modal', refs.modalGroup);
// modalCloseOut(document.body, '.header__sort-modal', refs.modalVac);
// modalCloseOut(refs.redactContainer, '.redact__blocks', refs.redactContainer);
//! функції які використовуються лише 1 раз або просто геморні функціх до яких я ше не дійшов
if(refs.containerScroll && refs.redactContainer){refs.containerScroll.addEventListener('click', e => {
  if (e.target.closest('tr')) {
    refs.redactContainer.classList.remove('hidden');
    document.body.style = 'overflow: hidden';
    console.log('hello');
  }
})};

console.log('hel');
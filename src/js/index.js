import refs from "./refs";
import create from './create-card.js';
import apiModal from './modal.js';
import GetData from "./getDataClassRender.js";
document.addEventListener('DOMContentLoaded', () => {
  apiModal.modalRadio2(
    refs.modalBtnGroup,
    refs.modalBtnVac,
    refs.modalGroup,
    refs.modalVac
  );

  apiModal.modalOpen(refs.modalOpen, refs.burgerModal);
  apiModal.modalOpen(refs.accountBtn, refs.loginModal);
  apiModal.modalClose(refs.modalClose, refs.burgerModal);
  apiModal.modalClose(refs.redactClose, refs.redactContainer);
  apiModal.modalCloseOut(refs.burgerModal,'.modal__container', refs.burgerModal);
  // apiModal.modalCloseOut(document.body, '.header__sort-modal', refs.modalGroup);
  // apiModal.modalCloseOut(document.body, '.header__sort-modal', refs.modalVac);
  apiModal.modalCloseOut(refs.redactContainer,'.redact__blocks',refs.redactContainer);
  
});

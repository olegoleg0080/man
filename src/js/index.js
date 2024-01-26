import refs from './refs.js';
import create from './create-card.js';
import apiModal from './modal.js';
apiModal.modalRadio2(
  refs.refs.modalBtnGroup,
  refs.refs.modalBtnVac,
  refs.refs.modalGroup,
  refs.refs.modalVac
);
apiModal.modalOpen(refs.refs.modalOpen, refs.refs.burgerModal);
apiModal.modalOpen(refs.refs.accountBtn, refs.refs.loginModal);
apiModal.modalClose(refs.refs.modalClose, refs.refs.burgerModal);
apiModal.modalClose(refs.refs.redactClose, refs.redactContainer);
apiModal.modalCloseOut(refs.refs.burgerModal, '.modal__container', refs.refs.burgerModal);
apiModal.modalCloseOut(document.body, '.header__sort-modal', refs.refs.modalGroup);
apiModal.modalCloseOut(document.body, '.header__sort-modal', refs.refs.modalVac);
apiModal.modalCloseOut(refs.refs.redactContainer, '.redact__blocks', refs.refs.redactContainer);

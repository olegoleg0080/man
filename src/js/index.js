import refs from './refs.js';
import create from './create-card.js';
import apiModal from './modal.js';
apiModal.modalRadio2(
  refs.refs.modalBtnGroup,
  refs.refs.modalBtnVac,
  refs.refs.modalGroup,
  refs.refs.modalVac
);
apiModal.modalOpen(refs.modalOpen, refs.burgerModal);
apiModal.modalOpen(refs.accountBtn, refs.loginModal);
apiModal.modalClose(refs.modalClose, refs.burgerModal);
apiModal.modalClose(refs.redactClose, redactContainer);
apiModal.modalCloseOut(refs.burgerModal, '.modal__container', refs.burgerModal);
apiModal.modalCloseOut(document.body, '.header__sort-modal', refs.modalGroup);
apiModal.modalCloseOut(document.body, '.header__sort-modal', refs.modalVac);
apiModal.modalCloseOut(
  refs.redactContainer,
  '.redact__blocks',
  refs.redactContainer
);

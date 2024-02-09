import refs from './refs.js';
import create from './create-card.js';
import apiModal from './modal.js';
import createNormalURL from './parselURLFix.js';
import GetData from './getDataClassRender.js';
import getGroup from './getGroupRender.js';

// ? виправлення парселя для модлки
createNormalURL(
  './class-sort.html',
  'group=1',
  'modal__block-version',
  'Основна',
  '.modal__group'
);
createNormalURL(
  './class-sort.html',
  'group=2',
  'modal__block-version',
  'Підготовча',
  '.modal__group'
);
createNormalURL(
  './class-sort.html',
  'group=3',
  'modal__block-version',
  'Спеціальна',
  '.modal__group'
);
createNormalURL(
  './class-sort.html',
  'group=4',
  'modal__block-version',
  'Звільнені',
  '.modal__group'
);

createNormalURL(
  './class-sort.html',
  'vactination=true',
  'modal__block-version',
  'Щеплений',
  '.modal__vactination'
);
createNormalURL(
  './class-sort.html',
  'vactination=false',
  'modal__block-version',
  'Не щеплений',
  '.modal__vactination'
);
// ? виправлення парселя для основного хедеру
createNormalURL(
  './class-sort.html',
  'group=1',
  'sort__modal-btn',
  'Основна',
  '.modal-block-group'
);
createNormalURL(
  './class-sort.html',
  'group=2',
  'sort__modal-btn',
  'Підготовча',
  '.modal-block-group'
);
createNormalURL(
  './class-sort.html',
  'group=3',
  'sort__modal-btn',
  'Спеціальна',
  '.modal-block-group'
);
createNormalURL(
  './class-sort.html',
  'group=4',
  'sort__modal-btn',
  'Звільнені',
  '.modal-block-group'
);

createNormalURL(
  './class-sort.html',
  'vactination=true',
  'sort__modal-btn',
  'Щеплений',
  '.modal-block-vac'
);
createNormalURL(
  './class-sort.html',
  'vactination=false',
  'sort__modal-btn',
  'Не щеплений',
  '.modal-block-vac'
);
document.addEventListener('DOMContentLoaded', () => {
  apiModal.modalRadio2(
    refs.modalBtnGroup,
    refs.modalBtnVac,
    refs.modalGroup,
    refs.modalVac
  );

  apiModal.modalOpen(refs.modalOpen, refs.burgerModal);
  apiModal.modalOpen(refs.accountBtn, refs.loginModal);
  apiModal.modalOpen(refs.redactDateInput, refs.redactDateBlock);
  apiModal.modalClose(refs.loginSub, refs.loginModal);
  apiModal.modalClose(refs.modalClose, refs.burgerModal);
  apiModal.modalClose(refs.redactClose, refs.redactContainer);
  apiModal.modalCloseOut(
    refs.burgerModal,
    '.modal__container',
    refs.burgerModal
  );
  // apiModal.modalCloseOut(document.body, '.header__sort-modal', refs.modalGroup);
  // apiModal.modalCloseOut(document.body, '.header__sort-modal', refs.modalVac);
  apiModal.modalCloseOut(
    refs.redactContainer,
    '.redact__blocks',
    refs.redactContainer
  );
  apiModal.openRedact(refs.containerScroll, refs.redactContainer);
});

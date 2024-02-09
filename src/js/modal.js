import refs from './refs';
const urlParams = new URLSearchParams(window.location.search);
const group = urlParams.get('group');
const vac = urlParams.get('vactination');

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
  //? className буде перевірятися чи не нажато на className
  //? modalBlock те що буде ховатися
  if (btnName && modalBlock) {
    btnName.addEventListener('click', e => {
      if (!e.target.closest(className)) {
        modalBlock.classList.add('hidden');
        document.body.style = 'overflow: scroll';
      }
    });
  }
}
function modalRadio2(btnName1, btnName2, modalBlock1, modalBlock2) {
  if (btnName1 && btnName2 && modalBlock1 && modalBlock2) {
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
    //? при натисканні одної модалки інша ховається}
  }
}
//! функції які використовуються лише 1 раз
function openRedact(containerScroll, redactContainer) {
  if (containerScroll && redactContainer) {
    containerScroll.addEventListener('click', e => {
      const clickedTr = e.target.closest('tr');
      if (clickedTr && clickedTr.id !== 'noRedact') {
        let dataName = clickedTr.querySelector('#table-data-name');
        let dataDate = clickedTr.querySelector('#table-data-birthday');
        let dataGroup = clickedTr.querySelector('#table-data-group');
        let dataTerm = clickedTr.querySelector('#table-data-date');
        let dataVac = clickedTr.querySelector('#table-data-vactination');

        let byrthdayShablon = '';
        let groupShablon = '';
        let termShablon = '';
        let vacShablon = '';
        if (dataDate) {
          byrthdayShablon = `<div class="redact__block redact__blocks-birthday">
        <p class="redact__blocks-title">Дата народження</p>
        <input
        readonly
          type="date"
          name="birthday-date"
          value="${dataDate.innerHTML.split('.').reverse().join('-')}"
          id="birthday-data"
          class="redact__input redact__input-date"
        />
      </div>`;
        }
        if (dataGroup) {
          groupShablon = `
        <div class="redact__block redact__blocks-group">
      <p class="redact__blocks-title">Група здоров'я</p>
      <div>
        <select
          name="redact__group"
          id="redact__select-group"
          class="redact__input redact__input-select"
        >
        <option value="basic" ${
          dataGroup.innerHTML.includes('Основна') ? 'selected' : ''
        }>Основна</option>
        <option value="preparatory" ${
          dataGroup.innerHTML.includes('Підготовча') ? 'selected' : ''
        }>Підготовча</option>
        <option value="special" ${
          dataGroup.innerHTML.includes('Спеціальна') ? 'selected' : ''
        }>Спеціальна</option>
        <option value="liberated" ${
          dataGroup.innerHTML.includes('Звільнені') ? 'selected' : ''
        }>Звільнені</option>
        </select>
        <div>
        </div>
      </div>

      <button class="custom-select"></button>
      </div>`;
        }
        if (dataTerm) {
          termShablon = `
      <div class="redact__block redact__blocks-term">
      <p class="redact__blocks-title">Термін дії</p>
      <input
      readonly
        type="date"
        name="term-date"
        value="${dataTerm.innerHTML.split('.').reverse().join('-')}"
        id="term-data"
        class="redact__input redact__input-date"
      />
      </div>`;
        }
        if (dataVac) {
          vacShablon = `
      <div class="redact__block redact__blocks-vactination">
      <p class="redact__blocks-title">Щеплення</p>
      <select
        name=""
        id="redact__select-vactination"
        class="redact__input redact__input-select"
      >
      <option value="true-vac" ${
        dataVac.innerHTML.includes('Щеплений') ? 'selected' : ''
      }>Щеплений</option>
      <option value="false-vac" ${
        dataVac.innerHTML.includes('Не щеплений') ? 'selected' : ''
      }>Не щеплений</option>
      </select>
      <button class="custom-select"></button>
      </div>`;
        }
        const redactCard = `
        <div class="redact__blocks">
    <button class="redact__close">
      <svg class="redact__svg">
        <use href="./svg/close-redact.svg#close2"></use>
      </svg>
    </button>
    <div class="redact__block redact__blocks-name">
      <p class="redact__blocks-title">ПІБ учня</p>
      <input
        placeholder="ПІБ учня"
        value="${dataName.innerHTML}"
        type="name"
        class="redact__input"
        id="input-name"
      />
    </div>
    ${vac === null && group === null ? byrthdayShablon : ''}
    ${vac === null ? groupShablon : ''}
    ${vac === null ? termShablon : ''}
    ${group === null ? vacShablon : ''}

    

    

    

    <button type="submit" class="redact__submit">Зберегти</button>
  </div>
`;
        redactContainer.classList.remove('hidden');
        document.body.style = 'overflow: hidden';
        redactContainer.innerHTML = redactCard;
      }
    });
  }
}

export default {
  modalOpen,
  modalClose,
  modalCloseOut,
  modalRadio2,
  openRedact,
};

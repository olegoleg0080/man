!function(){var a={sortSelect:document.querySelector(".sort-select__text"),scroll:document.querySelector(".container-scroll"),modalOpen:document.querySelector(".burger"),burgerModal:document.querySelector(".burger-modal"),modalClose:document.querySelector(".modal__close"),loginModal:document.querySelector(".login"),accountBtn:document.querySelector(".support__btn-account"),containerScroll:document.querySelector(".container-scroll"),redactContainer:document.querySelector(".redact__container"),redactClose:document.querySelector(".redact__close"),modalGroup:document.querySelector(".modal-block-group"),modalVac:document.querySelector(".modal-block-vac"),modalBtnGroup:document.querySelector(".sort__group"),modalBtnVac:document.querySelector(".sort__vaccination"),redactBlock:document.querySelector(".redact__blocks"),classListPrim:document.querySelector("#class-list-primary"),classListSec:document.querySelector("#class-list-sec"),classListHi:document.querySelector("#class-list-hi"),className:document.querySelector(".class-parallel__name"),cardClassName:document.querySelector(".card__className-class"),redactDateInput:document.querySelector(".redact__input-date"),redactDateBlock:document.querySelector(".redact-date"),loginSub:document.querySelector(".login__submit")};fetch("".concat("https://65bce5d2b51f9b29e9328629.mockapi.io/man/man")).then((function(a){return a.json()})).then((function(t){var c=t[0].man[0].classes,n=0;c.forEach((function(a){Number(a.paralelName)!==n&&(1,n=a.paralelName)})),n,e(1,4,a.classListPrim),e(5,9,a.classListSec),e(10,12,a.classListHi),c.forEach((function(a){var e,t,c;e=a,t=document.querySelector("#class-paralel-".concat(e.paralelName)),c='<a class="class-parallel__name" href="./class.html?parName='.concat(e.paralelName,"&classLetter=").concat(e.classLetter,'">').concat(e.paralelName,"-").concat(e.classLetter,"</a>"),t.insertAdjacentHTML("beforeend",c)}))})).catch((function(a){console.error("Error:",a)}));function e(a,e,t){if(null!=a&&null!==e&&null!==t)for(;a<=e;a++){var c='<div id="class-paralel-'.concat(a,'" class="class-list__parallel class-parallel"></div>');t.insertAdjacentHTML("beforeend",c)}}var t=new URLSearchParams(window.location.search),c=t.get("group"),n=t.get("vactination");var l={modalOpen:function(a,e){a.addEventListener("click",(function(){e.classList.remove("hidden"),document.body.style="overflow: hidden"}))},modalClose:function(a,e){a&&a.addEventListener("click",(function(){e.classList.add("hidden"),document.body.style="overflow-y: scroll"}))},modalCloseOut:function(a,e,t){a&&t&&a.addEventListener("click",(function(a){a.target.closest(e)||(t.classList.add("hidden"),document.body.style="overflow: scroll")}))},modalRadio2:function(a,e,t,c){a&&e&&t&&c&&(a.addEventListener("click",(function(){t.classList.contains("hidden")?(t.classList.remove("hidden"),c.classList.add("hidden")):t.classList.add("hidden")})),e.addEventListener("click",(function(){c.classList.contains("hidden")?(c.classList.remove("hidden"),t.classList.add("hidden")):c.classList.add("hidden")})))}
//! функції які використовуються лише 1 раз
,openRedact:function(a,e){a&&e&&a.addEventListener("click",(function(a){var t=a.target.closest("tr");if(t&&"noRedact"!==t.id){var l=t.querySelector("#table-data-name"),o=t.querySelector("#table-data-birthday"),s=t.querySelector("#table-data-group"),r=t.querySelector("#table-data-date"),d=t.querySelector("#table-data-vactination"),i="",u="",_="",b="";o&&(i='<div class="redact__block redact__blocks-birthday">\n        <p class="redact__blocks-title">Дата народження</p>\n        <input\n        readonly\n          type="date"\n          name="birthday-date"\n          value="'.concat(o.innerHTML.split(".").reverse().join("-"),'"\n          id="birthday-data"\n          class="redact__input redact__input-date"\n        />\n      </div>')),s&&(u='\n        <div class="redact__block redact__blocks-group">\n      <p class="redact__blocks-title">Група здоров\'я</p>\n      <div>\n        <select\n          name="redact__group"\n          id="redact__select-group"\n          class="redact__input redact__input-select"\n        >\n        <option value="basic" '.concat(s.innerHTML.includes("Основна")?"selected":"",'>Основна</option>\n        <option value="preparatory" ').concat(s.innerHTML.includes("Підготовча")?"selected":"",'>Підготовча</option>\n        <option value="special" ').concat(s.innerHTML.includes("Спеціальна")?"selected":"",'>Спеціальна</option>\n        <option value="liberated" ').concat(s.innerHTML.includes("Звільнені")?"selected":"",'>Звільнені</option>\n        </select>\n        <div>\n        </div>\n      </div>\n\n      <button class="custom-select"></button>\n      </div>')),r&&(_='\n      <div class="redact__block redact__blocks-term">\n      <p class="redact__blocks-title">Термін дії</p>\n      <input\n      readonly\n        type="date"\n        name="term-date"\n        value="'.concat(r.innerHTML.split(".").reverse().join("-"),'"\n        id="term-data"\n        class="redact__input redact__input-date"\n      />\n      </div>')),d&&(b='\n      <div class="redact__block redact__blocks-vactination">\n      <p class="redact__blocks-title">Щеплення</p>\n      <select\n        name=""\n        id="redact__select-vactination"\n        class="redact__input redact__input-select"\n      >\n      <option value="true-vac" '.concat(d.innerHTML.includes("Щеплений")?"selected":"",'>Щеплений</option>\n      <option value="false-vac" ').concat(d.innerHTML.includes("Не щеплений")?"selected":"",'>Не щеплений</option>\n      </select>\n      <button class="custom-select"></button>\n      </div>'));var m='\n        <div class="redact__blocks">\n    <button class="redact__close">\n      <svg class="redact__svg">\n        <use href="./svg/close-redact.svg#close2"></use>\n      </svg>\n    </button>\n    <div class="redact__block redact__blocks-name">\n      <p class="redact__blocks-title">ПІБ учня</p>\n      <input\n        placeholder="ПІБ учня"\n        value="'.concat(l.innerHTML,'"\n        type="name"\n        class="redact__input"\n        id="input-name"\n      />\n    </div>\n    ').concat(null===n&&null===c?i:"","\n    ").concat(null===n?u:"","\n    ").concat(null===n?_:"","\n    ").concat(null===c?b:"",'\n\n    \n\n    \n\n    \n\n    <button type="submit" class="redact__submit">Зберегти</button>\n  </div>\n');e.classList.remove("hidden"),document.body.style="overflow: hidden",e.innerHTML=m}}))}};function o(a,e,t,c,n){var l='<a href="'.concat(a,"?").concat(e,'" class="').concat(t,'">').concat(c,"</a>");document.querySelector(n).insertAdjacentHTML("beforeend",l)}document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),t=e.get("parName"),c=e.get("classLetter"),n=1;fetch("".concat("https://65bce5d2b51f9b29e9328629.mockapi.io/man/man")).then((function(a){return a.json()})).then((function(e){e[0].man[0].classes.forEach((function(e){t==e.paralelName&&c==e.classLetter&&(a.cardClassName.innerHTML="".concat(t,"-").concat(c),e.students.forEach((function(a){var e=a.name,t=a.birthday,c=a.group,l=a.term,o=a.vaccination;switch(c){case 1:c="Основна";break;case 2:c="Підготовча";break;case 3:c="Спеціальна";break;case 4:c="Звільнені"}switch(o){case!0:o="Щеплений";break;case!1:o="Не щеплений"}var s='              \n          <tr class="card__table-item">\n          <td id="table-data-id" class="card__table-data-class">'.concat(n,'</td>\n          <td id="table-data-name" class="card__table-data-class">').concat(e,'</td>\n          <td id="table-data-birthday" class="card__table-data-class">').concat(t,'</td>\n          <td id="table-data-group" class="card__table-data-class">').concat(c,'</td>\n          <td id="table-data-date" class="card__table-data-class">').concat(l,'</td>\n          <td id="table-data-vactination" class="card__table-data-class">').concat(o,"</td>\n            </tr>");n+=1,document.querySelector(".card__table-class > tbody").insertAdjacentHTML("beforeend",s)})))}))})).catch((function(a){console.error("Error:",a)}))})),document.addEventListener("DOMContentLoaded",(function(){var a,e,t,c=new URLSearchParams(window.location.search),n=c.get("group");a="true"===c.get("vactination"),fetch("".concat("https://65bce5d2b51f9b29e9328629.mockapi.io/man/man")).then((function(a){return a.json()})).then((function(c){var l=c[0].man[0].classes,o=1;l.forEach((function(c){if(null!==n){var l;if(c.paralelName==o){switch(Number(c.paralelName)){case 1:e="Перші класи";break;case 2:e="Другі класи";break;case 3:e="Треті класи";break;case 4:e="Четверті класи";break;case 5:e="П'яті класи";break;case 6:e="Шості класи";break;case 7:e="Сьомі класи";break;case 8:e="Восьмі класи";break;case 9:e="Дев'яті класи";break;case 10:e="Десяті класи";break;case 11:e="Одинадцяті класи";break;case 12:e="Дванадцяті  класи"}l=c.paralelName,c.classLetter,r(l,e,".class-js-input"),o++}d(0,c.paralelName,c.classLetter)}else if(null!==a){var s;if(c.paralelName==o){switch(Number(c.paralelName)){case 1:e="Перші класи";break;case 2:e="Другі класи";break;case 3:e="Треті класи";break;case 4:e="Четверті класи";break;case 5:e="П'яті класи";break;case 6:e="Шості класи";break;case 7:e="Сьомі класи";break;case 8:e="Восьмі класи";break;case 9:e="Дев'яті класи";break;case 10:e="Десяті класи";break;case 11:e="Одинадцяті класи";break;case 12:e="Дванадцяті  класи"}s=c.paralelName,c.classLetter,r(s,e,".class-js-input"),o++}d(1,c.paralelName,c.classLetter)}function r(a,e,c){t='<div id="class-'.concat(a,'" class="container-m">\n          <h2 class="school__tier school__tier-title">').concat(e,'</h2>\n          <div class="class-paralel">\n          </div>\n        </div>'),(c=document.querySelector("".concat(c))).insertAdjacentHTML("beforeend",t)}function d(a,e,t){if(c.paralelName==e){if(0==a){var n='\n            <div class="card">\n              <div class="card__header card__header-group">\n                  <h3 class="card__class">'.concat(e,"-").concat(t,' клас</h3>\n                  <button class="card__download">\n                      <p class="card__download-text">Отримати дані</p>\n                      <svg class="card__download-icon">\n                          <use href="./svg/download.svg#download"></use>\n                      </svg>\n                  </button>\n              </div>\n              <table id="classCard').concat(e,"-").concat(t,'" class="card__table card__table-group">\n                  <tbody>\n                      <tr id="noRedact">\n                          <th class="card__table-title">№</th>\n                          <th class="card__table-title">ПІБ</th>\n                          <th class="card__table-title">Група здоров\'я</th>\n                          <th class="card__table-title">Термін дії</th>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n                ');document.querySelector("#class-".concat(e," > .class-paralel")).insertAdjacentHTML("beforeend",n);i(a,e,t,1)}if(1==a){var l='\n              <div class="card card-small">\n              <div class="card__header">\n                <h3 class="card__class">'.concat(e,"-").concat(t,' клас</h3>\n                <button class="card__download">\n                  <p class="card__download-text">Отримати дані</p>\n                  <svg class="card__download-icon">\n                    <use href="#"></use>\n                  </svg>\n                </button>\n              </div>\n              <table id="classCard').concat(e,"-").concat(t,'" class="card__table">\n                <tbody>\n                  <tr>\n                    <th class="card__table-title">№</th>\n                    <th class="card__table-title">ПІБ</th>\n                    <th class="card__table-title">Щеплення</th>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n                ');document.querySelector("#class-".concat(e," > .class-paralel")).insertAdjacentHTML("beforeend",l);i(a,e,t,1)}}}function i(e,t,l,o){c.paralelName==t&&c.classLetter==l&&c.students.forEach((function(c){var s,r=c.name,d=c.group,i=c.term,u=c.vaccination;switch(d){case 1:d="Основна";break;case 2:d="Підготовча";break;case 3:d="Спеціальна";break;case 4:d="Звільнені"}switch(u){case!0:u="Щеплений";break;case!1:u="Не щеплений"}if(0==e){if(Number(n)!=c.group)return;s='              \n                <tr class="card__table-item ">\n                      <td id="table-data-id" class="card__table-data">'.concat(o,'</td>\n                      <td id="table-data-name" class="card__table-data">').concat(r,'</td>\n                      <td id="table-data-group" class="card__table-data">').concat(d,'</td>\n                      <td id="table-data-date" class="card__table-data">').concat(i,"</td>\n                  </tr>")}if(1==e){if(a!==c.vaccination)return;s='\n                <tr class="card__table-item">\n                    <td id="table-data-id" class="card__table-data">'.concat(o,'</td>\n                    <td id="table-data-name" class="card__table-data">').concat(r,'</td>\n                    <td id="table-data-vactination" class="card__table-data card__table-data-svg">').concat(u,"</td>\n                  </tr>\n                ")}document.querySelector("#classCard".concat(t,"-").concat(l," > tbody")).insertAdjacentHTML("beforeend",s),o+=1}))}}))})).catch((function(a){console.error("Error:",a)}))})),o("./class-sort.html","group=1","modal__block-version","Основна",".modal__group"),o("./class-sort.html","group=2","modal__block-version","Підготовча",".modal__group"),o("./class-sort.html","group=3","modal__block-version","Спеціальна",".modal__group"),o("./class-sort.html","group=4","modal__block-version","Звільнені",".modal__group"),o("./class-sort.html","vactination=true","modal__block-version","Щеплений",".modal__vactination"),o("./class-sort.html","vactination=false","modal__block-version","Не щеплений",".modal__vactination"),o("./class-sort.html","group=1","sort__modal-btn","Основна",".modal-block-group"),o("./class-sort.html","group=2","sort__modal-btn","Підготовча",".modal-block-group"),o("./class-sort.html","group=3","sort__modal-btn","Спеціальна",".modal-block-group"),o("./class-sort.html","group=4","sort__modal-btn","Звільнені",".modal-block-group"),o("./class-sort.html","vactination=true","sort__modal-btn","Щеплений",".modal-block-vac"),o("./class-sort.html","vactination=false","sort__modal-btn","Не щеплений",".modal-block-vac"),document.addEventListener("DOMContentLoaded",(function(){l.modalRadio2(a.modalBtnGroup,a.modalBtnVac,a.modalGroup,a.modalVac),l.modalOpen(a.modalOpen,a.burgerModal),l.modalOpen(a.accountBtn,a.loginModal),l.modalOpen(a.redactDateInput,a.redactDateBlock),l.modalClose(a.loginSub,a.loginModal),l.modalClose(a.modalClose,a.burgerModal),l.modalClose(a.redactClose,a.redactContainer),l.modalCloseOut(a.burgerModal,".modal__container",a.burgerModal),l.modalCloseOut(a.redactContainer,".redact__blocks",a.redactContainer),l.openRedact(a.containerScroll,a.redactContainer)}))}();
//# sourceMappingURL=index.a40279d8.js.map

!function(){var a={sortSelect:document.querySelector(".sort-select__text"),scroll:document.querySelector(".container-scroll"),modalOpen:document.querySelector(".burger"),burgerModal:document.querySelector(".burger-modal"),modalClose:document.querySelector(".modal__close"),loginModal:document.querySelector(".login"),accountBtn:document.querySelector(".support__btn-account"),containerScroll:document.querySelector(".container-scroll"),redactContainer:document.querySelector(".redact__container"),redactClose:document.querySelector(".redact__close"),modalGroup:document.querySelector(".modal-block-group"),modalVac:document.querySelector(".modal-block-vac"),modalBtnGroup:document.querySelector(".sort__group"),modalBtnVac:document.querySelector(".sort__vaccination"),redactBlock:document.querySelector(".redact__blocks"),classListPrim:document.querySelector("#class-list-primary"),classListSec:document.querySelector("#class-list-sec"),classListHi:document.querySelector("#class-list-hi"),className:document.querySelector(".class-parallel__name"),cardClassName:document.querySelector(".card__className-class")};fetch("".concat("https://65bce5d2b51f9b29e9328629.mockapi.io/man/man","classes")).then((function(a){return a.json()})).then((function(t){var c=t[0].man[0].classes,o=0;c.forEach((function(a){Number(a.paralelName)!==o&&(1,o=a.paralelName)})),o,e(1,4,a.classListPrim),e(5,9,a.classListSec),e(10,12,a.classListHi),c.forEach((function(a){var e,t,c;e=a,t=document.querySelector("#class-paralel-".concat(e.paralelName)),c='<a class="class-parallel__name" href="./class.html?parName='.concat(e.paralelName,"&classLetter=").concat(e.classLetter,'">').concat(e.paralelName,"-").concat(e.classLetter,"</a>"),t.insertAdjacentHTML("beforeend",c)}))})).catch((function(a){console.error("Error:",a),console.clear()}));function e(a,e,t){if(null!=a&&null!==e&&null!==t)for(;a<=e;a++){var c='<div id="class-paralel-'.concat(a,'" class="class-list__parallel class-parallel"></div>');t.insertAdjacentHTML("beforeend",c)}}var t={modalOpen:function(a,e){a.addEventListener("click",(function(){e.classList.remove("hidden"),document.body.style="overflow: hidden"}))},modalClose:function(a,e){a&&a.addEventListener("click",(function(){e.classList.add("hidden"),document.body.style="overflow-y: scroll"}))},modalCloseOut:function(a,e,t){a&&t&&a.addEventListener("click",(function(a){a.target.closest(e)||(t.classList.add("hidden"),document.body.style="overflow: scroll")}))},modalRadio2:function(a,e,t,c){a&&e&&t&&c&&(a.addEventListener("click",(function(){t.classList.contains("hidden")?(t.classList.remove("hidden"),c.classList.add("hidden")):t.classList.add("hidden")})),e.addEventListener("click",(function(){c.classList.contains("hidden")?(c.classList.remove("hidden"),t.classList.add("hidden")):c.classList.add("hidden")})))}
//! функції які використовуються лише 1 раз
,openRedact:function(a,e){a&&e&&a.addEventListener("click",(function(a){var t=a.target.closest("tr");t&&"noRedact"!==t.id&&(e.classList.remove("hidden"),document.body.style="overflow: hidden",console.log("hello"))}))}};function c(a,e,t,c,o){var l='<a href="'.concat(a,"?").concat(e,'" class="').concat(t,'">').concat(c,"</a>");document.querySelector(o).insertAdjacentHTML("beforeend",l)}document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),t=e.get("parName"),c=e.get("classLetter"),o=1;console.log(t),console.log(c),fetch("".concat("https://65bce5d2b51f9b29e9328629.mockapi.io/man/man","classes")).then((function(a){return a.json()})).then((function(e){e[0].man[0].classes.forEach((function(e){t==e.paralelName&&c==e.classLetter&&(a.cardClassName.innerHTML="".concat(t,"-").concat(c),e.students.forEach((function(a){var e=a.name,t=a.birthday,c=a.group,l=a.term,n=a.vaccination;switch(c){case 1:c="Основна";break;case 2:c="Підготовча";break;case 3:c="Спеціальна";break;case 4:c="Звільнені"}switch(n){case!0:n="Щеплений";break;case!1:n="Не щеплений"}var s='              \n          <tr class="card__table-item">\n          <td id="table-data-id" class="card__table-data-class">'.concat(o,'</td>\n          <td id="table-data-name" class="card__table-data-class">').concat(e,'</td>\n          <td id="table-data-birthday" class="card__table-data-class">').concat(t,'</td>\n          <td id="table-data-group" class="card__table-data-class">').concat(c,'</td>\n          <td id="table-data-date" class="card__table-data-class">').concat(l,'</td>\n          <td id="table-data-vactination" class="card__table-data-class">').concat(n,"</td>\n            </tr>");o+=1,document.querySelector(".card__table-class > tbody").insertAdjacentHTML("beforeend",s)})))}))})).catch((function(a){console.error("Error:",a)}))})),document.addEventListener("DOMContentLoaded",(function(){var a,e,t=new URLSearchParams(window.location.search),c=t.get("group"),o=t.get("vactination");fetch("".concat("https://65bce5d2b51f9b29e9328629.mockapi.io/man/man")).then((function(a){return a.json()})).then((function(t){var l=t[0].man[0].classes,n=1;l.forEach((function(t){if(null!==c){var l;if(t.paralelName==n){switch(Number(t.paralelName)){case 1:a="Перші класи";break;case 2:a="Другі класи";break;case 3:a="Треті класи";break;case 4:a="Четверті класи";break;case 5:a="П'яті класи";break;case 6:a="Шості класи";break;case 7:a="Сьомі класи";break;case 8:a="Восьмі класи";break;case 9:a="Дев'яті класи";break;case 10:a="Десяті класи";break;case 11:a="Одинадцяті класи";break;case 12:a="Дванадцяті  класи"}l=t.paralelName,t.classLetter,r(l,a,".class-js-input"),n++}d(0,t.paralelName,t.classLetter)}else if(null!==o){var s;if(t.paralelName==n){switch(Number(t.paralelName)){case 1:a="Перші класи";break;case 2:a="Другі класи";break;case 3:a="Треті класи";break;case 4:a="Четверті класи";break;case 5:a="П'яті класи";break;case 6:a="Шості класи";break;case 7:a="Сьомі класи";break;case 8:a="Восьмі класи";break;case 9:a="Дев'яті класи";break;case 10:a="Десяті класи";break;case 11:a="Одинадцяті класи";break;case 12:a="Дванадцяті  класи"}s=t.paralelName,t.classLetter,r(s,a,".class-js-input"),n++}d(1,t.paralelName,t.classLetter)}function r(a,t,c){e='<div id="class-'.concat(a,'" class="container-m">\n          <h2 class="school__tier school__tier-title">').concat(t,'</h2>\n          <div class="class-paralel">\n          </div>\n        </div>'),(c=document.querySelector("".concat(c))).insertAdjacentHTML("beforeend",e)}function d(a,e,c){if(t.paralelName==e){if(0==a){var o='\n            <div class="card">\n              <div class="card__header card__header-group">\n                  <h3 class="card__class">'.concat(e,"-").concat(c,' клас</h3>\n                  <button class="card__download">\n                      <p class="card__download-text">Отримати дані</p>\n                      <svg class="card__download-icon">\n                          <use href="./svg/download.svg#download"></use>\n                      </svg>\n                  </button>\n              </div>\n              <table id="classCard').concat(e,"-").concat(c,'" class="card__table card__table-group">\n                  <tbody>\n                      <tr id="noRedact">\n                          <th class="card__table-title">№</th>\n                          <th class="card__table-title">ПІБ</th>\n                          <th class="card__table-title">Група здоров\'я</th>\n                          <th class="card__table-title">Термін дії</th>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n                ');document.querySelector("#class-".concat(e," > .class-paralel")).insertAdjacentHTML("beforeend",o);i(a,e,c,1)}if(1==a){var l='\n              <div class="card card-small">\n              <div class="card__header">\n                <h3 class="card__class">'.concat(e,"-").concat(c,' клас</h3>\n                <button class="card__download">\n                  <p class="card__download-text">Отримати дані</p>\n                  <svg class="card__download-icon">\n                    <use href="#"></use>\n                  </svg>\n                </button>\n              </div>\n              <table id="classCard').concat(e,"-").concat(c,'" class="card__table">\n                <tbody>\n                  <tr>\n                    <th class="card__table-title">№</th>\n                    <th class="card__table-title">ПІБ</th>\n                    <th class="card__table-title">Щеплення</th>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n                ');document.querySelector("#class-".concat(e," > .class-paralel")).insertAdjacentHTML("beforeend",l);i(a,e,c,1)}}}function i(a,e,l,n){t.paralelName==e&&t.classLetter==l&&t.students.forEach((function(t){var s,r=t.name,d=t.group,i=t.term,u=t.vaccination;switch(d){case 1:d="Основна";break;case 2:d="Підготовча";break;case 3:d="Спеціальна";break;case 4:d="Звільнені"}switch(u){case!0:u="Щеплений";break;case!1:u="Не щеплений"}if(0==a){if(Number(c)!=t.group)return;s='              \n                <tr class="card__table-item ">\n                      <td id="table-data-id" class="card__table-data">'.concat(n,'</td>\n                      <td id="table-data-name" class="card__table-data">').concat(r,'</td>\n                      <td id="table-data-group" class="card__table-data">').concat(d,'</td>\n                      <td id="table-data-date" class="card__table-data">').concat(i,"</td>\n                  </tr>")}if(1==a){if(Boolean(o)!==t.vaccination)return;s='\n                <tr class="card__table-item">\n                    <td id="table-data-id" class="card__table-data">'.concat(n,'</td>\n                    <td id="table-data-name" class="card__table-data">\n                      ').concat(r,'\n                    </td>\n                    <td id="table-data-group" class="card__table-data card__table-data-svg">').concat(u,"</td>\n                  </tr>\n                ")}document.querySelector("#classCard".concat(e,"-").concat(l," > tbody")).insertAdjacentHTML("beforeend",s),n+=1}))}}))})).catch((function(a){console.error("Error:",a)}))})),c("./class-sort.html","group=1","modal__block-version","Основна",".modal__group"),c("./class-sort.html","group=2","modal__block-version","Підготовча",".modal__group"),c("./class-sort.html","group=3","modal__block-version","Спеціальна",".modal__group"),c("./class-sort.html","group=4","modal__block-version","Звільнені",".modal__group"),c("./class-sort.html","vactination=true","modal__block-version","Щеплений",".modal__vactination"),c("./class-sort.html","vactination=false","modal__block-version","Не щеплений",".modal__vactination"),c("./class-sort.html","group=1","sort__modal-btn","Основна",".modal-block-group"),c("./class-sort.html","group=2","sort__modal-btn","Підготовча",".modal-block-group"),c("./class-sort.html","group=3","sort__modal-btn","Спеціальна",".modal-block-group"),c("./class-sort.html","group=4","sort__modal-btn","Звільнені",".modal-block-group"),c("./class-sort.html","vactination=true","sort__modal-btn","Щеплений",".modal-block-vac"),c("./class-sort.html","vactination=false","sort__modal-btn","Не щеплений",".modal-block-vac"),document.addEventListener("DOMContentLoaded",(function(){t.modalRadio2(a.modalBtnGroup,a.modalBtnVac,a.modalGroup,a.modalVac),t.modalOpen(a.modalOpen,a.burgerModal),t.modalOpen(a.accountBtn,a.loginModal),t.modalClose(a.modalClose,a.burgerModal),t.modalClose(a.redactClose,a.redactContainer),t.modalCloseOut(a.burgerModal,".modal__container",a.burgerModal),t.modalCloseOut(a.redactContainer,".redact__blocks",a.redactContainer),t.openRedact(a.containerScroll,a.redactContainer)}))}();
//# sourceMappingURL=index.7e49e4ac.js.map

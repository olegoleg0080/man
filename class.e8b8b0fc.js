!function(){var e={refs:{modalOpen:document.querySelector(".burger"),burgerModal:document.querySelector(".burger-modal"),modalClose:document.querySelector(".modal__close"),loginModal:document.querySelector(".login"),accountBtn:document.querySelector(".support__btn-account"),containerScroll:document.querySelector(".container-scroll"),redactContainer:document.querySelector(".redact__container"),redactClose:document.querySelector(".redact__close"),modalGroup:document.querySelector(".modal-block-group"),modalVac:document.querySelector(".modal-block-vac"),modalBtnGroup:document.querySelector(".sort__group"),modalBtnVac:document.querySelector(".sort__vaccination"),redactBlock:document.querySelector(".redact__blocks")}};
//! функції які використовуються лише 1 раз або просто геморні функціх до яких я ше не дійшов
e.containerScroll&&e.redactContainer&&e.containerScroll.addEventListener("click",(function(o){o.target.closest("tr")&&(e.redactContainer.classList.remove("hidden"),document.body.style="overflow: hidden",console.log("hello"))})),console.log("hel");var o={modalOpen:function(e,o){void 0!==e&&e.addEventListener("click",(function(){o.classList.remove("hidden"),document.body.style="overflow: hidden"}))},modalClose:function(e,o){e&&e.addEventListener("click",(function(){o.classList.add("hidden"),document.body.style="overflow-y: scroll"}))},modalCloseOut:function(e,o,d){e&&d&&e.addEventListener("click",(function(e){e.target.closest(o)||(d.classList.add("hidden"),document.body.style="overflow: scroll")}))},modalRadio2:function(e,o,d,t){e&&o&&d&&t&&(e.addEventListener("click",(function(){d.classList.contains("hidden")?(d.classList.remove("hidden"),t.classList.add("hidden")):d.classList.add("hidden")})),o.addEventListener("click",(function(){t.classList.contains("hidden")?(t.classList.remove("hidden"),d.classList.add("hidden")):t.classList.add("hidden")})))}};o.modalRadio2(e.refs.modalBtnGroup,e.refs.modalBtnVac,e.refs.modalGroup,e.refs.modalVac),o.modalOpen(e.refs.modalOpen,e.refs.burgerModal),o.modalOpen(e.refs.accountBtn,e.refs.loginModal),o.modalClose(e.refs.modalClose,e.refs.burgerModal),o.modalClose(e.refs.redactClose,e.redactContainer),o.modalCloseOut(e.refs.burgerModal,".modal__container",e.refs.burgerModal),o.modalCloseOut(document.body,".header__sort-modal",e.refs.modalGroup),o.modalCloseOut(document.body,".header__sort-modal",e.refs.modalVac),o.modalCloseOut(e.refs.redactContainer,".redact__blocks",e.refs.redactContainer)}();
//# sourceMappingURL=class.e8b8b0fc.js.map

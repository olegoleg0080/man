import refs from "./refs";
export default function createNormalURL(URL, updateURL, classElement, title, classBlock) {
let normalUrl = `<a href="${URL}?${updateURL}" class="${classElement}">${title}</a>`;
let element = document.querySelector(classBlock);
element.insertAdjacentHTML("beforeend", normalUrl);
}
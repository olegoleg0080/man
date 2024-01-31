import refs from "./refs";
const BASE_URL = 'http://localhost:3000/';
fetch(`${BASE_URL}classes`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let a = 0;
    data.forEach(e => {
      if (Number(e.paralelName) !== a) {
        classQuantity += 1;
        a = e.paralelName;
      } else return;
    });
    classParalelsQuantity = a;
    createClassParalel(1, 4, refs.classListPrim);
    createClassParalel(5, 9, refs.classListSec);
    createClassParalel(10, 12, refs.classListHi);
    data.forEach(e => {
      createCardClassName(e);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
let classQuantity = 0;
let classParalelsQuantity = 1;
function createCardClassName(dateClass) {
  const element = document.querySelector(
    `#class-paralel-${dateClass.paralelName}`
  );
  const card = `<a class="class-parallel__name" href="./class.html?parName=${dateClass.paralelName}&classLetter=${dateClass.classLetter}">${dateClass.paralelName}-${dateClass.classLetter}</a>`;
  element.insertAdjacentHTML('beforeend', card);
}
function createClassParalel(a, n, paralelBlock) {
  for (a; a <= n; a++) {
    const card = `<div id="class-paralel-${a}" class="class-list__parallel class-parallel"></div>`;
    paralelBlock.insertAdjacentHTML('beforeend', card);
  }
}

import refs from "./refs";
const BASE_URL = 'https://65bce5d2b51f9b29e9328629.mockapi.io/man/man';
fetch(`${BASE_URL}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const dataList = data[0].man[0].classes;
    let a = 0;
    dataList.forEach(e => {
      if (Number(e.paralelName) !== a) {
        classQuantity += 1;
        a = e.paralelName;
      } else return;
    });
    classParalelsQuantity = a;
    createClassParalel(1, 4, refs.classListPrim);
    createClassParalel(5, 9, refs.classListSec);
    createClassParalel(10, 12, refs.classListHi);
    dataList.forEach(e => {
      createCardClassName(e);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    // console.clear()
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
  if(a!= null && n !== null && paralelBlock !== null){for (a; a <= n; a++) {
    const card = `<div id="class-paralel-${a}" class="class-list__parallel class-parallel"></div>`;
    paralelBlock.insertAdjacentHTML('beforeend', card);
  }}
}

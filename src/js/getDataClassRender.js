import refs from './refs';
document.addEventListener('DOMContentLoaded', function () {
  const BASE_URL = 'https://65bce5d2b51f9b29e9328629.mockapi.io/man/man';
  const urlParams = new URLSearchParams(window.location.search);
  const parName = urlParams.get('parName');
  const classLetter = urlParams.get('classLetter');
  let num = 1;
  console.log(parName);
  console.log(classLetter);
  
  fetch(`${BASE_URL}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const dataList = data[0].man[0].classes;
      dataList.forEach(e => {
        if (parName == e.paralelName && classLetter == e.classLetter) {
          refs.cardClassName.innerHTML = `${parName}-${classLetter}`;
          e.students.forEach(e => {
            let dataName = e.name;
            let dataBirthday = e.birthday;
            let dataGroup = e.group;
            let dataTerm = e.term;
            let dataVactination = e.vaccination;
            switch (dataGroup) {
              case 1:
                dataGroup = 'Основна';
                break;
              case 2:
                dataGroup = 'Підготовча';
                break;
              case 3:
                dataGroup = 'Спеціальна';
                break;
              case 4:
                dataGroup = 'Звільнені';
                break;
              default:
                break;
            }
            switch (dataVactination) {
              case true:
                dataVactination = 'Щеплений';
                break;
              case false:
                dataVactination = 'Не щеплений';
                break;

              default:
                break;
            }
            const card = `              
          <tr class="card__table-item">
          <td id="table-data-id" class="card__table-data-class">${num}</td>
          <td id="table-data-name" class="card__table-data-class">${dataName}</td>
          <td id="table-data-birthday" class="card__table-data-class">${dataBirthday}</td>
          <td id="table-data-group" class="card__table-data-class">${dataGroup}</td>
          <td id="table-data-date" class="card__table-data-class">${dataTerm}</td>
          <td id="table-data-vactination" class="card__table-data-class">${dataVactination}</td>
            </tr>`;
            num += 1
            const element = document.querySelector(
              '.card__table-class > tbody'
            );
            element.insertAdjacentHTML('beforeend', card);
          });
        }
      });
    })

    .catch(error => {
      console.error('Error:', error);
    });
});

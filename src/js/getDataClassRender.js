import refs from './refs';
document.addEventListener('DOMContentLoaded', function () {
  const BASE_URL = 'http://localhost:3000/';
  const urlParams = new URLSearchParams(window.location.search);
  const parName = urlParams.get('parName');
  const classLetter = urlParams.get('classLetter');
  console.log(parName);
  console.log(classLetter);
  fetch(`${BASE_URL}classes`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(e => {
        if (parName == e.paralelName && classLetter == e.classLetter) {
          let dataName;
          let dataBirthday;
          let dataGroup;
          let dataTerm;
          let dataVactination;
          refs.cardClassName.innerHTML = `${parName}-${classLetter}`;
          e.students.forEach(e => {
          dataName = e.name;
          dataBirthday = e.birthday;
          dataGroup = e.Group;
          dataTerm = e.term;
          dataVactination = e.vaccination;
          });
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
          console.log(dataVactination);
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
          <td id="table-data-id" class="card__table-data-class">1</td>
          <td id="table-data-name" class="card__table-data-class">${dataName}</td>
          <td id="table-data-birthday" class="card__table-data-class">${dataBirthday}</td>
          <td id="table-data-group" class="card__table-data-class">${dataGroup}</td>
          <td id="table-data-date" class="card__table-data-class">${dataTerm}</td>
          <td id="table-data-vactination" class="card__table-data-class">${dataVactination}</td>
        </tr>`;
        const element = document.querySelector('.card__table-class > tbody');
        element.insertAdjacentHTML('beforeend', card);
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

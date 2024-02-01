import refs from './refs';
document.addEventListener('DOMContentLoaded', function () {
  const BASE_URL = 'http://localhost:3000/';
  const urlParams = new URLSearchParams(window.location.search);
  const group = urlParams.get('group');
  const vac = urlParams.get('vactination');
  let className;
  let cardParalel;

  fetch(`${BASE_URL}classes`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let a = 1;
      data.forEach(e => {
        if (group !== null) {
          let parName;
          let classLett;
          if (e.paralelName == a) {
            // console.log(`${e.paralelName}-${e.classLetter}`);
            switch (Number(e.paralelName)) {
              case 1:
                className = 'Перші класи';
                break;
              case 2:
                className = 'Другі класи';
                break;
              case 3:
                className = 'Треті класи';
                break;
              case 4:
                className = 'Четверті класи';
                break;
              case 5:
                className = "П'яті класи";
                break;
              case 6:
                className = 'Шості класи';
                break;
              case 7:
                className = 'Сьомі класи';
                break;
              case 8:
                className = 'Восьмі класи';
                break;
              case 9:
                className = "Дев'яті класи";
                break;
              case 10:
                className = 'Десяті класи';
                break;
              case 11:
                className = 'Одинадцяті класи';
                break;
              case 12:
                className = 'Дванадцяті  класи';
                break;

              default:
                break;
            }
            parName = e.paralelName;
            classLett = e.classLetter;
            cardParalel = `<div id="class-${parName}" class="container-m">
                <h2 class="school__tier school__tier-title">${className}</h2>
                <div class="class-paralel">
                </div>
              </div>`;
            // console.log(cardParalel);
            element = document.querySelector('.class-js-input');
            element.insertAdjacentHTML('beforeend', cardParalel);
            a++;
          }
          getDataStudentsClass(e.paralelName, e.classLetter);
          dataStudentRender(e.paralelName, e.classLetter);
          
        }
        function getDataStudentsClass(paralel, letter) {
          if (e.paralelName == paralel) {
            const cardStudent = `
            <div class="card">
              <div class="card__header card__header-group">
                  <h3 class="card__class">${paralel}-${letter} клас</h3>
                  <button class="card__download">
                      <p class="card__download-text">Отримати дані</p>
                      <svg class="card__download-icon">
                          <use href="./svg/download.svg#download"></use>
                      </svg>
                  </button>
              </div>
              <table class="card__table card__table-group">
                  <tbody>
                      <tr>
                          <th class="card__table-title">№</th>
                          <th class="card__table-title">ПІБ</th>
                          <th class="card__table-title">Група здоров'я</th>
                          <th class="card__table-title">Термін дії</th>
                      </tr>
                  </tbody>
              </table>
          </div>
                `;

            const element = document.querySelector(
              `#class-${paralel} > .class-paralel`
            );
            // console.log(cardStudent);
            element.insertAdjacentHTML('beforeend', cardStudent);
          }
        }
        function dataStudentRender(paralel, letter) {
          data.forEach(e => {
            console.log(e);
            if (e.paralelName == paralel && e.classLetter == letter) {
              e.students.forEach(e => {
                // console.log(paralel, letter, e);
                let dataName = e.name;
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
                <tr class="card__table-item ">
                      <td id="table-data-id" class="card__table-data">1</td>
                      <td id="table-data-name" class="card__table-data">Крамар Олег Олександрович</td>
                      <td id="table-data-group" class="card__table-data">Підготовча</td>
                      <td id="table-data-date" class="card__table-data">08.02.2028</td>
                  </tr>`;
                const element = document.querySelector(
                  '.card__table-group > tbody'
                );
                element.insertAdjacentHTML('beforeend', card);
              });
            }
          });
        }
      });
    })

    .catch(error => {
      console.error('Error:', error);
    });
});
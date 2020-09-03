/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this._rows = rows;

    let tableHTMLString = this.makeTable();

    return { 
      elem: new DOMParser().parseFromString(tableHTMLString, 'text/html').querySelector('table')
    }; 
  }

  makeTable() {

    let table = '<table>';
    table += this.makeTableHeader();
    table += this.makeTableBody();
    table += '</table>';

    return table;
  }

  makeTableBody() {
    let tableBody = '<tbody>';

    tableBody += this._rows.map(row => 
      `
      <tr>
        <td>${ row.name }</td>
        <td>${ row.age }</td>
        <td>${ row.salary }</td>
        <td>${ row.city }</td>
        <td>${ this.makeDeleteButton() }</td>
      </tr>
      `
    ).join('');

    tableBody += '</tbody>';
    return tableBody;
  }

  makeTableHeader() {
    return `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    `;
  }

  makeDeleteButton() {
    return `
      <button class='delete_row' onclick='event.target.closest("tr").remove();'>[X]</button>
    `;
  }
}

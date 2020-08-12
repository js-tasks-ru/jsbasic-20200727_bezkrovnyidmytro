/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let row of table.rows) {
    for (let col of row.cells) {
      if (row.rowIndex === col.cellIndex) {
        col.style.backgroundColor = 'red';
      }
    }
  }
}
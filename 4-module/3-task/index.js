/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tableRows = table.tBodies[0].rows;

  for (let row of tableRows) {
    let isAvailable = row.lastElementChild.dataset.available;

    if (isAvailable === undefined) {
      row.setAttribute('hidden', 'true');
    } else {
      const availableClass = isAvailable === 'true' ? 'available' : 'unavailable';
      row.classList.add(availableClass);
    }

    let gender = row.lastElementChild.previousElementSibling.innerHTML;

    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    let age = Number(row.firstElementChild.nextElementSibling.innerHTML);

    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}

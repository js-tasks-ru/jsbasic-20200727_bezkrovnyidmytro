/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let totalSalary = 0;

  if (!salaries) {
    return totalSalary;
  }

  for (let key in salaries) {
    if (Number.isInteger(salaries[key])) {
      totalSalary += salaries[key];
    }
  }
  
  return totalSalary;
}

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numbersList = str
    .replace(/,/g, ' ')
    .split(' ')
    .filter(item => item)
    .map(Number)
    .filter(item => !isNaN(item));

  return {
    max: Math.max(...numbersList),
    min: Math.min(...numbersList)
  };
}

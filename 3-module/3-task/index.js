/**
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let firstLetter = str.slice(0, 1);
  let firstLetterUpperCase = firstLetter.toUpperCase();
  let remainStr = str.slice(1);

  return firstLetterUpperCase + remainStr;
}

/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  const sep = '-';

  if (!(str.includes(sep))) {
    return str;
  }

  let strSplit = str.split(sep);

  if (!strSplit) {
    return str;
  }

  return strSplit
    .map((item, index) => {
      return index ? ucFirst(item) : item;
    })
    .join('');
}
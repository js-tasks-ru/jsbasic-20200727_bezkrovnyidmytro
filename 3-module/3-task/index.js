/**
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  str = String(str)

  let first_letter = str.slice(0, 1);
  let first_letter_upper_case = first_letter.toUpperCase();
  let remain_str = str.slice(1);

  return first_letter_upper_case + remain_str;
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
/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
    str = String(str)

    let first_letter = str.slice(0, 1);
    let first_letter_upper_case = first_letter.toUpperCase();
    let remain_str = str.slice(1);

    return first_letter_upper_case + remain_str;
}

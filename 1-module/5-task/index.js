/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
    str = String(str);

    if(str.length < maxlength) {
        return str;
    }

    const except_symbols = '…';
    const except_symbols_length = except_symbols.length;

    str = str.slice(0, maxlength - except_symbols_length);

    return str + except_symbols;
}

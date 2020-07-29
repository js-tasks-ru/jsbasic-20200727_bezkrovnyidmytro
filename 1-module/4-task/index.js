/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
    str = String(str).toLowerCase();

    if(str.includes('xxx') || str.includes('1xbet')) {
        return true;
    }
    return false;
}

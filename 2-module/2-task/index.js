/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return true;
}

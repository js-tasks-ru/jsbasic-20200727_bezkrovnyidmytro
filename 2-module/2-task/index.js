/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
    let isEmpty = true;

    for(let prop in obj) {
        isEmpty = !(typeof (obj[prop]) !== undefined && obj[prop]);
    }

    return isEmpty;
}

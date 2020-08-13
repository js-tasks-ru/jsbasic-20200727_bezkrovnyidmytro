/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  friends.map(friend => {
    let childEl = document.createElement('li');
    childEl.innerText = `${friend.firstName} ${friend.lastName}`;
    ul.appendChild(childEl);
  });

  return ul;
}

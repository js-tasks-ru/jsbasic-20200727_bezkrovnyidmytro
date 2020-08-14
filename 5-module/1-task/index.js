function hideSelf() {
  let btn = document.querySelector('button.hide-self-button');
  btn.addEventListener('click', (event) => event.target.setAttribute('hidden', true));
  return true;
}

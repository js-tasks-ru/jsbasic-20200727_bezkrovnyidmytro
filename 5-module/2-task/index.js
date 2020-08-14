function toggleText() {
  let btn = document.querySelector('button.toggle-text-button');

  btn.addEventListener('click', (clickEvent) => {
    let textDiv = document.querySelector('#text');
    textDiv.hidden = !(!!textDiv.hidden);
  });
}

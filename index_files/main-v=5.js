(function () {
  window.addEventListener('popstate', function (e) {
    for (i = 0; i < 10; i++) {
      window.history.pushState('target', '', location.href);
    }
  });
  window.history.pushState('target', '', location.href);
})();

let EBtEl = document.getElementById('expand-button')
let text = document.getElementById('text')
const showText = EBtEl.getAttribute('data-show')
const hideText = EBtEl.getAttribute('data-hide')

console.log(EBtEl);

EBtEl.innerText = showText
EBtEl
  .addEventListener('click', () => {
    if (EBtEl.innerText === showText) {
      console.log(1);
      EBtEl.innerText = hideText;
      text.className = text.className.replace(/\bcollapsed\b/g, '');
    } else {
      EBtEl.innerText = showText;
      console.log(1);    ;
      text.className += 'collapsed';
    }
  })



/*let EBtEl2 = document.getElementById('expand-button2')
let text2 = document.getElementById('text2')
const showText2 = EBtEl2.getAttribute('data-show')
const hideText2 = EBtEl2.getAttribute('data-hide')

console.log(EBtEl);

EBtEl.innerText = showText
EBtEl
  .addEventListener('click', () => {
    if (EBtEl.innerText === showText) {
      console.log(1);
      EBtEl.innerText = hideText;
      text.className = text.className.replace(/\bcollapsed\b/g, '');
    } else {
      EBtEl.innerText = showText;
      console.log(1);    ;
      text.className += 'collapsed';
    }
  })  */

const helpers = {
  decode: value => {
    const decode = document.createElement('textarea')
    decode.innerHTML = value
    return decode.innerText
  }
}

window.addEventListener('load', function () {
  document.querySelectorAll('[helpers-decode]').forEach(value => {
    value.innerText = helpers.decode(value.innerText)
  })
})

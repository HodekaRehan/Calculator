const display = document.querySelector('.display');

const btns = document.querySelectorAll('button');

btns.forEach(function(btn) {
  btn.addEventListener('click', function(b) {
    const key = b.currentTarget;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayVal = display.textContent;
  })
})


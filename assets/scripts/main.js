const body = document.body;

function toggleModal() {
  const buttonClose = body.querySelector('.xbutton');
  buttonClose.addEventListener('click', function () {
    body.classList.remove('show-overlay');
  })

  setTimeout(function () {
    body.classList.add('show-overlay');
  }, 1000)
}


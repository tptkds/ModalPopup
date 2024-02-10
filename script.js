;(function () {
  'use strict'
  const get = (target) => {
    return document.querySelector(target)
  }

  const $modalButton = get('.modal_open_button');
  const $modal = get('.modal');
  const $cancelButton = get('.cancel');
  const $confirmButton = get('.confirm');

  const init = () => {
    $modalButton.addEventListener('click', openModal);
    $cancelButton.addEventListener('click', closeModal);
    $confirmButton.addEventListener('click', closeModal)
  }

  const openModal = () => {
    $modal.style.display = 'block';
    document.body.classList.add('scroll_lock');
  }

  const closeModal = () => {
    $modal.style.display = 'none';
    document.body.classList.remove('scroll_lock');
  }

  init();
})()

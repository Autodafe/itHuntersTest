const registrationButton = document.querySelector('.registration-button');
const popup = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal__close-button');

const popupClassRemoveHandler = () => {
  popup.classList.remove('modal-container-close');
}

const popupClassAddHandler = () => {
  popup.classList.add('modal-container-close');
}

const initPopupButtons = () => {
  registrationButton.addEventListener('click', popupClassRemoveHandler);
  closeButton.addEventListener('click', popupClassAddHandler);
}

export {initPopupButtons};

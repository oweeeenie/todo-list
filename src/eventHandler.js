const addTaskButton = document.querySelector('.add-task');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('#close-popup');

export function setupEventListeners() {
  addTaskButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });

  closePopupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}

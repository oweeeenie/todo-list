import { addTask, getTasks } from './taskManager.js';
import UIController from './uiController.js';

const addTaskButton = document.querySelector('.add-task');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('#close-popup');
const saveTaskButton = document.querySelector('#save-task');

export function setupEventListeners() {
  addTaskButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });

  closePopupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  saveTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    const taskName = document.querySelector('#task-name').value;
    const taskDate = document.querySelector('#task-date').value;
    const taskDescription = document.querySelector('#task-desc').value;
    const taskPriority = document.querySelector('#task-priority').checked;
    addTask(taskName, taskDescription, taskDate, taskPriority);
    popup.classList.add('hidden'); // this mf righ there closes out add task when i add something.
    const tasks = getTasks();
    UIController.renderTaskList(tasks);
  });
}

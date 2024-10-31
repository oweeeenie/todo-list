import { addTask, getTasks } from './taskManager.js';
import UIController from './UIController.js';
import { addProject, getProjects } from './taskManager.js';

const addTaskButton = document.querySelector('.add-task');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('#close-popup');
const saveTaskButton = document.querySelector('#save-task');
const addProjectButton = document.querySelector('.create-project');
const projectPopup = document.querySelector('.popup-project');
const closeProjectPopupButton = document.querySelector('#close-project-popup');
const saveProjectButton = document.querySelector('#save-project');

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
    const taskPriority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;

    addTask(taskName, taskDescription, taskDate, taskPriority);
    popup.classList.add('hidden'); // this mf righ there closes out add task when i add something.
    document.querySelector('#task-name').value = '';
    document.querySelector('#task-date').value = '';
    document.querySelector('#task-desc').value = '';
    const tasks = getTasks();
    UIController.renderTaskList(tasks);
  });

  addProjectButton.addEventListener('click', () => {
    projectPopup.classList.remove('hidden');
  });

  closeProjectPopupButton.addEventListener('click', () => {
    projectPopup.classList.add('hidden');
  });

  saveProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const projectName = document.querySelector('#project-name').value;
    addProject(projectName);
    projectPopup.classList.add('hidden');
    document.querySelector('#project-name').value = '';

    const projects = getProjects();
  });
}

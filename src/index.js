import './styles.css';
import UIController from './UIController.js';
import { addTask, getTasks, getOverdueTasks } from './taskManager.js';
import { setupEventListeners } from './eventHandler.js';

setupEventListeners();

function renderAllTasks() {
  const allTasks = getTasks();
  const overdueTasks = getOverdueTasks();
  UIController.renderAllTasks(allTasks);
  UIController.renderOverdueTasks(overdueTasks);
}

document.addEventListener('DOMContentLoaded', () => {
  renderAllTasks();
});

UIController.renderOverdueTasks();

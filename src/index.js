import './styles.css';
import UIController from './UIController.js';
import { addTask, getTasks, getOverdueTasks } from './taskManager.js';
import { setupEventListeners } from './eventHandler.js';

setupEventListeners();

addTask('Task 1', 'Description 1', '2023-10-30', 'high'); // Overdue
addTask('Task 2', 'Description 2', '2023-11-01', 'medium'); // Today
addTask('Task 3', 'Description 3', '2024-12-01', 'low'); // Future

UIController.renderOverdueTasks();

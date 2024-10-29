import { getTasks } from './taskManager.js';

const UIController = (() => {
  const taskContainer = document.querySelector('.content');

  const clearTaskList = () => {
    taskContainer.innerHTML = '';
  };

  const renderTaskList = (tasks) => {
    clearTaskList();

    tasks.forEach((task) => {
      const taskBox = document.createElement('div');
      taskBox.className = 'task-box';

      taskBox.innerHTML = `
          <h3>${task.name}</h3>
        <p class="task-description">${task.description}</p>
        <p class="task-date">
          <span class="icon"><i class="fa-regular fa-calendar-days"></i></span>
          ${task.date}
        </p>
      `;
      taskContainer.appendChild(taskBox);
    });
  };

  return {
    renderTaskList,
  };
})();

export default UIController;

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
      const priorityCircle = document.createElement('div');
      priorityCircle.className = 'priority-circle';

      let priorityLevel;

      if (task.priority === 'high') {
        priorityLevel = 'red';
      } else if (task.priority === 'medium') {
        priorityLevel = 'yellow';
      } else if (task.priority === 'low') {
        priorityLevel = 'black';
      } else {
        priorityLevel = '';
      }
      priorityCircle.style.backgroundColor = priorityLevel;

      taskBox.innerHTML = `
        <div class="task-title-container">
          <div class="priority-circle" style="background-color: ${priorityLevel};"></div>
          <h3>${task.name}</h3>
        </div>
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

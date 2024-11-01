import { getOverdueTasks } from './taskManager.js';

const UIController = (() => {
  const taskContainer = document.querySelector('.content');
  const projectContainer = document.querySelector('.projects-list');
  const overdueTaskList = document.querySelector('.overdue-task-list');

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

  const clearProjectList = () => {
    const refreshProjectBox = document.querySelectorAll('.project-box');

    refreshProjectBox.forEach((project) => {
      project.remove();
    });
  };

  const renderProjectList = (projects) => {
    projects.forEach((project) => {
      const projectBox = document.createElement('button');
      projectBox.className = 'project-box';

      projectBox.innerHTML = `
      <span> <i class="fa-regular fa-folder"></i> </span>
      <h3>${project.name}</h3>`;
      projectContainer.appendChild(projectBox);
    });
  };

  return {
    // this is dope, this allows me to use the methods inside of UIController outside of its scope.
    renderTaskList,
    renderProjectList,
    clearProjectList,
    getOverdueTaskList: () => overdueTaskList,
  };
})();

function renderOverdueTasks() {
  const overdueTasks = getOverdueTasks();
  clearOverdueTaskSection();
  overdueTasks.forEach((task) => {
    const overdueListItem = document.createElement('li');
    overdueListItem.innerHTML = `${task.name} - Due: ${task.date}`;
    overdueTaskList.appendChild(overdueListItem);
  });
}

function clearOverdueTaskSection() {
  const overdueTasks = document.querySelector('#overdue-task-list');
  overdueTasks.innerHTML = '';
}

export default UIController;

import { getOverdueTasks } from './taskManager.js';

const UIController = (() => {
  const taskContainer = document.querySelector('.content');
  const projectContainer = document.querySelector('.projects-list');
  const overdueTaskList = document.querySelector('#overdue-task-list');
  const allTasksList = document.querySelector('#all-task-list');
  const todayTasksList = document.querySelector('#today-task-list');

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

  function renderOverdueTasks() {
    const overdueTasks = getOverdueTasks();

    clearOverdueTaskSection();

    const allTasksSection = document.querySelector('.all-tasks');
    const todayTasksSection = document.querySelector('.today-tasks');
    const overdueTasksSection = document.querySelector('.overdue-tasks');

    if (!allTasksSection || !todayTasksSection || !overdueTasksSection) {
      console.error('One or more sections are not available in the DOM.');
      return;
    }

    allTasksSection.classList.add('hidden');
    todayTasksSection.classList.add('hidden');
    overdueTasksSection.classList.remove('hidden');

    if (overdueTasks.length === 0) {
      const noTasksMessage = document.createElement('li');
      noTasksMessage.textContent = 'No overdue tasks';
      overdueTasksSection.appendChild(noTasksMessage);
    } else {
      overdueTasks.forEach((task) => {
        const overdueListItem = document.createElement('li');
        overdueListItem.innerHTML = `${task.name} - Due: ${task.date}`;
        overdueTasksSection.appendChild(overdueListItem);
      });
    }
  }

  function clearOverdueTaskSection() {
    overdueTaskList.innerHTML = '';
  }

  return {
    // this is dope, this allows me to use the methods inside of UIController outside of its scope.
    renderTaskList,
    renderProjectList,
    clearProjectList,
    getOverdueTaskList: () => overdueTaskList,
    renderOverdueTasks,
    clearOverdueTaskSection,
  };
})();

export default UIController;

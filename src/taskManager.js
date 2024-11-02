import UIController from './UIController';

const tasks = [];

const addTask = (name, description, date, priority) => {
  const newTask = {
    name,
    description,
    date,
    priority,
    completed: false,
  };
  tasks.push(newTask);
  UIController.renderOverdueTasks(getTasks());
};

const getTasks = () => tasks;

const projects = [];

export function addProject(name) {
  projects.push({ name });
  UIController.clearProjectList();
  UIController.renderProjectList(getProjects());
}

// THIS GETS ALL PROJECTS.
export function getProjects() {
  return projects;
}

function getOverdueTasks() {
  const allTasks = getTasks();
  const overdueTasks = allTasks.filter((task) => {
    return new Date(task.date) < new Date();
  });
  return overdueTasks;
}

export { addTask, getTasks, getOverdueTasks };

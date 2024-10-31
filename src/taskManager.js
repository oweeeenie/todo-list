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
};

const getTasks = () => tasks;
export { addTask, getTasks };

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

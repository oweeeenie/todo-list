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
  if (name) {
    projects.push({ name });
    console.log(`Project added: ${name}`);
  } else {
    console.error('Project name is required.');
  }
}

// THIS GETS ALL PROJECTS.
export function getProjects() {
  return projects;
}

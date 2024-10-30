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

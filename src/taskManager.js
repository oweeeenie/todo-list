const tasks = [];

const addTask = (name, description, date) => {
  const newTask = {
    name,
    description,
    date,
    completed: false,
  };
  tasks.push(newTask);
};

const getTasks = () => tasks;
export { addTask, getTasks };

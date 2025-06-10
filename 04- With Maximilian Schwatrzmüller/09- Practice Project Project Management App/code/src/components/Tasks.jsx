import NewTask from "./NewTask";

const Tasks = ({ tasks, onCreateTask, onDeleteTask }) => {
  const handleCreate = (taskTitle) => {
    onCreateTask(taskTitle);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onCreate={handleCreate}></NewTask>
      {tasks.length == 0 ? (
        <p className="text-stone-800 my-4">
          This project, does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task, index) => {
            return (
              <li key={index} className="flex justify-between my-4">
                <span>{task}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDeleteTask(task)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Tasks;

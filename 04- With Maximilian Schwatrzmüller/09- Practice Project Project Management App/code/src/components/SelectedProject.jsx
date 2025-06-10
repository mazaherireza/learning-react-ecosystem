import Tasks from "./Tasks.jsx";

const SelectedProject = ({
  title: projectTitle,
  description,
  dueDate,
  tasks,
  onDeleteProject,
  onCreateTask,
  onDeleteTask,
}) => {
  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const handleCreateTask = (taskTitle) => {
    onCreateTask(taskTitle, projectTitle);
  };

  const handleDeleteTask = (taskTitle) => {
    onDeleteTask(taskTitle, projectTitle);
  };

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb-2">
            {projectTitle}
          </h2>
          <button
            onClick={onDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-600 whitespace-pre-wrap">{description}</p>
        <p className="text-stone-400">{formattedDate}</p>
      </header>
      <Tasks
        tasks={tasks}
        onCreateTask={handleCreateTask}
        onDeleteTask={handleDeleteTask}
      ></Tasks>
    </div>
  );
};

export default SelectedProject;

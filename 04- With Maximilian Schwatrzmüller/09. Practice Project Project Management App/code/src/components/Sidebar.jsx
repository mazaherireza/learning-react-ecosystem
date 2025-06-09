import Button from "./Button.jsx";

const Sidebar = ({ onPreCreate, onSelect, projects, selectedID }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onPreCreate}> + Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          let utilityClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (selectedID == project.title) {
            utilityClasses += " bg-stone-800 text-stone-200";
          } else {
            utilityClasses += " text-stone-400";
          }
          return (
            <li key={project.title}>
              <button
                onClick={() => onSelect(project.title)}
                className={utilityClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

import { useState } from "react";

const NewTask = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleClick = () => {
    if (title.trim() === "") return;
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={title}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;

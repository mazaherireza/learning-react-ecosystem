import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined, // means we're doing nothing.
    projects: [],
  });

  const handlePreCreateProject = () => {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectID: null, // a signal that we're adding a new project.
    }));
  };

  const handleCreateProject = (newProject) => {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectID: undefined,
      projects: [...prev.projects, { ...newProject, tasks: [] }],
    }));
  };

  const handleCreateTask = (taskTitle, projectID) => {
    setProjectsState((prev) => {
      const deepCopy = structuredClone(prev);
      const mappedProjects = deepCopy.projects.map((project) => {
        if (project.title === projectID) {
          project.tasks = [...project.tasks, taskTitle];
        }
        return project;
      });
      return {
        ...prev,
        projects: mappedProjects,
      };
    });
  };

  const handleCancel = () => {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectID: undefined,
    }));
  };

  const handleSelectProject = (projectID) => {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectID: projectID,
    }));
  };

  const handleDeleteProject = () => {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectID: undefined,
      projects: prev.projects.filter(
        (project) => project.title !== prev.selectedProjectID
      ),
    }));
  };

  const handleDeleteTask = (taskTitle, projectTitle) => {
    setProjectsState((prev) => {
      const deepCopy = structuredClone(prev);
      const filteredProjects = deepCopy.projects.map((project) => {
        if (project.title === projectTitle) {
          const filtteredTasks = project.tasks.filter(
            (task) => task !== taskTitle
          );
          project.tasks = [...filtteredTasks];
        }
        return project;
      });

      return {
        ...prev,
        projects: filteredProjects,
      };
    });
  };

  let content;
  if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject
        onCreate={handleCreateProject}
        onCancel={handleCancel}
      ></NewProject>
    );
  } else if (projectsState.selectedProjectID === undefined) {
    content = (
      <NoProjectSelected
        onPreCreate={handlePreCreateProject}
      ></NoProjectSelected>
    );
  } else {
    const projectID = projectsState.selectedProjectID;
    const project = projectsState.projects.find(
      (project) => projectID == project.title
    );
    content = (
      <SelectedProject
        {...project}
        onDeleteProject={handleDeleteProject}
        onCreateTask={handleCreateTask}
        onDeleteTask={handleDeleteTask}
      ></SelectedProject>
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onPreCreate={handlePreCreateProject}
        onSelect={handleSelectProject}
        projects={projectsState.projects}
        selectedID={projectsState.selectedProjectID}
      ></Sidebar>
      {content}
    </main>
  );
};

export default App;

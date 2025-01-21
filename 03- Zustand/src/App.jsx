import Form from "./components/form/Form";
import List from "./components/list/List";
import useCourseStore from "./store/CourseStore";
import "./App.css";

function App() {
  const { courses } = useCourseStore();
  return (
    <div className="app-wrapper">
      <Form></Form>
      <List list={courses}></List>
    </div>
  );
}

export default App;

import useCourseStore from "@/store/CourseStore";
import "./List.css";

const List = ({ list }) => {
  const { removeCourse } = useCourseStore();

  return (
    <div className="list-wrapper">
      {list?.map((item) => (
        <div key={item._id} className="item-wrapper">
          <p className="title">{item.title}</p>
          <button onClick={() => removeCourse(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;

import "./Todo.css";

export default function Todo(props) {
  const { title, isCompleted, del, changeStatus } = props;
  return (
    <div className="todo-wrapper">
      <div className={isCompleted ? "lineThrough" : ""}>{title}</div>
      <div className="actions">
        <div>
          {isCompleted ? (
            <button className="status red" onClick={() => changeStatus(title)}>
              Incomplete
            </button>
          ) : (
            <button className="status green" onClick={() => changeStatus(title)}>
              Complete
            </button>
          )}
        </div>

        <i className="fa fa-times" onClick={() => del(title)}></i>
      </div>
    </div>
  );
}

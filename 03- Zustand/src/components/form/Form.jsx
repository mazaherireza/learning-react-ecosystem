import { useForm } from "react-hook-form";
import useCourseStore from "@/store/CourseStore";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const courseStore = useCourseStore();

  const onSubmit = ({ courseTitle }) => {
    courseStore.addCourse(courseTitle);
    console.log(courseStore);
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <label>Course Title:</label>
      <input
        placeholder="Course Title"
        type="text"
        autoFocus
        {...register("courseTitle", {
          required: "Course Title is required.",
          minLength: 1,
        })}
        className={`${errors.courseTitle && "invalid"}`}
      />
      {errors.courseTitle && errors.courseTitle.type == "required" && (
        <p className="error-message">{errors.courseTitle?.message}</p>
      )}
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;

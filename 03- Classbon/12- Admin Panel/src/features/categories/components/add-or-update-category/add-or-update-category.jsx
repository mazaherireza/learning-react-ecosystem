import { useForm } from "react-hook-form";
import { httpInterceptedService } from "@core/http-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./add-or-update-category.css";

const AddOrUpdateCategory = ({ setShowAddCategory }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setShowAddCategory(false);
    const response = httpInterceptedService.post("/CourseCategory", data);
    toast.promise(
      response,
      {
        pending: "در حال انجام عملیات ...",
        success: {
          render() {
            const { pathname, search } = new URL(location.href);
            navigate(pathname + search);
            return "عملیات با موفقیت انجام شد.";
          },
        },
        error: {
          render({ data }) {
            if (data.response.status == 400) return data.response.data.code;
            else return "خطا در اجرای عملیات";
          },
        },
      },
      {
        position: "bottom-left",
      }
    );
  };

  return (
    <div className="add-or-update-category-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>نام</label>
        <input
          type="text"
          className={`${errors.name && "invalid"}`}
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && errors.name.type == "required" && (
          <p className="alert alert-error">نام الزامی‌ست.</p>
        )}
        <div className="actions">
          <button onClick={() => setShowAddCategory(false)}>بستن</button>
          <button type="submit">ثبت تغییرات</button>
        </div>
      </form>
    </div>
  );
};

export default AddOrUpdateCategory;

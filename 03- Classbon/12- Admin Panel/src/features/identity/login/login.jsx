import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("onSubmit is called");
    console.log(data);
  };

  return (
    <div className="login-wrapper">
      <p>جهت ورود لازم است از طریق موبایل و رمزعبور خود اقدام کنید.</p>
      <p>
        قبلا ثبت نام نکرده‌اید؟،
        <Link to="/register">ثبت نام کنید</Link>.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>موبایل</label>
        <input
          placeholder="موبایل"
          type="text"
          autoFocus
          {...register("mobile", {
            required: "موبایل الزامی است.",
            minLength: 11,
            maxLength: 11,
          })}
          className={`${errors.mobile && "invalid"}`}
        />

        <label>رمزعبور</label>
        <input
          placeholder="رمزعبور"
          type="password"
          {...register("password", {
            required: "رمزعبور الزامی است.",
            minLength: 11,
            maxLength: 11,
          })}
          className={`${errors.password && "invalid"}`}
        />
        <button className="btn" type="submit">
          وارد شوید
        </button>
      </form>
    </div>
  );
};

export default Login;

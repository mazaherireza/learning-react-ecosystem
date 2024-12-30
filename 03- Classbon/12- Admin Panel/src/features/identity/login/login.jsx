import InputWithLabel from "@components/inputWithLabel/index";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-wrapper">
      <p>جهت ورود لازم است از طریق موبایل و رمزعبور خود اقدام کنید.</p>
      <p>
        قبلا ثبت نام نکرده‌اید؟،
        <Link to="/register">ثبت نام کنید</Link>.
      </p>

      <form action="">
        <InputWithLabel
          lable="موبایل"
          id="login-mobile"
          valeu={mobile}
          placeholder="موبایل"
          onChange={setMobile}
          isFocused
        ></InputWithLabel>

        <InputWithLabel
          lable="رمزعبور"
          id="login-password"
          valeu={password}
          placeholder="رمزعبور"
          type="password"
          onChange={setPassword}
        ></InputWithLabel>

        <button className="btn">وارد شوید</button>
      </form>
    </div>
  );
};
export default Login;

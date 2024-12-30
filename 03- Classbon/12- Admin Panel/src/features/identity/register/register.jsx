import InputWithLabel from "@components/inputWithLabel/index";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <div className="register-wrapper">
      <p>جهت استفاده از پلتفرم آموزش آنلاین کلاسبن ثبت‌نام کنید.</p>
      <p>
        قبلا ثبت‌نام کرده‌اید؟،
        <Link to="/login">وارد شوید</Link>.
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

        <InputWithLabel
          lable="رمزعبور"
          id="login-repeated-password"
          valeu={repeatedPassword}
          placeholder="تکرار رمزعبور"
          type="password"
          onChange={setRepeatedPassword}
        ></InputWithLabel>

        <button className="btn">ثبت‌نام</button>
      </form>
    </div>
  );
};
export default Register;

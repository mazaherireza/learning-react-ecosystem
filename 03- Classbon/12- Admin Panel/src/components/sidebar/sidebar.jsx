import logo from "@assets/images/Logo.svg";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar-wrapper">
      <img src={logo} alt="Logo" />
      <h3>پلت‌فرم آموزش آنلاین</h3>
      <ul>
        <h4>مدیریت دوره‌ها</h4>
        <li>
          <Link>همه دوره‌ها</Link>
        </li>

        <li>
          <Link>دسته‌بندی دوره‌ها</Link>
        </li>

        <li>
          <Link>تخفیف دوره‌ها</Link>
        </li>

        <h4>مدیریت کاربران</h4>
        <li>
          <Link>مدیریت مدرس‌ها</Link>
        </li>

        <li>
          <Link>مدیریت دانشجوها</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

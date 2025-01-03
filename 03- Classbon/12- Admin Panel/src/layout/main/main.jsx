import Sidebar from "@components/sidebar/sidebar";
import Footer from "@components/footer/footer";
import { Outlet } from "react-router-dom";
import "./main.css";

const MainLayout = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <Sidebar></Sidebar>
        <div className="main">
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

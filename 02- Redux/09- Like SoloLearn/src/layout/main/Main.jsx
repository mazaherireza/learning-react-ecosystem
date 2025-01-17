import Header from "@/components/the-header/TheHeader";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-wrapper">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;

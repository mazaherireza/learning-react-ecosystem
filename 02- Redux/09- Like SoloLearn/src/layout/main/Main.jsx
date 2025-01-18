import TheHeader from "@/components/the-header/TheHeader";
import { Outlet } from "react-router-dom";
import TheFooter from "@/components/the-footer/TheFooter"

const MainLayout = () => {
  return (
    <div className="main-wrapper">
      <TheHeader></TheHeader>
      <main>
        <Outlet></Outlet>
      </main>
      <TheFooter></TheFooter>
    </div>
  );
};

export default MainLayout;

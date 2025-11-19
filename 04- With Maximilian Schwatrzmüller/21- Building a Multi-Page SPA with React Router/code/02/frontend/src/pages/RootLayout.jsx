import MainNavigation from "../components/UpdatedMainNavigation";
import { useNavigation, Outlet } from "react-router-dom";

const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {state === "loading" && <p>Loading ...</p>}
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootLayout;

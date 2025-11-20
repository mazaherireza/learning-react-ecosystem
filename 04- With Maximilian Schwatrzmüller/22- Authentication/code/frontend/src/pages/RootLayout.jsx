import { useEffect } from "react";
import {
  useLoaderData,
  useSubmit,
  useNavigation,
  Outlet,
} from "react-router-dom";
import MainNavigation from "../components/UpdatedMainNavigation";
import { getTokenDuration } from "../utils/auth";

const RootLayout = () => {
  const token = useLoaderData();

  const submit = useSubmit();

  const { state } = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    }

    if ((token === "EXPIRED")) {
      submit(null, { action: "/logout", method: "POST" });
      return;
    }

    const duration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, duration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {state === "loading" && <p>Loading ...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

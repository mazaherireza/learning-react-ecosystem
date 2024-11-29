import router from "../../router.jsx";
import { useRoutes } from "react-router-dom";

export default function Container() {
  const routes = useRoutes(router);
  return <>{routes}</>;
}

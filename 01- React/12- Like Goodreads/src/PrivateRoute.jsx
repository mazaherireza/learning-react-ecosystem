import { Navigate } from "react-router-dom";
import { isLogin } from "./constants";

export default function PrivateRoute({ children }) {
  return <>{isLogin ? children : <Navigate to="/login"></Navigate>}</>;
}

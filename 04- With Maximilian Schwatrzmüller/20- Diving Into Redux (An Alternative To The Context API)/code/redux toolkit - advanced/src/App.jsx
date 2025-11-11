import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Header></Header>
      {!isAuthenticated && <Auth></Auth>}
      {isAuthenticated && <UserProfile></UserProfile>}
      <Counter></Counter>
    </>
  );
};

export default App;

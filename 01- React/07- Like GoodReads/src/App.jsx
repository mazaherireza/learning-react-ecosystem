import "./App.css";
import Header from "./components/header/Header.jsx";
import Form from "./components/form/Form.jsx";
import Banner from "./components/banner/Banner.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <Header></Header>
      </div>
      <div className="app-form">
        <Form></Form>
      </div>
      <div className="app-banner">
        <Banner></Banner>
      </div>
    </div>
  );
}

export default App;

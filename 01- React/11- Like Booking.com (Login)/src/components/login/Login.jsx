import "./Login.css";
import Card from "../card/Card.jsx";
import Footer from "../footer/Footer.jsx";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  Button,
  Divider,
} from "@mui/material";

const Login = () => {
  const icons = [
    <i className="fa fa-facebook"></i>,
    <i className="fa fa-google"></i>,
    <i className="fa fa-apple"></i>,
  ];
  return (
    <div className="login-wrapper">
      <Container>
        <p className="login-title">Sign in to create an acount</p>
        <FormControl onSubmit={(event) => event.preventDefault()}>
          <InputLabel
            htmlFor="input"
            style={{
              fontSize: "small",
              color: "#003b95",
              fontFamily: "Times New Roman",
            }}
          >
            Email address
          </InputLabel>
          <Input
            id="input"
            type="email"
            placeholder="Enter your email address"
            autoFocus
            fullWidth
            sx={{ borderColor: "#003b95", fontFamily: "Times New Roman" }}
          ></Input>

          <Button
            className="btn"
            variant="contained"
            style={{
              display: "block",
              backgroundColor: "#003b95",
              textTransform: "none",
              fontFamily: "Times New Roman",
            }}
          >
            Continue with email
          </Button>
        </FormControl>

        <Divider>
          <span className="paragraph">or use one of these options</span>
        </Divider>
        <div className="social-networks">
          {icons.map((icon, index) => (
            <Card key={index} tag={icon}></Card>
          ))}
        </div>
        <Divider sx={{ borderColor: "#242424" }}></Divider>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default Login;

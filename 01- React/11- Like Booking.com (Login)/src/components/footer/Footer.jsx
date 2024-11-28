import "./Footer.css";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <p>
          By signing in or creating an account, you agree with our{" "}
          <a href="#">Terms & conditions</a> and{" "}
          <a href="#">Privacy statement</a>
        </p>

        <p>All rights reserved.</p>

        <p>Copyright (2006 - 2024) - Booking.com</p>
      </Container>
    </footer>
  );
};

export default Footer;

import "./Login.css";

export default function Login() {
  const socialNetworks = [
    {
      title: "Amazon",
      icon: <i className="fa fa-amazon"></i>,
    },
    {
      title: "Apple",
      icon: <i className="fa fa-apple"></i>,
    },
    {
      title: "Google",
      icon: <i className="fa fa-google"></i>,
    },
  ];
  return (
    <div className="container">
      <div className="login-wrapper">
        <h4>Sign in to Goodreads</h4>
        {socialNetworks.map((socialNetwork, index) => (
          <button key={index} className="btn social">
            <span>{socialNetwork.icon}</span>
            <span>Continue with {socialNetwork.title}</span>
          </button>
        ))}

        <button className="btn email">Sign in with email</button>
        <div className="information">
          <p>Not a member? Sign up</p>
          <p>
            By creating an account, you agree to the Goodreads Terms of Service
            and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

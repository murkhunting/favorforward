const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout title="Log in Page" location={props.location}>
      <h1>Log In</h1>
      <form id="form" action="/auth/login" method="POST">
        <label>Email</label>
        <br />
        <input type="text" name="email" placeholder="Enter your email" />

        <label>Password</label>
        <br />
        <input type="password" name="password" />

        <button type="submit">Login</button>
      </form>

      {props.errorMessage ? (
        <div className="error-message"> {props.errorMessage}</div>
      ) : null}

        <br />
      <p className="account-message">
        <a href="/auth/signup">Sign up!</a> if you don't have an account yet
      </p>
    </Layout>
  );
}

module.exports = Login;

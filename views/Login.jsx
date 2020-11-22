const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout title="Log in Page">
      <h1>Log In</h1>
        <br />
      <form id="form" action="/auth/login" method="POST">
        <label>Email</label>
        <input type="text" name="email" placeholder="Enter your email" />
        <br />

        <label>Password</label>
        <input type="password" name="password" />
        <input type="password" name="repeatPassword" />
        <br />

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

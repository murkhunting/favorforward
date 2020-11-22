const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout title="Sign Up Page">
    <h1>Sign Up</h1>
      <form id="form" action="/auth/signup" method="POST">
        <br />
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter your password" />
        <br />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat password"
        />
        <br /><br />

        <button type="submit">Sign Up</button>

        {props.errorMessage ? (
          <div className="error-message">{props.errorMessage}</div>
        ) : null}
      </form>
    </Layout>
  );
}

module.exports = Signup;

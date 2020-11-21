const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout title="Sign Up Page">
      <form id="form" action="/auth/signup" method="POST">
        <label>Name</label>
        <br />
        <input type="text" name="name" placeholder="Enter your name" />
        <label>Email</label>
        <br />
        <input type="email" name="email" placeholder="Enter your email" />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat password"
        />

        <button type="submit">Sign Up</button>

        {props.errorMessage ? (
          <div className="error-message">{props.errorMessage}</div>
        ) : null}
      </form>
    </Layout>
  );
}

module.exports = Signup;

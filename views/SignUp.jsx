const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout title="Sign Up Page" location={props.location}>
      <section>
      <form id="form" action="/auth/signup" method="POST">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="password" name="password" placeholder="Enter your password" />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat password"
        />
        <br /><br />

        <button type="submit">SIGN UP</button>

        {props.errorMessage ? (
          <div className="error-message">{props.errorMessage}</div>
        ) : null}
      </form>
      </section>
    </Layout>
  );
}

module.exports = Signup;

const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout title="Log in Page" location={props.location}>
      <section>
      <form id="form" action="/auth/login" method="POST">
        <input type="text" name="email" placeholder="Enter your email" />

        <input type="password" name="password"  placeholder="*****" />
        <br/>
        <br/>
        <button type="submit">LOGIN</button>
      </form>

      {props.errorMessage ? (
        <div className="error-message"> {props.errorMessage}</div>
      ) : null}

        <br />
        <br/>
    
      <a clasName="signup" href="/auth/signup">if you don't have an account yet Sign up!</a>
      <br/>
      <br/>
      </section>
    </Layout>
  );
}

module.exports = Login;

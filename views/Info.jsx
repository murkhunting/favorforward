const React = require("react");
const Layout = require("./Layout");


function Info(props) {
  return (
    <Layout title="Info Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic} location={props.location}>
      <h1>Info Page</h1>
      
    </Layout>
  );
}

module.exports = Info;

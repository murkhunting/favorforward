const React = require("react");
const Layout = require("./Layout");


function UserDashboard(props) {
  return (
    <Layout title="UserDashboard Page">
      <h1>UserDashboard Page</h1>
      <br/> <br/> 
      <h3>Name:</h3>
      <h2>{props.user.name}</h2>
      <br/> 
      <h3>Age:</h3>
      <h2>{props.user.age}</h2>
      <br/> 
      <h3>Email:</h3>
      <h2>{props.user.Email}</h2>
      <br/> 
      <h3>Favors:</h3>
      <h2>{props.user.Email}</h2>
     
     


    </Layout>
  );
}

module.exports = UserDashboard;

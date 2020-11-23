const React = require("react");
const Layout = require("./Layout");

function UserDashboard(props) {
  return (
    <Layout title="UserDashboard Page">
      <h1>Profile page</h1>
      <br /> <br />
      <img className="user-image" src={`${props.profilepic}`} />
      <h3>Name:</h3>
      <h2>{props.user.name}</h2>
      <br />
      <h3>Age:</h3>
      <h2>{props.user.age}</h2>
      <br />
      <h3>Email:</h3>
      <h2>{props.user.email}</h2>
      <br />
      <a className="" href={"/user/dashboard/edit"}>
        <img className="navbar-icon" src="./../images/icon-logo.png" />
        <p className="navbar-title">Edit Profile</p>
      </a>
      <br />
      <a className="navbar-icontitle" href="/auth/logout">
        <img className="navbar-icon" src="./../images/icon-user.png" />
        <p className="navbar-title">Log Out</p>
      </a>
      <br />
      <h3>Favors:</h3>
      {/* <h2>{props.user.favorsCreated}</h2> */}
      <button type="button">CREATED</button>
      <button type="button">PENDING</button>
      <button type="button">ACCEPTED</button>
      <br />
      {/* { props.favorList.map( (eachFavor, i)=> {
          return (
            <a href={`/favor/${eachFavor.id}`}>
            <h2>{eachFavor.title}</h2>
            <favorCard i={i} />
            </a>
          )
        })
      } */}
    </Layout>
  );
}

module.exports = UserDashboard;

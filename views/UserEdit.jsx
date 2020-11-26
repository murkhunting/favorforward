const React = require("react");
const Layout = require("./Layout");

function UserEdit(props) {
  return (
    <Layout title="User Edit Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic} location={props.location}>
      <section>
      <h2>EDIT PROFILE</h2>
    
      <form id="form" action={"/user/edit"} method="POST" encType="multipart/form-data">
        <h1>Name:</h1>
        <input type="text" name="name" defaultValue={props.user.name} />
        <h1>Email:</h1>
        <input type="email" name="email" defaultValue={props.user.email} />
        <h1>Age:</h1>
        <input type="text" name="age" defaultValue={props.user.age} />
        <h1>Profilepic:</h1>
        <input  className="imageselect" type="file" name="profilepic" />
        <br/>
        <br/>
        <button type="submit">Save</button>
        <br />
        <br />
      </form>
      <form id="" action={"/user/delete"} method="POST">
      <button className="trash" type="submit">
        <img className="navbar-icon" src="./../icons/trash.png"/>
        </button>
      </form>
      </section>
      
    </Layout>
  );
}

module.exports = UserEdit;

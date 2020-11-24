const React = require("react");
const Layout = require("./Layout");

function UserEdit(props) {
  return (
    <Layout title="User Edit Page">
      <h1>User Edit Page</h1>
      <br />
      <br />
      <form
        id="form"
        action={`/user/edit?user_id=${props.user._id}`}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Profile picture</label>
        <input type="file" name="profilepic" />
        <br />
        <br />
        <label>Name: </label>
        <input type="text" name="name" defaultValue={props.user.name} />
        <br />
        <br />

        <label>Email: </label>
        <input type="email" name="email" defaultValue={props.user.email} />
        <br />
        <br />

        <label>Age: </label>
        <input type="text" name="age" defaultValue={props.user.age} />
        <br />
        <br />

        <button type="submit">Save Changes</button>
        <br />
        <br />
      </form>
      <form id="" action={"/user/delete"} method="POST">
        <button type="submit">Delete Account</button>
      </form>
      
    </Layout>
  );
}

module.exports = UserEdit;

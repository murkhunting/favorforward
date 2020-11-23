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
        action="/favor/edit"
        method="POST"
        encType="multipart/form-data"
      >
        <label>Profile picture</label>
        <input type="file" name="profilepic" />
        <br />
        <br />
        <label>Name: </label>
        <input type="text" name="name" placeholder={props.user.name} />
        <br />
        <br />

        <label>Email: </label>
        <input type="email" name="email" placeholder={props.user.email} />
        <br />
        <br />

        <label>Age: </label>
        <input type="text" name="Age" placeholder={props.user.age} />
        <br />
        <br />

        <button type="submit">Save Changes</button>
      </form>
    </Layout>
  );
}

module.exports = UserEdit;

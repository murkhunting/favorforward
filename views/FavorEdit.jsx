const React = require("react");
const Layout = require("./Layout");

function FavorEdit(props) {
  return (
    <Layout title="Edit Favor Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic}>
      <section>
      <h2>EDIT FAVOR</h2>
      <form id="" action={`/favoredit/${props._id}`} method="POST">
        
        <input type="text" name="title" defaultValue={props.favorDetail.title} />
        <input type="text" name="timeStart" defaultValue={props.favorDetail.timeStart} />
        <input type="text" name="timeDuration" defaultValue={props.favorDetail.timeDuration}  />
        <input type="text" name="description" defaultValue={props.favorDetail.description} />
        <input type="text" name="tags" defaultValue={props.tags}  />
        <input type="date" name="date" defaultValue={props.favorDetail.date} required/>
        <br /><br />
        {/* <label>Adress:  </label>
        <input type="text" name="location" defaultValue={props.location}  />
        <br /><br /> */}

        <button type="submit">Edit Favor</button>
      </form>
      <br/>

      <form id="" action={`/favordelete/${props._id}`} method="POST">
        <button className="trash" type="submit">
        <img className="navbar-icon" src="./../icons/trash.png"/>
        </button>
      </form>
      </section>
      </Layout>
  );
}

module.exports = FavorEdit;

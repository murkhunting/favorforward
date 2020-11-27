const React = require("react");
const Layout = require("./Layout");

function FavorEdit(props) {
  return (
    <Layout title="Edit Favor Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic}>
      <section>
      <h2>EDIT FAVOR</h2>
      <form id="" action={`/favoredit/${props.favorDetail._id}`} method="POST">
        
        <input type="text" name="title" placeholder="title" defaultValue={props.favorDetail.title} />
        <input type="text" name="timeStart" placeholder="timeStart" defaultValue={`at ${props.favorDetail.timeStart}`} />
        <input type="text" name="timeDuration" placeholder="timeDuration" defaultValue={`for ${props.favorDetail.timeDuration}`}  />
        <input type="text" name="description" placeholder="description" defaultValue={`# ${props.favorDetail.description}`} />
        <input type="text" name="tags" placeholder="tags" defaultValue={props.tags}  />
        <input type="date" name="date" placeholder="date" defaultValue={props.favorDetail.date} required/>
        <input type="text" name="address" placeholder="address" defaultValue={props.favorDetail.address} />
        <input type="text" name="zipNum" placeholder="zipNum" defaultValue={props.favorDetail.zipcode} />
        <br /><br />

        <button className="formbutton" type="submit">Edit Favor</button>
      </form>
      <br/>

      <form id="" action={`/favordelete/${props._id}`} method="POST">
        <button className=" trash" type="submit">
        <img className="navbar-icon" src="./../icons/trash.png"/>
        </button>
      </form>
      </section>
      <br/><br/><br/><br/>
      </Layout>
  );
}

module.exports = FavorEdit;

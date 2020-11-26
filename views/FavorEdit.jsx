const React = require("react");
const Layout = require("./Layout");

function FavorEdit(props) {
  return (
    <Layout title="Edit Favor Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic}>
      <h1>Edit Favor Page</h1>
      <br /><br />
      <form id="" action={`/favoredit/${props.favorDetail._id}`} method="POST">
        <label>Title:  </label>
        <input type="text" name="title" defaultValue={props.favorDetail.title} />
        <br /><br />
        <label>Date:  </label>
        <input type="date" name="date" defaultValue={props.favorDetail.date} required/>
        <br /><br />
        <label>Starting Time:  </label>
        <input type="text" name="timeStart" defaultValue={props.favorDetail.timeStart} />
        <br /><br />
        <label>Duration Time:  </label>
        <input type="text" name="timeDuration" defaultValue={props.favorDetail.timeDuration}  />
        <br /><br />
        <label>Description:  </label>
        <input type="text" name="description" defaultValue={props.favorDetail.description} />
        <br /><br />
        <label>Tags:  </label>
        <input type="text" name="tags" defaultValue={props.favorDetail.tags}  />
        <br /><br />
        <label>Adress: </label>
        <input type="text" name="address" defaultValue={props.favorDetail.address} />
        <br /><br />
        <label>Zipcode: </label>
        <input type="text" name="zipNum" defaultValue={props.favorDetail.zipcode} />
        <br /><br />
      
        {/* <label>Adress:  </label>
        <input type="text" name="location" defaultValue={props.location}  />
        <br /><br /> */}

        <button type="submit">Edit Favor</button>
      </form>
      <br/>

      <form id="" action={`/favordelete/${props._id}`} method="POST">
        <button type="submit">Delete Favor</button>
      </form>
      </Layout>
  );
}

module.exports = FavorEdit;

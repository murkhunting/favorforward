const React = require("react");
const Layout = require("./Layout");

function FavorEdit(props) {
  return (
    <Layout title="Edit Favor Page">
      <h1>Edit Favor Page</h1>
      <br /><br />
      <form id="" action={`/favoredit/${props._id}`} method="POST">
        <label>Title:  </label>
        <input type="text" name="title" defaultValue={props.title} />
        <br /><br />
        <label>Date:  </label>
        <input type="date" name="date" defaultValue={props.date} required/>
        <br /><br />
        <label>Starting Time:  </label>
        <input type="text" name="timeStart" defaultValue={props.timeStart} />
        <br /><br />
        <label>Duration Time:  </label>
        <input type="text" name="timeDuration" defaultValue={props.timeDuration}  />
        <br /><br />
        <label>Description:  </label>
        <input type="text" name="description" defaultValue={props.description} />
        <br /><br />
        <label>Tags:  </label>
        <input type="text" name="tags" defaultValue={props.tags}  />
        <br /><br />
        {/* <label>Adress:  </label>
        <input type="text" name="location" defaultValue={props.location}  />
        <br /><br /> */}

<<<<<<< HEAD
        <label>Tags: </label>
        <input type="text" name="tags" placeholder={props.tags} />
        <br />
        <br />

        <label>Adress: </label>
        <input type="text" name="location" placeholder={props.location} />
        <br />
        <br />

        <button type="submit">Edit Favor</button>
      </form>
    </Layout>
=======
        <button type="submit">Edit Favor</button>
      </form>

      <form id="" action={`/favordelete/${props._id}`} method="POST">
        <button type="submit">DELETE Favor</button>
      </form>
      </Layout>
>>>>>>> develop
  );
}

module.exports = FavorEdit;

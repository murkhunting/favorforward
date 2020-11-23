const React = require("react");
const Layout = require("./Layout");

function FavorEdit(props) {


  return (
    <Layout title="Edit Favor Page">
      <h1>Edit Favor Page</h1>
      <br /><br />
      <form id="" action="/favor/:id/edit" method="POST">
        <label>Title:  </label>
        <input type="text" name="title" placeholder={props.title} />
        <br /><br />
        <label>Date:  </label>
        <input type="date" name="date" placeholder={Date.now}/>
        <br /><br />
        <label>Starting Time:  </label>
        <input type="text" name="timeStart" placeholder={props.timeStart} />
        <br /><br />
        <label>Duration Time:  </label>
        <input type="text" name="timeDuration" placeholder={props.timeDuration}  />
        <br /><br />
        <label>Description:  </label>
        <input type="text" name="description" placeholder={props.description} />
        <br /><br />
        <label>Tags:  </label>
        <input type="text" name="tags" placeholder={props.tags}  />
        <br /><br />
        <label>Adress:  </label>
        <input type="text" name="location" placeholder={props.location}  />
        <br /><br />

        <button type="submit">Edit Favor</button>

      </form>

      </Layout>
  );
}

module.exports = FavorEdit;
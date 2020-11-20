const React = require("react");
const Layout = require("./Layout");


function FavorCreate() {
  return (
    <Layout title="Create Favor Page">
      <h1>Create Favor Page</h1>
      <br /><br />
      <form id="form" action="/favor/create" method="POST">
        
        <label>Title:  </label>
        <input type="text" name="title" placeholder="Favor Title" />
        <br /><br />

        <label>Date:  </label>
        <input type="date" name="date" />
        <br /><br />

        <label>Starting Time:  </label>
        <input type="text" name="timeStart" placeholder="Starting Time" />
        <br /><br />

        <label>Duration Time:  </label>
        <input type="text" name="timeDuration" placeholder="Duration Time" />
        <br /><br />

        <label>Description:  </label>
        <input type="text" name="description" placeholder="Description" />
        <br /><br />

        <label>Tags:  </label>
        <input type="text" name="tags" placeholder="Tags" />
        <br /><br />

        <label>Adress:  </label>
        <input type="text" name="location" placeholder="Adress" />
        <br /><br />

        <button type="submit">Create account</button>

        {/* {
          props.errorMessage 
            ? <div className="error-message"> {props.errorMessage} </div>
            : null
        } */}
      </form>

     
      
    </Layout>
  );
}

module.exports = FavorCreate;

const React = require("react");
const Layout = require("./Layout");


function FavorDetail() {
  return (
    <Layout title="Detail Favor Page">
      <h1>Detail Favor Page</h1>
      
      <br /><br />
      <form id="form" action="/favor/create" method="POST">
        

        <h3>Title:  </h3>
        <h3>Title:  </h3>
        <input type="text" name="title" placeholder="Favor Title" />
        <br /><br />

        <h3>Date:  </h3>
        <input type="date" name="date" placeholder={Date.now}/>
        <br /><br />

        <h3>Starting Time:  </h3>
        <input type="text" name="timeStart" placeholder="Starting Time" />
        <br /><br />

        <h3>Duration Time:  </h3>
        <input type="text" name="timeDuration" placeholder="Duration Time" />
        <br /><br />

        <h3>Description:  </h3>
        <input type="text" name="description" placeholder="Description" />
        <br /><br />

        <h3>Tags:  </h3>
        <input type="text" name="tags" placeholder="Tags" />
        <br /><br />

        <h3>Adress:  </h3>
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

module.exports = FavorDetail;

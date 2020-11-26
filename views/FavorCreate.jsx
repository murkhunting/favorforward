const React = require("react");
const Layout = require("./Layout");

function FavorCreate(props) {
  return (
    <Layout title="Create Favor Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic} location={props.location}>
      <h1>Create Favor Page</h1>
      <br />
      <br />
      <form id="form" action="/favor/create" method="POST">
        
        <label>Title:  </label>
        <input type="text" name="title" placeholder="Favor Title" required/>
        <br /><br />

        <label>Date:  </label>
        <input type="date" name="date" placeholder={Date.now()} required/>
        <br /><br />

        <label>Starting Time:  </label>
        <input type="text" name="timeStart" placeholder="Starting Time" required/>
        <br /><br />

        <label>Duration Time:  </label>
        <input type="text" name="timeDuration" placeholder="Duration Time" required/>
        <br /><br />

        <label>Description:  </label>
        <input type="text" name="description" placeholder="Description" required/>
        <br /><br />

        <label>Tags: (optional) </label>
        <input type="text" name="tags" placeholder="Tags" />
        <br />
        <br />

        <label>Adress: </label>
        <input type="text" name="address" placeholder="Adress" />
        <br />
        <br />

        <label>Zipcode: </label>
        <input type="text" name="zipNum" placeholder="Adress" required/>
        {/* <select id=""  name="location">
          <option value="" selected disabled hidden>Choose here</option>
          <option value="Tennis">08001</option>
          <option value="Football">08002</option>
          <option value="Pool">08003</option>
        </select> */}
        <br />
        <br />

        <button type="submit">Create Favor</button>

        {/* {
          props.errorMessage 
            ? <div className="error-message"> {props.errorMessage} </div>
            : null
        } */}
      </form>

      {/* <div id='map' style={{width: "1000px", height: "600px"}}></div> */}


      <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
      <script async defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
      <script async defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="/javascripts/mapbox.js"></script>
      
    </Layout>
  );
}

module.exports = FavorCreate;

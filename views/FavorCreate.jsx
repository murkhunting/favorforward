const React = require("react");
const Layout = require("./Layout");

function FavorCreate(props) {
  return (
    <Layout title="Create Favor Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.user.profilepic} location={props.location}>
      <section>
      <h2>FAVOR FORM</h2>
      <form id="form" action="/favor/create" method="POST">
        <input type="text" name="title" placeholder="Favor Title" required/>
        <input type="text" name="timeStart" placeholder="Starting Time" required/>
        <input type="text" name="timeDuration" placeholder="Duration Time" required/>
        <input type="text" name="description" placeholder="Description" required/>
        <input type="text" name="tags" placeholder="Tags" />
        <input type="text" name="address" placeholder="Adress" />
        <input type="text" name="zipNum" placeholder="Zip Code" required/>
        <input type="date" name="date" placeholder={Date.now()} required/>
        <br />
        <br />
        
        <button className="formbutton" type="submit">Create Favor</button>

        {/* {
          props.errorMessage 
            ? <div className="error-message"> {props.errorMessage} </div>
            : null
        } */}
      </form>
      </section>

      {/* <div id='map' style={{width: "1000px", height: "600px"}}></div> */}


      <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
      <script async defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
      <script async defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="/javascripts/mapbox.js"></script>
      
    </Layout>
  );
}

module.exports = FavorCreate;

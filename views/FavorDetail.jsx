const React = require("react");
const Layout = require("./Layout");

function FavorDetail(props) {

let day = ""
switch (props.date.getDay()) {
  case 0: day = "Sun"; break;
  case 1: day = "Mon"; break;
  case 2: day = "Tue"; break;
  case 3: day = "Wed"; break;
  case 4: day = "Thu"; break;
  case 5: day = "Fri"; break;
  case 6: day = "Sat"; break;
}

  return (
    <Layout title="Detail Favor Page">
      <h1>Detail Favor Page</h1>
      <br /><br />
        <h3>Title: {props.title} </h3>
        <br />

        <h3>Date: {day} {props.date.getDate()}/{props.date.getMonth()}</h3>
        <br />

        <h3>Starting Time: {props.timeStart}</h3>
        <br />

        <h3>Duration Time: {props.timeDuration}</h3>
        <br />

        <h3>Description: {props.description}</h3>
        <br />

        <h3>Adress:</h3> {/* <h3>{props.location}</h3> */}
        <br />
      
        <a className="" href={`/favoredit/${props._id}`}>
          <img className="navbar-icon" src="./../images/icon-logo.png" />
          <p className="navbar-title">Edit Favor</p>
        </a>

      </Layout>
  );
}

module.exports = FavorDetail;
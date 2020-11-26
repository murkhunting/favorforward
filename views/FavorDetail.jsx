const React = require("react");
const Layout = require("./Layout");

function FavorDetail(props) {

let day = ""
switch (props.favorDetail.date.getDay()) {
  case 0: day = "Sun"; break;
  case 1: day = "Mon"; break;
  case 2: day = "Tue"; break;
  case 3: day = "Wed"; break;
  case 4: day = "Thu"; break;
  case 5: day = "Fri"; break;
  case 6: day = "Sat"; break;
}

  return (
    <Layout title="Detail Favor Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic}>
      <h1>Detail Favor Page</h1>
      <br /><br />
      <h3>Title: {props.favorDetail.title} </h3>
      <br />
      <h3>Name: {props.favorDetail.createrUser.name} </h3>
      <br />

      <h3>Date: {day} {props.favorDetail.date.getDate()}/{props.favorDetail.date.getMonth()}</h3>
      <br />

      <h3>Starting Time: {props.favorDetail.timeStart}</h3>
      <br />

      <h3>Duration Time: {props.favorDetailtimeDuration}</h3>
      <br />

      <h3>Description: {props.favorDetail.description}</h3>
      <br />

      <h3>Adress:{props.favorDetail.address}</h3> 
      <br />

      <h3>Zip code:{props.favorDetail.zipcode}</h3> 

      
      {(props.favorDetail.createrUser._id == props.currentUserId) ? (
        <a className="" href={`/favoredit/${props.favorDetail._id}`}>
          <img className="navbar-icon" src="./../images/icon-logo.png" />
          <p className="navbar-title">Edit Favor</p>
        </a>
      ) : (
        props.favorDetail.status == "Favor Created" && (
        <form id="" action={`/favordo/${props.favorDetail._id}`} method="POST">
          <button type="submit">DO Favor</button>
        </form>)
        )}
      
      {props.favorDetail.status == "Favor Accepted" && (
        <form id="" action={`/favorcancel/${props.favorDetail._id}`} method="POST">
        <button type="submit">Cancel Favor</button>
      </form>)}

    </Layout>
  );
}

module.exports = FavorDetail;



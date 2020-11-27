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
      <section>
      <h2>FAVOR DETAIL</h2>
      <br/>
      <h3>Title: 
        <h3 style={{fontWeight: "bold"}}> {props.favorDetail.title}</h3> 
        </h3>
      <br />
      <h3>Asker: 
        <h3 style={{fontWeight: "bold"}}> {props.favorDetail.createrUser.name}</h3> 
        </h3>
      <br />


      <h3>Starting Time: 
        <h3 style={{fontWeight: "bold"}}>{props.favorDetail.timeStart}</h3>
        </h3>
      <br />

      <h3>Duration Time: 
        <h3 style={{fontWeight: "bold"}}>{props.favorDetail.timeDuration}</h3>
        </h3>
      <br />

      <h3>Description: 
        <h3 style={{fontWeight: "bold"}}>{props.favorDetail.description}</h3>
        </h3>
      <br />

      <h3>Adress:
      <h3 style={{fontWeight: "bold"}}>{props.favorDetail.adress}</h3>
      </h3>
      <br />

      <h3>Date: 
        <h3 style={{fontWeight: "bold"}}>{day} {props.favorDetail.date.getDate()}/{props.favorDetail.date.getMonth()}</h3>
      </h3>
      <br />
      {(props.favorDetail.createrUser._id == props.currentUserId) ? (
        <a className="" href={`/favoredit/${props.favorDetail._id}`}>
          <button type="button">Edit Favor</button>
        </a>
      ) : (
        props.favorDetail.status == "Favor Created" && (
        <form id="" action={`/favordo/${props.favorDetail._id}`} method="POST">
          <button type="submit">Do Favor</button>
        </form>)
        )}
      
      {props.favorDetail.status == "Favor Accepted" && (
        <form id="" action={`/favorcancel/${props.favorDetail._id}`} method="POST">
        <button type="submit">Cancel Favor</button>
      </form>)}
      </section>

    </Layout>
  );
}

module.exports = FavorDetail;



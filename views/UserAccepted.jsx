const React = require("react");
const Layout = require("./Layout");

function UserAccepted(props) {
  
  let day = "";
  const getDayFavor = (x) => {
    switch (x) {
      case 0: day = "Sun"; break;
      case 1: day = "Mon"; break;
      case 2: day = "Tue"; break;
      case 3: day = "Wed"; break;
      case 4: day = "Thu"; break;
      case 5: day = "Fri"; break;
      case 6: day = "Sat"; break;
    }
  };

  return (
    <Layout title="UserAccepted Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic} location={props.location}>
      <h1>Profile page</h1>
      <br /> <br />
      <img className="user-image" src={`${props.user.profilepic}`} />
      <a className="" href={"/user/edit"}>
        <img className="settings-icon" src="./../icons/setting.png" />
      </a>
      <br/>
      <br/>
      <h1>{props.user.name}</h1>
      <br />
      <h1>Age: {props.user.age}</h1>
      <br />
      <h1>{props.user.email}</h1>
      <br />
     
      <br />
      <br/>
      <div className="aline">
        <a href={"/user"}>
          <h3 className="button-unclicked">FAVORS CREATED</h3>
        </a>
        <h3 className="button-clicked">FAVORS ACCEPTED</h3>
        {/* <button type="button">PENDING</button> */}
      </div>
      {props.user.favorsProvided.map((favorAccepted, i) => {
        return (
          <a href={`/favor/${favorAccepted.id}`}>
            <h2>
              {favorAccepted.title.toUpperCase()} - Date:{" "}
              {getDayFavor(favorAccepted.date.getDay())}{" "}
              {favorAccepted.date.getDate()}/{favorAccepted.date.getMonth()}
            </h2>
            <br />
            <favorCard key={i} />
          </a>
        );
      })}
    </Layout>
  );
}

module.exports = UserAccepted;

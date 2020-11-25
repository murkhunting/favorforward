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
      <br/>
      <br/>

      <h1>{props.user.name}</h1>
      <br />
      <h2>Age: {props.user.age}</h2>
      <br />
      <h2>{props.user.email}</h2>
      <br />
      <a className="navbar-icontitle" href="/auth/logout">
        <img className="navbar-icon" src="./../icons/logout.png" />
      </a>
      <a className="" href={"/user/edit"}>
        <img className="navbar-icon" src="./../icons/setting.png" />
      </a>
      <br />
      <br/>
      <h3>Favors:</h3>
      <br />
      
      <a className="button-unclicked" href={"/user"}><button type="button">CREATED</button></a>
      {/* <button type="button">PENDING</button> */}
      <button className="button-clicked" type="button">ACCEPTED</button>
      <br />
      <br />
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

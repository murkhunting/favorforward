const React = require("react");
const Layout = require("./Layout");

function UserDashboard(props) {
  
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
    <Layout title="UserDashboard Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic} location={props.location}>
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
      
      <button className= "button-clicked" type="button">CREATED</button>
      {/* <button type="button">PENDING</button> */}
      <a className="button-unclicked" href={"/user/accepted"}><button type="button">ACCEPTED</button></a>
      <br />
      <br />
      {props.user.favorsCreated.map((favorCreated, i) => {
        return (
          <a href={`/favor/${favorCreated.id}`}>
            <h2>
              {favorCreated.title.toUpperCase()} - Date:{" "}
              {getDayFavor(favorCreated.date.getDay())}{" "}
              {favorCreated.date.getDate()}/{favorCreated.date.getMonth()}
            </h2>
            <br />
            <favorCard key={i} />
          </a>
        );
      })}
      <br />
      <br />
      
    </Layout>
  );
}

module.exports = UserDashboard;

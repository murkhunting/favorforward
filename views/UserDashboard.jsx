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
    <Layout title="UserDashboard Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.user.profilepic} location={props.location}>
      <section >
        <h1>{props.user.name}</h1>
        <br />
        <img className="user-image" src={`${props.user.profilepic}`} />
        <a className="" href={"/user/edit"}>
          <img className="settings-icon" src="./../icons/setting.png" />
        </a>
        <br/>
        <br/>
        <h1>Age: {props.user.age}</h1>
        <br />
        <h1>{props.user.email}</h1>
      </section>
      <br />
      <br/>
      <section>
        <div className="aline">
          <h3 className="button-clicked">FAVORS CREATED</h3>
          {/* <button type="button">PENDING</button> */}
          <a href={"/user/accepted"}>
            <h3 className="button-unclicked">FAVORS ACCEPTED</h3>
          </a>
        </div>
        
        {props.user.favorsCreated.map((favorCreated, i) => {
          return (
            <a href={`/favor/${favorCreated.id}`}>
              <h2>
                {favorCreated.title.toUpperCase()} - {" "}
                {getDayFavor(favorCreated.date.getDay())}{" "}
                {favorCreated.date.getDate()}/{favorCreated.date.getMonth()}
              </h2>            
              <favorCard key={i} />
            </a>
          );
        })}
      </section>
      <br/>
      <br/>
      <br/>
      <br/>      
    </Layout>
  );
}

module.exports = UserDashboard;

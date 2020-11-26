const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

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

function FavorSearch(props) {
  return (
    <Layout title="Search" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic} location={props.location}>
      
            <form className="search-container">
                    <input className="search-bar" type="text" placeholder="Search.."/>
                    <img className="search-icon" src="./../icons/search.png" />
            </form>
        <br/>
        <section>
            { props.favorList.map( (eachFavor, i)=> {
                return (
                <a href={`/favor/${eachFavor.id}`}>
                    <h2>{eachFavor.title.toUpperCase()} - {" "}
                    {getDayFavor(eachFavor.date.getDay())}{" "}
                    {eachFavor.date.getDate()}/{eachFavor.date.getMonth()}
                    </h2>
                    <favorCard key={i} />
                </a>
                )
            })
            }
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
    </Layout>
  );
}

module.exports = FavorSearch;




const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Home(props) {
  return (
    <Layout title="Home Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name}>
      <h1>Home Page</h1>
      {/* <Card text="smaller component example" image="https://i.imgur.com/OH7dtc0.png" /> */}
      {/* <Card text="second example of component use" image="https://i.imgur.com/dHdzhWn.png" /> */}

      { props.favorList.map( (eachFavor, i)=> {
          return (
            <a href={`/favor/${eachFavor.id}`}>
            <h2>{eachFavor.title}</h2>
            <favorCard i={i} />
            </a>
          )
        })
      }

      {/* {props.beersFromApi.map( (beerObj, i) => {
          return (
            <a href={`/beers/${beerObj.id}`}>
            <BeerCard i={i} beerObj={beerObj} details={false}/>
            </a>
                
            );
          })
        } */}

    </Layout>
  );
}

module.exports = Home;

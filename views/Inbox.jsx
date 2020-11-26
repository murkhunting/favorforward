const React = require("react");
const Layout = require("./Layout");

function Inbox(props){
    return(
        <Layout title="UserDashboard Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic} location={props.location}>
            <h1>INBOX</h1>


        </Layout>
   
        
    );
}


module.exports = Inbox;

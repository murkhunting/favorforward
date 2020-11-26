const React = require("react");
function Layout(props) {
  // pass on props isUserLoggedIn, name
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="stylesheet" href="./../stylesheets/style.css" />
      </head>
      <body>
        <header>
          {/* top navbar */}
          <navtop  className="navbar-top">
            <div id="btn-back">
              <a className="navbar-icontitle" href=""  >
                <img className="navbar-icon" src="./../icons/back.png" />
              </a>
            </div>
            {/* <div id="logo">
              <a className="navbar-icontitle" href="/">
                <img id="iclogo" src="./../icons/logo+nombre.png" />
              </a>
            </div> */}
            <div id="logo">
              <a className="navbar-icontitle" href="/info">
                <img  className="navbar-icon" src="./../icons/info.png" />
              </a>
            </div>    
          </navtop>
          {/* END top navbar */}

          {/* bootom navbar */}
          <nav className="navbar-bottom">
            <div className="" id="nav">
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <div className="navbar-texticon">
                    <a className="navbar-icontitle" href="/">
                        {(props.location == "map") ? (
                        <img className="navbar-icon-clicked" src="./../../icons/map.png"/>
                        ) :(
                        <img className="navbar-icon" src="./../../icons/map.png"/>
                        )}
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="navbar-texticon">
                      <a className="navbar-icontitle" href="/">
                      {(props.location == "search") ? (
                        <img className="navbar-icon-clicked" src="./../icons/search.png" />
                        ) :(
                          <img className="navbar-icon" src="./../icons/search.png" />
                        )}   
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="navbar-texticon">
                      <a className="navbar-icontitle" href="/favor/create">
                      {(props.location == "add") ? (
                          <img className="navbar-icon-clicked" src="./../icons/add.png" />
                        ) :(
                          <img className="navbar-icon" src="./../icons/add.png" />
                        )}
                      
                        
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="navbar-texticon">
                    <a className="navbar-icontitle" href="/user/inbox">
                      {(props.location == "chat") ? (
                          <img className="navbar-icon-clicked" src="./../icons/chat.png"  />
                        ) :(
                          <img className="navbar-icon" src="./../icons/chat.png"  />
                        )}
                      
                        
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="navbar-texticon">
                    {props.userIsLoggedIn ? (
                      <a className="navbar-icontitle" href="/user">
                        {(props.location == "created") ? (
                          <img className="profile-icon-clicked" src= {`${props.profilepic}`} />
                        ) :(
                          <img className="profile-icon" src= {`${props.profilepic}`} />
                        )}
                        
                        
                      </a>
                    ) : (
                      <a className="navbar-icontitle" href="/auth/login">
                        {(props.location == "login") ? (
                          <img className="navbar-icon-clicked" src="./../icons/user.png" />
                        ) :(
                          <img className="navbar-icon" src="./../icons/user.png" />
                        )}
                        
                        
                      </a>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/* END bottom navbar */}
        </header>
        {props.children}
       
        
      </body>
    </html>
  );
}
module.exports = Layout;

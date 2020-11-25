const React = require("react");
function Layout(props) {
  // pass on props isUserLoggedIn, name
  const goBack = () => window.history.back();
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
              <a className="navbar-icontitle" onClick={goBack} >
                <img className="navbar-icon btnback" src="./../images/icon-back.png" />
              </a>
            </div>
            
            { props.userIsLoggedIn 
              ? <>
                  <div>
                    <p className="logoutxt navbar-title">{props.name}, you're logged in </p>
                  </div>
                  {/* <div>
                    <a  href="/auth/logout">
                      <p className="logoutxt navbar-title">Log out</p>
                    </a>
                  </div> */}
                  <div id="logo">
                    <a className="navbar-icontitle" href="/">
                      <img id="iclogo" className="navbar-icon" src="./../icons/logo.png" />
                    </a>
                  </div>
                </>
              : <>
                  <div id="logo">
                    <a className="navbar-icontitle" href="/">
                      <img id="iclogo" className="navbar-icon" src="./../icons/logo.png" />
                    </a>
                  </div>
                </>
            }
          </navtop>
          {/* END top navbar */}

          {/* bootom navbar */}
          <nav className="navbar-bottom">
            <div className="" id="nav">
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <div className="navbar-texticon">
                    <a className="navbar-icontitle" href="/">
                        <img className="navbar-icon" src="./../../icons/map.png"/>
                    
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="navbar-texticon">
                      <a className="navbar-icontitle" href="">
                      <img className="navbar-icon" src="./../icons/search.png" />
                        
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="navbar-texticon">
                      <a className="navbar-icontitle" href="/favor/create">
                      <img className="navbar-icon" src="./../icons/add.png" />
                        
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="navbar-texticon">
                      <a className="navbar-icontitle" href="">
                      <img className="navbar-icon" src="./../icons/chat.png"  />
                        
                    </a>
                  </div>
                </li>

                {/* <li className="nav-item">
                  <div className="navbar-texticon">
                      <a className="navbar-icontitle" href="/info">
                      <img className="navbar-icon" src="./../images/icon-info.png"/>
                      <p className="navbar-title">Info</p>
                    </a>
                  </div>
                </li> */}

              

                <li className="nav-item">
                  <div className="navbar-texticon">
                    {props.userIsLoggedIn ? (
                      <a className="navbar-icontitle" href="/user">
                        <img className="profile-icon" src= {`${props.profilepic}`} />
                        
                      </a>
                    ) : (
                      <a className="navbar-icontitle" href="/auth/login">
                        <img className="navbar-icon" src="./../icons/user.png" />
                        
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

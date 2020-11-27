const React = require("react");
const Layout = require("./Layout");

function Info(props) {
  return (
     <Layout title="Info Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic}>
        <section>
        <h2>FAVOR FORWARD INFO</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis libero potenti accumsan quisque tortor nisi, dignissim eros rhoncus ultrices cubilia morbi tempus posuere facilisis mus tristique neque non. Nostra ligula posuere interdum ornare molestie sodales, maecenas nisi fringilla parturient nec ridiculus sapien, pharetra vitae vel inceptos mollis. Massa consequat nec nullam leo sem convallis parturient litora vestibulum justo vitae augue id nam porta magnis hac, nisi purus condimentum taciti dis aliquet molestie ridiculus sociis sagittis felis suspendisse nulla est imperdiet.

            Nam natoque inceptos nec ut quis cursus, praesent taciti condimentum donec ridiculus, gravida tristique fusce pellentesque fringilla. Ullamcorper posuere integer viverra euismod nascetur congue pharetra etiam at porttitor erat tempor mollis mattis, penatibus sapien bibendum montes morbi curae a sollicitudin proin habitant ultricies maecenas laoreet. Proin accumsan cubilia libero quis scelerisque nec aenean, dui iaculis praesent torquent senectus nisi ad parturient, pharetra faucibus magnis a montes varius.
            </p>
        </section>
            
    </Layout>
  
  );
}

module.exports = Info;

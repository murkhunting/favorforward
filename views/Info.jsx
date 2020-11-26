const React = require("react");
const Layout = require("./Layout");

function Info() {
  return (
     <Layout title="Info Page">
          <h1>Info Page</h1>
            

          {/* <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
      <script async defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
      <script async defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="/javascripts/mapbox.js"></script> */}
          
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
      <link href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css" rel="stylesheet" />
      {/* <style>
          // esto se fue a stylesheet como .marker
      </style> */}
      <main className="v-service-map-location">
          <section className="subHeader">
              {/* <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="subHeader_content">
                              <a id="backLink" href="/"><span className="icon-back_arrow"></span></a>
                              <button id="backSplide"className="d-none"><span className="icon-back_arrow"></span></button>
                              <h1>¿Dónde te encuentras?</h1>
                          </div>
                      </div>
                  </div>
              </div> */}
          </section>
          <div className="carerList-block">
              {/* <p>Cuidadores disponibles (<span id="availableCarersCount"></span>)</p>
              <section className="box-main box-main--carerList">
                  <div id="availableCarersList" className="carerCards">
                      
                  </div>
              </section> */}
          </div>
          {/* ESTE ES EL MAPA */}
          <div id="map"></div>
          <section className="box-main">
              <div id="geocoder" className="geocoder"></div>
              <button id="search-carers" className="btn btn-primary btn-lg" type="button">Buscar LetsDogs!</button>
          </section>
      </main>
      
      
      
      
      <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.min.js"></script>
      <link rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css"
          type="text/css" />
      <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
      <script src="./../javascripts/services/apiService.js"></script>
      <script src="./../javascripts/User.js"></script>
      <script src="./../javascripts/map.js"></script>
    
    </Layout>
  
  );
}

module.exports = Info;

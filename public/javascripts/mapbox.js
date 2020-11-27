"use strict";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY2xheXJpc3NlIiwiYSI6ImNraHZ1eHhxZDBpd2MzNG1vZnhxbTJtMm0ifQ.0bZtON09HNa8W04OP1yWJw";

const main = () => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  
  const map = new mapboxgl.Map({
    container: "map",
    center: [3.1585383, 41.3872853],
    style: "mapbox://styles/mapbox/dark-v10", //   /dark-v10   /light-v10     /streets-v11     /satellite-v9
    zoom: 13
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var pos = [position.coords.longitude, position.coords.latitude];
        map.setCenter(pos);
      },
      () => alert("Issue retrieving your location")
    );
  } else {
    alert(" Your browser doesn't support Geolocation");
  }

  axios
    .get("http://localhost:3000/api/favors")
    // .get("https://favorforward.herokuapp.com/api/favors")
    .then((result) => {
      result.data.forEach((favor) => {
        new mapboxgl.Marker() 
        .setPopup(new mapboxgl.Popup().setHTML(`<a class="maplink" href="http://localhost:3000/favor/${favor._id}">${favor.title}</a>`))
        // .setPopup(new mapboxgl.Popup().setHTML(`<a class="maplink" href="https://favorforward.herokuapp.com/favor/${favor._id}">${favor.title}</a>`))
        .setLngLat(favor.location.coordinates.reverse())
        .addTo(map);
          
      });
    })
    .catch((err) => console.error(err));
};

window.addEventListener("load", main);






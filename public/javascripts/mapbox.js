"use strict";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY2xheXJpc3NlIiwiYSI6ImNraHZ1eHhxZDBpd2MzNG1vZnhxbTJtMm0ifQ.0bZtON09HNa8W04OP1yWJw";

const main = () => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  
  const map = new mapboxgl.Map({
    container: "map",
    center: [2.1585383, 41.3872853],
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
    .then((result) => {
      result.data.forEach((favor) => {
        new mapboxgl.Marker()

        // console.log("The favor map for Each is---------->", favor)  
        .setPopup(new mapboxgl.Popup().setHTML(`<a>${favor.title}</a>`))
        .setLngLat(favor.location.coordinates.reverse())
          // .setLngLat(favor.location.coordinates)
        .addTo(map);
          
      });
    })
    .catch((err) => console.error(err));
};

window.addEventListener("load", main);






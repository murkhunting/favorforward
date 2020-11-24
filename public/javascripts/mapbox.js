"use strict";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY2xheXJpc3NlIiwiYSI6ImNraHZ1eHhxZDBpd2MzNG1vZnhxbTJtMm0ifQ.0bZtON09HNa8W04OP1yWJw";

const main = () => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

  const map = new mapboxgl.Map({
    container: "map",
    center: [2.0787281, 41.3948976],
    zoom: 12,
    style: "mapbox://styles/mapbox/light-v10", //   /dark-v10   /light-v10     /streets-v11     /satellite-v9
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
          .setLngLat(favor.location.coordinates.reverse())
          .setPopup(new mapboxgl.Popup().setHTML("<h1>Put down favor title</h1>"))
        //   .setLngLat(favor.location.coordinates)
          .addTo(map);
      });
    })
    .catch((err) => console.error(err));
};

window.addEventListener("load", main);






// from ale----------------------------------------------

window.onload = () => {
    let retrievedObject = localStorage.getItem("contract");
    let retrievedog = localStorage.getItem("dog");
    let contract = JSON.parse(retrievedObject);
    let dog = JSON.parse(retrievedog);
    const coordinates = contract.geometry
    console.log(contract.carerId)
    mapboxgl.accessToken = 'pk.eyJ1IjoicHVpZ21hciIsImEiOiJja2Q1cTRjMHoyOWc1MzBwZzUxNnBqZjgzIn0.Dl_LIKPYzM72_QZAE0wZWQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: contract.geometry,
        zoom: 12
    });
    function getPointData(lngLat) {
        return {
            'type': 'Point',
            'coordinates': [lngLat.coords.longitude, lngLat.coords.latitude]
        };
    }
    //    var socket = io('');
    map.on('load', function () {
        var startPos;
        var latitude;
        var longitude;
        var coordsClick;
        var el = document.createElement("div");
        el.className = "markerMeetingPoint";
        var elUser = document.createElement("div");
        elUser.className = "markerUser";
        var elCarer = document.createElement("div");
        elCarer.className = "markerCarer";
        var meetingPointCoords = contract.geometry;
        document.querySelector('.avatar.dog').style.backgroundImage = `url('${dog.profilePhoto}')`;
        // Codigo del marker
        new mapboxgl.Marker(el)
            .setLngLat(meetingPointCoords)
            .addTo(map);
    })

}


navigator.geolocation.watchPosition(
    function (position) {
        socket.on("carersOnlineData", carerData => {
            console.log('data from socket.io: ', carerData)
            map.getSource('point_source').setData({
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": carerData[0].geometry.coordinates
                    }
                }]
            });
            console.log(carerData[0].geometry.coordinates[0])
            map.flyTo({
                center: [
                    carerData[0].geometry.coordinates[0],
                    carerData[0].geometry.coordinates[1]
                ],
                speed: 0.5
            });
            //const user = JSON.parse(session.getItem('uUID'));
            //socket.emit("onlineUser", {userId: user, latitude: position.coords.latitude, longitude: position.coords.longitude});
        });
    }
);





//map.js

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: false,
    mapboxgl: mapboxgl,
  });
  console.log("QUI------>", geocoder);
  
  document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
  
  geocoder.on("result", (e) => {
    var meetingPoint = e;
    updateContractMeetingPoint(meetingPoint);
    const userLocArr = generateCarersList(meetingPoint);
  
    var el = document.createElement("div");
    el.className = "marker";
  
    var customMarkerCoord = e.result.geometry.coordinates;
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(customMarkerCoord).addTo(map);
  
    document.getElementById("search-carers").addEventListener("click", () => {
      apiService
        .sendUserLocation(userLocArr)
        .then(async (res) => {
  
          await generateDOMCarersList(res.data, "availableCarersList");
          document
            .querySelector(".v-service-map-location")
            .classList.add("toCarerList");
        })
        .catch((err) => console.log(err));
    });
  });
  
  function getPointData(lngLat) {
    return {
      type: "Point",
      coordinates: [lngLat.coords.longitude, lngLat.coords.latitude],
    };
  }




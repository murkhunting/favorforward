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
















//----------map.js





const session = "{{currentUserInfo.userData._id}}";

// const theUser = new User('{{currentUserInfo.user._id}}');
// theUser.sendEmitCoords('user-online');
// theUser.sendEmitWatchPosition('user-online-moving');

const updateContractMeetingPoint = (meetingPoint) => {
  let retrievedObject = localStorage.getItem("contract");
  let contract = JSON.parse(retrievedObject);
  console.log(meetingPoint);
  contract = {
    ...contract,
    meeting_point: meetingPoint.result.place_name,
    geometry: meetingPoint.result.geometry.coordinates,
  };
  console.log(contract);
  localStorage.setItem("contract", JSON.stringify(contract));
};

const generateCarersList = (meetingPoint) => {
  const userLocation = meetingPoint.result.geometry.coordinates;
  console.log(userLocation);
  return userLocation;
};

mapboxgl.accessToken =
  "pk.eyJ1IjoicHVpZ21hciIsImEiOiJja2Q1cTRjMHoyOWc1MzBwZzUxNnBqZjgzIn0.Dl_LIKPYzM72_QZAE0wZWQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [2.15899, 41.38879],
  zoom: 12,
});

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })
);

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

//var socket = io("");

map.on("load", function () {
  var startPos;
  var latitude;
  var longitude;
  var coordsClick;

  document
    .querySelector(".mapboxgl-ctrl-geocoder--input")
    .addEventListener("click", (e) => {
      const inputBtn = e.currentTarget.parentNode;
      inputBtn.querySelector(".suggestions-wrapper").classList.add("show");
    });

  navigator.geolocation.getCurrentPosition(
    function (position) {
      startPos = position;
      coordsClick = getPointData(startPos);

      map.addSource("point_source", {
        type: "geojson",
        data: coordsClick,
      });

      socket.emit("onlineUser", {
        userId: `{{currentUserInfo.user._id}}`,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      socket.on("user:join", (m) => console.log("Exist a new user: ", m));

    },
    function (error) {
      alert("Error occurred. Error code: " + error.code);
    }
  );

  navigator.geolocation.watchPosition(function (position) {
    socket.on("showOnlineUsers", (data) => {
      console.log("data from socket.io: ", data);

      map.getSource("point_source").setData({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [data.longitude, data.latitude],
            },
          },
        ],
      });

      map.flyTo({
        center: [data.longitude, data.latitude],
        speed: 0.5,
      });

      socket.emit("onlineUser", {
        userId: `{{currentUserInfo.user._id}}`,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  });
});

// socket.on("user:left", (data) =>
//   console.log("usario ha dejado la sesion: ", data)
// );

// const generateDOMCarersList = (arr, wrapper) => {
  
//   const carer = arr.result;
//   //console.log(carer)
  
//   const parent = document.getElementById(wrapper);
//   //let carerBlock = document.createElement("div");
//   //carerBlock.className = "carerCard";
//   //carerBlock.setAttribute("href", `/carer-profile`);
//   let counter = "";
//   let maxWords = 10;

//   carer.forEach((carers, i) => {
//     console.log(carers.reviews);
//     let review = 'Sin reseñas';
//     if(carers.numReviews > 0){
//       review = carers.reviews['0'].description
//     }
//     if(review.lenght > maxWords){
//       review = review.splice(0, maxWords) + '...';
//     }
//     counter += `
//     <a class="carerCard" href="/carer-profile/${carers.carers['0'].userId}">
//       <div class="carerCard_details">
//         <div class="carerCard_bubleTime">
//             <div class="carerCard_buble">
//                 <span class="icon-countDownClok"></span>
//             </div>
//             <span class="carerCard_bubleTime_timeTo">en ${carers.duration}'</span>
//         </div>
//         <div class="carerCard_Intro">
//             <div class="carerCard_Intro_content">
//                 <div class="carerCard_Intro_detail">
//                     <h3 class="carerCard_Intro_name">${carers.carers['0'].name}</h3>
//                     <p class="carerCard_Intro_lastReview">${review}</p>
//                 </div>
//                 <div class="carerCard_Intro_avatar">
//                     <div class="avatar" style="background-image: url(${carers.carers['0'].profilePhoto})"></div>
//                 </div>
//             </div>
//             <div class="carerCard_feedback">
//                 <div class="carerCard_feedback_averageBones">
//                     <span class="icon-bone"></span><span class="icon-bone"></span><span class="icon-bone"></span><span class="icon-bone"></span><span class="icon-bone"></span>
//                 </div>
//                 <div class="carerCard_feedback_nums">
//                     <div class="carerCard_feedback_averageScore">${carers.carers['0'].rate}</div>
//                     <div class="carerCard_feedback_numReviews">${carers.numReviews} reseñas</div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </a>
//     `;

//   });

  
//   parent.innerHTML = counter ;
//   document.getElementById('availableCarersCount').innerHTML = carer.length
// };
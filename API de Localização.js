<script src="https://maps.googleapis.com/maps/api/js?key=API_KEY"></script>

// create Google map
function GoogleMap(position) {
  var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
}

// create Google map
function GoogleMap(position) {
  var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    map: map,
    position: location,
    animation: google.maps.Animation.DROP,
    title: "Essa é a sua localização"
  });

  map.setCenter(location);
}

// show error if location can't be found
function showError() {
  alert("A localização não pode ser encontrada");
}

// execute geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(GoogleMap, showError);
  } else {
  alert("Your browser does not support Geolocation.");
}

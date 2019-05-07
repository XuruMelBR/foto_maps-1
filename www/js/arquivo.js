// This is a JavaScript file
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}

$(document).on('click', '#camera', function(){
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
  destinationType: Camera.DestinationType.FILE_URI });

  function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;

    $('#map').css({opacity:"1", height: "300px"});

    function mapa(position){

          $('input[id=latitude]').val(position.coords.latitude);
          $('input[id=longitude]').val(position.coords.longitude);

          L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

          var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
          });

          L.marker([position.coords.latitude, position.coords.longitude], {
              icon: L.mapquest.icons.marker(),
              draggable: false
            }).bindPopup('Denver, CO').addTo(map);

            L.circle([position.coords.latitude, position.coords.longitude], { radius: 100 }).addTo(map);

          map.addControl(L.mapquest.control());
        };
        navigator.geolocation.getCurrentPosition(mapa);


  }

  function onFail(message) {
    alert('Failed because: ' + message);
  }
});

$(document).on('click', '#limpar', function(){
  var image = document.getElementById('myImage');
  image.src = ('imagens/cam.gif');
  $('input[id=latitude]').val("");
  $('input[id=longitude]').val("");
  $('#map').css({opacity:"0", height: "0px"});
});
// This is a JavaScript file

$(document).ready(function(){
  // Configurando o plugin de câmera
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    console.log(navigator.camera);
  }
  // Configurando plugin Barcode
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    console.log("navigator.geolocation works well");
  }

  function TirarFoto(){
    navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URL 
      });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64" + imageData;
    }

    function onFail(message) {
        alert('Falhou porque: ' + message);
    }
  }

  function alertar(){
    $('#map').append('<label>Funfou<label>');
  }

  $('#tirarFoto').click(alertar);
});
$(document).ready(function () {
    // funcion para mostrar el nombre de los datos puntuales
 function onEachFeatureproyectos(feature, layer) {
      //layer.bindPopup("NOMBRE: " +feature.properties.nombre+'<br>'+"Responsable: " +feature.properties.presidente+'<br>'+"TELEFONO: " +feature.properties.telefono +'<br>' +"PAGINA: " +'<a target=\"_blank\" href=\"'+feature.properties.pagina+'\">Link</a>');
      var popup = "NOMBRE: " +feature.properties.nombre+'<br>'+"Responsables: " +feature.properties.responsabl+'<br>'+"Descripcion: " +feature.properties.descripcio+'<br>'+"mail: " +feature.properties.mail;
      var customOptions =
      {
        'maxWidth': '100px',
        'width': '50px',
        'className' : 'poppy'
      }
      layer.bindPopup(popup,customOptions);

  }

  function icono_proyecto(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/0-k.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var cargado1 = false;
  var cargado2 = false;
  var cargado3 = false;
  var cargado4 = false;
  var cargado5 = false;
  var cargado6 = false;

  /////////////////////unsam///////////////////////////////

  $(".proyecto1").click(function () {
    if ( ! cargado1 ) {
        function icono_unsam(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/1-k.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerbiblioteca =  L.geoJson(proyectos, {
    onEachFeature: onEachFeatureproyectos,
  pointToLayer: icono_unsam,
  filter: function(feature, layer) {
    return (feature.properties.org=="PR") ? true:false;
    }
  }).addTo(markers);
        cargado1 = true;
    }
});
//////////////////////////////////////////////////////////////
})

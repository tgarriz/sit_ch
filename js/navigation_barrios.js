$(document).ready(function () {
    // funcion para mostrar el nombre de los datos puntuales

 function onEachFeaturebarrio(feature, layer) {
        //layer.bindPopup("Nombre: " +feature.properties.name);
        layer.bindTooltip(feature.properties.nombre,{ noHide: true, direction: 'auto' });
  }
function onEachFeatureMuni(feature, layer) {
  var popup = "Nombre: " +feature.properties.nombre;
  var customOptions =
  {
    'maxWidth': '100px',
    'width': '50px',
    'className' : 'poppy'
  }
  layer.bindPopup(popup,customOptions);
 }

  var cargado1 = false;
  var cargado2 = false;
  var cargado3 = false;

  /////////////////////Barrios///////////////////////////////

  $(".muni1").click(function () {
    if ( ! cargado1 ) {
        var layerbarrios =  L.geoJson(barrios, {
          style: function (feature) {
            return { "color": feature.properties.color,
                     "opacity": 0.65
                   };
        },
          onEachFeature: onEachFeaturebarrio,
        }).addTo(markers);
        cargado1 = true;
    }
});
/////////////////////////////////////////////////////////////
/////////////////////Dependencias////////////////////////////

  $(".muni2").click(function () {
    if ( ! cargado2 ) {
        var layersedes =  L.geoJson(sedes_muni, {
          style: function (feature) {
            return { "color": feature.properties.color,
                     "opacity": 0.65
                   };
        },
          onEachFeature: onEachFeatureMuni,
        }).addTo(markers);
        cargado2 = true;
    }
});
/////////////////////////////////////////////////////////////
/////////////////////Edificios///////////////////////////////

  $(".muni3").click(function () {
    if ( ! cargado3 ) {
        var layeredif =  L.geoJson(edif_muni, {
          style: function (feature) {
            return { "color": feature.properties.color,
                     "opacity": 0.65
                   };
        },
          onEachFeature: onEachFeatureMuni,
        }).addTo(map);
        cargado3 = true;
    }
});
/////////////////////////////////////////////////////////////


})

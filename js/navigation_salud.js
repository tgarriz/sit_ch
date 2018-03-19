$(document).ready(function () {
    // funcion para mostrar el nombre de los datos puntuales
 function onEachFeaturesalud(feature, layer) {
        var popup ='';
        if (feature.properties.nombre) {popup+=feature.properties.nombre+'<br>'};
        if (feature.properties.direccion) {popup+=feature.properties.direccion+'<br>'};
        if (feature.properties.telefono) {popup+=+feature.properties.telefono};
        var customOptions =
      {
        'maxWidth': '100px',
        'width': '50px',
        'className' : 'poppy'
      }
      layer.bindPopup(popup,customOptions);
  }

///////////Farmacias //////////////////////////////////////
  function icono_farmacias(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/1-r.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var cargado1 = false;
  var cargado2 = false;
  var cargado3 = false;
  var cargado4 = false;
  var cargado5 = false;

  /////////////////////Farmacias///////////////////////////////

  $(".salud1").click(function () {
    if ( ! cargado1 ) {
        function icono_farmacias(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/1-r.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerfarmacias =  L.geoJson(salud, {
    onEachFeature: onEachFeaturesalud,
  pointToLayer: icono_farmacias,
  filter: function(feature, layer) {
    return (feature.properties.org=="FA") ? true:false;
    }
  }).addTo(markers);
        cargado1 = true;
    }
});
//////////////////////////////////////////////////////////////
//////////////////////Centr. de Atencion Primarria////////////

    $(".salud2").click(function () {
        if ( ! cargado2 ) {
            function icono_CAP(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/2-r.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerCAP =  L.geoJson(salud, {
    onEachFeature: onEachFeaturesalud,
  pointToLayer: icono_CAP,
  filter: function(feature, layer) {
    return (feature.properties.org=="CP") ? true:false;
    }
  }).addTo(markers);
            cargado2 = true;
        }
  });
///////////////////////////////////////////////////
//////////////Hogar de Ancianos////////////////////
    $(".salud3").click(function () {
        if ( ! cargado3 ) {
            function icono_hogarancianos(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/3-r.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerhogarancianos =  L.geoJson(salud, {
    onEachFeature: onEachFeaturesalud,
  pointToLayer: icono_hogarancianos,
  filter: function(feature, layer) {
    return (feature.properties.org=="HA") ? true:false;
    }
  }).addTo(markers);
        cargado3 = true;
    }
 });
/////////////////////////////////////////////////////
/////////Hosp. Municipal////////////////////////////
	$(".salud4").click(function () {
        if ( ! cargado4 ) {
           function icono_hospital(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/4-r.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerhospital =  L.geoJson(salud, {
    onEachFeature: onEachFeaturesalud,
  pointToLayer: icono_hospital,
  filter: function(feature, layer) {
    return (feature.properties.org=="HM") ? true:false;
    }
  }).addTo(markers);
        cargado4 = true;
    }
  });
///////////////////////////////////////////////////
//////////Clinica Privada//////////////////////////
 $(".salud5").click(function () {
    if ( ! cargado5 ) {
       function icono_clinica(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/5-r.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerclinica =  L.geoJson(salud, {
    onEachFeature: onEachFeaturesalud,
  pointToLayer: icono_clinica,
  filter: function(feature, layer) {
    return (feature.properties.org=="CI") ? true:false;
    }
  }).addTo(markers);
        cargado5 = true;
    }
  });
///////////////////////////////////////////////////
})

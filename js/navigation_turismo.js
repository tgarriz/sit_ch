$(document).ready(function () {
    // funcion para mostrar el nombre de los datos puntuales
 function onEachFeatureturismo(feature, layer) {
        //layer.bindPopup(feature.properties.nombre+'<br>'+feature.properties.descripcion+'<br>'+feature.properties.telefono +'<br>' +'<a target=\"_blank\" href=\"'+feature.properties.pagina+'\">Link</a>');
        popup = '';
        if ( feature.properties.nombre ) {popup = popup + feature.properties.nombre +'<br>'};
        if ( feature.properties.descripcio ) {popup = popup + feature.properties.descripcio +'<br>'};
        if ( feature.properties.tel ) {popup = popup + feature.properties.tel +'<br>'};
        if ( feature.properties.mail ) {popup = popup + feature.properties.mail +'<br>'};
        if ( feature.properties.web ) {popup = popup + '<a target=\"_blank\" href=\"'+feature.properties.web+'\">Link</a>'};
        var customOptions =
      {
        'maxWidth': '100px',
        'width': '50px',
        'className' : 'poppy'
      }
      layer.bindPopup(popup,customOptions);
  }

  function icono_turismo(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/0-v.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var cargado1 = false;
  var cargado2 = false;
  var cargado3 = false;
  var cargado4 = false;
  var cargado5 = false;
  var cargado6 = false;

  /////////////////////transportes///////////////////////////////

  $(".turismo1").click(function () {
    if ( ! cargado1 ) {
        function icono_transporte(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/1-v.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layertransporte =  L.geoJson(turismo, {
    onEachFeature: onEachFeatureturismo,
  pointToLayer: icono_transporte,
  filter: function(feature, layer) {
    return (feature.properties.org=="TT") ? true:false;
    }
  }).addTo(markers);
        cargado1 = true;
    }
});
//////////////////////////////////////////////////////////////
//////////////////////Bares y Confiterias///////////////////////////////

    $(".turismo2").click(function () {
        if ( ! cargado2 ) {
            function icono_bares(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/2-v.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerbares =  L.geoJson(turismo, {
    onEachFeature: onEachFeatureturismo,
  pointToLayer: icono_bares,
  filter: function(feature, layer) {
    return (feature.properties.org=="BC") ? true:false;
    }
  }).addTo(markers);
            cargado2 = true;
        }
  });
///////////////////////////////////////////////////
//////////////Balenarios y paradores///////////////////////////
    $(".turismo3").click(function () {
        if ( ! cargado3 ) {
            function icono_balnearios(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/3-v.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerbalnearios =  L.geoJson(turismo, {
    onEachFeature: onEachFeatureturismo,
  pointToLayer: icono_balnearios,
  filter: function(feature, layer) {
    return (feature.properties.org=="BP") ? true:false;
    }
  }).addTo(markers);
        cargado3 = true;
    }
 });
/////////////////////////////////////////////////////
/////////Artesanias y articulos regionales///////////
	$(".turismo4").click(function () {
        if ( ! cargado4 ) {
            function icono_artesanias(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/4-v.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerartesanias =  L.geoJson(turismo, {
    onEachFeature: onEachFeatureturismo,
  pointToLayer: icono_artesanias,
  filter: function(feature, layer) {
    return (feature.properties.org=="AR") ? true:false;
    }
  }).addTo(markers);
        cargado4 = true;
    }
  });
///////////////////////////////////////////////////
//////////Cabañas Posadas y Apart Hoteles/////////
 $(".turismo5").click(function () {
    if ( ! cargado5 ) {
        function icono_cabana(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/5-v.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layercabana =  L.geoJson(turismo, {
    onEachFeature: onEachFeatureturismo,
  pointToLayer: icono_cabana,
  filter: function(feature, layer) {
    return (feature.properties.org=="CP") ? true:false;
    }
  }).addTo(markers);
        cargado5 = true;
    }
  });
///////////////////////////////////////////////////
//////////Hoteles Hosterias y Hospedajes///////////
 $(".turismo6").click(function () {
    if ( ! cargado6 ) {
        function icono_hoteles(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/6-v.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layerhoteles =  L.geoJson(turismo, {
    onEachFeature: onEachFeatureturismo,
  pointToLayer: icono_hoteles,
  filter: function(feature, layer) {
    return (feature.properties.org=="HH") ? true:false;
    }
  }).addTo(markers);
        cargado6 = true;
    }
 })
///////////////////////////////////////////////////
})

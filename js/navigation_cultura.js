$(document).ready(function () {
    // funcion para mostrar el nombre de los datos puntuales
 function onEachFeaturecultura(feature, layer) {
      //layer.bindPopup("NOMBRE: " +feature.properties.nombre+'<br>'+"Responsable: " +feature.properties.presidente+'<br>'+"TELEFONO: " +feature.properties.telefono +'<br>' +"PAGINA: " +'<a target=\"_blank\" href=\"'+feature.properties.pagina+'\">Link</a>');
      var popup = "NOMBRE: " +feature.properties.nombre+'<br>'+"Responsable: " +feature.properties.presidente+'<br>'+"TELEFONO: " +feature.properties.telefono +'<br>' +"PAGINA: " +'<a target=\"_blank\" href=\"'+feature.properties.pagina+'\">Link</a>';
      var customOptions =
      {
        'maxWidth': '100px',
        'width': '50px',
        'className' : 'poppy'
      }
      layer.bindPopup(popup,customOptions);
        
  }

  function icono_cultura(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/0-c.png'
    });
  
    return L.marker(latlng, {icon: smallIcon});
  }
  
  var cargado1 = false;
  var cargado2 = false;
  var cargado3 = false;
  var cargado4 = false;
  var cargado5 = false;
  var cargado6 = false;

  /////////////////////Bibliotecas///////////////////////////////

  $(".cultura1").click(function () {
    if ( ! cargado1 ) {
        function icono_biblioteca(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/1-c.png'
    });
  
    return L.marker(latlng, {icon: smallIcon});
  }

  var layerbiblioteca =  L.geoJson(cultura, {
    onEachFeature: onEachFeaturecultura,
  pointToLayer: icono_biblioteca,
  filter: function(feature, layer) {
    return (feature.properties.org=="BB") ? true:false;
    }
  }).addTo(markers);
        cargado1 = true;
    }
});
//////////////////////////////////////////////////////////////
//////////////////////Museos////////////

    $(".cultura2").click(function () {
        if ( ! cargado2 ) {
            function icono_museo(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/2-c.png'
    });
  
    return L.marker(latlng, {icon: smallIcon});
  }

  var layermuseo =  L.geoJson(cultura, {
    onEachFeature: onEachFeaturecultura,
  pointToLayer: icono_museo,
  filter: function(feature, layer) {
    return (feature.properties.org=="MU") ? true:false;
    }
  }).addTo(markers);
            cargado2 = true;
        }
  });
///////////////////////////////////////////////////
//////////////Centros Culturales////////////////////
    $(".cultura3").click(function () {
        if ( ! cargado3 ) {
            function icono_ccultural(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/3-c.png'
    });
  
    return L.marker(latlng, {icon: smallIcon});
  }

  var layerccultural =  L.geoJson(cultura, {
    onEachFeature: onEachFeaturecultura,
  pointToLayer: icono_ccultural,
  filter: function(feature, layer) {
    return (feature.properties.org=="CC") ? true:false;
    }
  }).addTo(markers);
        cargado3 = true;
    }
 });
/////////////////////////////////////////////////////
/////////Instituciones Religiosas////////////////////////////
	$(".cultura4").click(function () {
        if ( ! cargado4 ) {
           function icono_ireligiosa(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/4-c.png'
    });
  
    return L.marker(latlng, {icon: smallIcon});
  }

  var layerireligiosa =  L.geoJson(cultura, {
    onEachFeature: onEachFeaturecultura,
  pointToLayer: icono_ireligiosa,
  filter: function(feature, layer) {
    return (feature.properties.org=="IR") ? true:false;
    }
  }).addTo(markers);
        cargado4 = true;
    }
  });
///////////////////////////////////////////////////
//////////ONGs//////////////////////////
 $(".cultura5").click(function () {
    if ( ! cargado5 ) {
       function icono_ong(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/5-c.png'
    });
  
    return L.marker(latlng, {icon: smallIcon});
  }

  var layerong =  L.geoJson(cultura, {
    onEachFeature: onEachFeaturecultura,
  pointToLayer: icono_ong,
  filter: function(feature, layer) {
    return (feature.properties.org=="ON") ? true:false;
    }
  }).addTo(markers);
        cargado5 = true;
    }
  });
///////////////////////////////////////////////////
//////////Medios de Comunicacion///////////////////
 $(".cultura6").click(function () {
    if ( ! cargado5 ) {
       function icono_mcomunicacion(feature, latlng) {
  var smallIcon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [13, 27],
  popupAnchor:  [1, -24],
  iconUrl: './iconos/6-c.png'
    });
  
    return L.marker(latlng, {icon: smallIcon});
  }

  var layermcomunicacion =  L.geoJson(cultura, {
    onEachFeature: onEachFeaturecultura,
  pointToLayer: icono_mcomunicacion,
  filter: function(feature, layer) {
    return (feature.properties.org=="MC") ? true:false;
    }
  }).addTo(markers);
        cargado5 = true;
    }
  });
///////////////////////////////////////////////////
})
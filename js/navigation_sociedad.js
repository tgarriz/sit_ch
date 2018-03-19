$(document).ready(function () {
    // funcion para mostrar el nombre de los datos puntuales
function onEachFeaturesociedad(feature, layer) {
        var popup='';
        if (feature.properties.nombre) {popup+="NOMBRE: " +feature.properties.nombre+'<br>'};
        if (feature.properties.presidente) {popup+="Responsable: " +feature.properties.presidente+'<br>'};
        if (feature.properties.telefono) {popup+="TELEFONO: " +feature.properties.telefono+'<br>'};
        if (feature.properties.pagina) {popup+="PAGINA: " +'<a target=\"_blank\" href=\"'+feature.properties.pagina+'\">Link</a>'};
        //popup = "NOMBRE: " +feature.properties.nombre+'<br>'+"Responsable: " +feature.properties.presidente+'<br>'+"TELEFONO: " +feature.properties.telefono +'<br>' +"PAGINA: " +'<a target=\"_blank\" href=\"'+feature.properties.pagina+'\">Link</a>';
        var customOptions =
        {
          'maxWidth': '100px',
          'width': '50px',
          'className' : 'poppy'
        }
        layer.bindPopup(popup,customOptions);
  }

  function icono_sociedad(feature, latlng) {
    var smallIcon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [13, 27],
    popupAnchor:  [1, -24],
    iconUrl: './iconos/0-n.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var cargado1 = false;
  var cargado2 = false;
  var cargado3 = false;
  var cargado4 = false;
  var cargado5 = false;
  var cargado6 = false;
  var cargado7 = false;
  var cargado8 = false;

  /////////////////////clubes///////////////////////////////

  $(".sociedad1").click(function () {
    if ( ! cargado1 ) {
        function icono_clubes(feature, latlng) {
            var smallIcon = L.icon({
                iconSize: [35, 35],
                iconAnchor: [13, 27],
                popupAnchor:  [1, -24],
                iconUrl: './iconos/1-n.png'
                });
            return L.marker(latlng, {icon: smallIcon});
        }
        var layerclubes =  L.geoJson(sociedad, {
            onEachFeature: onEachFeaturesociedad,
            pointToLayer: icono_clubes,
            filter: function(feature, layer) {
                return (feature.properties.org=="CL") ? true:false;
            }
        }).addTo(markers);
        cargado1 = true;
    }
});
//////////////////////////////////////////////////////////////
//////////////////////A.VECINALES///////////////////////////////

    $(".sociedad2").click(function () {
        if ( ! cargado2 ) {
            function icono_avecinal(feature, latlng) {
    var smallIcon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [13, 27],
    popupAnchor:  [1, -24],
    iconUrl: './iconos/2-n.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layeravecinal =  L.geoJson(sociedad, {
    onEachFeature: onEachFeaturesociedad,
    pointToLayer: icono_avecinal,
    filter: function(feature, layer) {
        return (feature.properties.org=="AV") ? true:false;
    }
  }).addTo(markers);
            cargado2 = true;
        }
  });
///////////////////////////////////////////////////
//////////////S. FOMENTO///////////////////////////
    $(".sociedad3").click(function () {
        if ( ! cargado3 ) {
            function icono_sfomento(feature, latlng) {
    var smallIcon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [13, 27],
    popupAnchor:  [1, -24],
    iconUrl: './iconos/3-n.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layersfomento =  L.geoJson(sociedad, {
    onEachFeature: onEachFeaturesociedad,
    pointToLayer: icono_sfomento,
    filter: function(feature, layer) {
        return (feature.properties.org=="SF") ? true:false;
    }
  }).addTo(markers);
        cargado3 = true;
    }
 });
/////////////////////////////////////////////////////
////////////////////C. JUBILADOS/////////////////////////
	$(".sociedad7").click(function () {
        if ( ! cargado7 ) {
            function icono_cjubilados(feature, latlng) {
    var smallIcon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [13, 27],
    popupAnchor:  [1, -24],
    iconUrl: './iconos/7-n.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layercjubilados =  L.geoJson(sociedad, {
    onEachFeature: onEachFeaturesociedad,
    pointToLayer: icono_cjubilados,
    filter: function(feature, layer) {
        return (feature.properties.org=="CJ") ? true:false;
    }
  }).addTo(markers);
        cargado7 = true;
    }
  });
///////////////////////////////////////////////////
////////////////////SINDICATOS/////////////////////////
 $(".sociedad4").click(function () {
    if ( ! cargado4 ) {
        function icono_sindicato(feature, latlng) {
    var smallIcon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [13, 27],
    popupAnchor:  [1, -24],
    iconUrl: './iconos/4-n.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layersindicato =  L.geoJson(sociedad, {
    onEachFeature: onEachFeaturesociedad,
    pointToLayer: icono_sindicato,
    filter: function(feature, layer) {
        return (feature.properties.org=="SI") ? true:false;
    }
  }).addTo(markers);
        cargado4 = true;
    }
  });
///////////////////////////////////////////////////
////////////////////C. EMPRESARIALES/////////////////////////
 $(".sociedad5").click(function () {
    if ( ! cargado5 ) {
        function icono_cempresarial(feature, latlng) {
    var smallIcon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [13, 27],
    popupAnchor:  [1, -24],
    iconUrl: './iconos/5-n.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layercempresarial =  L.geoJson(sociedad, {
    onEachFeature: onEachFeaturesociedad,
    pointToLayer: icono_cempresarial,
    filter: function(feature, layer) {
        return (feature.properties.org=="CE") ? true:false;
    }
  }).addTo(markers);
        cargado5 = true;
    }
 })
///////////////////////////////////////////////////
////////////////////ONGs/////////////////////////
 $(".sociedad6").click(function () {
    if ( ! cargado6 ) {
        function icono_socong(feature, latlng) {
    var smallIcon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [13, 27],
    popupAnchor:  [1, -24],
    iconUrl: './iconos/6-n.png'
    });

    return L.marker(latlng, {icon: smallIcon});
  }

  var layersocong =  L.geoJson(sociedad, {
    onEachFeature: onEachFeaturesociedad,
    pointToLayer: icono_socong,
    filter: function(feature, layer) {
        return (feature.properties.org=="ON") ? true:false;
    }
  }).addTo(markers);
        cargado6 = true;
    }
 })
 ////////////////////EMPRESAS/////////////////////////
  $(".sociedad8").click(function () {
     if ( ! cargado8 ) {
         function icono_empresas(feature, latlng) {
     var smallIcon = L.icon({
     iconSize: [35, 35],
     iconAnchor: [13, 27],
     popupAnchor:  [1, -24],
     iconUrl: './iconos/8-n.png'
     });

     return L.marker(latlng, {icon: smallIcon});
   }

   var layercempresas =  L.geoJson(empresas, {
     onEachFeature: onEachFeaturesociedad,
     pointToLayer: icono_empresas
   }).addTo(markers);
         cargado8 = true;
     }
  })
///////////////////////////////////////////////////
})

$(document).ready(function () {
    // funcion para mostrar el nombre de los datos puntuales
 var layerlist={};
  function onEachFeatureescuela(feature, layer) {
        var popup = '';
        if ( feature.properties.nombre ) {popup+=feature.properties.nombre+'<br>'};
        if ( feature.properties.descripcio ) {popup+=feature.properties.descripcio+'<br>'};
        if ( feature.properties.calle ) {popup+=feature.properties.calle+' '+feature.properties.nro};
        //var popup = feature.properties.nombre+'<br>'+feature.properties.descripcio+'<br>'+feature.properties.calle+' '+feature.properties.nro;
        var customOptions =
      {
        'maxWidth': '100px',
        'width': '50px',
        'className' : 'poppy'
      }
      layer.bindPopup(popup,customOptions);
  }
  function icono_escuelas(feature, latlng) {
    var smallIcon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [13, 27],
    popupAnchor:  [1, -24],
    iconUrl: './iconos/0-a.png'
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

  /*var layerescuelas =  L.geoJson(escuelas, {
    onEachFeature: onEachFeatureescuela,
    pointToLayer: icono_escuelas,
  });*/

  /////////////////////JARDINES///////////////////////////////

    $(".educacion1").click(function () {
        if ( ! cargado1 ) {
            function icono_jardines(feature, latlng) {
                var smallIcon = L.icon({
                    iconSize: [35, 35],
                    iconAnchor: [13, 27],
                    popupAnchor:  [1, -24],
                    iconUrl: './iconos/1-a.png'
                });

            return L.marker(latlng, {icon: smallIcon});
            }

            var layerjardines =  L.geoJson(escuelas, {
                onEachFeature: onEachFeatureescuela,
                pointToLayer: icono_jardines,
                filter: function(feature, layer) {
                    return (feature.properties.org=="JC" || feature.properties.org=="JS" ||feature.properties.org=="JI" || feature.properties.org=="JM") ? true:false;
                }
            }).addTo(markers);
            cargado1 = true;
        }
});
//////////////////////////////////////////////////////////////
//////////////////////PRIMARIAS///////////////////////////////

    $(".educacion2").click(function () {
        if ( ! cargado2 ) {
            function icono_primarias(feature, latlng) {
                var smallIcon = L.icon({
                iconSize: [35, 35],
                iconAnchor: [13, 27],
                popupAnchor:  [1, -24],
                iconUrl: './iconos/2-a.png'
                });

            return L.marker(latlng, {icon: smallIcon});
            }

            var layerprimarias =  L.geoJson(escuelas, {
                onEachFeature: onEachFeatureescuela,
                pointToLayer: icono_primarias,
                filter: function(feature, layer) {
                    return (feature.properties.org=="PP") ? true:false;
                }
            }).addTo(markers);
            cargado2 = true;
        }
  });
///////////////////////////////////////////////////
//////////////SECUNDARIAS///////////////////////////
    $(".educacion3").click(function () {
        if ( ! cargado3 ) {
            function icono_secundarias(feature, latlng) {
                var smallIcon = L.icon({
                    iconSize: [35, 35],
                    iconAnchor: [13, 27],
                    popupAnchor:  [1, -24],
                    iconUrl: './iconos/3-a.png'
                });

                return L.marker(latlng, {icon: smallIcon});
            }

            var layersecundarias =  L.geoJson(escuelas, {
                onEachFeature: onEachFeatureescuela,
                pointToLayer: icono_secundarias,
                filter: function(feature, layer) {
                    return (feature.properties.org=="MM" ||feature.properties.org=="MT" ||feature.properties.org=="MS" || feature.properties.org=="MA" || feature.properties.org=="BS") ? true:false;
            }
            }).addTo(markers);
        cargado3 = true;
    }
 });
/////////////////////////////////////////////////////
////////////////////SUPERIOR/////////////////////////
	$(".educacion4").click(function () {
        if ( ! cargado4 ) {
            function icono_superior(feature, latlng) {
                var smallIcon = L.icon({
                    iconSize: [35, 35],
                    iconAnchor: [13, 27],
                    popupAnchor:  [1, -24],
                    iconUrl: './iconos/4-a.png'
                });
            return L.marker(latlng, {icon: smallIcon});
            }
            var layersuperior =  L.geoJson(escuelas, {
                onEachFeature: onEachFeatureescuela,
                pointToLayer: icono_superior,
                filter: function(feature, layer) {
                    return (feature.properties.org=="IS" || feature.properties.org=="DF" ) ? true:false;
                }
            }).addTo(markers);
        cargado4 = true;
    }
  });
///////////////////////////////////////////////////
////////////////////ESPECIAL/////////////////////////
 $(".educacion5").click(function () {
    if ( ! cargado5 ) {
        function icono_especiales(feature, latlng) {
        var smallIcon = L.icon({
            iconSize: [35, 35],
            iconAnchor: [13, 27],
            popupAnchor:  [1, -24],
            iconUrl: './iconos/5-a.png'
        });

        return L.marker(latlng, {icon: smallIcon});
        }

        var layerespeciales =  L.geoJson(escuelas, {
            onEachFeature: onEachFeatureescuela,
            pointToLayer: icono_especiales,
            filter: function(feature, layer) {
                return (feature.properties.org=="EE") ? true:false;
            }
        }).addTo(markers);
        cargado5 = true;
    }
  });
///////////////////////////////////////////////////
////////////////////ADULTOS/////////////////////////
 $(".educacion6").click(function () {
    if ( ! cargado6 ) {
        function icono_adultos(feature, latlng) {
           var smallIcon = L.icon({
	           iconSize: [35, 35],
	           iconAnchor: [13, 27],
	           popupAnchor:  [1, -24],
	           iconUrl: './iconos/6-a.png'
           });
        return L.marker(latlng, {icon: smallIcon});
        }

        var layeradultos =  L.geoJson(escuelas, {
           onEachFeature: onEachFeatureescuela,
	       pointToLayer: icono_adultos,
	       filter: function(feature, layer) {
		      return (feature.properties.org=="DE" || feature.properties.org=="DC" ) ? true:false;
           }
        }).addTo(markers);
        cargado6 = true;
    }
 })
///////////////////////////////////////////////////
////////////////////complementaria/////////////////////////
 $(".educacion7").click(function () {
    if ( ! cargado7 ) {
        function icono_complementaria(feature, latlng) {
	       var smallIcon = L.icon({
	           iconSize: [35, 35],
	           iconAnchor: [13, 27],
	           popupAnchor:  [1, -24],
	           iconUrl: './iconos/7-a.png'
            });

            return L.marker(latlng, {icon: smallIcon});
        }
        var layercomplementaria =  L.geoJson(escuelas, {
           onEachFeature: onEachFeatureescuela,
	       pointToLayer: icono_complementaria,
	       filter: function(feature, layer) {
		      return (feature.properties.org=="FC" || feature.properties.org=="AC" || feature.properties.org=="ET" || feature.properties.org=="AM" || feature.properties.org=="SC" ) ? true:false;
            }
        }).addTo(markers);
        cargado7 = true;
    }
 })
///////////////////////////////////////////////////
////////////////////otros/////////////////////////
 $(".educacion8").click(function () {
    if ( ! cargado8 ) {
        function icono_otros(feature, latlng) {
            var smallIcon = L.icon({
                iconSize: [35, 35],
                iconAnchor: [13, 27],
                popupAnchor:  [1, -24],
                iconUrl: './iconos/8-a.png'
            });
        return L.marker(latlng, {icon: smallIcon});
        }
        var layerotros =  L.geoJson(escuelas, {
            onEachFeature: onEachFeatureescuela,
            pointToLayer: icono_otros,
            filter: function(feature, layer) {
                return (feature.properties.org=="PI" || feature.properties.org=="IC" ) ? true:false;
            }
        }).addTo(markers);
        cargado8 = true;
    }
 })
///////////////////////////////////////////////////
})

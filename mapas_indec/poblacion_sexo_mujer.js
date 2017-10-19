  var layer_poblacion_sexo_mujer;
  var info_poblacion_sexo_mujer = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_poblacion_sexo_mujer.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_poblacion_sexo_mujer.update = function (props) {
    this._div.innerHTML = '<h4>	Poblacion por sexo: Mujer</h4>' +  (props ?
        '<b>' + '</b><br />' + props.poblacion_sexo_mujer + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_poblacion_sexo_mujer(d) {
    return d >     489    ? '#800026' :
           d >     419    ? '#BD0026' :
           d >     349    ? '#E31A1C' :
           d >     279    ? '#FC4E2A' :
           d >     209    ? '#FD8D3C' :
           d >     140    ? '#FEB24C' :
           d >      70    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_poblacion_sexo_mujer = L.control({position: 'topleft'});

		legend_poblacion_sexo_mujer.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      70,     140,     209,     279,     349,     419,     489],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_poblacion_sexo_mujer(from + 34.895512) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_poblacion_sexo_mujer(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_poblacion_sexo_mujer.addTo(map);
    info_poblacion_sexo_mujer.update(layer.feature.properties);
    legend_poblacion_sexo_mujer.addTo(map);
  }
  

  function resetHighlight_poblacion_sexo_mujer(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_poblacion_sexo_mujer.removeFrom(map)
    info_poblacion_sexo_mujer.update();
    legend_poblacion_sexo_mujer.removeFrom(map);
  }
  
  function onEachFeature_poblacion_sexo_mujer(feature, layer) {
    layer.on({
        mouseover: highlightFeature_poblacion_sexo_mujer,
        mouseout: resetHighlight_poblacion_sexo_mujer,
        click: zoomToFeature
    });
  }


  function style_poblacion_sexo_mujer(feature) {
      return {
          fillColor: getColor_poblacion_sexo_mujer(feature.properties.poblacion_sexo_mujer),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_poblacion_sexo_mujer =  L.geoJson(poligonos,{
    style: style_poblacion_sexo_mujer,
    onEachFeature: onEachFeature_poblacion_sexo_mujer
  });

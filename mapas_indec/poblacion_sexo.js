  var layer_poblacion_sexo;
  var info_poblacion_sexo = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_poblacion_sexo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_poblacion_sexo.update = function (props) {
    this._div.innerHTML = '<h4>	Poblacion por sexo Total</h4>' +  (props ?
        '<b>' + '</b><br />' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_poblacion_sexo(d) {
    return d >     952    ? '#800026' :
           d >     816    ? '#BD0026' :
           d >     680    ? '#E31A1C' :
           d >     544    ? '#FC4E2A' :
           d >     408    ? '#FD8D3C' :
           d >     272    ? '#FEB24C' :
           d >     136    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_poblacion_sexo = L.control({position: 'topleft'});

		legend_poblacion_sexo.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,     136,     272,     408,     544,     680,     816,     952],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_poblacion_sexo(from + 68.004379) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_poblacion_sexo(e) {
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
    info_poblacion_sexo.addTo(map);
    info_poblacion_sexo.update(layer.feature.properties);
    legend_poblacion_sexo.addTo(map);
  }
  

  function resetHighlight_poblacion_sexo(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_poblacion_sexo.removeFrom(map)
    info_poblacion_sexo.update();
    legend_poblacion_sexo.removeFrom(map);
  }
  
  function onEachFeature_poblacion_sexo(feature, layer) {
    layer.on({
        mouseover: highlightFeature_poblacion_sexo,
        mouseout: resetHighlight_poblacion_sexo,
        click: zoomToFeature
    });
  }


  function style_poblacion_sexo(feature) {
      return {
          fillColor: getColor_poblacion_sexo(feature.properties.poblacion_sexo),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_poblacion_sexo =  L.geoJson(poligonos,{
    style: style_poblacion_sexo,
    onEachFeature: onEachFeature_poblacion_sexo
  });

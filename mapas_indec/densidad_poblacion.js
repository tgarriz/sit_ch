  var layer_densidad_poblacion;
  var info_densidad_poblacion = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_densidad_poblacion.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_densidad_poblacion.update = function (props) {
    this._div.innerHTML = '<h4>	Densidad de poblaci&oacuten</h4>' +  (props ?
        '<b>' + '</b><br />' + props.densidad_poblacion + ' Personas/km<sup>2</sup>'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_densidad_poblacion(d) {
    return d >    3625    ? '#800026' :
           d >    3107    ? '#BD0026' :
           d >    2589    ? '#E31A1C' :
           d >    2071    ? '#FC4E2A' :
           d >    1553    ? '#FD8D3C' :
           d >    1036    ? '#FEB24C' :
           d >     518    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_densidad_poblacion = L.control({position: 'topleft'});

		legend_densidad_poblacion.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,     518,    1036,    1553,    2071,    2589,    3107,    3625],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_densidad_poblacion(from + 0.001) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_densidad_poblacion(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_densidad_poblacion.addTo(map);
    info_densidad_poblacion.update(layer.feature.properties);
    legend_densidad_poblacion.addTo(map);
  }
  

  function resetHighlight_densidad_poblacion(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_densidad_poblacion.removeFrom(map)
    info_densidad_poblacion.update();
    legend_densidad_poblacion.removeFrom(map);

  }
  
  function onEachFeature_densidad_poblacion(feature, layer) {
    layer.on({
        mouseover: highlightFeature_densidad_poblacion,
        mouseout: resetHighlight_densidad_poblacion,
        click: zoomToFeature
    });
  }


  function style_densidad_poblacion(feature) {
      return {
          fillColor: getColor_densidad_poblacion(feature.properties.densidad_poblacion),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_densidad_poblacion =  L.geoJson(poligonos,{
    style: style_densidad_poblacion,
    onEachFeature: onEachFeature_densidad_poblacion
  });
  


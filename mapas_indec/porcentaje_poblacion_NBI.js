  var layer_porcentaje_poblacion_NBI;
  var info_porcentaje_poblacion_NBI = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_poblacion_NBI.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_poblacion_NBI.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje Poblacion con NBI</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_poblacion_NBI + ' % de ' + props.poblacion_sexo +' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_poblacion_NBI(d) {
    return d >      16    ? '#800026' :
           d >      14    ? '#BD0026' :
           d >      11    ? '#E31A1C' :
           d >       9    ? '#FC4E2A' :
           d >       7    ? '#FD8D3C' :
           d >       5    ? '#FEB24C' :
           d >       2    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_poblacion_NBI = L.control({position: 'topleft'});

		legend_porcentaje_poblacion_NBI.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       2,       5,       7,       9,      11,      14,      16],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_poblacion_NBI(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to +' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_poblacion_NBI(e) {
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
    info_porcentaje_poblacion_NBI.addTo(map);
    info_porcentaje_poblacion_NBI.update(layer.feature.properties);
    legend_porcentaje_poblacion_NBI.addTo(map);
  }
  

  function resetHighlight_porcentaje_poblacion_NBI(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_poblacion_NBI.removeFrom(map)
    info_porcentaje_poblacion_NBI.update();
    legend_porcentaje_poblacion_NBI.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_poblacion_NBI(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_poblacion_NBI,
        mouseout: resetHighlight_porcentaje_poblacion_NBI,
        click: zoomToFeature
    });
  }


  function style_porcentaje_poblacion_NBI(feature) {
      return {
          fillColor: getColor_porcentaje_poblacion_NBI(feature.properties.porcentaje_poblacion_NBI),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_poblacion_NBI =  L.geoJson(poligonos,{
    style: style_porcentaje_poblacion_NBI,
    onEachFeature: onEachFeature_porcentaje_poblacion_NBI
  });

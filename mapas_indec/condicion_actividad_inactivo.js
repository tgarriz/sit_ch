  var layer_condicion_actividad_inactivo;
  var info_condicion_actividad_inactivo = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_condicion_actividad_inactivo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_condicion_actividad_inactivo.update = function (props) {
    this._div.innerHTML = '<h4>	Condicion de Actividad Inactivo</h4>' +  (props ?
        '<b>' + '</b><br />' + props.condicion_actividad_inactivo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_condicion_actividad_inactivo(d) {
    return d >     226    ? '#800026' :
           d >     193    ? '#BD0026' :
           d >     161    ? '#E31A1C' :
           d >     129    ? '#FC4E2A' :
           d >      97    ? '#FD8D3C' :
           d >      64    ? '#FEB24C' :
           d >      32    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_condicion_actividad_inactivo = L.control({position: 'topleft'});

		legend_condicion_actividad_inactivo.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      32,      64,      97,     129,     161,     193,     226],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_condicion_actividad_inactivo(from + 16.119875) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_condicion_actividad_inactivo(e) {
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
    info_condicion_actividad_inactivo.addTo(map);
    info_condicion_actividad_inactivo.update(layer.feature.properties);
    legend_condicion_actividad_inactivo.addTo(map);
  }
  

  function resetHighlight_condicion_actividad_inactivo(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_condicion_actividad_inactivo.removeFrom(map)
    info_condicion_actividad_inactivo.update();
    legend_condicion_actividad_inactivo.removeFrom(map);
  }
  
  function onEachFeature_condicion_actividad_inactivo(feature, layer) {
    layer.on({
        mouseover: highlightFeature_condicion_actividad_inactivo,
        mouseout: resetHighlight_condicion_actividad_inactivo,
        click: zoomToFeature
    });
  }


  function style_condicion_actividad_inactivo(feature) {
      return {
          fillColor: getColor_condicion_actividad_inactivo(feature.properties.condicion_actividad_inactivo),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_condicion_actividad_inactivo =  L.geoJson(poligonos,{
    style: style_condicion_actividad_inactivo,
    onEachFeature: onEachFeature_condicion_actividad_inactivo
  });

  var layer_condicion_actividad_ocupado;
  var info_condicion_actividad_ocupado = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_condicion_actividad_ocupado.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_condicion_actividad_ocupado.update = function (props) {
    this._div.innerHTML = '<h4>	Condicion de Actividad Ocupado</h4>' +  (props ?
        '<b>' + '</b><br />' + props.condicion_actividad_ocupado + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_condicion_actividad_ocupado(d) {
    return d >     447    ? '#800026' :
           d >     383    ? '#BD0026' :
           d >     319    ? '#E31A1C' :
           d >     255    ? '#FC4E2A' :
           d >     192    ? '#FD8D3C' :
           d >     128    ? '#FEB24C' :
           d >      64    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_condicion_actividad_ocupado = L.control({position: 'topleft'});

		legend_condicion_actividad_ocupado.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      64,     128,     192,     255,     319,     383,     447],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_condicion_actividad_ocupado(from + 31.936495) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_condicion_actividad_ocupado(e) {
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
    info_condicion_actividad_ocupado.addTo(map);
    info_condicion_actividad_ocupado.update(layer.feature.properties);
    legend_condicion_actividad_ocupado.addTo(map);
  }
  

  function resetHighlight_condicion_actividad_ocupado(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_condicion_actividad_ocupado.removeFrom(map)
    info_condicion_actividad_ocupado.update();
    legend_condicion_actividad_ocupado.removeFrom(map);
  }
  
  function onEachFeature_condicion_actividad_ocupado(feature, layer) {
    layer.on({
        mouseover: highlightFeature_condicion_actividad_ocupado,
        mouseout: resetHighlight_condicion_actividad_ocupado,
        click: zoomToFeature
    });
  }


  function style_condicion_actividad_ocupado(feature) {
      return {
          fillColor: getColor_condicion_actividad_ocupado(feature.properties.condicion_actividad_ocupado),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_condicion_actividad_ocupado =  L.geoJson(poligonos,{
    style: style_condicion_actividad_ocupado,
    onEachFeature: onEachFeature_condicion_actividad_ocupado
  });

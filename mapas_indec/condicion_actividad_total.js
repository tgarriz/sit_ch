  var layer_condicion_actividad_total;
  var info_condicion_actividad_total = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_condicion_actividad_total.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_condicion_actividad_total.update = function (props) {
    this._div.innerHTML = '<h4>	Condicion de Actividad Total</h4>' +  (props ?
        '<b>' + '</b><br />' + props.condicion_actividad_total + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_condicion_actividad_total(d) {
    return d >     692    ? '#800026' :
           d >     593    ? '#BD0026' :
           d >     494    ? '#E31A1C' :
           d >     395    ? '#FC4E2A' :
           d >     297    ? '#FD8D3C' :
           d >     198    ? '#FEB24C' :
           d >      99    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_condicion_actividad_total = L.control({position: 'topleft'});

		legend_condicion_actividad_total.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      99,     198,     297,     395,     494,     593,     692],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_condicion_actividad_total(from + 49.420017) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_condicion_actividad_total(e) {
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
    info_condicion_actividad_total.addTo(map);
    info_condicion_actividad_total.update(layer.feature.properties);
    legend_condicion_actividad_total.addTo(map);
  }
  

  function resetHighlight_condicion_actividad_total(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_condicion_actividad_total.removeFrom(map)
    info_condicion_actividad_total.update();
    legend_condicion_actividad_total.removeFrom(map);
  }
  
  function onEachFeature_condicion_actividad_total(feature, layer) {
    layer.on({
        mouseover: highlightFeature_condicion_actividad_total,
        mouseout: resetHighlight_condicion_actividad_total,
        click: zoomToFeature
    });
  }


  function style_condicion_actividad_total(feature) {
      return {
          fillColor: getColor_condicion_actividad_total(feature.properties.condicion_actividad_total),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_condicion_actividad_total =  L.geoJson(poligonos,{
    style: style_condicion_actividad_total,
    onEachFeature: onEachFeature_condicion_actividad_total
  });

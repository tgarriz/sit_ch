  var layer_condicion_actividad_desocupado;
  var info_condicion_actividad_desocupado = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_condicion_actividad_desocupado.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_condicion_actividad_desocupado.update = function (props) {
    this._div.innerHTML = '<h4>	Condicion de Actividad Desocupado</h4>' +  (props ?
         + props.condicion_actividad_desocupado + ' Personas Desocupadas'+'<br />'+
         + props.condicion_actividad_inactivo + ' Personas Inactivas'+'<br />'+
         + props.condicion_actividad_ocupado + ' Personas Ocupadas'+'<br />'+
         + props.condicion_actividad_total + ' Total'

        : 'mover el mouse sobre el mapa');
  };
  function getColor_condicion_actividad_desocupado(d) {
    return d >       0.07    ? '#800026' :
           d >       0.06    ? '#BD0026' :
           d >       0.05    ? '#E31A1C' :
           d >       0.04    ? '#FC4E2A' :
           d >       0.03    ? '#FD8D3C' :
           d >       0.02    ? '#FEB24C' :
           d >       0.01    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_condicion_actividad_desocupado = L.control({position: 'topleft'});

		legend_condicion_actividad_desocupado.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       1,       2,      3,      4,      5,      6,      7],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_condicion_actividad_desocupado(from/100.0 + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to +' %': '% +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_condicion_actividad_desocupado(e) {
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
    info_condicion_actividad_desocupado.addTo(map);
    info_condicion_actividad_desocupado.update(layer.feature.properties);
    legend_condicion_actividad_desocupado.addTo(map);
  }
  

  function resetHighlight_condicion_actividad_desocupado(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_condicion_actividad_desocupado.removeFrom(map)
    info_condicion_actividad_desocupado.update();
    legend_condicion_actividad_desocupado.removeFrom(map);
  }
  
  function onEachFeature_condicion_actividad_desocupado(feature, layer) {
    layer.on({
        mouseover: highlightFeature_condicion_actividad_desocupado,
        mouseout: resetHighlight_condicion_actividad_desocupado,
        click: zoomToFeature
    });
  }


  function style_condicion_actividad_desocupado(feature) {
      return {
          fillColor: getColor_condicion_actividad_desocupado(feature.properties.condicion_actividad_desocupado/feature.properties.condicion_actividad_total),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_condicion_actividad_desocupado =  L.geoJson(poligonos,{
    style: style_condicion_actividad_desocupado,
    onEachFeature: onEachFeature_condicion_actividad_desocupado
  });

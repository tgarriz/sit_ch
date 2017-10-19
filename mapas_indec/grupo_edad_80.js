  var layer_grupo_edad_80;
  var info_grupo_edad_80 = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_grupo_edad_80.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_grupo_edad_80.update = function (props) {
    this._div.innerHTML = '<h4>	Poblacion mas de 80 a&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupo_edad_80 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_grupo_edad_80(d) {
    return d >       6    ? '#800026' :
           d >       5    ? '#BD0026' :
           d >       4    ? '#E31A1C' :
           d >       3    ? '#FC4E2A' :
           d >       3    ? '#FD8D3C' :
           d >       2    ? '#FEB24C' :
           d >       1    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_grupo_edad_80 = L.control({position: 'topleft'});

		legend_grupo_edad_80.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       1,       2,       3,       3,       4,       5,       6],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_grupo_edad_80(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to + ' %': ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_grupo_edad_80(e) {
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
    info_grupo_edad_80.addTo(map);
    info_grupo_edad_80.update(layer.feature.properties);
    legend_grupo_edad_80.addTo(map);
  }
  

  function resetHighlight_grupo_edad_80(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupo_edad_80.removeFrom(map)
    info_grupo_edad_80.update();
    legend_grupo_edad_80.removeFrom(map);
  }
  
  function onEachFeature_grupo_edad_80(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupo_edad_80,
        mouseout: resetHighlight_grupo_edad_80,
        click: zoomToFeature
    });
  }


  function style_grupo_edad_80(feature) {
      return {
          fillColor: getColor_grupo_edad_80(feature.properties.grupo_edad_80),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_80 =  L.geoJson(poligonos,{
    style: style_grupo_edad_80,
    onEachFeature: onEachFeature_grupo_edad_80
  });

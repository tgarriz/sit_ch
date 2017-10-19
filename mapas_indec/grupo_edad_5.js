  var layer_grupo_edad_5;
  var info_grupo_edad_5 = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_grupo_edad_5.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_grupo_edad_5.update = function (props) {
    this._div.innerHTML = '<h4>	Poblacion 5 a 12 a&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupo_edad_5 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_grupo_edad_5(d) {
    return d >      20    ? '#800026' :
           d >      18    ? '#BD0026' :
           d >      16    ? '#E31A1C' :
           d >      13    ? '#FC4E2A' :
           d >      11    ? '#FD8D3C' :
           d >       8    ? '#FEB24C' :
           d >       6    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_grupo_edad_5 = L.control({position: 'topleft'});

		legend_grupo_edad_5.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       6,       8,      11,      13,      16,      18,      20],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_grupo_edad_5(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_grupo_edad_5(e) {
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
    info_grupo_edad_5.addTo(map);
    info_grupo_edad_5.update(layer.feature.properties);
    legend_grupo_edad_5.addTo(map);
  }
  

  function resetHighlight_grupo_edad_5(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupo_edad_5.removeFrom(map)
    info_grupo_edad_5.update();
    legend_grupo_edad_5.removeFrom(map);
  }
  
  function onEachFeature_grupo_edad_5(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupo_edad_5,
        mouseout: resetHighlight_grupo_edad_5,
        click: zoomToFeature
    });
  }


  function style_grupo_edad_5(feature) {
      return {
          fillColor: getColor_grupo_edad_5(feature.properties.grupo_edad_5),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_5 =  L.geoJson(poligonos,{
    style: style_grupo_edad_5,
    onEachFeature: onEachFeature_grupo_edad_5
  });

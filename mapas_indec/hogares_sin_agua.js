  var layer_hogares_sin_agua;
  var info_hogares_sin_agua = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_sin_agua.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_sin_agua.update = function (props) {
    this._div.innerHTML = '<h4>	Hogares sin provisión de agua dentro de la vivienda</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_sin_agua + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_sin_agua(d) {
    return d >      35    ? '#800026' :
           d >      30    ? '#BD0026' :
           d >      25    ? '#E31A1C' :
           d >      20    ? '#FC4E2A' :
           d >      15    ? '#FD8D3C' :
           d >      10    ? '#FEB24C' :
           d >       5    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_hogares_sin_agua = L.control({position: 'topleft'});

		legend_hogares_sin_agua.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       5,       10,      15,      20,      25,      30,      35],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_sin_agua(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_sin_agua(e) {
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
    info_hogares_sin_agua.addTo(map);
    info_hogares_sin_agua.update(layer.feature.properties);
    legend_hogares_sin_agua.addTo(map);
  }
  

  function resetHighlight_hogares_sin_agua(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_sin_agua.removeFrom(map)
    info_hogares_sin_agua.update();
    legend_hogares_sin_agua.removeFrom(map);
  }
  
  function onEachFeature_hogares_sin_agua(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_sin_agua,
        mouseout: resetHighlight_hogares_sin_agua,
        click: zoomToFeature
    });
  }


  function style_hogares_sin_agua(feature) {
      return {
          fillColor: getColor_hogares_sin_agua(feature.properties.hogares_sin_agua),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_sin_agua =  L.geoJson(poligonos,{
    style: style_hogares_sin_agua,
    onEachFeature: onEachFeature_hogares_sin_agua
  });

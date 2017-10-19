  var layer_porcentaje_hogares_NBI;
  var info_porcentaje_hogares_NBI = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_NBI.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_NBI.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje Hogares con NBI</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_NBI + ' % de ' + props.hogares_totales +' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_NBI(d) {
    return d >      13    ? '#800026' :
           d >      11    ? '#BD0026' :
           d >       9    ? '#E31A1C' :
           d >       7    ? '#FC4E2A' :
           d >       6    ? '#FD8D3C' :
           d >       4    ? '#FEB24C' :
           d >       2    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_hogares_NBI = L.control({position: 'topleft'});

		legend_porcentaje_hogares_NBI.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       2,       4,       6,       7,       9,      11,      13],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_hogares_NBI(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_hogares_NBI(e) {
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
    info_porcentaje_hogares_NBI.addTo(map);
    info_porcentaje_hogares_NBI.update(layer.feature.properties);
    legend_porcentaje_hogares_NBI.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_NBI(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_NBI.removeFrom(map)
    info_porcentaje_hogares_NBI.update();
    legend_porcentaje_hogares_NBI.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_hogares_NBI(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_NBI,
        mouseout: resetHighlight_porcentaje_hogares_NBI,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_NBI(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_NBI(feature.properties.porcentaje_hogares_NBI),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_NBI =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_NBI,
    onEachFeature: onEachFeature_porcentaje_hogares_NBI
  });

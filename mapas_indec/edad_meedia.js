  var layer_edad_meedia;
  var info_edad_meedia = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_edad_meedia.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_edad_meedia.update = function (props) {
    this._div.innerHTML = '<h4>	Edad Promedio</h4>' +  (props ?
        '<b>' + '</b><br />' + props.edad_meedia + ' A&ntildeos'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_edad_meedia(d) {
    return d >      42    ? '#800026' :
           d >      40    ? '#BD0026' :
           d >      37    ? '#E31A1C' :
           d >      34    ? '#FC4E2A' :
           d >      31    ? '#FD8D3C' :
           d >      28    ? '#FEB24C' :
           d >      25    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_edad_meedia = L.control({position: 'topleft'});

		legend_edad_meedia.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      25,      28,      31,      34,      37,      40,      42],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_edad_meedia(from + 1.438544) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_edad_meedia(e) {
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
    info_edad_meedia.addTo(map);
    info_edad_meedia.update(layer.feature.properties);
    legend_edad_meedia.addTo(map);
  }
  

  function resetHighlight_edad_meedia(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_edad_meedia.removeFrom(map)
    info_edad_meedia.update();
    legend_edad_meedia.removeFrom(map);
  }
  
  function onEachFeature_edad_meedia(feature, layer) {
    layer.on({
        mouseover: highlightFeature_edad_meedia,
        mouseout: resetHighlight_edad_meedia,
        click: zoomToFeature
    });
  }


  function style_edad_meedia(feature) {
      return {
          fillColor: getColor_edad_meedia(feature.properties.edad_meedia),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_edad_meedia =  L.geoJson(poligonos,{
    style: style_edad_meedia,
    onEachFeature: onEachFeature_edad_meedia
  });

  var layer_hogares_gas_red;
  var info_hogares_gas_red = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_gas_red.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_gas_red.update = function (props) {
    this._div.innerHTML = '<h4>	Hogares con Gas de Red</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_gas_red + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_gas_red(d) {
    return d >     350    ? '#800026' :
           d >     300    ? '#BD0026' :
           d >     250    ? '#E31A1C' :
           d >     200    ? '#FC4E2A' :
           d >     150    ? '#FD8D3C' :
           d >     100    ? '#FEB24C' :
           d >      50    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_hogares_gas_red = L.control({position: 'topleft'});

		legend_hogares_gas_red.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      50,     100,     150,     200,     250,     300,     350],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_gas_red(from + 12.935140) + '"></i> ' +
					from + (to ? ' &ndash; ' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_gas_red(e) {
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
    info_hogares_gas_red.addTo(map);
    info_hogares_gas_red.update(layer.feature.properties);
    legend_hogares_gas_red.addTo(map);
  }
  

  function resetHighlight_hogares_gas_red(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_gas_red.removeFrom(map)
    info_hogares_gas_red.update();
    legend_hogares_gas_red.removeFrom(map);
  }
  
  function onEachFeature_hogares_gas_red(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_gas_red,
        mouseout: resetHighlight_hogares_gas_red,
        click: zoomToFeature
    });
  }


  function style_hogares_gas_red(feature) {
      return {
          fillColor: getColor_hogares_gas_red(feature.properties.hogares_gas_red),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_gas_red =  L.geoJson(poligonos,{
    style: style_hogares_gas_red,
    onEachFeature: onEachFeature_hogares_gas_red
  });

  var layer_hogares_celular_no;
  var info_hogares_celular_no = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_celular_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_celular_no.update = function (props) {
    this._div.innerHTML = '<h4>	Hogares que No Poseen Telefono Celular</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_celular_no + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_celular_no(d) {
    return d >      49    ? '#800026' :
           d >      42    ? '#BD0026' :
           d >      35    ? '#E31A1C' :
           d >      28    ? '#FC4E2A' :
           d >      21   ? '#FD8D3C' :
           d >       14    ? '#FEB24C' :
           d >       7    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_hogares_celular_no = L.control({position: 'topleft'});

		legend_hogares_celular_no.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       7,       14,      21,      28,      35,      42,      49],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_celular_no(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_celular_no(e) {
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
    info_hogares_celular_no.addTo(map);
    info_hogares_celular_no.update(layer.feature.properties);
    legend_hogares_celular_no.addTo(map);
  }
  

  function resetHighlight_hogares_celular_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_celular_no.removeFrom(map)
    info_hogares_celular_no.update();
    legend_hogares_celular_no.removeFrom(map);
  }
  
  function onEachFeature_hogares_celular_no(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_celular_no,
        mouseout: resetHighlight_hogares_celular_no,
        click: zoomToFeature
    });
  }


  function style_hogares_celular_no(feature) {
      return {
          fillColor: getColor_hogares_celular_no(feature.properties.hogares_celular_no),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_celular_no =  L.geoJson(poligonos,{
    style: style_hogares_celular_no,
    onEachFeature: onEachFeature_hogares_celular_no
  });

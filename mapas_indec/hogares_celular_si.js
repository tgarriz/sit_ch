  var layer_hogares_celular_si;
  var info_hogares_celular_si = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_celular_si.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_celular_si.update = function (props) {
    this._div.innerHTML = '<h4>	Posee telefono celular</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_celular_si + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_celular_si(d) {
    return d >     277    ? '#800026' :
           d >     237    ? '#BD0026' :
           d >     198    ? '#E31A1C' :
           d >     158    ? '#FC4E2A' :
           d >     119    ? '#FD8D3C' :
           d >      79    ? '#FEB24C' :
           d >      40    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_hogares_celular_si = L.control({position: 'topleft'});

		legend_hogares_celular_si.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      40,      79,     119,     158,     198,     237,     277],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_celular_si(from + 19.758244) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_celular_si(e) {
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
    info_hogares_celular_si.addTo(map);
    info_hogares_celular_si.update(layer.feature.properties);
    legend_hogares_celular_si.addTo(map);
  }
  

  function resetHighlight_hogares_celular_si(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_celular_si.removeFrom(map)
    info_hogares_celular_si.update();
    legend_hogares_celular_si.removeFrom(map);
  }
  
  function onEachFeature_hogares_celular_si(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_celular_si,
        mouseout: resetHighlight_hogares_celular_si,
        click: zoomToFeature
    });
  }


  function style_hogares_celular_si(feature) {
      return {
          fillColor: getColor_hogares_celular_si(feature.properties.hogares_celular_si),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_celular_si =  L.geoJson(poligonos,{
    style: style_hogares_celular_si,
    onEachFeature: onEachFeature_hogares_celular_si
  });

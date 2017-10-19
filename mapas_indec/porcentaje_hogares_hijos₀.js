  var layer_porcentaje_hogares_hijos₀;
  var info_porcentaje_hogares_hijos₀ = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_hijos₀.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_hijos₀.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje de hogares con hijos de 0 a 4 años</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_hijos₀ + ' %'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_hijos₀(d) {
    return d >      30    ? '#800026' :
           d >      25    ? '#BD0026' :
           d >      21    ? '#E31A1C' :
           d >      17    ? '#FC4E2A' :
           d >      13    ? '#FD8D3C' :
           d >       8    ? '#FEB24C' :
           d >       4    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_hogares_hijos₀ = L.control({position: 'topleft'});

		legend_porcentaje_hogares_hijos₀.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       4,       8,      13,      17,      21,      25,      30],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_hogares_hijos₀(from + 2.121645) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_hogares_hijos₀(e) {
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
    info_porcentaje_hogares_hijos₀.addTo(map);
    info_porcentaje_hogares_hijos₀.update(layer.feature.properties);
    legend_porcentaje_hogares_hijos₀.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_hijos₀(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_hijos₀.removeFrom(map)
    info_porcentaje_hogares_hijos₀.update();
    legend_porcentaje_hogares_hijos₀.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_hogares_hijos₀(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_hijos₀,
        mouseout: resetHighlight_porcentaje_hogares_hijos₀,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_hijos₀(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_hijos₀(feature.properties.porcentaje_hogares_hijos₀),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_hijos₀ =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_hijos₀,
    onEachFeature: onEachFeature_porcentaje_hogares_hijos₀
  });

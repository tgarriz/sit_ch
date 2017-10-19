  var layer_hogares_totales;
  var info_hogares_totales = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_totales.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_totales.update = function (props) {
    this._div.innerHTML = '<h4>	Hogares Totales</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_totales(d) {
    return d >     304    ? '#800026' :
           d >     260    ? '#BD0026' :
           d >     217    ? '#E31A1C' :
           d >     174    ? '#FC4E2A' :
           d >     130    ? '#FD8D3C' :
           d >      87    ? '#FEB24C' :
           d >      43    ? '#FED976' :
                            '#FFEDA0' ;
  }

		var legend_hogares_totales = L.control({position: 'topleft'});

		legend_hogares_totales.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      43,      87,     130,     174,     217,     260,     304],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_totales(from + 21.706539) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_totales(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_totales.addTo(map);
    info_hogares_totales.update(layer.feature.properties);
    legend_hogares_totales.addTo(map);
  }
  

  function resetHighlight_hogares_totales(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_totales.removeFrom(map)
    info_hogares_totales.update();
    legend_hogares_totales.removeFrom(map);
  }
  
  function onEachFeature_hogares_totales(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_totales,
        mouseout: resetHighlight_hogares_totales,
        click: zoomToFeature
    });
  }


  function style_hogares_totales(feature) {
      return {
          fillColor: getColor_hogares_totales(feature.properties.hogares_totales),
          weight: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_totales =  L.geoJson(poligonos,{
    style: style_hogares_totales,
    onEachFeature: onEachFeature_hogares_totales
  });

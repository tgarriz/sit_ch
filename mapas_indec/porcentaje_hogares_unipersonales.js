  var layer_porcentaje_hogares_unipersonales;
  var info_porcentaje_hogares_unipersonales = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_unipersonales.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_unipersonales.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje Hogares Unipersonales</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_unipersonales + ' % de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_unipersonales(d) {
    return d >      36    ? '#800026' :
           d >      31    ? '#BD0026' :
           d >      26    ? '#E31A1C' :
           d >      21    ? '#FC4E2A' :
           d >      16    ? '#FD8D3C' :
           d >      10    ? '#FEB24C' :
           d >       5    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_hogares_unipersonales = L.control({position: 'topleft'});

		legend_porcentaje_hogares_unipersonales.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       5,      10,      16,      21,      26,      31,      36],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_hogares_unipersonales(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_hogares_unipersonales(e) {
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
    info_porcentaje_hogares_unipersonales.addTo(map);
    info_porcentaje_hogares_unipersonales.update(layer.feature.properties);
    legend_porcentaje_hogares_unipersonales.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_unipersonales(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_unipersonales.removeFrom(map)
    info_porcentaje_hogares_unipersonales.update();
    legend_porcentaje_hogares_unipersonales.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_hogares_unipersonales(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_unipersonales,
        mouseout: resetHighlight_porcentaje_hogares_unipersonales,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_unipersonales(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_unipersonales(feature.properties.porcentaje_hogares_unipersonales),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_unipersonales =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_unipersonales,
    onEachFeature: onEachFeature_porcentaje_hogares_unipersonales
  });

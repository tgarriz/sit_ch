  var layer_porcentaje_hogares_jefatura_femenina;
  var info_porcentaje_hogares_jefatura_femenina = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_jefatura_femenina.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_jefatura_femenina.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje Hogares con Jefatura Femenina</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_jefatura_femenina + ' % de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_jefatura_femenina(d) {
    return d >      53    ? '#800026' :
           d >      45    ? '#BD0026' :
           d >      38    ? '#E31A1C' :
           d >      30    ? '#FC4E2A' :
           d >      23    ? '#FD8D3C' :
           d >      15    ? '#FEB24C' :
           d >       8    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_hogares_jefatura_femenina = L.control({position: 'topleft'});

		legend_porcentaje_hogares_jefatura_femenina.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       8,      15,      23,      30,      38,      45,      53],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_hogares_jefatura_femenina(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_hogares_jefatura_femenina(e) {
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
    info_porcentaje_hogares_jefatura_femenina.addTo(map);
    info_porcentaje_hogares_jefatura_femenina.update(layer.feature.properties);
    legend_porcentaje_hogares_jefatura_femenina.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_jefatura_femenina(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_jefatura_femenina.removeFrom(map)
    info_porcentaje_hogares_jefatura_femenina.update();
    legend_porcentaje_hogares_jefatura_femenina.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_hogares_jefatura_femenina(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_jefatura_femenina,
        mouseout: resetHighlight_porcentaje_hogares_jefatura_femenina,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_jefatura_femenina(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_jefatura_femenina(feature.properties.porcentaje_hogares_jefatura_femenina),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_jefatura_femenina =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_jefatura_femenina,
    onEachFeature: onEachFeature_porcentaje_hogares_jefatura_femenina
  });

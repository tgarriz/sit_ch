  var layer_porcentaje_hogares_nucelares;
  var info_porcentaje_hogares_nucelares = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_nucelares.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_nucelares.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje Hogares Nucleares Completos de Pareja e Hijos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_nucelares + ' % de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_nucelares(d) {
    return d >      57    ? '#800026' :
           d >      50    ? '#BD0026' :
           d >      43    ? '#E31A1C' :
           d >      37    ? '#FC4E2A' :
           d >      30    ? '#FD8D3C' :
           d >      24    ? '#FEB24C' :
           d >      17    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_hogares_nucelares = L.control({position: 'topleft'});

		legend_porcentaje_hogares_nucelares.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      17,      24,      30,      37,      43,      50,      57],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_hogares_nucelares(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to +' %': ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_hogares_nucelares(e) {
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
    info_porcentaje_hogares_nucelares.addTo(map);
    info_porcentaje_hogares_nucelares.update(layer.feature.properties);
    legend_porcentaje_hogares_nucelares.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_nucelares(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_nucelares.removeFrom(map)
    info_porcentaje_hogares_nucelares.update();
    legend_porcentaje_hogares_nucelares.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_hogares_nucelares(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_nucelares,
        mouseout: resetHighlight_porcentaje_hogares_nucelares,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_nucelares(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_nucelares(feature.properties.porcentaje_hogares_nucelares),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_nucelares =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_nucelares,
    onEachFeature: onEachFeature_porcentaje_hogares_nucelares
  });

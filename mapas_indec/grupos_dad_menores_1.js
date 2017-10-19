  var layer_grupos_dad_menores_1;
  var info_grupos_dad_menores_1 = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_grupos_dad_menores_1.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_grupos_dad_menores_1.update = function (props) {
    this._div.innerHTML = '<h4>	Poblacion menor a 1 a&ntildeo</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupos_dad_menores_1 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_grupos_dad_menores_1(d) {
    return d >       4    ? '#800026' :
           d >       3.5    ? '#BD0026' :
           d >       3    ? '#E31A1C' :
           d >       2.5    ? '#FC4E2A' :
           d >       2    ? '#FD8D3C' :
           d >       1.5    ? '#FEB24C' :
           d >       1    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_grupos_dad_menores_1 = L.control({position: 'topleft'});

		legend_grupos_dad_menores_1.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       1,       1.5,       2,       2.5,       3,       3.5,       4],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_grupos_dad_menores_1(from + 0.001) + '"></i> ' +
					from + (to ?  ' &ndash; ' + to +' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_grupos_dad_menores_1(e) {
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
    info_grupos_dad_menores_1.addTo(map);
    info_grupos_dad_menores_1.update(layer.feature.properties);
    legend_grupos_dad_menores_1.addTo(map);
  }
  

  function resetHighlight_grupos_dad_menores_1(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupos_dad_menores_1.removeFrom(map)
    info_grupos_dad_menores_1.update();
    legend_grupos_dad_menores_1.removeFrom(map);
  }
  
  function onEachFeature_grupos_dad_menores_1(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupos_dad_menores_1,
        mouseout: resetHighlight_grupos_dad_menores_1,
        click: zoomToFeature
    });
  }


  function style_grupos_dad_menores_1(feature) {
      return {
          fillColor: getColor_grupos_dad_menores_1(feature.properties.grupos_dad_menores_1),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupos_dad_menores_1 =  L.geoJson(poligonos,{
    style: style_grupos_dad_menores_1,
    onEachFeature: onEachFeature_grupos_dad_menores_1
  });

  var layer_grupo_edad_65;
  var info_grupo_edad_65 = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_grupo_edad_65.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_grupo_edad_65.update = function (props) {
    this._div.innerHTML = '<h4>	Poblacion mas de 65 a&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupo_edad_65 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_grupo_edad_65(d) {
    return d >      21    ? '#800026' :
           d >      18    ? '#BD0026' :
           d >      15    ? '#E31A1C' :
           d >      12    ? '#FC4E2A' :
           d >       9    ? '#FD8D3C' :
           d >       6    ? '#FEB24C' :
           d >       3    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_grupo_edad_65 = L.control({position: 'topleft'});

		legend_grupo_edad_65.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       3,       6,       9,      12,      15,      18,      21],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_grupo_edad_65(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_grupo_edad_65(e) {
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
    info_grupo_edad_65.addTo(map);
    info_grupo_edad_65.update(layer.feature.properties);
    legend_grupo_edad_65.addTo(map);
  }
  

  function resetHighlight_grupo_edad_65(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupo_edad_65.removeFrom(map)
    info_grupo_edad_65.update();
    legend_grupo_edad_65.removeFrom(map);
  }
  
  function onEachFeature_grupo_edad_65(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupo_edad_65,
        mouseout: resetHighlight_grupo_edad_65,
        click: zoomToFeature
    });
  }


  function style_grupo_edad_65(feature) {
      return {
          fillColor: getColor_grupo_edad_65(feature.properties.grupo_edad_65),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_65 =  L.geoJson(poligonos,{
    style: style_grupo_edad_65,
    onEachFeature: onEachFeature_grupo_edad_65
  });

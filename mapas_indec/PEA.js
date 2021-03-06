  var layer_PEA;
  var info_PEA = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_PEA.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_PEA.update = function (props) {
    this._div.innerHTML = '<h4>	Poblacion Economicamente Activa</h4>' +  (props ?
        '<b>' + '</b><br />' + props.PEA + ' de ' + props.poblacion_sexo +' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_PEA(d) {
    return d >     473    ? '#800026' :
           d >     406    ? '#BD0026' :
           d >     338    ? '#E31A1C' :
           d >     270    ? '#FC4E2A' :
           d >     203    ? '#FD8D3C' :
           d >     135    ? '#FEB24C' :
           d >      68    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_PEA = L.control({position: 'topleft'});

		legend_PEA.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      68,     135,     203,     270,     338,     406,     473],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_PEA(from + 33.808750) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_PEA(e) {
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
    info_PEA.addTo(map);
    info_PEA.update(layer.feature.properties);
    legend_PEA.addTo(map);
  }
  

  function resetHighlight_PEA(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_PEA.removeFrom(map)
    info_PEA.update();
    legend_PEA.removeFrom(map);
  }
  
  function onEachFeature_PEA(feature, layer) {
    layer.on({
        mouseover: highlightFeature_PEA,
        mouseout: resetHighlight_PEA,
        click: zoomToFeature
    });
  }


  function style_PEA(feature) {
      return {
          fillColor: getColor_PEA(feature.properties.PEA),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_PEA =  L.geoJson(poligonos,{
    style: style_PEA,
    onEachFeature: onEachFeature_PEA
  });

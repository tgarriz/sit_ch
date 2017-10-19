  var layer_viviendas_1000_habitantes;
  var info_viviendas_1000_habitantes = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_viviendas_1000_habitantes.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_viviendas_1000_habitantes.update = function (props) {
    this._div.innerHTML = '<h4>	Viviendas cada 1000 habitantes</h4>' +  (props ?
        '<b>' + '</b><br />' + props.viviendas_1000_habitantes + ' Viviendas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_viviendas_1000_habitantes(d) {
    return d >     700    ? '#800026' :
           d >     600    ? '#BD0026' :
           d >     500    ? '#E31A1C' :
           d >     400    ? '#FC4E2A' :
           d >     300    ? '#FD8D3C' :
           d >     200    ? '#FEB24C' :
           d >     100    ? '#FED976' :
                            '#FFEDA0' ;
  }

		var legend_viviendas_1000_habitantes = L.control({position: 'topleft'});

		legend_viviendas_1000_habitantes.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,     100,     200,     300,     400,     500,    600,    700],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_viviendas_1000_habitantes(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_viviendas_1000_habitantes(e) {
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
    info_viviendas_1000_habitantes.addTo(map);
    info_viviendas_1000_habitantes.update(layer.feature.properties);
    legend_viviendas_1000_habitantes.addTo(map);
  }
  

  function resetHighlight_viviendas_1000_habitantes(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_viviendas_1000_habitantes.removeFrom(map)
    info_viviendas_1000_habitantes.update();
    legend_viviendas_1000_habitantes.removeFrom(map);
  }
  
  function onEachFeature_viviendas_1000_habitantes(feature, layer) {
    layer.on({
        mouseover: highlightFeature_viviendas_1000_habitantes,
        mouseout: resetHighlight_viviendas_1000_habitantes,
        click: zoomToFeature
    });
  }


  function style_viviendas_1000_habitantes(feature) {
      return {
          fillColor: getColor_viviendas_1000_habitantes(feature.properties.viviendas_1000_habitantes),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_viviendas_1000_habitantes =  L.geoJson(poligonos,{
    style: style_viviendas_1000_habitantes,
    onEachFeature: onEachFeature_viviendas_1000_habitantes
  });

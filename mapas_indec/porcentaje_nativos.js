  var layer_porcentaje_nativos;
  var info_porcentaje_nativos = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_nativos.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_nativos.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje de Nativos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_nativos + ' %'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_nativos(d) {
    return d >     104    ? '#800026' :
           d >     102    ? '#BD0026' :
           d >     100    ? '#E31A1C' :
           d >      98    ? '#FC4E2A' :
           d >      96    ? '#FD8D3C' :
           d >      94    ? '#FEB24C' :
           d >      92    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_nativos = L.control({position: 'topleft'});

		legend_porcentaje_nativos.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      92,      94,      96,      98,     100,     102,     104],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_nativos(from + 1.012352) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_nativos(e) {
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
    info_porcentaje_nativos.addTo(map);
    info_porcentaje_nativos.update(layer.feature.properties);
    legend_porcentaje_nativos.addTo(map);
  }
  

  function resetHighlight_porcentaje_nativos(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_nativos.removeFrom(map)
    info_porcentaje_nativos.update();
    legend_porcentaje_nativos.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_nativos(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_nativos,
        mouseout: resetHighlight_porcentaje_nativos,
        click: zoomToFeature
    });
  }


  function style_porcentaje_nativos(feature) {
      return {
          fillColor: getColor_porcentaje_nativos(feature.properties.porcentaje_nativos),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_nativos =  L.geoJson(poligonos,{
    style: style_porcentaje_nativos,
    onEachFeature: onEachFeature_porcentaje_nativos
  });

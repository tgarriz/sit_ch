  var layer_leer_escribir_si;
  var info_leer_escribir_si = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_leer_escribir_si.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_leer_escribir_si.update = function (props) {
    this._div.innerHTML = '<h4>	Sabe leer y escribir</h4>' +  (props ?
        '<b>' + '</b><br />' + props.leer_escribir_si + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_leer_escribir_si(d) {
    return d >     765    ? '#800026' :
           d >     655    ? '#BD0026' :
           d >     546    ? '#E31A1C' :
           d >     437    ? '#FC4E2A' :
           d >     328    ? '#FD8D3C' :
           d >     218    ? '#FEB24C' :
           d >     109    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_leer_escribir_si = L.control({position: 'topleft'});

		legend_leer_escribir_si.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,     109,     218,     328,     437,     546,     655,     765],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_leer_escribir_si(from + 54.609341) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_leer_escribir_si(e) {
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
    info_leer_escribir_si.addTo(map);
    info_leer_escribir_si.update(layer.feature.properties);
    legend_leer_escribir_si.addTo(map);
  }
  

  function resetHighlight_leer_escribir_si(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_leer_escribir_si.removeFrom(map)
    info_leer_escribir_si.update();
    legend_leer_escribir_si.removeFrom(map);
  }
  
  function onEachFeature_leer_escribir_si(feature, layer) {
    layer.on({
        mouseover: highlightFeature_leer_escribir_si,
        mouseout: resetHighlight_leer_escribir_si,
        click: zoomToFeature
    });
  }


  function style_leer_escribir_si(feature) {
      return {
          fillColor: getColor_leer_escribir_si(feature.properties.leer_escribir_si),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_leer_escribir_si =  L.geoJson(poligonos,{
    style: style_leer_escribir_si,
    onEachFeature: onEachFeature_leer_escribir_si
  });

  var layer_leer_escribir_total;
  var info_leer_escribir_total = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_leer_escribir_total.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_leer_escribir_total.update = function (props) {
    this._div.innerHTML = '<h4>	Sabe leer y escribir Total</h4>' +  (props ?
        '<b>' + '</b><br />' + props.leer_escribir_total + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_leer_escribir_total(d) {
    return d >     771    ? '#800026' :
           d >     661    ? '#BD0026' :
           d >     551    ? '#E31A1C' :
           d >     441    ? '#FC4E2A' :
           d >     331    ? '#FD8D3C' :
           d >     220    ? '#FEB24C' :
           d >     110    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_leer_escribir_total = L.control({position: 'topleft'});

		legend_leer_escribir_total.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,     110,     220,     331,     441,     551,     661,     771],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_leer_escribir_total(from + 55.090900) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_leer_escribir_total(e) {
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
    info_leer_escribir_total.addTo(map);
    info_leer_escribir_total.update(layer.feature.properties);
    legend_leer_escribir_total.addTo(map);
  }
  

  function resetHighlight_leer_escribir_total(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_leer_escribir_total.removeFrom(map)
    info_leer_escribir_total.update();
    legend_leer_escribir_total.removeFrom(map);
  }
  
  function onEachFeature_leer_escribir_total(feature, layer) {
    layer.on({
        mouseover: highlightFeature_leer_escribir_total,
        mouseout: resetHighlight_leer_escribir_total,
        click: zoomToFeature
    });
  }


  function style_leer_escribir_total(feature) {
      return {
          fillColor: getColor_leer_escribir_total(feature.properties.leer_escribir_total),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_leer_escribir_total =  L.geoJson(poligonos,{
    style: style_leer_escribir_total,
    onEachFeature: onEachFeature_leer_escribir_total
  });

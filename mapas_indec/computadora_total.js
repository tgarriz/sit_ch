  var layer_computadora_total;
  var info_computadora_total = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_computadora_total.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_computadora_total.update = function (props) {
    this._div.innerHTML = '<h4>	Utiliza Computadora Total</h4>' +  (props ?
        '<b>' + '</b><br />' + props.computadora_total + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_computadora_total(d) {
    return d >     893    ? '#800026' :
           d >     765    ? '#BD0026' :
           d >     638    ? '#E31A1C' :
           d >     510    ? '#FC4E2A' :
           d >     383    ? '#FD8D3C' :
           d >     255    ? '#FEB24C' :
           d >     128    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_computadora_total = L.control({position: 'topleft'});

		legend_computadora_total.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,     128,     255,     383,     510,     638,     765,     893],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_computadora_total(from + 63.755974) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_computadora_total(e) {
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
    info_computadora_total.addTo(map);
    info_computadora_total.update(layer.feature.properties);
    legend_computadora_total.addTo(map);
  }
  

  function resetHighlight_computadora_total(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_computadora_total.removeFrom(map)
    info_computadora_total.update();
    legend_computadora_total.removeFrom(map);
  }
  
  function onEachFeature_computadora_total(feature, layer) {
    layer.on({
        mouseover: highlightFeature_computadora_total,
        mouseout: resetHighlight_computadora_total,
        click: zoomToFeature
    });
  }


  function style_computadora_total(feature) {
      return {
          fillColor: getColor_computadora_total(feature.properties.computadora_total),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_computadora_total =  L.geoJson(poligonos,{
    style: style_computadora_total,
    onEachFeature: onEachFeature_computadora_total
  });

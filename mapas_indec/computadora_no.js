  var layer_computadora_no;
  var info_computadora_no = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_computadora_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_computadora_no.update = function (props) {
    this._div.innerHTML = '<h4>	Personas que no Utilizan Computadora</h4>' +  (props ?
         + props.computadora_no + ' de ' + props.computadora_total + ' Personas No Utilizan Computadora'

        : 'mover el mouse sobre el mapa');
  };
  function getColor_computadora_no(d) {
    return 100*d >     70    ? '#800026' :
           100*d >     60    ? '#BD0026' :
           100*d >     50    ? '#E31A1C' :
           100*d >     40    ? '#FC4E2A' :
           100*d >     30    ? '#FD8D3C' :
           100*d >     20    ? '#FEB24C' :
           100*d >     10    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_computadora_no = L.control({position: 'topleft'});

		legend_computadora_no.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      10,     20,     30,     40,     50,     60,     70],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_computadora_no(from/100.0 + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to +' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_computadora_no(e) {
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
    info_computadora_no.addTo(map);
    info_computadora_no.update(layer.feature.properties);
    legend_computadora_no.addTo(map);
  }
  

  function resetHighlight_computadora_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_computadora_no.removeFrom(map)
    info_computadora_no.update();
    legend_computadora_no.removeFrom(map);
  }
  
  function onEachFeature_computadora_no(feature, layer) {
    layer.on({
        mouseover: highlightFeature_computadora_no,
        mouseout: resetHighlight_computadora_no,
        click: zoomToFeature
    });
  }


  function style_computadora_no(feature) {
      return {
          fillColor: getColor_computadora_no(feature.properties.computadora_no/feature.properties.computadora_total),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_computadora_no =  L.geoJson(poligonos,{
    style: style_computadora_no,
    onEachFeature: onEachFeature_computadora_no
  });

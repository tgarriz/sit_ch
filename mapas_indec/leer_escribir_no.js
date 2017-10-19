  var layer_leer_escribir_no;
  var info_leer_escribir_no = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_leer_escribir_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_leer_escribir_no.update = function (props) {
    this._div.innerHTML = '<h4>	Indice de Analfabetismo </h4>' +  (props ?
         + 100.0*props.leer_escribir_no/props.leer_escribir_total + ' % de ' + props.leer_escribir_total + ' Personas'

        : 'mover el mouse sobre el mapa');
  };
  function getColor_leer_escribir_no(d) {
    return 100.0*d >       3.5    ? '#800026' :
           100.0*d >       3    ? '#BD0026' :
           100.0*d >       2.5    ? '#E31A1C' :
           100.0*d >       2    ? '#FC4E2A' :
           100.0*d >       1.5    ? '#FD8D3C' :
           100.0*d >       1    ? '#FEB24C' :
           100.0*d >       0.5    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_leer_escribir_no = L.control({position: 'topleft'});

		legend_leer_escribir_no.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       0.5,       1,       1.5,       2,       2.5,       3,      3.5],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_leer_escribir_no(from/100.0 + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to + '%' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_leer_escribir_no(e) {
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
    info_leer_escribir_no.addTo(map);
    info_leer_escribir_no.update(layer.feature.properties);
    legend_leer_escribir_no.addTo(map);
  }
  

  function resetHighlight_leer_escribir_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_leer_escribir_no.removeFrom(map)
    info_leer_escribir_no.update();
    legend_leer_escribir_no.removeFrom(map);
  }
  
  function onEachFeature_leer_escribir_no(feature, layer) {
    layer.on({
        mouseover: highlightFeature_leer_escribir_no,
        mouseout: resetHighlight_leer_escribir_no,
        click: zoomToFeature
    });
  }


  function style_leer_escribir_no(feature) {
      return {
          fillColor: getColor_leer_escribir_no(feature.properties.leer_escribir_no/feature.properties.leer_escribir_total),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_leer_escribir_no =  L.geoJson(poligonos,{
    style: style_leer_escribir_no,
    onEachFeature: onEachFeature_leer_escribir_no
  });

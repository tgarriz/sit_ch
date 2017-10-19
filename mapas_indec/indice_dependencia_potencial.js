  var layer_indice_dependencia_potencial;
  var info_indice_dependencia_potencial = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_indice_dependencia_potencial.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_indice_dependencia_potencial.update = function (props) {
    this._div.innerHTML = '<h4>	Indice de Dependencia Potencial</h4>' +  (props ?
        '<b>' + '</b><br />' + props.indice_dependencia_potencial + '(chequear definicion) personas potencialmente inactivas/personas potencialmente activas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_indice_dependencia_potencial(d) {
    return d >      80    ? '#800026' :
           d >      73    ? '#BD0026' :
           d >      65    ? '#E31A1C' :
           d >      58    ? '#FC4E2A' :
           d >      50    ? '#FD8D3C' :
           d >      42    ? '#FEB24C' :
           d >      35    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_indice_dependencia_potencial = L.control({position: 'topleft'});

		legend_indice_dependencia_potencial.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      35,      42,      50,      58,      65,      73,      80],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_indice_dependencia_potencial(from + 3.797820) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_indice_dependencia_potencial(e) {
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
    info_indice_dependencia_potencial.addTo(map);
    info_indice_dependencia_potencial.update(layer.feature.properties);
    legend_indice_dependencia_potencial.addTo(map);
  }
  

  function resetHighlight_indice_dependencia_potencial(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_indice_dependencia_potencial.removeFrom(map)
    info_indice_dependencia_potencial.update();
    legend_indice_dependencia_potencial.removeFrom(map);
  }
  
  function onEachFeature_indice_dependencia_potencial(feature, layer) {
    layer.on({
        mouseover: highlightFeature_indice_dependencia_potencial,
        mouseout: resetHighlight_indice_dependencia_potencial,
        click: zoomToFeature
    });
  }


  function style_indice_dependencia_potencial(feature) {
      return {
          fillColor: getColor_indice_dependencia_potencial(feature.properties.indice_dependencia_potencial),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_indice_dependencia_potencial =  L.geoJson(poligonos,{
    style: style_indice_dependencia_potencial,
    onEachFeature: onEachFeature_indice_dependencia_potencial
  });

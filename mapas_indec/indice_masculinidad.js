  var layer_indice_masculinidad;
  var info_indice_masculinidad = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_indice_masculinidad.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_indice_masculinidad.update = function (props) {
    this._div.innerHTML = '<h4>	Poblaci&oacuten total</h4>' +  (props ?
         + props.indice_masculinidad + ' hombres cada 100 mujeres'+'<br />'+
         + props.poblacion_total_sexo_varon + ' hombres '+'<br />'+
         + props.poblacion_sexo_mujer + ' mujeres '+'<br />'+
         + props.poblacion_sexo + ' poblacion total '
        : 'mover el mouse sobre el mapa');
  };
  function getColor_indice_masculinidad(d) {
    return d >     1050   ? '#800026' :
           d >     900    ? '#BD0026' :
           d >     750    ? '#E31A1C' :
           d >     600    ? '#FC4E2A' :
           d >     450   ? '#FD8D3C' :
           d >     300   ? '#FEB24C' :
           d >     150    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_indice_masculinidad = L.control({position: 'topleft'});

		legend_indice_masculinidad.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      150,      300,      450,     600,     750,     900,     1050],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_indice_masculinidad(from + 0.001) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_indice_masculinidad(e) {
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
    info_indice_masculinidad.addTo(map);
    info_indice_masculinidad.update(layer.feature.properties);
    legend_indice_masculinidad.addTo(map);
  }
  

  function resetHighlight_indice_masculinidad(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_indice_masculinidad.removeFrom(map)
    info_indice_masculinidad.update();
    legend_indice_masculinidad.removeFrom(map);
  }
  
  function onEachFeature_indice_masculinidad(feature, layer) {
    layer.on({
        mouseover: highlightFeature_indice_masculinidad,
        mouseout: resetHighlight_indice_masculinidad,
        click: zoomToFeature
    });
  }


  function style_indice_masculinidad(feature) {
      return {
          fillColor: getColor_indice_masculinidad(feature.properties.poblacion_sexo),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_indice_masculinidad =  L.geoJson(poligonos,{
    style: style_indice_masculinidad,
    onEachFeature: onEachFeature_indice_masculinidad
  });

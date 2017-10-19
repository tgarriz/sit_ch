  var layer_porcentaje_inmigrantes_no_limitrofes;
  var info_porcentaje_inmigrantes_no_limitrofes = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_inmigrantes_no_limitrofes.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_inmigrantes_no_limitrofes.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje de Inmigrantes no Limitrofes</h4>' +  (props ?
         + props.porcentaje_inmigrantes_no_limitrofes + ' % inmigrantes paises no limitrofes'+'<br />'
         + props.porcentaje_inmigrantes_limitrofes + ' % inmigrantes paises limitrofes'+'<br />'
         + 'Poblacion Total: '+ props.poblacion_sexo 

        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_inmigrantes_no_limitrofes(d) {
    return d >       7   ? '#800026' :
           d >       6   ? '#BD0026' :
           d >       5   ? '#E31A1C' :
           d >       4   ? '#FC4E2A' :
           d >       3    ? '#FD8D3C' :
           d >       2    ? '#FEB24C' :
           d >       1    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_inmigrantes_no_limitrofes = L.control({position: 'topleft'});

		legend_porcentaje_inmigrantes_no_limitrofes.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       1,       2,       3,       4,       5,       6,       7],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_inmigrantes_no_limitrofes(from + 0.001) + '"></i> ' +
					from + (to ? '&ndash;' + to +' %' : ' % +'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_inmigrantes_no_limitrofes(e) {
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
    info_porcentaje_inmigrantes_no_limitrofes.addTo(map);
    info_porcentaje_inmigrantes_no_limitrofes.update(layer.feature.properties);
    legend_porcentaje_inmigrantes_no_limitrofes.addTo(map);
  }
  

  function resetHighlight_porcentaje_inmigrantes_no_limitrofes(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_inmigrantes_no_limitrofes.removeFrom(map)
    info_porcentaje_inmigrantes_no_limitrofes.update();
    legend_porcentaje_inmigrantes_no_limitrofes.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_inmigrantes_no_limitrofes(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_inmigrantes_no_limitrofes,
        mouseout: resetHighlight_porcentaje_inmigrantes_no_limitrofes,
        click: zoomToFeature
    });
  }


  function style_porcentaje_inmigrantes_no_limitrofes(feature) {
      return {
          fillColor: getColor_porcentaje_inmigrantes_no_limitrofes(feature.properties.porcentaje_inmigrantes_no_limitrofes+feature.properties.porcentaje_inmigrantes_limitrofes),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_inmigrantes_no_limitrofes =  L.geoJson(poligonos,{
    style: style_porcentaje_inmigrantes_no_limitrofes,
    onEachFeature: onEachFeature_porcentaje_inmigrantes_no_limitrofes
  });

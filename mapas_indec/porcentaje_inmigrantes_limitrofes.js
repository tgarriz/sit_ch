  var layer_porcentaje_inmigrantes_limitrofes;
  var info_porcentaje_inmigrantes_limitrofes = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_inmigrantes_limitrofes.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_inmigrantes_limitrofes.update = function (props) {
    this._div.innerHTML = '<h4>	Porcentaje de Inmigrantes Limitrofes</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_inmigrantes_limitrofes + ' %'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_inmigrantes_limitrofes(d) {
    return d >       5    ? '#800026' :
           d >       4    ? '#BD0026' :
           d >       4    ? '#E31A1C' :
           d >       3    ? '#FC4E2A' :
           d >       2    ? '#FD8D3C' :
           d >       1    ? '#FEB24C' :
           d >       1    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_porcentaje_inmigrantes_limitrofes = L.control({position: 'topleft'});

		legend_porcentaje_inmigrantes_limitrofes.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       1,       1,       2,       3,       4,       4,       5],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_porcentaje_inmigrantes_limitrofes(from + 0.373349) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_porcentaje_inmigrantes_limitrofes(e) {
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
    info_porcentaje_inmigrantes_limitrofes.addTo(map);
    info_porcentaje_inmigrantes_limitrofes.update(layer.feature.properties);
    legend_porcentaje_inmigrantes_limitrofes.addTo(map);
  }
  

  function resetHighlight_porcentaje_inmigrantes_limitrofes(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_inmigrantes_limitrofes.removeFrom(map)
    info_porcentaje_inmigrantes_limitrofes.update();
    legend_porcentaje_inmigrantes_limitrofes.removeFrom(map);
  }
  
  function onEachFeature_porcentaje_inmigrantes_limitrofes(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_inmigrantes_limitrofes,
        mouseout: resetHighlight_porcentaje_inmigrantes_limitrofes,
        click: zoomToFeature
    });
  }


  function style_porcentaje_inmigrantes_limitrofes(feature) {
      return {
          fillColor: getColor_porcentaje_inmigrantes_limitrofes(feature.properties.porcentaje_inmigrantes_limitrofes),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_inmigrantes_limitrofes =  L.geoJson(poligonos,{
    style: style_porcentaje_inmigrantes_limitrofes,
    onEachFeature: onEachFeature_porcentaje_inmigrantes_limitrofes
  });

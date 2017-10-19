  var layer_hogares_colectivos;
  var info_hogares_colectivos = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_colectivos.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_colectivos.update = function (props) {
    this._div.innerHTML = '<h4>	Hogares Totales</h4>' +  (props ?
         + props.hogares_colectivos + ' Hogares Colectivos'+'<br />'+
         + props.hogares_particulares + ' Hogares particulares'+'<br />'+
         + props.hogares_totales + ' Hogares Totales'

        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_colectivos(d) {
    return d >       350  ? '#800026' :
           d >       300    ? '#BD0026' :
           d >       250  ? '#E31A1C' :
           d >       200    ? '#FC4E2A' :
           d >       150  ? '#FD8D3C' :
           d >       100    ? '#FEB24C' :
           d >       50    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_hogares_colectivos = L.control({position: 'topleft'});

		legend_hogares_colectivos.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,       50,       100,       150,       200,       250,       300,       350],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_colectivos(from + 0.001) + '"></i> ' +
					from + (to ? ' &ndash; ' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_colectivos(e) {
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
    info_hogares_colectivos.addTo(map);
    info_hogares_colectivos.update(layer.feature.properties);
    legend_hogares_colectivos.addTo(map);
  }
  

  function resetHighlight_hogares_colectivos(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_colectivos.removeFrom(map)
    info_hogares_colectivos.update();
    legend_hogares_colectivos.removeFrom(map);
  }
  
  function onEachFeature_hogares_colectivos(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_colectivos,
        mouseout: resetHighlight_hogares_colectivos,
        click: zoomToFeature
    });
  }


  function style_hogares_colectivos(feature) {
      return {
          fillColor: getColor_hogares_colectivos(feature.properties.hogares_totales),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_colectivos =  L.geoJson(poligonos,{
    style: style_hogares_colectivos,
    onEachFeature: onEachFeature_hogares_colectivos
  });

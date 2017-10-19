  var layer_hogares_heladera_si;
  var info_hogares_heladera_si = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_heladera_si.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_heladera_si.update = function (props) {
    this._div.innerHTML = '<h4>	Hogares Con Heladera</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_heladera_si + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_heladera_si(d) {
    return d >     293    ? '#800026' :
           d >     251    ? '#BD0026' :
           d >     209    ? '#E31A1C' :
           d >     167    ? '#FC4E2A' :
           d >     125    ? '#FD8D3C' :
           d >      84    ? '#FEB24C' :
           d >      42    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_hogares_heladera_si = L.control({position: 'topleft'});

		legend_hogares_heladera_si.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      42,      84,     125,     167,     209,     251,     293],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_heladera_si(from + 20.901573) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_heladera_si(e) {
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
    info_hogares_heladera_si.addTo(map);
    info_hogares_heladera_si.update(layer.feature.properties);
    legend_hogares_heladera_si.addTo(map);
  }
  

  function resetHighlight_hogares_heladera_si(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_heladera_si.removeFrom(map)
    info_hogares_heladera_si.update();
    legend_hogares_heladera_si.removeFrom(map);
  }
  
  function onEachFeature_hogares_heladera_si(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_heladera_si,
        mouseout: resetHighlight_hogares_heladera_si,
        click: zoomToFeature
    });
  }


  function style_hogares_heladera_si(feature) {
      return {
          fillColor: getColor_hogares_heladera_si(feature.properties.hogares_heladera_si),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_heladera_si =  L.geoJson(poligonos,{
    style: style_hogares_heladera_si,
    onEachFeature: onEachFeature_hogares_heladera_si
  });

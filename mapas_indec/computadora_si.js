  var layer_computadora_si;
  var info_computadora_si = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_computadora_si.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_computadora_si.update = function (props) {
    this._div.innerHTML = '<h4>	Utiliza computadora</h4>' +  (props ?
        '<b>' + '</b><br />' + props.computadora_si + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_computadora_si(d) {
    return d >     495    ? '#800026' :
           d >     425    ? '#BD0026' :
           d >     354    ? '#E31A1C' :
           d >     283    ? '#FC4E2A' :
           d >     212    ? '#FD8D3C' :
           d >     142    ? '#FEB24C' :
           d >      71    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_computadora_si = L.control({position: 'topleft'});

		legend_computadora_si.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      71,     142,     212,     283,     354,     425,     495],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_computadora_si(from + 35.385723) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_computadora_si(e) {
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
    info_computadora_si.addTo(map);
    info_computadora_si.update(layer.feature.properties);
    legend_computadora_si.addTo(map);
  }
  

  function resetHighlight_computadora_si(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_computadora_si.removeFrom(map)
    info_computadora_si.update();
    legend_computadora_si.removeFrom(map);
  }
  
  function onEachFeature_computadora_si(feature, layer) {
    layer.on({
        mouseover: highlightFeature_computadora_si,
        mouseout: resetHighlight_computadora_si,
        click: zoomToFeature
    });
  }


  function style_computadora_si(feature) {
      return {
          fillColor: getColor_computadora_si(feature.properties.computadora_si),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_computadora_si =  L.geoJson(poligonos,{
    style: style_computadora_si,
    onEachFeature: onEachFeature_computadora_si
  });

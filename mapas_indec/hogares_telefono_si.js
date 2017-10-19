  var layer_hogares_telefono_si;
  var info_hogares_telefono_si = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_telefono_si.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_telefono_si.update = function (props) {
    this._div.innerHTML = '<h4>	Posee Telefono de linea</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_telefono_si + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_telefono_si(d) {
    return d >     140    ? '#800026' :
           d >     120    ? '#BD0026' :
           d >     100    ? '#E31A1C' :
           d >      80    ? '#FC4E2A' :
           d >      60    ? '#FD8D3C' :
           d >      40    ? '#FEB24C' :
           d >      20    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_hogares_telefono_si = L.control({position: 'topleft'});

		legend_hogares_telefono_si.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      20,      40,      60,      80,     100,     120,     140],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_telefono_si(from + 9.977467) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_telefono_si(e) {
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
    info_hogares_telefono_si.addTo(map);
    info_hogares_telefono_si.update(layer.feature.properties);
    legend_hogares_telefono_si.addTo(map);
  }
  

  function resetHighlight_hogares_telefono_si(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_telefono_si.removeFrom(map)
    info_hogares_telefono_si.update();
    legend_hogares_telefono_si.removeFrom(map);
  }
  
  function onEachFeature_hogares_telefono_si(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_telefono_si,
        mouseout: resetHighlight_hogares_telefono_si,
        click: zoomToFeature
    });
  }


  function style_hogares_telefono_si(feature) {
      return {
          fillColor: getColor_hogares_telefono_si(feature.properties.hogares_telefono_si),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_telefono_si =  L.geoJson(poligonos,{
    style: style_hogares_telefono_si,
    onEachFeature: onEachFeature_hogares_telefono_si
  });

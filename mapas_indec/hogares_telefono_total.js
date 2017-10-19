  var layer_hogares_telefono_total;
  var info_hogares_telefono_total = L.control({ position: 'bottomleft' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_telefono_total.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_telefono_total.update = function (props) {
    this._div.innerHTML = '<h4>	Hogares Totales 5</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_telefono_total + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_telefono_total(d) {
    return d >     303    ? '#800026' :
           d >     260    ? '#BD0026' :
           d >     217    ? '#E31A1C' :
           d >     173    ? '#FC4E2A' :
           d >     130    ? '#FD8D3C' :
           d >      87    ? '#FEB24C' :
           d >      43    ? '#FED976' :
                       '#FFEDA0' ;
  }

		var legend_hogares_telefono_total = L.control({position: 'topleft'});

		legend_hogares_telefono_total.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0,      43,      87,     130,     173,     217,     260,     303],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor_hogares_telefono_total(from + 21.655474) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};



  function highlightFeature_hogares_telefono_total(e) {
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
    info_hogares_telefono_total.addTo(map);
    info_hogares_telefono_total.update(layer.feature.properties);
    legend_hogares_telefono_total.addTo(map);
  }
  

  function resetHighlight_hogares_telefono_total(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_telefono_total.removeFrom(map)
    info_hogares_telefono_total.update();
    legend_hogares_telefono_total.removeFrom(map);
  }
  
  function onEachFeature_hogares_telefono_total(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_telefono_total,
        mouseout: resetHighlight_hogares_telefono_total,
        click: zoomToFeature
    });
  }


  function style_hogares_telefono_total(feature) {
      return {
          fillColor: getColor_hogares_telefono_total(feature.properties.hogares_telefono_total),
          weight: 1,
          opacity: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_telefono_total =  L.geoJson(poligonos,{
    style: style_hogares_telefono_total,
    onEachFeature: onEachFeature_hogares_telefono_total
  });

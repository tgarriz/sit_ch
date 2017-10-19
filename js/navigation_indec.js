$(document).ready(function () {
    ///////DENSIDAD DE PROBLACION//////////
    $(".department1").click(function () {
        var layer_densidad_poblacion;
        var info_densidad_poblacion = L.control({ position: 'topright' });
        function zoomToFeature(e) {
          map.fitBounds(e.target.getBounds());
        }
    info_densidad_poblacion.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };
  info_densidad_poblacion.update = function (props) {
    this._div.innerHTML = '<h4> Densidad de poblaci&oacuten</h4>' +  (props ?
        '<b>' + '</b><br />' + props.densidad_poblacion + ' Personas/km<sup>2</sup>'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_densidad_poblacion(d) {
    return d >    3625    ? '#800026' :
           d >    3107    ? '#BD0026' :
           d >    2589    ? '#E31A1C' :
           d >    2071    ? '#FC4E2A' :
           d >    1553    ? '#FD8D3C' :
           d >    1036    ? '#FEB24C' :
           d >     518    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_densidad_poblacion = L.control({position: 'bottomright'});

        legend_densidad_poblacion.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,     518,    1036,    1553,    2071,    2589,    3107,    3625],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_densidad_poblacion(from + 0.001) + '"></i> ' +
                    from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };

  function highlightFeature_densidad_poblacion(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_densidad_poblacion.addTo(map);
    info_densidad_poblacion.update(layer.feature.properties);
    legend_densidad_poblacion.addTo(map);
  }
  

  function resetHighlight_densidad_poblacion(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_densidad_poblacion.remove(map)
    info_densidad_poblacion.update();
    legend_densidad_poblacion.remove(map);

  }
  
  function onEachFeature_densidad_poblacion(feature, layer) {
    layer.on({
        mouseover: highlightFeature_densidad_poblacion,
        mouseout: resetHighlight_densidad_poblacion,
        click: zoomToFeature
    });
  }


  function style_densidad_poblacion(feature) {
      return {
          fillColor: getColor_densidad_poblacion(feature.properties.densidad_poblacion),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }
  layer_densidad_poblacion =  L.geoJson(poligonos,{
        style: style_densidad_poblacion,
        onEachFeature: onEachFeature_densidad_poblacion
  }).addTo(map);
  
  });
////////////////////////////////////////////////////////////


/////////////////////POBLACION TOTAL////////////////////////
    $(".department2").click(function () {
        var layer_indice_masculinidad;
        var info_indice_masculinidad = L.control({ position: 'topright' });
        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }
        info_indice_masculinidad.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };
        info_indice_masculinidad.update = function (props) {
            this._div.innerHTML = '<h4> Poblaci&oacuten total</h4>' +  (props ?
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

        var legend_indice_masculinidad = L.control({position: 'bottomright'});

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
                opacity: 0.5,
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
            info_indice_masculinidad.remove(map)
            info_indice_masculinidad.update();
            legend_indice_masculinidad.remove(map);
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
                opacity: 0.5,
                color: 'black',
                dashArray: '',
                fillOpacity: 0.7
            };
        }

        layer_indice_masculinidad =  L.geoJson(poligonos,{
            style: style_indice_masculinidad,
            onEachFeature: onEachFeature_indice_masculinidad
        }).addTo(map);
    });
    ////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////GRUPOS EDAD MENORES A 1
    $(".department3").click(function () {
        var layer_grupos_dad_menores_1;
        var info_grupos_dad_menores_1 = L.control({ position: 'topright' });
        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }
        info_grupos_dad_menores_1.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };
        info_grupos_dad_menores_1.update = function (props) {
            this._div.innerHTML = '<h4> Poblacion menor a 1 a&ntildeo</h4>' +  (props ?
            '<b>' + '</b><br />' + props.grupos_dad_menores_1 + ' % de ' + props.poblacion_sexo + ' Personas'
            : 'mover el mouse sobre el mapa');
        };
        function getColor_grupos_dad_menores_1(d) {
            return d >       4    ? '#800026' :
           d >       3.5    ? '#BD0026' :
           d >       3    ? '#E31A1C' :
           d >       2.5    ? '#FC4E2A' :
           d >       2    ? '#FD8D3C' :
           d >       1.5    ? '#FEB24C' :
           d >       1    ? '#FED976' :
                       '#FFEDA0' ;
        }

        var legend_grupos_dad_menores_1 = L.control({position: 'bottomright'});

        legend_grupos_dad_menores_1.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       1,       1.5,       2,       2.5,       3,       3.5,       4],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_grupos_dad_menores_1(from + 0.001) + '"></i> ' +
                    from + (to ?  ' &ndash; ' + to +' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_grupos_dad_menores_1(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_grupos_dad_menores_1.addTo(map);
    info_grupos_dad_menores_1.update(layer.feature.properties);
    legend_grupos_dad_menores_1.addTo(map);
  }
  

  function resetHighlight_grupos_dad_menores_1(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupos_dad_menores_1.remove(map)
    info_grupos_dad_menores_1.update();
    legend_grupos_dad_menores_1.remove(map);
  }
  
  function onEachFeature_grupos_dad_menores_1(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupos_dad_menores_1,
        mouseout: resetHighlight_grupos_dad_menores_1,
        click: zoomToFeature
    });
  }


  function style_grupos_dad_menores_1(feature) {
      return {
          fillColor: getColor_grupos_dad_menores_1(feature.properties.grupos_dad_menores_1),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupos_dad_menores_1 =  L.geoJson(poligonos,{
    style: style_grupos_dad_menores_1,
    onEachFeature: onEachFeature_grupos_dad_menores_1
  }).addTo(map);

    });
//////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////GRUPO EDAD 2/////////////////////////////////////////////////////////
    $(".department4").click(function () {
          var layer_grupo_edad_2;
  var info_grupo_edad_2 = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_grupo_edad_2.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_grupo_edad_2.update = function (props) {
    this._div.innerHTML = '<h4> Poblacion 2 a 4 a&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupo_edad_2 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_grupo_edad_2(d) {
    return d >       9    ? '#800026' :
           d >       8    ? '#BD0026' :
           d >       7    ? '#E31A1C' :
           d >       5    ? '#FC4E2A' :
           d >       4    ? '#FD8D3C' :
           d >       3    ? '#FEB24C' :
           d >       1    ? '#FED976' :
                            '#FFEDA0' ;
  }

        var legend_grupo_edad_2 = L.control({position: 'bottomright'});

        legend_grupo_edad_2.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       1,       3,       4,       5,       7,       8,       9],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_grupo_edad_2(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_grupo_edad_2(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_grupo_edad_2.addTo(map);
    info_grupo_edad_2.update(layer.feature.properties);
    legend_grupo_edad_2.addTo(map);
  }
  

  function resetHighlight_grupo_edad_2(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupo_edad_2.remove(map)
    info_grupo_edad_2.update();
    legend_grupo_edad_2.remove(map);
  }
  
  function onEachFeature_grupo_edad_2(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupo_edad_2,
        mouseout: resetHighlight_grupo_edad_2,
        click: zoomToFeature
    });
  }


  function style_grupo_edad_2(feature) {
      return {
          fillColor: getColor_grupo_edad_2(feature.properties.grupo_edad_2),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_2 =  L.geoJson(poligonos,{
    style: style_grupo_edad_2,
    onEachFeature: onEachFeature_grupo_edad_2
  }).addTo(map);

    });

/////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////GRUPO EDAD 5///////////////////////////////////////////////
    $(".department5").click(function () {
        var layer_grupo_edad_5;
        var info_grupo_edad_5 = L.control({ position: 'topright' });
           function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }
    info_grupo_edad_5.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };
    info_grupo_edad_5.update = function (props) {
        this._div.innerHTML = '<h4> Poblacion 5 a 12 a&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupo_edad_5 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
    };
    function getColor_grupo_edad_5(d) {
        return d >      20    ? '#800026' :
           d >      18    ? '#BD0026' :
           d >      16    ? '#E31A1C' :
           d >      13    ? '#FC4E2A' :
           d >      11    ? '#FD8D3C' :
           d >       8    ? '#FEB24C' :
           d >       6    ? '#FED976' :
                       '#FFEDA0' ;
    }

    var legend_grupo_edad_5 = L.control({position: 'bottomright'});
    legend_grupo_edad_5.onAdd = function (map) {
       var div = L.DomUtil.create('div', 'info legend'),
       grades = [0,       6,       8,      11,      13,      16,      18,      20],
       labels = [],
       from, to;
       for (var i = 0; i < grades.length; i++) {
           from = grades[i];
           to = grades[i + 1];
           labels.push(
               '<i style="background:' + getColor_grupo_edad_5(from + 0.001) + '"></i> ' +
               from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
        }
        div.innerHTML = labels.join('<br>');
         return div;
    };

  function highlightFeature_grupo_edad_5(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_grupo_edad_5.addTo(map);
    info_grupo_edad_5.update(layer.feature.properties);
    legend_grupo_edad_5.addTo(map);
  }
  

  function resetHighlight_grupo_edad_5(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupo_edad_5.remove(map)
    info_grupo_edad_5.update();
    legend_grupo_edad_5.remove(map);
  }
  
  function onEachFeature_grupo_edad_5(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupo_edad_5,
        mouseout: resetHighlight_grupo_edad_5,
        click: zoomToFeature
    });
  }


  function style_grupo_edad_5(feature) {
      return {
          fillColor: getColor_grupo_edad_5(feature.properties.grupo_edad_5),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_5 =  L.geoJson(poligonos,{
    style: style_grupo_edad_5,
    onEachFeature: onEachFeature_grupo_edad_5
  }).addTo(map);

 });

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////GRUPO EDAD 13/////////////////////////////////////////

    $(".department6").click(function () {
        var layer_grupo_edad_13;
        var info_grupo_edad_13 = L.control({ position: 'topright' });
        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }
    info_grupo_edad_13.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };
    info_grupo_edad_13.update = function (props) {
        this._div.innerHTML = '<h4> Poblacion 13 a 17 a&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupo_edad_13 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
    };
    function getColor_grupo_edad_13(d) {
    return d >      12    ? '#800026' :
           d >      10    ? '#BD0026' :
           d >       9    ? '#E31A1C' :
           d >       7    ? '#FC4E2A' :
           d >       5    ? '#FD8D3C' :
           d >       4    ? '#FEB24C' :
           d >       2    ? '#FED976' :
                       '#FFEDA0' ;
    }

    var legend_grupo_edad_13 = L.control({position: 'bottomright'});
    legend_grupo_edad_13.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
        grades = [0,       2,       4,       5,       7,       9,      10,      12],
        labels = [],
        from, to;
        for (var i = 0; i < grades.length; i++) {
           from = grades[i];
           to = grades[i + 1];
            labels.push(
               '<i style="background:' + getColor_grupo_edad_13(from + 0.001) + '"></i> ' +
               from + (to ? ' &ndash; ' + to +' %': ' % +')
            );
        }
            div.innerHTML = labels.join('<br>');
            return div;
        };



    function highlightFeature_grupo_edad_13(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            opacity: 0.5,
            color: 'black',
            dashArray: '3',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        info_grupo_edad_13.addTo(map);
        info_grupo_edad_13.update(layer.feature.properties);
        legend_grupo_edad_13.addTo(map);
    }
  
    function resetHighlight_grupo_edad_13(e) {
        var layer = e.target;
        layer.setStyle({
            weight: 1,
            color: 'black',
           dashArray: '',
            fillOpacity: 0.7
      });
        info_grupo_edad_13.remove(map)
        info_grupo_edad_13.update();
        legend_grupo_edad_13.remove(map);
    }
  
  function onEachFeature_grupo_edad_13(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupo_edad_13,
        mouseout: resetHighlight_grupo_edad_13,
        click: zoomToFeature
    });
  }

  function style_grupo_edad_13(feature) {
      return {
          fillColor: getColor_grupo_edad_13(feature.properties.grupo_edad_13),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_13 =  L.geoJson(poligonos,{
    style: style_grupo_edad_13,
    onEachFeature: onEachFeature_grupo_edad_13
  }).addTo(map);

 });
//////////////////////////////////////////////////////////////////////////////////////////////
    $(".department7").click(function () {
        var layer_grupo_edad_18;
        var info_grupo_edad_18 = L.control({ position: 'topright' });
            function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }
        info_grupo_edad_18.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };
        info_grupo_edad_18.update = function (props) {
            this._div.innerHTML = '<h4> Poblacion 18 a 24 a&ntildeos</h4>' +  (props ?
            '<b>' + '</b><br />' + props.grupo_edad_18 + ' % de ' + props.poblacion_sexo + ' Personas'
            : 'mover el mouse sobre el mapa');
        };
        function getColor_grupo_edad_18(d) {
            return d >      16    ? '#800026' :
           d >      14    ? '#BD0026' :
           d >      12    ? '#E31A1C' :
           d >      10    ? '#FC4E2A' :
           d >       8    ? '#FD8D3C' :
           d >       6    ? '#FEB24C' :
           d >       4    ? '#FED976' :
                       '#FFEDA0' ;
        }
        var legend_grupo_edad_18 = L.control({position: 'bottomright'});
        legend_grupo_edad_18.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info legend'),
            grades = [0,       4,       6,       8,      10,      12,      14,      16],
            labels = [],
            from, to;
            for (var i = 0; i < grades.length; i++) {
               from = grades[i];
               to = grades[i + 1];
                labels.push(
                    '<i style="background:' + getColor_grupo_edad_18(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %': ' % +'));
            }
            div.innerHTML = labels.join('<br>');
            return div;
        };

      function highlightFeature_grupo_edad_18(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            opacity: 0.5,
            color: 'black',
            dashArray: '3',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        info_grupo_edad_18.addTo(map);
        info_grupo_edad_18.update(layer.feature.properties);
        legend_grupo_edad_18.addTo(map);
    }
  
      function resetHighlight_grupo_edad_18(e) {
        var layer = e.target;
        layer.setStyle({
            weight: 1,
            color: 'black',
            dashArray: '',
            fillOpacity: 0.7
        });
        info_grupo_edad_18.remove(map)
        info_grupo_edad_18.update();
        legend_grupo_edad_18.remove(map);
    }
  
    function onEachFeature_grupo_edad_18(feature, layer) {
        layer.on({
            mouseover: highlightFeature_grupo_edad_18,
            mouseout: resetHighlight_grupo_edad_18,
            click: zoomToFeature
        });
    }

      function style_grupo_edad_18(feature) {
          return {
            fillColor: getColor_grupo_edad_18(feature.properties.grupo_edad_18),
            weight: 1,
            opacity: 0.5,
            color: 'black',
            dashArray: '',
            fillOpacity: 0.7
         };
    }

  layer_grupo_edad_18 =  L.geoJson(poligonos,{
    style: style_grupo_edad_18,
    onEachFeature: onEachFeature_grupo_edad_18
  }).addTo(map);
});
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////grupo 25 a 64///////////////////////////////////////
    $(".department8").click(function () {
  var layer_grupo_edad_25;
  var info_grupo_edad_25 = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_grupo_edad_25.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_grupo_edad_25.update = function (props) {
    this._div.innerHTML = '<h4> Poblacion 15 a 64 a&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupo_edad_25 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_grupo_edad_25(d) {
    return d >      72    ? '#800026' :
           d >      69    ? '#BD0026' :
           d >      66    ? '#E31A1C' :
           d >      63    ? '#FC4E2A' :
           d >      61    ? '#FD8D3C' :
           d >      58    ? '#FEB24C' :
           d >      55    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_grupo_edad_25 = L.control({position: 'bottomright'});

        legend_grupo_edad_25.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      55,      58,      61,      63,      66,      69,      72],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_grupo_edad_25(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_grupo_edad_25(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_grupo_edad_25.addTo(map);
    info_grupo_edad_25.update(layer.feature.properties);
    legend_grupo_edad_25.addTo(map);
  }
  

  function resetHighlight_grupo_edad_25(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupo_edad_25.remove(map)
    info_grupo_edad_25.update();
    legend_grupo_edad_25.remove(map);
  }
  
  function onEachFeature_grupo_edad_25(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupo_edad_25,
        mouseout: resetHighlight_grupo_edad_25,
        click: zoomToFeature
    });
  }


  function style_grupo_edad_25(feature) {
      return {
          fillColor: getColor_grupo_edad_25(feature.properties.grupo_edad_25),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_25 =  L.geoJson(poligonos,{
    style: style_grupo_edad_25,
    onEachFeature: onEachFeature_grupo_edad_25
  }).addTo(map);


    });
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////GRUPO EDAD 65//////////////////////////////////////////////////////////
    $(".department9").click(function () {
        var layer_grupo_edad_65;
        var info_grupo_edad_65 = L.control({ position: 'topright' });
        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }
        info_grupo_edad_65.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };
        info_grupo_edad_65.update = function (props) {
            this._div.innerHTML = '<h4> Poblacion mas de 65 a&ntildeos</h4>' +  (props ?
            '<b>' + '</b><br />' + props.grupo_edad_65 + ' % de ' + props.poblacion_sexo + ' Personas'
            : 'mover el mouse sobre el mapa');
        };
        function getColor_grupo_edad_65(d) {
            return d >      21    ? '#800026' :
           d >      18    ? '#BD0026' :
           d >      15    ? '#E31A1C' :
           d >      12    ? '#FC4E2A' :
           d >       9    ? '#FD8D3C' :
           d >       6    ? '#FEB24C' :
           d >       3    ? '#FED976' :
                       '#FFEDA0' ;
        }
        var legend_grupo_edad_65 = L.control({position: 'bottomright'});
        legend_grupo_edad_65.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       3,       6,       9,      12,      15,      18,      21],
                labels = [],
                from, to;
            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];
                labels.push(
                    '<i style="background:' + getColor_grupo_edad_65(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };

         function highlightFeature_grupo_edad_65(e) {
            var layer = e.target;
            layer.setStyle({
                weight: 5,
                opacity: 0.5,
                color: 'black',
                dashArray: '3',
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.opera) {
                layer.bringToFront();
            }
            info_grupo_edad_65.addTo(map);
            info_grupo_edad_65.update(layer.feature.properties);
            legend_grupo_edad_65.addTo(map);
        }
  

      function resetHighlight_grupo_edad_65(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 1,
            color: 'black',
            dashArray: '',
            fillOpacity: 0.7

        });
        info_grupo_edad_65.remove(map)
        info_grupo_edad_65.update();
        legend_grupo_edad_65.remove(map);
      }
  
      function onEachFeature_grupo_edad_65(feature, layer) {
        layer.on({
            mouseover: highlightFeature_grupo_edad_65,
            mouseout: resetHighlight_grupo_edad_65,
            click: zoomToFeature
        });
      }


  function style_grupo_edad_65(feature) {
      return {
          fillColor: getColor_grupo_edad_65(feature.properties.grupo_edad_65),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_65 =  L.geoJson(poligonos,{
     style: style_grupo_edad_65,
     onEachFeature: onEachFeature_grupo_edad_65
    }).addTo(map);
 });
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////grupo mayores 80 /////////////////////////////////////////////////////
    $(".department10").click(function () {
          var layer_grupo_edad_80;
  var info_grupo_edad_80 = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_grupo_edad_80.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_grupo_edad_80.update = function (props) {
    this._div.innerHTML = '<h4> Poblacion mas de 80 a&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.grupo_edad_80 + ' % de ' + props.poblacion_sexo + ' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_grupo_edad_80(d) {
    return d >       6    ? '#800026' :
           d >       5    ? '#BD0026' :
           d >       4    ? '#E31A1C' :
           d >       3    ? '#FC4E2A' :
           d >       3    ? '#FD8D3C' :
           d >       2    ? '#FEB24C' :
           d >       1    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_grupo_edad_80 = L.control({position: 'bottomright'});

        legend_grupo_edad_80.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       1,       2,       3,       3,       4,       5,       6],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_grupo_edad_80(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %': ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_grupo_edad_80(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_grupo_edad_80.addTo(map);
    info_grupo_edad_80.update(layer.feature.properties);
    legend_grupo_edad_80.addTo(map);
  }
  

  function resetHighlight_grupo_edad_80(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_grupo_edad_80.remove(map)
    info_grupo_edad_80.update();
    legend_grupo_edad_80.remove(map);
  }
  
  function onEachFeature_grupo_edad_80(feature, layer) {
    layer.on({
        mouseover: highlightFeature_grupo_edad_80,
        mouseout: resetHighlight_grupo_edad_80,
        click: zoomToFeature
    });
  }


  function style_grupo_edad_80(feature) {
      return {
          fillColor: getColor_grupo_edad_80(feature.properties.grupo_edad_80),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_grupo_edad_80 =  L.geoJson(poligonos,{
    style: style_grupo_edad_80,
    onEachFeature: onEachFeature_grupo_edad_80
  }).addTo(map);

    });
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////EDAD PROMEDIO//////////////////////////////////////////////////////
    $(".department11").click(function () {
         var layer_edad_meedia;
  var info_edad_meedia = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_edad_meedia.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_edad_meedia.update = function (props) {
    this._div.innerHTML = '<h4> Edad Promedio</h4>' +  (props ?
        '<b>' + '</b><br />' + props.edad_meedia + ' A&ntildeos'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_edad_meedia(d) {
    return d >      42    ? '#800026' :
           d >      40    ? '#BD0026' :
           d >      37    ? '#E31A1C' :
           d >      34    ? '#FC4E2A' :
           d >      31    ? '#FD8D3C' :
           d >      28    ? '#FEB24C' :
           d >      25    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_edad_meedia = L.control({position: 'bottomright'});

        legend_edad_meedia.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      25,      28,      31,      34,      37,      40,      42],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_edad_meedia(from + 1.438544) + '"></i> ' +
                    from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_edad_meedia(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_edad_meedia.addTo(map);
    info_edad_meedia.update(layer.feature.properties);
    legend_edad_meedia.addTo(map);
  }
  

  function resetHighlight_edad_meedia(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_edad_meedia.remove(map)
    info_edad_meedia.update();
    legend_edad_meedia.remove(map);
  }
  
  function onEachFeature_edad_meedia(feature, layer) {
    layer.on({
        mouseover: highlightFeature_edad_meedia,
        mouseout: resetHighlight_edad_meedia,
        click: zoomToFeature
    });
  }


  function style_edad_meedia(feature) {
      return {
          fillColor: getColor_edad_meedia(feature.properties.edad_meedia),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_edad_meedia =  L.geoJson(poligonos,{
    style: style_edad_meedia,
    onEachFeature: onEachFeature_edad_meedia
  }).addTo(map);
    });
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////INDICE DEPENDENCIA POTENCIAL/////////////////////////////////////
    $(".department12").click(function () {
  var layer_indice_dependencia_potencial;
  var info_indice_dependencia_potencial = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_indice_dependencia_potencial.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_indice_dependencia_potencial.update = function (props) {
    this._div.innerHTML = '<h4> Indice de Dependencia Potencial</h4>' +  (props ?
        '<b>' + '</b><br />' + props.indice_dependencia_potencial + 'personas potencialmente inactivas/personas potencialmente activas'
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

        var legend_indice_dependencia_potencial = L.control({position: 'bottomright'});

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
        opacity: 0.5,
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
    info_indice_dependencia_potencial.remove(map)
    info_indice_dependencia_potencial.update();
    legend_indice_dependencia_potencial.remove(map);
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
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_indice_dependencia_potencial =  L.geoJson(poligonos,{
    style: style_indice_dependencia_potencial,
    onEachFeature: onEachFeature_indice_dependencia_potencial
  }).addTo(map);


    });
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////CONDICION ACTIVIDAD DESOCUPADOS///////////////////////////
    $(".department13").click(function () {
          var layer_condicion_actividad_desocupado;
  var info_condicion_actividad_desocupado = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_condicion_actividad_desocupado.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_condicion_actividad_desocupado.update = function (props) {
    this._div.innerHTML = '<h4> Condicion de Actividad Desocupado</h4>' +  (props ?
         + props.condicion_actividad_desocupado + ' Personas Desocupadas'+'<br />'+
         + props.condicion_actividad_inactivo + ' Personas Inactivas'+'<br />'+
         + props.condicion_actividad_ocupado + ' Personas Ocupadas'+'<br />'+
         + props.condicion_actividad_total + ' Total'

        : 'mover el mouse sobre el mapa');
  };
  function getColor_condicion_actividad_desocupado(d) {
    return d >       0.07    ? '#800026' :
           d >       0.06    ? '#BD0026' :
           d >       0.05    ? '#E31A1C' :
           d >       0.04    ? '#FC4E2A' :
           d >       0.03    ? '#FD8D3C' :
           d >       0.02    ? '#FEB24C' :
           d >       0.01    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_condicion_actividad_desocupado = L.control({position: 'bottomright'});

        legend_condicion_actividad_desocupado.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       1,       2,      3,      4,      5,      6,      7],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_condicion_actividad_desocupado(from/100.0 + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to +' %': '% +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_condicion_actividad_desocupado(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_condicion_actividad_desocupado.addTo(map);
    info_condicion_actividad_desocupado.update(layer.feature.properties);
    legend_condicion_actividad_desocupado.addTo(map);
  }
  

  function resetHighlight_condicion_actividad_desocupado(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_condicion_actividad_desocupado.remove(map)
    info_condicion_actividad_desocupado.update();
    legend_condicion_actividad_desocupado.remove(map);
  }
  
  function onEachFeature_condicion_actividad_desocupado(feature, layer) {
    layer.on({
        mouseover: highlightFeature_condicion_actividad_desocupado,
        mouseout: resetHighlight_condicion_actividad_desocupado,
        click: zoomToFeature
    });
  }


  function style_condicion_actividad_desocupado(feature) {
      return {
          fillColor: getColor_condicion_actividad_desocupado(feature.properties.condicion_actividad_desocupado/feature.properties.condicion_actividad_total),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_condicion_actividad_desocupado =  L.geoJson(poligonos,{
    style: style_condicion_actividad_desocupado,
    onEachFeature: onEachFeature_condicion_actividad_desocupado
  }).addTo(map);


    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////poblacion economicamente activa////////////////////////////////////////////////////
    $(".department14").click(function () {
          var layer_PEA;
  var info_PEA = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_PEA.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_PEA.update = function (props) {
    this._div.innerHTML = '<h4> Poblacion Economicamente Activa</h4>' +  (props ?
        '<b>' + '</b><br />' + props.PEA + ' de ' + props.poblacion_sexo +' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_PEA(d) {
    return d >     473    ? '#800026' :
           d >     406    ? '#BD0026' :
           d >     338    ? '#E31A1C' :
           d >     270    ? '#FC4E2A' :
           d >     203    ? '#FD8D3C' :
           d >     135    ? '#FEB24C' :
           d >      68    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_PEA = L.control({position: 'bottomright'});

        legend_PEA.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      68,     135,     203,     270,     338,     406,     473],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_PEA(from + 33.808750) + '"></i> ' +
                    from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_PEA(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_PEA.addTo(map);
    info_PEA.update(layer.feature.properties);
    legend_PEA.addTo(map);
  }
  

  function resetHighlight_PEA(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_PEA.remove(map)
    info_PEA.update();
    legend_PEA.remove(map);
  }
  
  function onEachFeature_PEA(feature, layer) {
    layer.on({
        mouseover: highlightFeature_PEA,
        mouseout: resetHighlight_PEA,
        click: zoomToFeature
    });
  }


  function style_PEA(feature) {
      return {
          fillColor: getColor_PEA(feature.properties.PEA),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_PEA =  L.geoJson(poligonos,{
    style: style_PEA,
    onEachFeature: onEachFeature_PEA
  }).addTo(map);

    });
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////PORC. NBI (NECESIDADES BASICAS INSATISFECHAS)//////////////////////////
    $(".department15").click(function () {
          var layer_porcentaje_poblacion_NBI;
  var info_porcentaje_poblacion_NBI = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_poblacion_NBI.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_poblacion_NBI.update = function (props) {
    this._div.innerHTML = '<h4> Porcentaje Poblacion con NBI</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_poblacion_NBI + ' % de ' + props.poblacion_sexo +' Personas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_poblacion_NBI(d) {
    return d >      16    ? '#800026' :
           d >      14    ? '#BD0026' :
           d >      11    ? '#E31A1C' :
           d >       9    ? '#FC4E2A' :
           d >       7    ? '#FD8D3C' :
           d >       5    ? '#FEB24C' :
           d >       2    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_porcentaje_poblacion_NBI = L.control({position: 'bottomright'});

        legend_porcentaje_poblacion_NBI.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       2,       5,       7,       9,      11,      14,      16],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_porcentaje_poblacion_NBI(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to +' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_porcentaje_poblacion_NBI(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_porcentaje_poblacion_NBI.addTo(map);
    info_porcentaje_poblacion_NBI.update(layer.feature.properties);
    legend_porcentaje_poblacion_NBI.addTo(map);
  }
  

  function resetHighlight_porcentaje_poblacion_NBI(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_poblacion_NBI.remove(map)
    info_porcentaje_poblacion_NBI.update();
    legend_porcentaje_poblacion_NBI.remove(map);
  }
  
  function onEachFeature_porcentaje_poblacion_NBI(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_poblacion_NBI,
        mouseout: resetHighlight_porcentaje_poblacion_NBI,
        click: zoomToFeature
    });
  }


  function style_porcentaje_poblacion_NBI(feature) {
      return {
          fillColor: getColor_porcentaje_poblacion_NBI(feature.properties.porcentaje_poblacion_NBI),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_poblacion_NBI =  L.geoJson(poligonos,{
    style: style_porcentaje_poblacion_NBI,
    onEachFeature: onEachFeature_porcentaje_poblacion_NBI
  }).addTo(map);
 });
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////INMIGRANTES NO LIMITROFES///////////////////////////////////////////////////////
    $(".department16").click(function () {
          var layer_porcentaje_inmigrantes_no_limitrofes;
  var info_porcentaje_inmigrantes_no_limitrofes = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_inmigrantes_no_limitrofes.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_inmigrantes_no_limitrofes.update = function (props) {
    this._div.innerHTML = '<h4> Porcentaje de Inmigrantes no Limitrofes</h4>' +  (props ?
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

        var legend_porcentaje_inmigrantes_no_limitrofes = L.control({position: 'bottomright'});

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
        opacity: 0.5,
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
    info_porcentaje_inmigrantes_no_limitrofes.remove(map)
    info_porcentaje_inmigrantes_no_limitrofes.update();
    legend_porcentaje_inmigrantes_no_limitrofes.remove(map);
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
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_inmigrantes_no_limitrofes =  L.geoJson(poligonos,{
    style: style_porcentaje_inmigrantes_no_limitrofes,
    onEachFeature: onEachFeature_porcentaje_inmigrantes_no_limitrofes
  }).addTo(map);
 });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(".department17").click(function () {
          var layer_porcentaje_hogares_unipersonales;
  var info_porcentaje_hogares_unipersonales = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_unipersonales.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_unipersonales.update = function (props) {
    this._div.innerHTML = '<h4> Porcentaje Hogares Unipersonales</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_unipersonales + ' % de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_unipersonales(d) {
    return d >      36    ? '#800026' :
           d >      31    ? '#BD0026' :
           d >      26    ? '#E31A1C' :
           d >      21    ? '#FC4E2A' :
           d >      16    ? '#FD8D3C' :
           d >      10    ? '#FEB24C' :
           d >       5    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_porcentaje_hogares_unipersonales = L.control({position: 'bottomright'});

        legend_porcentaje_hogares_unipersonales.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       5,      10,      16,      21,      26,      31,      36],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_porcentaje_hogares_unipersonales(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_porcentaje_hogares_unipersonales(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_porcentaje_hogares_unipersonales.addTo(map);
    info_porcentaje_hogares_unipersonales.update(layer.feature.properties);
    legend_porcentaje_hogares_unipersonales.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_unipersonales(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_unipersonales.remove(map)
    info_porcentaje_hogares_unipersonales.update();
    legend_porcentaje_hogares_unipersonales.remove(map);
  }
  
  function onEachFeature_porcentaje_hogares_unipersonales(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_unipersonales,
        mouseout: resetHighlight_porcentaje_hogares_unipersonales,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_unipersonales(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_unipersonales(feature.properties.porcentaje_hogares_unipersonales),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_unipersonales =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_unipersonales,
    onEachFeature: onEachFeature_porcentaje_hogares_unipersonales
  }).addTo(map);


    });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////PORCENTAJE HOGARES NUCLEARES////////////////////////////////////////////////////////

    $(".department18").click(function () {
  var layer_porcentaje_hogares_nucelares;
  var info_porcentaje_hogares_nucelares = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_nucelares.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_nucelares.update = function (props) {
    this._div.innerHTML = '<h4> Porcentaje Hogares Nucleares Completos de Pareja e Hijos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_nucelares + ' % de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_nucelares(d) {
    return d >      57    ? '#800026' :
           d >      50    ? '#BD0026' :
           d >      43    ? '#E31A1C' :
           d >      37    ? '#FC4E2A' :
           d >      30    ? '#FD8D3C' :
           d >      24    ? '#FEB24C' :
           d >      17    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_porcentaje_hogares_nucelares = L.control({position: 'bottomright'});

        legend_porcentaje_hogares_nucelares.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      17,      24,      30,      37,      43,      50,      57],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_porcentaje_hogares_nucelares(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to +' %': ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_porcentaje_hogares_nucelares(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_porcentaje_hogares_nucelares.addTo(map);
    info_porcentaje_hogares_nucelares.update(layer.feature.properties);
    legend_porcentaje_hogares_nucelares.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_nucelares(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_nucelares.remove(map)
    info_porcentaje_hogares_nucelares.update();
    legend_porcentaje_hogares_nucelares.remove(map);
  }
  
  function onEachFeature_porcentaje_hogares_nucelares(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_nucelares,
        mouseout: resetHighlight_porcentaje_hogares_nucelares,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_nucelares(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_nucelares(feature.properties.porcentaje_hogares_nucelares),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_nucelares =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_nucelares,
    onEachFeature: onEachFeature_porcentaje_hogares_nucelares
  }).addTo(map);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////PORC. HOGARES CON JEFA DE FLIA////////////////////////////////////////////
    $(".department19").click(function () {
          var layer_porcentaje_hogares_jefatura_femenina;
  var info_porcentaje_hogares_jefatura_femenina = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_jefatura_femenina.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_jefatura_femenina.update = function (props) {
    this._div.innerHTML = '<h4> Porcentaje Hogares con Jefatura Femenina</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_jefatura_femenina + ' % de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_jefatura_femenina(d) {
    return d >      53    ? '#800026' :
           d >      45    ? '#BD0026' :
           d >      38    ? '#E31A1C' :
           d >      30    ? '#FC4E2A' :
           d >      23    ? '#FD8D3C' :
           d >      15    ? '#FEB24C' :
           d >       8    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_porcentaje_hogares_jefatura_femenina = L.control({position: 'bottomright'});

        legend_porcentaje_hogares_jefatura_femenina.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       8,      15,      23,      30,      38,      45,      53],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_porcentaje_hogares_jefatura_femenina(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_porcentaje_hogares_jefatura_femenina(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_porcentaje_hogares_jefatura_femenina.addTo(map);
    info_porcentaje_hogares_jefatura_femenina.update(layer.feature.properties);
    legend_porcentaje_hogares_jefatura_femenina.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_jefatura_femenina(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_jefatura_femenina.remove(map)
    info_porcentaje_hogares_jefatura_femenina.update();
    legend_porcentaje_hogares_jefatura_femenina.remove(map);
  }
  
  function onEachFeature_porcentaje_hogares_jefatura_femenina(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_jefatura_femenina,
        mouseout: resetHighlight_porcentaje_hogares_jefatura_femenina,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_jefatura_femenina(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_jefatura_femenina(feature.properties.porcentaje_hogares_jefatura_femenina),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_jefatura_femenina =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_jefatura_femenina,
    onEachFeature: onEachFeature_porcentaje_hogares_jefatura_femenina
  }).addTo(map);


    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////PORC. HOGARES HIJOS 0-4/////////////////////////////////////////////////////////
    $(".department20").click(function () {
          var layer_porcentaje_hogares_hijos_0;
  var info_porcentaje_hogares_hijos_0 = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_hijos_0.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_hijos_0.update = function (props) {
    this._div.innerHTML = '<h4> Porcentaje Hogares con Hijos de 0 a 4 A&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_hijos_0 + ' % de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_hijos_0(d) {
    return d >      30    ? '#800026' :
           d >      25    ? '#BD0026' :
           d >      21    ? '#E31A1C' :
           d >      17    ? '#FC4E2A' :
           d >      13    ? '#FD8D3C' :
           d >       8    ? '#FEB24C' :
           d >       4    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_porcentaje_hogares_hijos_0 = L.control({position: 'bottomright'});

        legend_porcentaje_hogares_hijos_0.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       4,       8,      13,      17,      21,      25,      30],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_porcentaje_hogares_hijos_0(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_porcentaje_hogares_hijos_0(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_porcentaje_hogares_hijos_0.addTo(map);
    info_porcentaje_hogares_hijos_0.update(layer.feature.properties);
    legend_porcentaje_hogares_hijos_0.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_hijos_0(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_hijos_0.remove(map)
    info_porcentaje_hogares_hijos_0.update();
    legend_porcentaje_hogares_hijos_0.remove(map);
  }
  
  function onEachFeature_porcentaje_hogares_hijos_0(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_hijos_0,
        mouseout: resetHighlight_porcentaje_hogares_hijos_0,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_hijos_0(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_hijos_0(feature.properties.porcentaje_hogares_hijos_0),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_hijos_0 =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_hijos_0,
    onEachFeature: onEachFeature_porcentaje_hogares_hijos_0
  }).addTo(map);
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////porc. hoga may 18/////////////////////////////////////////////////////
    $(".department21").click(function () {
         var layer_porcentaje_hogares_hijos_18;
  var info_porcentaje_hogares_hijos_18 = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_hijos_18.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_hijos_18.update = function (props) {
    this._div.innerHTML = '<h4> Porcentaje Hogares con Hijos Menores de 18 A&ntildeos</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_hijos_18 + ' % de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_hijos_18(d) {
    return d >      61    ? '#800026' :
           d >      54    ? '#BD0026' :
           d >      46    ? '#E31A1C' :
           d >      39    ? '#FC4E2A' :
           d >      31    ? '#FD8D3C' :
           d >      24    ? '#FEB24C' :
           d >      16    ? '#FED976' :
                            '#FFEDA0' ;
  }

        var legend_porcentaje_hogares_hijos_18 = L.control({position: 'bottomright'});

        legend_porcentaje_hogares_hijos_18.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      16,      24,      31,      39,      46,      54,      61],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_porcentaje_hogares_hijos_18(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to +' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_porcentaje_hogares_hijos_18(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_porcentaje_hogares_hijos_18.addTo(map);
    info_porcentaje_hogares_hijos_18.update(layer.feature.properties);
    legend_porcentaje_hogares_hijos_18.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_hijos_18(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_hijos_18.remove(map)
    info_porcentaje_hogares_hijos_18.update();
    legend_porcentaje_hogares_hijos_18.remove(map);
  }
  
  function onEachFeature_porcentaje_hogares_hijos_18(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_hijos_18,
        mouseout: resetHighlight_porcentaje_hogares_hijos_18,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_hijos_18(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_hijos_18(feature.properties.porcentaje_hogares_hijos_18),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_hijos_18 =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_hijos_18,
    onEachFeature: onEachFeature_porcentaje_hogares_hijos_18
  }).addTo(map);
 });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////INDICE ANALFABETISMO////////////////////////////////////////////////////
    $(".department22").click(function () {
          var layer_leer_escribir_no;
  var info_leer_escribir_no = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_leer_escribir_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_leer_escribir_no.update = function (props) {
    this._div.innerHTML = '<h4> Indice de Analfabetismo </h4>' +  (props ?
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

        var legend_leer_escribir_no = L.control({position: 'bottomright'});

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
        opacity: 0.5,
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
    info_leer_escribir_no.remove(map)
    info_leer_escribir_no.update();
    legend_leer_escribir_no.remove(map);
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
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_leer_escribir_no =  L.geoJson(poligonos,{
    style: style_leer_escribir_no,
    onEachFeature: onEachFeature_leer_escribir_no
  }).addTo(map);
});
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////PERS. Q NO USAN COMPU//////////////////////////////////////////////
    $(".department23").click(function () {
         var layer_computadora_no;
  var info_computadora_no = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_computadora_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_computadora_no.update = function (props) {
    this._div.innerHTML = '<h4> Personas que no Utilizan Computadora</h4>' +  (props ?
         + props.computadora_no + ' de ' + props.computadora_total + ' Personas No Utilizan Computadora'

        : 'mover el mouse sobre el mapa');
  };
  function getColor_computadora_no(d) {
    return 100*d >     70    ? '#800026' :
           100*d >     60    ? '#BD0026' :
           100*d >     50    ? '#E31A1C' :
           100*d >     40    ? '#FC4E2A' :
           100*d >     30    ? '#FD8D3C' :
           100*d >     20    ? '#FEB24C' :
           100*d >     10    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_computadora_no = L.control({position: 'bottomright'});

        legend_computadora_no.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      10,     20,     30,     40,     50,     60,     70],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_computadora_no(from/100.0 + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to +' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_computadora_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_computadora_no.addTo(map);
    info_computadora_no.update(layer.feature.properties);
    legend_computadora_no.addTo(map);
  }
  

  function resetHighlight_computadora_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_computadora_no.remove(map)
    info_computadora_no.update();
    legend_computadora_no.remove(map);
  }
  
  function onEachFeature_computadora_no(feature, layer) {
    layer.on({
        mouseover: highlightFeature_computadora_no,
        mouseout: resetHighlight_computadora_no,
        click: zoomToFeature
    });
  }


  function style_computadora_no(feature) {
      return {
          fillColor: getColor_computadora_no(feature.properties.computadora_no/feature.properties.computadora_total),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_computadora_no =  L.geoJson(poligonos,{
    style: style_computadora_no,
    onEachFeature: onEachFeature_computadora_no
  }).addTo(map);
 });
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////VIVIENDAS CADA 1000 HAB.////////////////////////////////////////////
    $(".department24").click(function () {
      var layer_viviendas_1000_habitantes;
  var info_viviendas_1000_habitantes = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_viviendas_1000_habitantes.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_viviendas_1000_habitantes.update = function (props) {
    this._div.innerHTML = '<h4> Viviendas cada 1000 habitantes</h4>' +  (props ?
        '<b>' + '</b><br />' + props.viviendas_1000_habitantes + ' Viviendas'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_viviendas_1000_habitantes(d) {
    return d >     700    ? '#800026' :
           d >     600    ? '#BD0026' :
           d >     500    ? '#E31A1C' :
           d >     400    ? '#FC4E2A' :
           d >     300    ? '#FD8D3C' :
           d >     200    ? '#FEB24C' :
           d >     100    ? '#FED976' :
                            '#FFEDA0' ;
  }

        var legend_viviendas_1000_habitantes = L.control({position: 'bottomright'});

        legend_viviendas_1000_habitantes.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,     100,     200,     300,     400,     500,    600,    700],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_viviendas_1000_habitantes(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_viviendas_1000_habitantes(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_viviendas_1000_habitantes.addTo(map);
    info_viviendas_1000_habitantes.update(layer.feature.properties);
    legend_viviendas_1000_habitantes.addTo(map);
  }
  

  function resetHighlight_viviendas_1000_habitantes(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_viviendas_1000_habitantes.remove(map)
    info_viviendas_1000_habitantes.update();
    legend_viviendas_1000_habitantes.remove(map);
  }
  
  function onEachFeature_viviendas_1000_habitantes(feature, layer) {
    layer.on({
        mouseover: highlightFeature_viviendas_1000_habitantes,
        mouseout: resetHighlight_viviendas_1000_habitantes,
        click: zoomToFeature
    });
  }


  function style_viviendas_1000_habitantes(feature) {
      return {
          fillColor: getColor_viviendas_1000_habitantes(feature.properties.viviendas_1000_habitantes),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_viviendas_1000_habitantes =  L.geoJson(poligonos,{
    style: style_viviendas_1000_habitantes,
    onEachFeature: onEachFeature_viviendas_1000_habitantes
  }).addTo(map);
 });
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////HOG. TOTALES///////////////////////////////////////////////////////////////
    $(".department25").click(function () {
       var layer_hogares_totales;
  var info_hogares_totales = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_totales.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_totales.update = function (props) {
    this._div.innerHTML = '<h4> Hogares Totales</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_totales(d) {
    return d >     304    ? '#800026' :
           d >     260    ? '#BD0026' :
           d >     217    ? '#E31A1C' :
           d >     174    ? '#FC4E2A' :
           d >     130    ? '#FD8D3C' :
           d >      87    ? '#FEB24C' :
           d >      43    ? '#FED976' :
                            '#FFEDA0' ;
  }

        var legend_hogares_totales = L.control({position: 'bottomright'});

        legend_hogares_totales.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      43,      87,     130,     174,     217,     260,     304],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_totales(from + 21.706539) + '"></i> ' +
                    from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_totales(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_totales.addTo(map);
    info_hogares_totales.update(layer.feature.properties);
    legend_hogares_totales.addTo(map);
  }
  

  function resetHighlight_hogares_totales(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_totales.remove(map)
    info_hogares_totales.update();
    legend_hogares_totales.remove(map);
  }
  
  function onEachFeature_hogares_totales(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_totales,
        mouseout: resetHighlight_hogares_totales,
        click: zoomToFeature
    });
  }


  function style_hogares_totales(feature) {
      return {
          fillColor: getColor_hogares_totales(feature.properties.hogares_totales),
          weight: 1,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_totales =  L.geoJson(poligonos,{
    style: style_hogares_totales,
    onEachFeature: onEachFeature_hogares_totales
  }).addTo(map);
});

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////PORC. HOGARES CON NBI////////////////////////////////////////////
    $(".department26").click(function () {
      var layer_porcentaje_hogares_NBI;
  var info_porcentaje_hogares_NBI = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_porcentaje_hogares_NBI.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_porcentaje_hogares_NBI.update = function (props) {
    this._div.innerHTML = '<h4> Porcentaje Hogares con NBI</h4>' +  (props ?
        '<b>' + '</b><br />' + props.porcentaje_hogares_NBI + ' % de ' + props.hogares_totales +' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_porcentaje_hogares_NBI(d) {
    return d >      13    ? '#800026' :
           d >      11    ? '#BD0026' :
           d >       9    ? '#E31A1C' :
           d >       7    ? '#FC4E2A' :
           d >       6    ? '#FD8D3C' :
           d >       4    ? '#FEB24C' :
           d >       2    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_porcentaje_hogares_NBI = L.control({position: 'bottomright'});

        legend_porcentaje_hogares_NBI.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       2,       4,       6,       7,       9,      11,      13],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_porcentaje_hogares_NBI(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to + ' %' : ' % +'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_porcentaje_hogares_NBI(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_porcentaje_hogares_NBI.addTo(map);
    info_porcentaje_hogares_NBI.update(layer.feature.properties);
    legend_porcentaje_hogares_NBI.addTo(map);
  }
  

  function resetHighlight_porcentaje_hogares_NBI(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_porcentaje_hogares_NBI.remove(map)
    info_porcentaje_hogares_NBI.update();
    legend_porcentaje_hogares_NBI.remove(map);
  }
  
  function onEachFeature_porcentaje_hogares_NBI(feature, layer) {
    layer.on({
        mouseover: highlightFeature_porcentaje_hogares_NBI,
        mouseout: resetHighlight_porcentaje_hogares_NBI,
        click: zoomToFeature
    });
  }


  function style_porcentaje_hogares_NBI(feature) {
      return {
          fillColor: getColor_porcentaje_hogares_NBI(feature.properties.porcentaje_hogares_NBI),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_porcentaje_hogares_NBI =  L.geoJson(poligonos,{
    style: style_porcentaje_hogares_NBI,
    onEachFeature: onEachFeature_porcentaje_hogares_NBI
  }).addTo(map);

 });
////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////HOG. CON AGUA DE RED//////////////////////////////////////////
    $(".department27").click(function () {
      var layer_hogares_agua_red;
  var info_hogares_agua_red = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_agua_red.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_agua_red.update = function (props) {
    this._div.innerHTML = '<h4> Hogares con agua de red</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_agua_red + ' de '+ props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_agua_red(d) {
    return d >     350    ? '#800026' :
           d >     300    ? '#BD0026' :
           d >     250    ? '#E31A1C' :
           d >     200    ? '#FC4E2A' :
           d >     150    ? '#FD8D3C' :
           d >      100    ? '#FEB24C' :
           d >      50    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_hogares_agua_red = L.control({position: 'bottomright'});

        legend_hogares_agua_red.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      50,      100,     150,     200,     250,     300,     350],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_agua_red(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_agua_red(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_agua_red.addTo(map);
    info_hogares_agua_red.update(layer.feature.properties);
    legend_hogares_agua_red.addTo(map);
  }
  

  function resetHighlight_hogares_agua_red(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_agua_red.remove(map)
    info_hogares_agua_red.update();
    legend_hogares_agua_red.remove(map);
  }
  
  function onEachFeature_hogares_agua_red(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_agua_red,
        mouseout: resetHighlight_hogares_agua_red,
        click: zoomToFeature
    });
  }


  function style_hogares_agua_red(feature) {
      return {
          fillColor: getColor_hogares_agua_red(feature.properties.hogares_agua_red),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_agua_red =  L.geoJson(poligonos,{
    style: style_hogares_agua_red,
    onEachFeature: onEachFeature_hogares_agua_red
  }).addTo(map);
});
//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////HOG. SIN AGUA/////////////////////////////////////
    $(".department28").click(function () {
        var layer_hogares_sin_agua;
  var info_hogares_sin_agua = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_sin_agua.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_sin_agua.update = function (props) {
    this._div.innerHTML = '<h4> Hogares sin provisión de agua dentro de la vivienda</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_sin_agua + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_sin_agua(d) {
    return d >      35    ? '#800026' :
           d >      30    ? '#BD0026' :
           d >      25    ? '#E31A1C' :
           d >      20    ? '#FC4E2A' :
           d >      15    ? '#FD8D3C' :
           d >      10    ? '#FEB24C' :
           d >       5    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_hogares_sin_agua = L.control({position: 'bottomright'});

        legend_hogares_sin_agua.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       5,       10,      15,      20,      25,      30,      35],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_sin_agua(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_sin_agua(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_sin_agua.addTo(map);
    info_hogares_sin_agua.update(layer.feature.properties);
    legend_hogares_sin_agua.addTo(map);
  }
  

  function resetHighlight_hogares_sin_agua(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_sin_agua.remove(map)
    info_hogares_sin_agua.update();
    legend_hogares_sin_agua.remove(map);
  }
  
  function onEachFeature_hogares_sin_agua(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_sin_agua,
        mouseout: resetHighlight_hogares_sin_agua,
        click: zoomToFeature
    });
  }


  function style_hogares_sin_agua(feature) {
      return {
          fillColor: getColor_hogares_sin_agua(feature.properties.hogares_sin_agua),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_sin_agua =  L.geoJson(poligonos,{
    style: style_hogares_sin_agua,
    onEachFeature: onEachFeature_hogares_sin_agua
  }).addTo(map);
 });
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////HOG. CON CLOACAS//////////////////////////////////////
    $(".department29").click(function () {
        var layer_hogares_cloaca;
  var info_hogares_cloaca = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_cloaca.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_cloaca.update = function (props) {
    this._div.innerHTML = '<h4> Hogares con desagüe cloacal</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_cloaca + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_cloaca(d) {
    return d >     350    ? '#800026' :
           d >     300    ? '#BD0026' :
           d >     250    ? '#E31A1C' :
           d >     200    ? '#FC4E2A' :
           d >      150    ? '#FD8D3C' :
           d >      100    ? '#FEB24C' :
           d >      50    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_hogares_cloaca = L.control({position: 'bottomright'});

        legend_hogares_cloaca.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      50,      100,      150,     200,     250,     300,     350],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_cloaca(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_cloaca(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_cloaca.addTo(map);
    info_hogares_cloaca.update(layer.feature.properties);
    legend_hogares_cloaca.addTo(map);
  }
  

  function resetHighlight_hogares_cloaca(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_cloaca.remove(map)
    info_hogares_cloaca.update();
    legend_hogares_cloaca.remove(map);
  }
  
  function onEachFeature_hogares_cloaca(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_cloaca,
        mouseout: resetHighlight_hogares_cloaca,
        click: zoomToFeature
    });
  }


  function style_hogares_cloaca(feature) {
      return {
          fillColor: getColor_hogares_cloaca(feature.properties.hogares_cloaca),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_cloaca =  L.geoJson(poligonos,{
    style: style_hogares_cloaca,
    onEachFeature: onEachFeature_hogares_cloaca
  }).addTo(map);
});
////////////////////////////////////////////////////////////////////////////////////
//////////////////////////HOG. CON DESC. DE AGUA////////////////////////////////////
    $(".department30").click(function () {
          var layer_hogares_descarga_agua;
  var info_hogares_descarga_agua = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_descarga_agua.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_descarga_agua.update = function (props) {
    this._div.innerHTML = '<h4> Hogares con Instalación Sanitaria con Descarga de Agua</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_descarga_agua + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_descarga_agua(d) {
    return d >     350    ? '#800026' :
           d >     300    ? '#BD0026' :
           d >     250    ? '#E31A1C' :
           d >     200    ? '#FC4E2A' :
           d >     150    ? '#FD8D3C' :
           d >     100    ? '#FEB24C' :
           d >      50    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_hogares_descarga_agua = L.control({position: 'bottomright'});

        legend_hogares_descarga_agua.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      50,     100,     150,     200,     250,     300,     350],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_descarga_agua(from + 19.985516) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_descarga_agua(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_descarga_agua.addTo(map);
    info_hogares_descarga_agua.update(layer.feature.properties);
    legend_hogares_descarga_agua.addTo(map);
  }
  

  function resetHighlight_hogares_descarga_agua(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_descarga_agua.remove(map)
    info_hogares_descarga_agua.update();
    legend_hogares_descarga_agua.remove(map);
  }
  
  function onEachFeature_hogares_descarga_agua(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_descarga_agua,
        mouseout: resetHighlight_hogares_descarga_agua,
        click: zoomToFeature
    });
  }


  function style_hogares_descarga_agua(feature) {
      return {
          fillColor: getColor_hogares_descarga_agua(feature.properties.hogares_descarga_agua),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_descarga_agua =  L.geoJson(poligonos,{
    style: style_hogares_descarga_agua,
    onEachFeature: onEachFeature_hogares_descarga_agua
  }).addTo(map);
});
////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////HOG. CON RED DE GAS///////////////////////////////////////////
    $(".department31").click(function () {
       var layer_hogares_gas_red;
  var info_hogares_gas_red = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_gas_red.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_gas_red.update = function (props) {
    this._div.innerHTML = '<h4> Hogares con Gas de Red</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_gas_red + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_gas_red(d) {
    return d >     350    ? '#800026' :
           d >     300    ? '#BD0026' :
           d >     250    ? '#E31A1C' :
           d >     200    ? '#FC4E2A' :
           d >     150    ? '#FD8D3C' :
           d >     100    ? '#FEB24C' :
           d >      50    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_hogares_gas_red = L.control({position: 'bottomright'});

        legend_hogares_gas_red.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      50,     100,     150,     200,     250,     300,     350],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_gas_red(from + 12.935140) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_gas_red(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_gas_red.addTo(map);
    info_hogares_gas_red.update(layer.feature.properties);
    legend_hogares_gas_red.addTo(map);
  }
  

  function resetHighlight_hogares_gas_red(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_gas_red.remove(map)
    info_hogares_gas_red.update();
    legend_hogares_gas_red.remove(map);
  }
  
  function onEachFeature_hogares_gas_red(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_gas_red,
        mouseout: resetHighlight_hogares_gas_red,
        click: zoomToFeature
    });
  }


  function style_hogares_gas_red(feature) {
      return {
          fillColor: getColor_hogares_gas_red(feature.properties.hogares_gas_red),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_gas_red =  L.geoJson(poligonos,{
    style: style_hogares_gas_red,
    onEachFeature: onEachFeature_hogares_gas_red
  }).addTo(map);

});
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////HOG. SIN HELADERA////////////////////////////////////////////////
    $(".department32").click(function () {
          var layer_hogares_heladera_no;
  var info_hogares_heladera_no = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_heladera_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_heladera_no.update = function (props) {
    this._div.innerHTML = '<h4> Hogares Sin Heladera</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_heladera_no + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_heladera_no(d) {
    return d >      21    ? '#800026' :
           d >      18    ? '#BD0026' :
           d >      15    ? '#E31A1C' :
           d >      12    ? '#FC4E2A' :
           d >       9    ? '#FD8D3C' :
           d >       6    ? '#FEB24C' :
           d >       3    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_hogares_heladera_no = L.control({position: 'bottomright'});

        legend_hogares_heladera_no.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       3,      6,       9,       12,       15,      18,      21],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_heladera_no(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_heladera_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_heladera_no.addTo(map);
    info_hogares_heladera_no.update(layer.feature.properties);
    legend_hogares_heladera_no.addTo(map);
  }
  

  function resetHighlight_hogares_heladera_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_heladera_no.remove(map)
    info_hogares_heladera_no.update();
    legend_hogares_heladera_no.remove(map);
  }
  
  function onEachFeature_hogares_heladera_no(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_heladera_no,
        mouseout: resetHighlight_hogares_heladera_no,
        click: zoomToFeature
    });
  }


  function style_hogares_heladera_no(feature) {
      return {
          fillColor: getColor_hogares_heladera_no(feature.properties.hogares_heladera_no),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_heladera_no =  L.geoJson(poligonos,{
    style: style_hogares_heladera_no,
    onEachFeature: onEachFeature_hogares_heladera_no
  }).addTo(map);

});
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////HOG. SIN COMPU///////////////////////////////////////////////////
    $(".department33").click(function () {
       var layer_hogares_computadora_no;
  var info_hogares_computadora_no = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_computadora_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_computadora_no.update = function (props) {
    this._div.innerHTML = '<h4> Hogares que No Utilizan Computadora</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_computadora_no + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_computadora_no(d) {
    return d >     175    ? '#800026' :
           d >     150    ? '#BD0026' :
           d >     125    ? '#E31A1C' :
           d >      100    ? '#FC4E2A' :
           d >      75    ? '#FD8D3C' :
           d >      50    ? '#FEB24C' :
           d >      25    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_hogares_computadora_no = L.control({position: 'bottomright'});

        legend_hogares_computadora_no.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      25,      50,      75,      100,     125,     150,     175],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_computadora_no(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_computadora_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_computadora_no.addTo(map);
    info_hogares_computadora_no.update(layer.feature.properties);
    legend_hogares_computadora_no.addTo(map);
  }
  

  function resetHighlight_hogares_computadora_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_computadora_no.remove(map)
    info_hogares_computadora_no.update();
    legend_hogares_computadora_no.remove(map);
  }
  
  function onEachFeature_hogares_computadora_no(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_computadora_no,
        mouseout: resetHighlight_hogares_computadora_no,
        click: zoomToFeature
    });
  }


  function style_hogares_computadora_no(feature) {
      return {
          fillColor: getColor_hogares_computadora_no(feature.properties.hogares_computadora_no),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_computadora_no =  L.geoJson(poligonos,{
    style: style_hogares_computadora_no,
    onEachFeature: onEachFeature_hogares_computadora_no
  }).addTo(map);

});
//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////HOG. SIN CELULARES//////////////////////////////////////////////////
    $(".department34").click(function () {
        var layer_hogares_celular_no;
  var info_hogares_celular_no = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_celular_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_celular_no.update = function (props) {
    this._div.innerHTML = '<h4> Hogares que No Poseen Telefono Celular</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_celular_no + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_celular_no(d) {
    return d >      49    ? '#800026' :
           d >      42    ? '#BD0026' :
           d >      35    ? '#E31A1C' :
           d >      28    ? '#FC4E2A' :
           d >      21   ? '#FD8D3C' :
           d >       14    ? '#FEB24C' :
           d >       7    ? '#FED976' :
                       '#FFEDA0' ;
  }

        var legend_hogares_celular_no = L.control({position: 'bottomright'});

        legend_hogares_celular_no.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,       7,       14,      21,      28,      35,      42,      49],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_celular_no(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_celular_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_celular_no.addTo(map);
    info_hogares_celular_no.update(layer.feature.properties);
    legend_hogares_celular_no.addTo(map);
  }
  

  function resetHighlight_hogares_celular_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_celular_no.remove(map)
    info_hogares_celular_no.update();
    legend_hogares_celular_no.remove(map);
  }
  
  function onEachFeature_hogares_celular_no(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_celular_no,
        mouseout: resetHighlight_hogares_celular_no,
        click: zoomToFeature
    });
  }


  function style_hogares_celular_no(feature) {
      return {
          fillColor: getColor_hogares_celular_no(feature.properties.hogares_celular_no),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_celular_no =  L.geoJson(poligonos,{
    style: style_hogares_celular_no,
    onEachFeature: onEachFeature_hogares_celular_no
  }).addTo(map);
});
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////HOG. SIN TELE DE LINEA////////////////////////////////////////

    $(".department35").click(function () {
          var layer_hogares_telefono_no;
  var info_hogares_telefono_no = L.control({ position: 'topright' });
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  info_hogares_telefono_no.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  info_hogares_telefono_no.update = function (props) {
    this._div.innerHTML = '<h4> Hogares que No Poseen Telefono de Linea</h4>' +  (props ?
        '<b>' + '</b><br />' + props.hogares_telefono_no + ' de ' + props.hogares_totales + ' Hogares'
        : 'mover el mouse sobre el mapa');
  };
  function getColor_hogares_telefono_no(d) {
    return d >     175    ? '#800026' :
           d >     150    ? '#BD0026' :
           d >     125    ? '#E31A1C' :
           d >     100    ? '#FC4E2A' :
           d >      75    ? '#FD8D3C' :
           d >      50    ? '#FEB24C' :
           d >      25    ? '#FED976' :
                            '#FFEDA0' ;
  }

        var legend_hogares_telefono_no = L.control({position: 'bottomright'});

        legend_hogares_telefono_no.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0,      25,      50,      75,     100,     125,     150,     175],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor_hogares_telefono_no(from + 0.001) + '"></i> ' +
                    from + (to ? ' &ndash; ' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };



  function highlightFeature_hogares_telefono_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        opacity: 0.5,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    info_hogares_telefono_no.addTo(map);
    info_hogares_telefono_no.update(layer.feature.properties);
    legend_hogares_telefono_no.addTo(map);
  }
  

  function resetHighlight_hogares_telefono_no(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7

    });
    info_hogares_telefono_no.remove(map)
    info_hogares_telefono_no.update();
    legend_hogares_telefono_no.remove(map);
  }
  
  function onEachFeature_hogares_telefono_no(feature, layer) {
    layer.on({
        mouseover: highlightFeature_hogares_telefono_no,
        mouseout: resetHighlight_hogares_telefono_no,
        click: zoomToFeature
    });
  }


  function style_hogares_telefono_no(feature) {
      return {
          fillColor: getColor_hogares_telefono_no(feature.properties.hogares_telefono_no),
          weight: 1,
          opacity: 0.5,
          color: 'black',
          dashArray: '',
          fillOpacity: 0.7
      };
  }

  layer_hogares_telefono_no =  L.geoJson(poligonos,{
    style: style_hogares_telefono_no,
    onEachFeature: onEachFeature_hogares_telefono_no
  }).addTo(map);

});
////////////////////////////////////////////////////////////////////

    ///////////////////////////////////LIMPIA MAPA///////////////////////////////////////////////////////////////
    $(".department36").click(function () {
         function style3(feature) {
          return {
             weight: 1,
             opacity: 0,
             color: 'black',
             dashArray: '3',
             fillOpacity: 0.0
         };
        }
         map.eachLayer(function (layer) {
           if (layer != base ) { map.removeLayer(layer);}
        });
    });
})

mapInit();


function mapInit() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiZGNoZW5nMDEwNCIsImEiOiJjaXE0MDh2MHQwMG9xZnhtNGg0azVybGxtIn0.7jdNnbpd8kQI3qO1HfSnUg';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v9',
      zoom: 10,
      center: [-118.6919112, 34.0201812]
  });

  map.addControl(new mapboxgl.NavigationControl());

  let layerList = document.getElementById('menu');
  let inputs = layerList.getElementsByTagName('li');
  let slider = document.getElementById('slider');
  let sliderValue = document.getElementById('slider-value');

  function switchLayer(layer) {
      var layerId = layer.currentTarget.id;
      $("#menu li").removeClass('active')
      $(this).addClass("active");
      map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
      map.on('style.load', function() {
        addSolar(map);
        addBlockgroups(map);
        addSolarHover(map);
        map.setPaintProperty('solar', 'fill-opacity', parseInt(slider.value, 10) / 100);

  });
  }

  [...inputs].forEach(function (input) {
      console.log('yre');
      input.onclick = switchLayer;
  });

  function addBlockgroups(map) {
      map.addLayer({
          "id": "blockgroups_2010",
          "type": "line",
          "source": {
              type: 'vector',
              url: 'mapbox://dcheng0104.b4kzdxd6'
          },
          'layout': {
              'visibility': 'visible'
          },
          "source-layer":"blockgroups_2010-20fc4n",
          "paint": {
                  // "fill-color": "#e28679",
                  "line-color": "#e1cdb5"
              },
               'line-opacity': 0.7

      });

  }

  function addSolar(map) {
      map.addLayer({
          "id": "solar",
          "type": "fill",
          "source": {
              type: 'vector',
              url: 'mapbox://dcheng0104.1jed7c0m'
          },
          'layout': {
              'visibility': 'visible'
          },
          "source-layer":"solar_ration_no789-24q78c",
          "paint": {
                  "fill-color": {
                      property: 'solar_rati',
                      stops: [
                        [0.79,'#edf8fb'],
                        [1.39,'#b3cde3'],
                        [2.48,'#8c96c6'],
                        [20,'#8856a7'],
                        [245,'#810f7c']
                      ]

                  },
                  "fill-outline-color": "#e1cdb5",
            'fill-opacity': 1
              }
      });  

  }

  function addSolarHover(map) {
      map.addLayer({
          "id": "solar-hover",
          "type": "fill",
          "source": {
              type: 'vector',
              url: 'mapbox://dcheng0104.1jed7c0m'
          },
          // 'layout': {
          //     'visibility': 'visible'
          // },
          "source-layer":"solar_ration_no789-24q78c",
          "paint": {
             // "fill-outline-color": "#484896",
              "fill-color": "#bdbdbd",
              "fill-opacity": 0.75
              },
          "filter": ["==", "FIPS", ""]

      });     
  }


  map.on('load', function () {
    addSolar(map);
    addBlockgroups(map);
    addSolarHover(map)

    slider.addEventListener('input', function(e) {
      map.setPaintProperty('solar', 'fill-opacity', parseInt(e.target.value, 10) / 100);
      sliderValue.textContent = e.target.value + '%';
    });
  });


  map.on("click", function(e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ["solar"] });
      if (features.length) {
          map.setFilter("solar-hover", ["==", "FIPS", features[0].properties.FIPS]);
          let feature = features[0];

          let popup = new mapboxgl.Popup()
          .setLngLat(map.unproject(e.point))
          .setHTML('<div><strong>Blockgroups FIPS code:</strong></div><div>' + feature.properties.FIPS + '<div><strong>Solar ratio:</strong></div><div>' + feature.properties.solar_rati.toPrecision(3) + '</div>')
          .addTo(map);
      } else {
          map.setFilter("solar-hover", ["==", "FIPS", ""]);
      }
  });

  // Reset the state-fills-hover layer's filter when the mouse leaves the map
  map.on("mouseout", function() {
      map.setFilter("solar-hover", ["==", "FIPS", ""]);
  });


}
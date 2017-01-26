
mapInit();


function mapInit() {


mapboxgl.accessToken = 'pk.eyJ1IjoiZGNoZW5nMDEwNCIsImEiOiJjaXE0MDh2MHQwMG9xZnhtNGg0azVybGxtIn0.7jdNnbpd8kQI3qO1HfSnUg';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 8,
    center: [-118.6919112, 34.0201812]
});

// const map = L.mapbox.map('map', 'mapbox.streets')
//     .setView([34.0201812,-118.6919112,10], 9);

map.on('load', function () {
    map.addLayer({
        "id": "tracts",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://dcheng0104.bxyckrlg'
        },
        "source-layer":"census_tracts-1v46gg",
        "paint": {
                "line-color": "#3887be"
            }

    });
});



}
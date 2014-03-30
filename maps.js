function seoul_initialise() {
    var seoul_canvas = document.getElementById('seoul');
    var seoul_options = {
        center: new google.maps.LatLng(37.5648981, 126.9773344),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        keyboardShortcuts: false,
        disableDefaultUI: true
    }
    var seoul_map = new google.maps.Map(seoul_canvas, seoul_options)
}
function berlin_initialise() {
    var berlin_canvas = document.getElementById('berlin');
    var berlin_options = {
        center: new google.maps.LatLng(52.5116946, 13.3894026),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        keyboardShortcuts: false,
        disableDefaultUI: true
    }
    var berlin_map = new google.maps.Map(berlin_canvas, berlin_options)
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(berlin_map);
}
function nyc_initialise() {
    var nyc_canvas = document.getElementById('nyc');
    var nyc_options = {
        center: new google.maps.LatLng(40.7679696, -73.9818255),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        keyboardShortcuts: false,
        disableDefaultUI: true
    }
    var nyc_map = new google.maps.Map(nyc_canvas, nyc_options)
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(nyc_map);
}
google.maps.event.addDomListener(window, 'load', seoul_initialise);
google.maps.event.addDomListener(window, 'load', berlin_initialise);
google.maps.event.addDomListener(window, 'load', nyc_initialise);
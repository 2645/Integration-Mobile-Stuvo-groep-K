/* jshint
devel:true,
browser: true,
jquery:true
*/
/* global google */


window.onload = initialize;
var map;
var marker;
function initialize() {
    
    var latLng = new google.maps.LatLng(50.8415587, 4.3237141);
    var options = {
        zoom: 15,
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), options);

    marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    
    google.maps.event.addListener(marker, 'click', function() {
        map.panTo(marker.getPosition());
    });
    
    
    $('#anderEvent').click(function newEvent(){
        map.setCenter(new google.maps.LatLng(60.345334, 60.83332)); 
    });
    
}


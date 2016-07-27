var mymap = L.map('mapidContact').setView([44.44674052336393, 4.417790894535074], 13);

/* Maison de vacance */
var lionIcon = L.icon({
    iconUrl: '../css/images/location-pin.png',
    shadowUrl: '../css/images/marker-shadow.png',

    iconSize: [42, 42], // size of the icon
    shadowSize: [41, 41], // size of the shadow
    iconAnchor: [22, 50], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 50],  // the same for the shadow
    popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([44.4470305, 4.4172102], {icon: lionIcon}).addTo(mymap);
marker.bindPopup("<b class='title'>Le lion d'or</b><br />Maison de vacances à Lagorce").openPopup();

L.tileLayer('https://api.mapbox.com/styles/v1/leliondor/cir3eo0r6003pcmnbkvtqfbf9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVsaW9uZG9yIiwiYSI6ImNpcjNlbjdyOTAwMXhoeW05bm95aWgxcG0ifQ.rigOFeUXXTdrSYPmTWlvig').addTo(mymap);

function goToMarkup() {
    marker.openPopup();
    mymap.setView(marker.getLatLng());
}


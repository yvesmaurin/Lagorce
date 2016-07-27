var mymap = L.map('mapid').setView([44.44674052336393, 4.417790894535074], 10);

/* Randonnées pédestres */
var marker2 = L.marker([44.451514, 4.382353999999964]).addTo(mymap);
marker2.bindPopup("<b>Pradons – les Bouchets – Serre Juillet</b><br />Randonnée pédestre");

var marker3 = L.marker([44.47050222639855, 4.417082449645932]).addTo(mymap);
marker3.bindPopup("<b>Gour de la Sompe – Pertus de Fabria</b><br />Randonnée pédestre");

var marker4 = L.marker([44.442949029984355, 4.5415667939453215]).addTo(mymap);
marker4.bindPopup("<b>La dent de Rez</b><br />Randonnée pédestre");

/* VTT */
var marker5 = L.marker([44.404688, 4.131916899999965]).addTo(mymap);
marker5.bindPopup("<b>Traversée des monts d’Ardèche</b><br />VTT");

var marker6 = L.marker([44.4631029, 4.214155246000000005]).addTo(mymap);
marker6.bindPopup("<b>Circuit famille patrimoine</b><br />VTT");

/* Escalade */
var marker7 = L.marker([44.39685212815012, 4.198187952392573]).addTo(mymap);
marker7.bindPopup("<b>Vallée du Chassezac</b><br />Escalade");

var marker8 = L.marker([44.62041379676684, 4.225042089721683]).addTo(mymap);
marker8.bindPopup("<b>Tras les Baumes au Chambon</b><br />Escalade");

/* Canyoning */
var marker9 = L.marker([44.595967017929944, 4.112498374916072]).addTo(mymap);
marker9.bindPopup("<b>La Denave</b><br />Canyoning");

/* Canoë – Kayak */
var marker10 = L.marker([44.40745199999999, 4.395400999999993]).addTo(mymap);
marker10.bindPopup("<b>Vallon-Pont-d'Arc</b><br />Canoë – Kayak");

/* Spéléologie */
var marker11 = L.marker([44.412946, 4.178329]).addTo(mymap);
marker11.bindPopup("<b>Ceven'Aventure</b><br />Spéléologie");

/* Tourisme Culturel */
var marker12 = L.marker([44.551115, 4.413293000000067]).addTo(mymap);
marker12.bindPopup("<b>Vogüe</b><br />Tourisme Culturel");

var marker13 = L.marker([44.71813508454973, 4.357954473541213]).addTo(mymap);
marker13.bindPopup("<b>Entraygues-sur-Volane</b><br />Tourisme Culturel");

var marker14 = L.marker([44.509106, 4.372706999999991]).addTo(mymap);
marker14.bindPopup("<b>Balazuc</b><br />Tourisme Culturel");

var marker15 = L.marker([44.554554, 4.597827999999936]).addTo(mymap);
marker15.bindPopup("<b>Alba la Romaine</b><br />Tourisme Culturel");

var marker16 = L.marker([44.446962, 4.41779]);
marker16.bindPopup("<b>La Magnanerie de Lagorce</b><br />Tourisme Culturel");

var marker17 = L.marker([44.47935900000001, 4.239937050262483]).addTo(mymap);
marker17.bindPopup("<b>Le musée de la châtaigneraie</b><br />Tourisme Culturel");

var marker18 = L.marker([44.408298445070585, 4.42985725835797]).addTo(mymap);
marker18.bindPopup("<b>La caverne du Pont d’Arc</b><br />Tourisme Culturel");

var marker19 = L.marker([44.318491, 4.412569]).addTo(mymap);
marker19.bindPopup("<b>L’aven d’Orgnac</b><br />Tourisme Culturel");

var marker20 = L.marker([44.81408980342208, 4.485005095214774]).addTo(mymap);
marker20.bindPopup("<b>Ardelaine</b><br />Tourisme Culturel");

var marker21 = L.marker([44.844444, 4.220000000000027]).addTo(mymap);
marker21.bindPopup("<b>Mont Gerbier de Jonc</b><br />Tourisme Culturel");

var marker22 = L.marker([44.66515, 4.364869999999996]).addTo(mymap);
marker22.bindPopup("<b>Vals les bains</b><br />Tourisme Culturel");

var marker23 = L.marker([45.036708, 4.682415999999989]).addTo(mymap);
marker23.bindPopup("<b>Vélorail des gorges du Doux</b><br />Tourisme Culturel");

var marker24 = L.marker([44.55061, 4.683794000000034]).addTo(mymap);
marker24.bindPopup("<b>Musée de la résistance et de la déportation en Ardèche</b><br />Tourisme Culturel");

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

function goToMarkup(id) {
    if (id == 1) {
        marker.openPopup();
        mymap.setView(marker.getLatLng());
    } else if (id == 2) {
        marker2.openPopup();
        mymap.setView(marker2.getLatLng());
    } else if (id == 3) {
        marker3.openPopup();
        mymap.setView(marker3.getLatLng());
    } else if (id == 4) {
        marker4.openPopup();
        mymap.setView(marker4.getLatLng());
    } else if (id == 5) {
        marker5.openPopup();
        mymap.setView(marker5.getLatLng());
    } else if (id == 6) {
        marker6.openPopup();
        mymap.setView(marker6.getLatLng());
    } else if (id == 7) {
        marker7.openPopup();
        mymap.setView(marker7.getLatLng());
    } else if (id == 8) {
        marker8.openPopup();
        mymap.setView(marker8.getLatLng());
    }  else if (id == 9) {
        marker9.openPopup();
        mymap.setView(marker9.getLatLng());
    }  else if (id == 10) {
        marker10.openPopup();
        mymap.setView(marker10.getLatLng());
    }  else if (id == 11) {
        marker11.openPopup();
        mymap.setView(marker11.getLatLng());
    }  else if (id == 12) {
        marker12.openPopup();
        mymap.setView(marker12.getLatLng());
    } else if (id == 13) {
        marker13.openPopup();
        mymap.setView(marker13.getLatLng());
    } else if (id == 14) {
        marker14.openPopup();
        mymap.setView(marker14.getLatLng());
    } else if (id == 15) {
        marker15.openPopup();
        mymap.setView(marker15.getLatLng());
    } else if (id == 16) {
        marker.openPopup();
        mymap.setView(marker16.getLatLng());
    } else if (id == 17) {
        marker17.openPopup();
        mymap.setView(marker17.getLatLng());
    } else if (id == 18) {
        marker18.openPopup();
        mymap.setView(marker18.getLatLng());
    } else if (id == 19) {
        marker19.openPopup();
        mymap.setView(marker19.getLatLng());
    } else if (id == 20) {
        marker20.openPopup();
        mymap.setView(marker20.getLatLng());
    } else if (id == 21) {
        marker21.openPopup();
        mymap.setView(marker21.getLatLng());
    } else if (id == 22) {
        marker22.openPopup();
        mymap.setView(marker22.getLatLng());
    } else if (id == 23) {
        marker23.openPopup();
        mymap.setView(marker23.getLatLng());
    } else if (id == 24) {
        marker24.openPopup();
        mymap.setView(marker24.getLatLng());
    }
}


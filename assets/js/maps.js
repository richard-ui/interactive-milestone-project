    function initMap(){
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: {
               lat: 53.46559,
                lng: -2.348213
               }
    });
         
    var labels =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    
    // array of locations
    
    var locations = [

        ['<h1 class="info_Heading" class="firstHeading">Big Chief</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/big_chief.jpg" alt="big chief" style="margin-right: 10px;"><b>Contact: </b>07565 341181' +
        '<div><button type="button" class="btn btn-primary">Contact</button></div>', 53.465590, -2.348213, 4],


        ['<h1 class="info_Heading">Knights Town</h1>' +
            '<div id="bodyContent">' +
            '<img width="130"  height="100" align="left" src="assets/images/knights_town.jpg" alt="Knights Town" style="margin-right: 10px;"><b>Contact: </b>07565 341181', 53.477314, -2.254962, 5],

       ['<h1 class="info_Heading">Lex Deux</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/les_deux.jpg" alt="Lex Deux" style="margin-right: 10px;"><b>Contact: </b>07565 341181' , 53.446622, -2.308713, 3]

    ];

    var infowindow = new google.maps.InfoWindow // declare info window

    var marker, i; // marker variable, i variable to loop through locations

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]), map: map
        });

        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) { // click event listener for infoWindow
            return function() {
                infowindow.setContent(locations[i][0]); // content from value '0' in array
                infowindow.open(map, marker);
            }
        })(marker, i));
    }


    var markerClusterer = new MarkerClusterer(map, markers, 
    {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",});

    }
  
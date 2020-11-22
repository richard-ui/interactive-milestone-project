         function initMap(){
              var map = new google.maps.Map(document.getElementById("map"), {
                  zoom: 3,
                  center: {
                      lat: 46.619261,
                      lng:-33.134766
                  }
              });
         

         var labels =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


        var locations = [
             { lat: 40.785091, lng: -73.968285 },
             { lat: 41.084045, lng: -73.874245 }

        ];

    var markers = locations.map(function(location, i){ // takes 2 arguments
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

            var markerClusterer = new MarkerClusterer(map, markers, 
            {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",});
    }
  
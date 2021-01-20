var locations = [];
var locations2 = [];
var locations3 = [];
var map;
var markers = []; // array with pushed markers inside

var marker, i;
var lat1;
var lng2;

function initMap(lat1 = 53.465590, lng2 = -2.348213) { // default variables for centering map

  map = new google.maps.Map(document.getElementById("map"), {   // center map
            zoom: 11,
            center: {
            lat: lat1,      // latitude and longitude parameters from initMap()
            lng: lng2
        }
    });
         
    var labels =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   // array of labels for markers

  // multiple array of locations for cities
    
    locations1 = [   // MANCHESTER

        ['<h1 class="info_Heading">Big Chief</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/big_chief.jpg" alt="big chief" style="margin-right: 10px;"><b>Contact: </b>07543 326141' +
        '<div class="infoContent">This restaurant is a great place to wine and dine with your friends!!</div>' +
        '<div><button type="button" id="chief" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.465590, -2.348213, 1, "Big Chief", 10],

        ['<h1 class="info_Heading">Lex Deux</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/les_deux.jpg" alt="lex deux" style="margin-right: 10px;"><b>Contact: </b>07265 241386' +
        '<div class="infoContent">Enjoy delicious cakes from our new range, including the new Red velvet Monster!!</div>' +
        '<div><button type="button" id="lexDeux" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.446622, -2.308713, 2, "Lex Deux", 8],

        ['<h1 class="info_Heading">Knights Town</h1>' +
            '<div id="bodyContent">' +
            '<img width="130"  height="100" align="left" src="assets/images/knights_town.jpg" alt="knights town" style="margin-right: 10px;"><b>Contact: </b>07465 342181' +
            '<div class="infoContent">All you can eat buffet including Chinese to Mexican!</div>' +
            '<div><button type="button" id="knight" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.477314, -2.254962, 1, "Knights Town", 10],

        ['<h1 class="info_Heading">Black Star</h1>' +
            '<div id="bodyContent">' +
            '<img width="130"  height="100" align="left" src="assets/images/black_star.jpg" alt="black star" style="margin-right: 10px;"><b>Contact: </b>07465 322141' +
            '<div class="infoContent">Enjoy luxurious types of coffee Americano, latte etc with many cakes!</div>' +
            '<div><button type="button" id="bk-star" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.451003, -2.203978, 12, "Black Star", 10]

    ];

    locations2 = [ // LIVERPOOL

        ['<h1 class="info_Heading">Benson Lodge</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/Benson_Lodge.jpg" alt="benson"" style="margin-right: 10px;"><b>Contact: </b>07533 326141' +
        '<div class="infoContent">Food is stunning, both the tapas and downstairs restaurant!</div>' +
        '<div><button type="button" id="benson" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.417375, -2.924687, 1, "Benson Lodge", 10],

         ['<h1 class="info_Heading">El Porto</h1>' +
            '<div id="bodyContent">' +
            '<img width="130"  height="100" align="left" src="assets/images/el_Porto.jpg" alt="el_porto" style="margin-right: 10px;"><b>Contact: </b>07465 782141' +
            '<div class="infoContent">Traditional English menu with many cakes and sundaes for dessert!</div>' +
            '<div><button type="button" id="el-porto" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.392814, -2.935674, 12, "El Porto", 10],

        ['<h1 class="info_Heading">Little Italy</h1>' +
            '<div id="bodyContent">' +
            '<img width="130"  height="100" align="left" src="assets/images/little_italy.jpg" alt="little italy" style="margin-right: 10px;"><b>Contact: </b>07966 785141' +
            '<div class="infoContent">Food is Very Tasty with some italian classics and some twists, 100% worth it!</div>' +
            '<div><button type="button" id="lil-italy" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.423512, -2.918507, 2, "Little Italy", 10]
   
    ];

    locations3 = [ // BRADFORD

        ['<h1 class="info_Heading">Cafe Chocolat</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/cafechocolat.jpg" alt="cafe-chocolat" style="margin-right: 10px;"><b>Contact: </b>07543 333141' +
        '<div class="infoContent">Enjoy delicious cakes from our new range!, The service we received was so amazing</div>' +
        '<div><button type="button" id="cafeChoc" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.820898, -1.743720, 1, "cafe chocolat", 10],
        
         ['<h1 class="info_Heading">Dirty Bones</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/DirtyBones.jpg" alt="dirtyBones" style="margin-right: 10px;"><b>Contact: </b>07543 326241' +
        '<div class="infoContent">The ambiance is very welcoming and charming. Amazing wines, food and service!</div>' +
        '<div><button type="button" id="dirtybones" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></button></div>', 53.791704, -1.734107, 1, "Dirty Bones", 10],

        ['<h1 class="info_Heading">Fish Forman</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/FishForman.jpg" alt="fishforman" style="margin-right: 10px;"><b>Contact: </b>07343 322141' +
        '<div class="infoContent">Hospitable hosts, delicious dishes, beautiful presentation and wonderful dessert!</div>' +
        '<div><button type="button" id="forman" onclick="Choice(this);" class="btn btn-primary info-btn">Reservation</button></div>', 53.801640, -1.796248, 1, "Fish Forman", 10]

    ];

    var infowindow = new google.maps.InfoWindow(); // declare info window

    for (i = 0; i < locations.length; i++) {

       marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]), // lat / long
            map: map,
            label: labels[i % labels.length] // implement labels on markers
        });

        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) { // click event listener for infoWindow
            return function() {
                infowindow.setContent(locations[i][0]); // content from value '0' in array
                infowindow.open(map, marker);
            };
        })(marker, i));

        markers.push(marker); // push current marker into array
        setMapOnAll(map);     // use function to set markers on map

    }

}

function dropdownfunction(){
     mySelect = document.getElementById("mySelect");

     item1 = mySelect.options[mySelect.selectedIndex].value; // get selected value from dropdown box

     deleteMarkers();   // run function to delete markers from map
     locations = [];
     
     if(item1 == 'man'){
       
     Array.prototype.push.apply(locations, locations1); // add array of locations by city
     lat1 = 53.465590;
     lng2 = -2.348213;
     initMap(lat1, lng2); // run map   

     }
     else if(item1 == 'liv'){

     Array.prototype.push.apply(locations, locations2); // add array of locations by city
     lat1 = 53.417375;
     lng2 = -2.924687;
     initMap(lat1, lng2); // run map
     
     }
     else if(item1 == 'bra'){

     Array.prototype.push.apply(locations, locations3); // add array of locations by city
     lat1 = 53.820898;
     lng2 = -1.743720;
     initMap(lat1, lng2); // run map
     
     }
 }

function setMapOnAll(map) {                     // Sets all markers in the array to the Map.
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function deleteMarkers() {      // Deletes all markers in the array by removing references to them.
  setMapOnAll(null);
  markers = [];
}



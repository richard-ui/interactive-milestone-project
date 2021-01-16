

// function for info window buttons

function Choice(elem) {
  
    var restName = ["Restaurant Name: "]; // basic array with 1 string
    var open_Times = ["Open from ", "pm to ", "pm"]; // array with 3 strings
    var hour = document.getElementById("hour");

   if (elem.id == "chief") {
    
    hour.min = "13:00";   // min and max opening times set for each button click
    hour.max = "22:00";                                                               // place name of restaurant clicked into 'hidden' element. This is hidden because we only use it to pass
     document.getElementById("reserve_name").value = restName[0] + locations[0][4];   // it through the contact form and not display its value on the page
     document.getElementById("booking-title").textContent = restName[0] + locations[0][4]; // 
     document.getElementById("times").textContent = open_Times[0] + locations[0][3] + open_Times[1] + locations[0][5] + open_Times[2]; // use of locations array for specific opening times 
     
     document.getElementById("side-form").innerHTML = locations[0][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/big_chief.jpg" alt="big chief">';

   } else if (elem.id == "lexDeux") {

    hour.min = "14:00";
    hour.max = "20:00";
    document.getElementById("reserve_name").value = restName[0] + locations[1][4];
    document.getElementById("booking-title").textContent = restName[0] + locations[1][4];
    document.getElementById("times").textContent = open_Times[0] + locations[1][3] + open_Times[1] + locations[1][5] + open_Times[2];
    document.getElementById("side-form").innerHTML = locations[1][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/les_deux.jpg" alt="big chief">';

   }else if (elem.id == "knight") {
     
    hour.min = "13:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations[2][4];
     document.getElementById("booking-title").textContent = restName[0] + locations[2][4];
     document.getElementById("times").textContent = open_Times[0] + locations[2][3] + open_Times[1] + locations[2][5] + open_Times[2];
     document.getElementById("side-form").innerHTML = locations[2][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/knights_town.jpg" alt="knights town">';

   }else if (elem.id == "bk-star") {

    hour.min = "12:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations[3][4];
     document.getElementById("booking-title").textContent = restName[0] + locations[3][4];
     document.getElementById("times").textContent = open_Times[0] + locations[3][3] + open_Times[1] + locations[3][5] + open_Times[2];
     document.getElementById("side-form").innerHTML = locations[3][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/black_star.jpg" alt="bk star">';

   }else if (elem.id == "benson") {

    hour.min = "13:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations2[0][4];
     document.getElementById("booking-title").textContent = restName[0] + locations2[0][4];
     document.getElementById("times").textContent = open_Times[0] + locations2[0][3] + open_Times[1] + locations[0][5] + open_Times[2];
     document.getElementById("side-form").innerHTML = locations2[0][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/Benson_Lodge.jpg" alt="benson lodge">';

   }else if (elem.id == "el-porto") {

    hour.min = "12:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations2[1][4];
     document.getElementById("booking-title").textContent = restName[0] + locations2[1][4];
     document.getElementById("times").textContent = open_Times[0] + locations2[1][3] + open_Times[1] + locations[1][5] + open_Times[2];
     document.getElementById("side-form").innerHTML = locations2[1][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/el_Porto.jpg" alt="el porto">';

   }else if (elem.id == "lil-italy") {

    hour.min = "14:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations2[2][4];
     document.getElementById("booking-title").textContent = restName[0] + locations2[2][4];
     document.getElementById("times").textContent = open_Times[0] + locations2[2][3] + open_Times[1] + locations[2][5] + open_Times[2];
     document.getElementById("side-form").innerHTML = locations2[2][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/little_italy.jpg" alt="lil italy">';

   }
   else if (elem.id == "cafeChoc") {

    hour.min = "13:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations3[0][4];
     document.getElementById("booking-title").textContent = restName[0] + locations3[0][4];
     document.getElementById("times").textContent = open_Times[0] + locations3[0][3] + open_Times[1] + locations3[0][5] + open_Times[2];
     document.getElementById("side-form").innerHTML = locations3[0][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/cafechocolat.jpg" alt="cafe chocolat">';

   }else if (elem.id == "dirtybones") {
    
    hour.min = "13:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations3[1][4];
     document.getElementById("booking-title").textContent = restName[0] + locations3[1][4];
     document.getElementById("times").textContent = open_Times[0] + locations3[1][3] + open_Times[1] + locations3[1][5] + open_Times[2];
     document.getElementById("side-form").innerHTML = locations3[1][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/DirtyBones.jpg" alt="dirtybones">';
   
    }else if (elem.id == "forman") {

    hour.min = "13:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations3[2][4];
     document.getElementById("booking-title").textContent = restName[0] + locations3[2][4];
     document.getElementById("times").textContent = open_Times[0] + locations3[2][3] + open_Times[1] + locations3[2][5] + open_Times[2];
     document.getElementById("side-form").innerHTML = locations3[2][4] + '<br />' + '<img width="100%" height="400" align="left" src="assets/images/FishForman.jpg" alt="forman">';

    }
 }

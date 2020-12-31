

// function for info window buttons

function Choice(elem) {
  
    var restName = ["Restaurant Name: "];
    var open_Times = ["Open from ", "pm to ", "pm"];
    var hour = document.getElementById("hour");

   if (elem.id == "chief") {
    
    hour.min = "13:00";   // min and max opening times set for each button click
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations[0][4];
     document.getElementById("booking-title").textContent = restName[0] + locations[0][4];
     document.getElementById("times").textContent = open_Times[0] + locations[0][3] + open_Times[1] + locations[0][5] + open_Times[2];

   } else if (elem.id == "lexDeux") {

    hour.min = "14:00";
    hour.max = "20:00";
    document.getElementById("reserve_name").value = restName[0] + locations[1][4];
    document.getElementById("booking-title").textContent = restName[0] + locations[1][4];
    document.getElementById("times").textContent = open_Times[0] + locations[1][3] + open_Times[1] + locations[1][5] + open_Times[2];

   }else if (elem.id == "knight") {
     
    hour.min = "13:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations[2][4];
     document.getElementById("booking-title").textContent = restName[0] + locations[2][4];
     document.getElementById("times").textContent = open_Times[0] + locations[2][3] + open_Times[1] + locations[2][5] + open_Times[2];

   }else if (elem.id == "bk-star") {

    hour.min = "12:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations[3][4];
     document.getElementById("booking-title").textContent = restName[0] + locations[3][4];
     document.getElementById("times").textContent = open_Times[0] + locations[3][3] + open_Times[1] + locations[3][5] + open_Times[2];

   }else if (elem.id == "el-porto") {

    hour.min = "12:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations[4][4];
     document.getElementById("booking-title").textContent = restName[0] + locations[4][4];
     document.getElementById("times").textContent = open_Times[0] + locations[4][3] + open_Times[1] + locations[4][5] + open_Times[2];

   }else if (elem.id == "lil-italy") {

    hour.min = "14:00";
    hour.max = "22:00";
     document.getElementById("reserve_name").value = restName[0] + locations[5][4];
     document.getElementById("booking-title").textContent = restName[0] + locations[5][4];
     document.getElementById("times").textContent = open_Times[0] + locations[5][3] + open_Times[1] + locations[5][5] + open_Times[2];

   }
 }

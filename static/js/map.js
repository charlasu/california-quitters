//make myMap var
var myMap = L.map("map", {
center: [41.7094, -113.8833],
zoom: 5
});

//add the tile layer to the map
var baseMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
 attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
 maxZoom: 19,
 id: "mapbox.light",
 accessToken: API_KEY
}).addTo(myMap);

d3.json("/api/population", function(err, data){
 if (err) throw err;

 console.log(data[0]);
});

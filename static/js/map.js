// Function to determine marker size based on population
function markerSize(no_outbound) {
  return no_outbound * 3;
}

// An array containing all of the information needed to create city and state markers
var twentyten = [
  {
    moved_to: "Arizona",
    coords: [
      34.1682185,
      -111.930907
    ],
    yr: 2010,
    no_outbound: 47164,
    population: 6407002,
  },
  {
    moved_to: "Colorado",
    coords: [
      38.9979339,
      -105.550567
    ],
    yr: 2010,
    no_outbound: 26089,
    population: 5048029,
  },
  {
    moved_to: "Idaho",
    coords: [
      45.4945756,
      -114.1424303
    ],
    yr: 2010,
    no_outbound: 8932,
    population: 1570912,
  },
  {
    moved_to: "Nevada",
    coords: [
      38.502032,
      -117.0230604
    ],
    yr: 2010,
    no_outbound: 35472,
    population: 2702797,
  },
  {
    moved_to: "New Mexico",
    coords: [
      34.1662325,
      -106.0260685
    ],
    yr: 2010,
    no_outbound: 6547,
    population: 2064607
  },
  {
    moved_to: "Oregon",
    coords: [
      44.1419049,
      -120.5380993
    ],
    yr: 2010,
    no_outbound: 34190,
    population: 3837073,
  },
  {
    moved_to: "Utah",
    coords: [
      39.4997605,
      -111.547028
    ],
    yr: 2010,
    no_outbound: 12187,
    population: 2775260,
  },
  {
    moved_to: "Washington",
    coords: [
      47.751076,
      -120.740135
    ],
    yr: 2010,
    no_outbound: 39468,
    population: 6741386,
  }
];

var twentyeleven = [
  {
    moved_to: "Arizona",
    coords: [
      34.1682185,
      -111.930907
    ],
    yr: 2011,
    no_outbound: 49635,
    population: 6465488,
  },
  {
    moved_to: "Colorado",
    coords: [
      38.9979339,
      -105.550567
    ],
    yr: 2011,
    no_outbound: 23234,
    population: 5116411,
  },
  {
    moved_to: "Idaho",
    coords: [
      45.4945756,
      -114.1424303
    ],
    yr: 2011,
    no_outbound: 9021,
    population: 1583180,
  },
  {
    moved_to: "Nevada",
    coords: [
      38.502032,
      -117.0230604
    ],
    yr: 2011,
    no_outbound: 40114,
    population: 2718170,
  },
  {
    moved_to: "New Mexico",
    coords: [
      34.1662325,
      -106.0260685
    ],
    yr: 2011,
    no_outbound: 7066,
    population: 2077744,
  },
  {
    moved_to: "Oregon",
    coords: [
      44.1419049,
      -120.5380993
    ],
    yr: 2011,
    no_outbound: 34214,
    population: 3865845,
  },
  {
    moved_to: "Utah",
    coords: [
      39.4997605,
      -111.547028
    ],
    yr: 2011,
    no_outbound: 18237,
    population: 2815430,
  },
  {
    moved_to: "Washington",
    coords: [
      47.751076,
      -120.740135
    ],
    yr: 2011,
    no_outbound: 38421,
    population: 6819155,
  },
];

var twentytwelve = [
  {
    moved_to: "Arizona",
    coords: [
      34.1682185,
      -111.930907
    ],
    yr: 2012,
    no_outbound: 44889,
    population: 6544211
  },
  {
    moved_to: "Colorado",
    coords: [
      38.9979339,
      -105.550567
    ],
    yr: 2012,
    no_outbound: 22152,
    population: 5186330
  },
  {
    moved_to: "Idaho",
    coords: [
      45.4945756,
      -114.1424303
    ],
    yr: 2012,
    no_outbound: 10280,
    population: 1594673
  },
  {
    moved_to: "Nevada",
    coords: [
      38.502032,
      -117.0230604
    ],
    yr: 2012,
    no_outbound: 49978,
    population: 2752410
  },
  {
    moved_to: "New Mexico",
    coords: [
      34.1662325,
      -106.0260685
    ],
    yr: 2012,
    no_outbound: 4536,
    population: 2083590
  },
  {
    moved_to: "Oregon",
    coords: [
      44.1419049,
      -120.5380993
    ],
    yr: 2012,
    no_outbound: 31862,
    population: 3893920
  },
  {
    moved_to: "Utah",
    coords: [
      39.4997605,
      -111.547028
    ],
    yr: 2012,
    no_outbound: 15286,
    population: 2854222
  },
  {
    moved_to: "Washington",
    coords: [
      47.751076,
      -120.740135
    ],
    yr: 2012,
    no_outbound: 45597,
    population: 6890899
  }
]

var twentythirteen = [
  {
    moved_to: "Arizona",
    coords: [
      34.1682185,
      -111.930907
    ],
    yr: 2013,
    no_outbound: 47959,
    population: 6616124
  },
  {
    moved_to: "Colorado",
    coords: [
      38.9979339,
      -105.550567
    ],
    yr: 2013,
    no_outbound: 23714,
    population: 5262556
  },
  {
    moved_to: "Idaho",
    coords: [
      45.4945756,
      -114.1424303
    ],
    yr: 2013,
    no_outbound: 9232,
    population: 1610187
  },
  {
    moved_to: "Nevada",
    coords: [
      38.502032,
      -117.0230604
    ],
    yr: 2013,
    no_outbound: 47897,
    population: 2786547
  },
  {
    moved_to: "New Mexico",
    coords: [
      34.1662325,
      -106.0260685
    ],
    yr: 2013,
    no_outbound: 5697,
    population: 2085161
  },
  {
    moved_to: "Oregon",
    coords: [
      44.1419049,
      -120.5380993
    ],
    yr: 2013,
    no_outbound: 31380,
    population: 3919664
  },
  {
    moved_to: "Utah",
    coords: [
      39.4997605,
      -111.547028
    ],
    yr: 2013,
    no_outbound: 15794,
    population: 2899961
  },
  {
    moved_to: "Washington",
    coords: [
      47.751076,
      -120.740135
    ],
    yr: 2013,
    no_outbound: 37150,
    population: 6963410
  }
]

var twentyfourteen = [
  {
    moved_to: "Arizona",
    coords: [
      34.1682185,
      -111.930907
    ],
    yr: 2014,
    no_outbound: 57446,
    population: 6706435
  },
  {
    moved_to: "Colorado",
    coords: [
      38.9979339,
      -105.550567
    ],
    yr: 2014,
    no_outbound: 24506,
    population: 5342311
  },
  {
    moved_to: "Idaho",
    coords: [
      45.4945756,
      -114.1424303
    ],
    yr: 2014,
    no_outbound: 10057,
    population: 1630391
  },
  {
    moved_to: "Nevada",
    coords: [
      38.502032,
      -117.0230604
    ],
    yr: 2014,
    no_outbound: 48954,
    population: 2831730
  },
  {
    moved_to: "New Mexico",
    coords: [
      34.1662325,
      -106.0260685
    ],
    yr: 2014,
    no_outbound: 4986,
    population: 2083207
  },
  {
    moved_to: "Oregon",
    coords: [
      44.1419049,
      -120.5380993
    ],
    yr: 2014,
    no_outbound: 35334,
    population: 3960673
  },
  {
    moved_to: "Utah",
    coords: [
      39.4997605,
      -111.547028
    ],
    yr: 2014,
    no_outbound: 14510,
    population: 2938671
  },
  {
    moved_to: "Washington",
    coords: [
      47.751076,
      -120.740135
    ],
    yr: 2014,
    no_outbound: 40085,
    population: 7046931
  }
]

var twentyfifteen = [
  {
    moved_to: "Arizona",
    coords: [
      34.1682185,
      -111.930907
    ],
    yr: 2015,
    no_outbound: 54646,
    population: 6802262
  },
  {
    moved_to: "Colorado",
    coords: [
      38.9979339,
      -105.550567
    ],
    yr: 2015,
    no_outbound: 29029,
    population: 5440445
  },
  {
    moved_to: "Idaho",
    coords: [
      45.4945756,
      -114.1424303
    ],
    yr: 2015,
    no_outbound: 18928,
    population: 1649324
  },
  {
    moved_to: "Nevada",
    coords: [
      38.502032,
      -117.0230604
    ],
    yr: 2015,
    no_outbound: 54765,
    population: 2883057
  },
  {
    moved_to: "New Mexico",
    coords: [
      34.1662325,
      -106.0260685
    ],
    yr: 2015,
    no_outbound: 6721,
    population: 2082264
  },
  {
    moved_to: "Oregon",
    coords: [
      44.1419049,
      -120.5380993
    ],
    yr: 2015,
    no_outbound: 40447,
    population: 4016537
  },
  {
    moved_to: "Utah",
    coords: [
      39.4997605,
      -111.547028
    ],
    yr: 2015,
    no_outbound: 18154,
    population: 2984917
  },
  {
    moved_to: "Washington",
    coords: [
      47.751076,
      -120.740135
    ],
    yr: 2015,
    no_outbound: 45609,
    population: 7152818
  }
]

var twentysixteen = [
  {
    moved_to: "Arizona",
    coords: [
      34.1682185,
      -111.930907
    ],
    yr: 2016,
    no_outbound: 64756,
    population: 6908642
  },
  {
    moved_to: "Colorado",
    coords: [
      38.9979339,
      -105.550567
    ],
    yr: 2016,
    no_outbound: 26909,
    population: 5530105
  },
  {
    moved_to: "Idaho",
    coords: [
      45.4945756,
      -114.1424303
    ],
    yr: 2016,
    no_outbound: 17019,
    population: 1680026
  },
  {
    moved_to: "Nevada",
    coords: [
      38.502032,
      -117.0230604
    ],
    yr: 2016,
    no_outbound: 45482,
    population: 2939254
  },
  {
    moved_to: "New Mexico",
    coords: [
      34.1662325,
      -106.0260685
    ],
    yr: 2016,
    no_outbound: 4939,
    population: 2085432
  },
  {
    moved_to: "Oregon",
    coords: [
      44.1419049,
      -120.5380993
    ],
    yr: 2016,
    no_outbound: 43804,
    population: 4085989
  },
  {
    moved_to: "Utah",
    coords: [
      39.4997605,
      -111.547028
    ],
    yr: 2016,
    no_outbound: 23034,
    population: 3044321
  },
  {
    moved_to: "Washington",
    coords: [
      47.751076,
      -120.740135
    ],
    yr: 2016,
    no_outbound: 51485,
    population: 7280934
  }

]
// Define arrays to hold created city and state markers
var yreleven = [];
var yrten = [];
var yrtwelve = [];
var yrthirteen = [];
var yrfourteen = [];
var yrfifteen = [];
var yrsixteen = [];

// Loop through locations and create city and state markers
for (var i = 0; i < twentyten.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  yrten.push(
    L.circle(twentyten[i].coords, {
      stroke: false,
      fillOpacity: 0.75,
      color: "dodgerblue",
      fillColor: "dodgerblue",
      radius: markerSize(twentyten[i].no_outbound)
    })
  );
}

for (var i = 0; i < twentyeleven.length; i++) {
  // Setting the marker radius for the city by passing population into the markerSize function
  yreleven.push(
    L.circle(twentyeleven[i].coords, {
      stroke: false,
      fillOpacity: 0.75,
      color: "deepskyblue",
      fillColor: "deepskyblue",
      radius: markerSize(twentyeleven[i].no_outbound)
    })
  );
}

for (var i = 0; i < twentytwelve.length; i++) {
  // Setting the marker radius for the city by passing population into the markerSize function
  yrtwelve.push(
    L.circle(twentytwelve[i].coords, {
      stroke: false,
      fillOpacity: 0.75,
      color: "skyblue",
      fillColor: "skyblue",
      radius: markerSize(twentytwelve[i].no_outbound)
    })
  );
}

for (var i = 0; i < twentythirteen.length; i++) {
  // Setting the marker radius for the city by passing population into the markerSize function
  yrthirteen.push(
    L.circle(twentythirteen[i].coords, {
      stroke: false,
      fillOpacity: 0.75,
      color: "gold",
      fillColor: "gold",
      radius: markerSize(twentythirteen[i].no_outbound)
    })
  );
}

for (var i = 0; i < twentyfourteen.length; i++) {
  // Setting the marker radius for the city by passing population into the markerSize function
  yrfourteen.push(
    L.circle(twentyfourteen[i].coords, {
      stroke: false,
      fillOpacity: 0.75,
      color: "orange",
      fillColor: "orange",
      radius: markerSize(twentyfourteen[i].no_outbound)
    })
  );
}

for (var i = 0; i < twentyfifteen.length; i++) {
  // Setting the marker radius for the city by passing population into the markerSize function
  yrfifteen.push(
    L.circle(twentyfifteen[i].coords, {
      stroke: false,
      fillOpacity: 0.75,
      color: "orchid",
      fillColor: "orchid",
      radius: markerSize(twentyfifteen[i].no_outbound)
    })
  );
}

for (var i = 0; i < twentysixteen.length; i++) {
  // Setting the marker radius for the city by passing population into the markerSize function
  yrsixteen.push(
    L.circle(twentysixteen[i].coords, {
      stroke: false,
      fillOpacity: 0.75,
      color: "mediumorchid",
      fillColor: "mediumorchid",
      radius: markerSize(twentysixteen[i].no_outbound)
    })
  );
}

// Define variables for our base layers
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGF1cmVsaWMiLCJhIjoiY2pteG9icGYyM3ZvaTNxbnk2a2F6MDZmciJ9.ZQhdib9of9UJDKThb3b1QA", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light"
});

// Create two separate layer groups: one for cities and one for states
var ten = L.layerGroup(yrten);
var eleven = L.layerGroup(yreleven);
var twelve = L.layerGroup(yrtwelve);
var thirteen = L.layerGroup(yrthirteen);
var fourteen = L.layerGroup(yrfourteen);
var fifteen = L.layerGroup(yrfifteen);
var sixteen = L.layerGroup(yrsixteen);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
};

// Create an overlay object
var overlayMaps = {
  "Outbound Migration in 2010": ten,
  "Outbound Migration in 2011": eleven,
  "Outbound Migration in 2012": twelve,
  "Outbound Migration in 2013": thirteen,
  "Outbound Migration in 2014": fourteen,
  "Outbound Migration in 2015": fifteen,
  "Outbound Migration in 2016": sixteen,
};

// Define a map object
var myMap = L.map("map", {
  center: [39.4997605,
    -111.547028],
  zoom: 5,
  layers: [streetmap, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

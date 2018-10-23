var svgWidth = 800;
var svgHeight = 500;

var margin = {
  top: 40,
  right: 40,
  bottom: 100,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "graph-svg-component");

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("../data/rent/income_fraction.csv", function(error,fracData) {
    if(error) throw error;

    //set up time parse function
    var parseTime = d3.timeParse("%Y");

    //cast data to proper data type
    fracData.forEach(data => {
        fracData.Date = paresTime(fracData.Date);
        fracData.US = + fracData.US;
        fracData.
    })

})
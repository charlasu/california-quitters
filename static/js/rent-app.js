// Chart Params
// var svgWidth = 960;
var svgWidth = window.innerWidth* 0.45;
var svgHeight = window.innerHeight * 0.7;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select("#rent-chart")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .classed("chart", true);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from an external CSV file
d3.json("/api/rent", function(error, api_re) {
  if (error) throw error;

  // Create a function to parse date and time
  // var parseTime = d3.timeFormat("%Y");

  // Format the data
  api_re.forEach(function(data) {
    data.us_rent = +data.us_rent;
    ca_rent = +data.ca_rent;
    az_rent = +data.az_rent;
    co_rent = +data.co_rent;
    id_rent = +data.id_rent;
    nm_rent = +data.nm_rent;
    nv_rent = +data.nv_rent;
    or_rent = +data.or_rent;
    ut_rent = +data.ut_rent;
    wa_rent = +data.wa_rent;
  });

  // Create scaling functions
  var xLinearScale = d3.scaleLinear()
    .domain([2005,2016])
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([500,1500])
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([500,1500])
    .range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xLinearScale).tickFormat(d3.format("d"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);

  // Add x-axis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // Add y1-axis to the left side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .call(leftAxis);

  // Add y2-axis to the right side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .attr("transform", `translate(${width}, 0)`)
    .call(rightAxis);

  // Line generators for each line
  var line1 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.US_Rent));

  var line2 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.ca_rent));

  var line3 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.az_rent));

  var line4 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.co_rent));

  var line5 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.id_rent));

  var line6 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.nm_rent));

  var line7 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.nv_rent));

  var line8 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.or_rent));

  var line9 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.ut_rent));

  var line10 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.wa_rent));

  var toolTip = d3.select(".rent")
    .append("div")
    .classed("renttooltip", true);

  // Append a path for line2
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line2)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
      .style("display","block")
      .html(`California Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue");
    })
    .on("mouseout",function() {
      toolTip
      .style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue");
    })

  // Append a path for line3
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line3)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
        .style("display","block")
        .text(`Arizona Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue")
        ;
    })
    .on("mouseout",function() {
      toolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue")
        ;
    })

  // Append a path for line4
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line4)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
        .style("display","block")
        .text(`Colorado Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue");
    })
    .on("mouseout",function() {
      toolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue")
        ;
    })

  // Append a path for line5
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line5)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
        .style("display","block")
        .text(`Idaho Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue");
    })
    .on("mouseout",function() {
      toolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue")
        ;
    })

  // Append a path for line6
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line6)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
        .style("display","block")
        .text(`New Mexico Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue")
        ;
    })
    .on("mouseout",function() {
      toolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue");
    })

  // Append a path for line7
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line7)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
        .style("display","block")
        .text(`Nevada Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue")
        ;
    })
    .on("mouseout",function() {
      toolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue");
    })

  // Append a path for line8
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line8)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
        .style("display","block")
        .text(`Oregon Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue")
        ;
    })
    .on("mouseout",function() {
      toolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue");
    })

  // Append a path for line9
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line9)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
        .style("display","block")
        .text(`Utah Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue")
        ;
    })
    .on("mouseout",function() {
      toolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue");
    })

  // Append a path for line10
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line10)
    .attr("stroke", "lightblue")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      toolTip
        .style("display","block")
        .text(`Washington Median Rent`);
      d3.select(this)
        .attr("stroke", "steelblue");
    })
    .on("mouseout",function() {
      toolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "lightblue");
    })

  // Append a path for line1
  chartGroup.append("path")
    .data([api_re])
    .attr("d", line1)
    .attr("stroke", "orange")
    .attr("stroke-width", 4)
    .attr("fill", "none")

  // Append axes titles
  chartGroup.append("text")
  .attr("transform", `translate(${width / 2.5}, ${height + margin.top + 37})`)
    .attr("fill", "darkorange")
    .text("US Median Rent");

  // chartGroup.append("text")
  // .attr("transform", `translate(${width / 2.28}, ${height + margin.top + 37})`)
  //   .attr("fill", "lightblue")
  //   .text("States Median Rent")
});

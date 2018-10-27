// Chart Params
// var svgWidth = 960;
var svgWidthown = window.innerWidth* 0.45;
var svgHeightown = window.innerHeight * 0.7;

var marginown = { top: 20, right: 40, bottom: 60, left: 50 };

var widthown = svgWidthown - marginown.left - marginown.right;
var heightown = svgHeightown - marginown.top - marginown.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svgown = d3.select("#own-chart")
  .attr("width", svgWidthown)
  .attr("height", svgHeightown)
  .classed("chart", true);

var ownChartGroup = svgown.append("g")
  .attr("transform", `translate(${marginown.left}, ${marginown.top})`);

// Import data from an external CSV file
d3.json("/api/rent", function(error, api_re) {
  if (error) throw error;

  // Create a function to parse date and time
  // var parseTime = d3.timeFormat("%Y");

  // Format the data
  api_re.forEach(function(data) {
    data.us_val = +data.us_val;
    ca_val = +data.ca_val;
    az_val = +data.az_val;
    co_val = +data.co_val;
    id_val = +data.id_val;
    nm_val = +data.nm_val;
    nv_val = +data.nv_val;
    or_val = +data.or_val;
    ut_val = +data.ut_val;
    wa_val = +data.wa_val;
  });

  // Create scaling functions
  var xLinearScale = d3.scaleLinear()
    .domain([2005,2016])
    .range([0, widthown]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([130000,530000])
    .range([heightown, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([130000,530000])
    .range([heightown, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xLinearScale).tickFormat(d3.format("d"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);

  // Add x-axis
  ownChartGroup.append("g")
    .attr("transform", `translate(0, ${heightown})`)
    .call(bottomAxis);

  // Add y1-axis to the left side of the display
  ownChartGroup.append("g")
    // Define the color of the axis text
    .call(leftAxis);

  // Add y2-axis to the right side of the display
  ownChartGroup.append("g")
    // Define the color of the axis text
    .attr("transform", `translate(${widthown}, 0)`)
    .call(rightAxis);

  // Line generators for each line
  var ownLine1 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.US_Value));

  var ownLine2 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.ca_val));

  var ownLine3 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.az_val));

  var ownLine4 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.co_val));

  var ownLine5 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.id_val));

  var ownLine6 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.nm_val));

  var ownLine7 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.nv_val));

  var ownLine8 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.or_val));

  var ownLine9 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.ut_val));

  var ownLine10 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.wa_val));

  var ownToolTip = d3.select(".own")
    .append("div")
    .classed("owntooltip", true);

  // Append a path for line2
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine2)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
      .style("display","block")
      .html(`California Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred");
    })
    .on("mouseout",function() {
      ownToolTip
      .style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose");
    })

  // Append a path for line3
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine3)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
        .style("display","block")
        .text(`Arizona Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred")
        ;
    })
    .on("mouseout",function() {
      ownToolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose")
        ;
    })

  // Append a path for line4
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine4)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
        .style("display","block")
        .text(`Colorado Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred");
    })
    .on("mouseout",function() {
      ownToolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose")
        ;
    })

  // Append a path for line5
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine5)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
        .style("display","block")
        .text(`Idaho Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred");
    })
    .on("mouseout",function() {
      ownToolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose")
        ;
    })

  // Append a path for line6
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine6)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
        .style("display","block")
        .text(`New Mexico Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred")
        ;
    })
    .on("mouseout",function() {
      ownToolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose");
    })

  // Append a path for line7
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine7)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
        .style("display","block")
        .text(`Nevada Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred")
        ;
    })
    .on("mouseout",function() {
      ownToolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose");
    })

  // Append a path for line8
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine8)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
        .style("display","block")
        .text(`Oregon Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred")
        ;
    })
    .on("mouseout",function() {
      ownToolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose");
    })

  // Append a path for line9
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine9)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
        .style("display","block")
        .text(`Utah Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred")
        ;
    })
    .on("mouseout",function() {
      ownToolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose");
    })

  // Append a path for line10
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine10)
    .attr("stroke", "mistyrose")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover",function() {
      ownToolTip
        .style("display","block")
        .text(`Washington Median Value`);
      d3.select(this)
        .attr("stroke", "palevioletred");
    })
    .on("mouseout",function() {
      ownToolTip.style("display", "none")
      d3.select(this)
        .attr("stroke", "mistyrose");
    })

  // Append a path for line1
  ownChartGroup.append("path")
    .data([api_re])
    .attr("d", ownLine1)
    .attr("stroke", "orange")
    .attr("stroke-width", 4)
    .attr("fill", "none")

  // Append axes titles
  ownChartGroup.append("text")
  .attr("transform", `translate(${widthown / 2.5}, ${heightown + marginown.top + 37})`)
    .attr("fill", "darkorange")
    .text("US Median Value");

  // chartGroup.append("text")
  // .attr("transform", `translate(${width / 2.28}, ${height + margin.top + 37})`)
  //   .attr("fill", "mistyrose")
  //   .text("States Median Value")
});

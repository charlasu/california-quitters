// Chart Params
// var svgWidth = 960;
var svgWidthown = window.innerWidth* 0.4;
var svgHeightown = window.innerHeight * 0.4;

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
d3.csv("../static/data/Rent_Value_Data.csv", function(error, ownData) {
  if (error) throw error;

  // Create a function to parse date and time
  // var parseTime = d3.timeFormat("%Y");

  // Format the data
  ownData.forEach(function(data) {
    data.date = data.Date;
    data.US_Value = +data.US_Value; 
    California_Value = +data.California_Value;
    Arizona_Value = +data.Arizona_Value;
    Colorado_Value = +data.Colorado_Value;
    Idaho_Value = +data.Idaho_Value;
    New_Mexico_Value = +data.New_Mexico_Value;
    Nevada_Value = +data.Nevada_Value;
    Oregon_Value = +data.Oregon_Value;
    Utah_Value = +data.Utah_Value;
    Washington_Value = +data.Washington_Value;
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
    .y(d => yLinearScale1(d.California_Value));

  var ownLine3 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.Arizona_Value));
    
  var ownLine4 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.Colorado_Value));

  var ownLine5 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.Idaho_Value));

  var ownLine6 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.New_Mexico_Value));

  var ownLine7 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.Nevada_Value));

  var ownLine8 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.Oregon_Value));

  var ownLine9 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.Utah_Value));

  var ownLine10 = d3.line()
    .x(d => xLinearScale(d.date))
    .y(d => yLinearScale1(d.Washington_Value));

  var ownToolTip = d3.select(".own")
    .append("div")
    .classed("owntooltip", true);

  // Append a path for line2
  ownChartGroup.append("path")
    .data([ownData])
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
    .data([ownData])
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
    .data([ownData])
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
    .data([ownData])
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
    .data([ownData])
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
    .data([ownData])
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
    .data([ownData])
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
    .data([ownData])
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
    .data([ownData])
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
    .data([ownData])
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

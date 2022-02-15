import React from 'react';
import * as d3 from 'd3';
import "../css/line_chart.css";

export default function LineChart(props) {
  const margin = { top: 10, right: 0, bottom: 50, left: 50 },
        width = 960 - margin.left - margin.right,
        height = 280 - margin.top - margin.bottom

  // type dependent variables
  const data = props.data
  const sel_col = (props.type === 'Vaccination') ? 'total_vaccinations' : props.type
  const sel_class = (props.type === 'Vaccination') ? 'vaccinated' : props.type.toLowerCase()
  const date_col = (props.type === 'Vaccination') ? 'updated_on' : 'Date'
  const parseDate = (props.type === 'Vaccination') ? d3.timeParse("%d-%m-%Y") : d3.timeParse("%Y-%m-%d")

  const yMinValue = d3.min(data, (d) => d[sel_col] === "null" ? 0 : d[sel_col]),
        yMaxValue = d3.max(data, (d) => d[sel_col] === "null" ? 0 : d[sel_col]);

  const getX = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => parseDate(d[date_col])))
    .range([0, width]);

  const getY = d3
    .scaleLinear()
    .domain([yMinValue - 1, yMaxValue + 2])
    .range([height, 0]);

  const getXAxis = (ref) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref).call(xAxis.tickFormat(d3.timeFormat("%b '%y")));
  };

  const getYAxis = (ref) => {
    const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(15);
    d3.select(ref).call(yAxis);
  };

  const linePath = d3
    .line()
    .x((d) => getX(parseDate(d[date_col])))
    .y((d) => getY(d[sel_col]))
    .curve(d3.curveMonotoneX)(data);

  const areaPath = d3
    .area()
    .x((d) => getX(parseDate(d[date_col])))
    .y0((d) => getY(d[sel_col]))
    .y1(() => getY(yMinValue - 1))
    .curve(d3.curveMonotoneX)(data);

  const handleMouseMove = (e) => {
    const bisect = d3.bisector((d) => parseDate(d[date_col])).left,
          x0 = getX.invert(d3.pointer(e, this)[0]),
          index = bisect(data, x0, 1);
    // console.log(bisect(data, x0, 1))
  };

  return (
    <svg
      viewBox={`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`} onMouseMove={handleMouseMove} >

      <g className="axis yAxis" ref={getYAxis} />
      <g className="axis xAxis" ref={getXAxis} transform={`translate(0, ${height})`} />

      <path className={ sel_class } d={ areaPath } opacity={0.3} />
      <path className={"pathstroke " + sel_class} d={linePath} />

      {data.map((item, index) => {
        return (
          <g key={index}>
            <text className={ sel_class } x={getX(item[date_col])} y={getY(item[sel_col]) - 20} textAnchor="middle"></text>
          </g>
        );
      })}
    </svg>
  );
}
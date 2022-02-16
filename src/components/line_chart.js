import React from 'react';
import * as d3 from 'd3';
import "../css/line_chart.css";

export default function LineChart(props) {
  const width = 960,
        height = 280

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

  const handleMouseMove = (e, i) => {
    let x0 = getX.invert(d3.pointer(e, this)[0])
    let date_frmt = x0.toISOString().split('T')[0]
    let curr_val = data.filter((d) => d[date_col] === date_frmt)[0][sel_col]
    d3.select('.graph_info text:nth-of-type(1)').text(x0.toDateString().substr(4))
    d3.select('.graph_info text:nth-of-type(2)').text(curr_val)
    let c = d3.select('.graph_info circle')
        .attr('cx', getX(parseDate(date_frmt)))
        .attr('cy', getY(curr_val) - 30)
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`} onMouseMove={handleMouseMove}>
      <g className='graph_info' transform='translate(0, 30)'>
        <text className={ sel_class }>Date</text>
        <text className={ sel_class } transform='translate(0, 20)'>Total Value + delta value</text>
        <circle r="5" className={ sel_class }></circle>
      </g>

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
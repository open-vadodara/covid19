import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {

  constructor(props) {
    super(props);
    this.create_bar_chart = this.create_bar_chart.bind(this);

    this.bar_width = 10
    this.bar_colour = 'steelblue'
  }

  // extended components
  componentDidMount()   { this.create_bar_chart(); }
  componentDidUpdate()  { this.update_bar_chart(); }

  create_bar_chart() {
    const node = this.node;
    const dataMax = d3.max(this.props.data, d => d['Confirmed']);
    const yScale = d3.scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
        .style('fill', this.bar_colour)
        // .attr('x', (d, i) => i * 25)
        .attr('x', (d, i) => i * this.bar_width)
        .attr('y', d => this.props.size[1] - yScale(d))
        .attr('height', d => yScale(d['Confirmed']))
        .attr('width', this.bar_width)
        .attr('id', (d, i) => i);

    d3.select(node)
      .selectAll('text')
      .data(this.props.data)
      .enter()
      .append('text')
      .attr('x', (d, i) => i * this.bar_width + 3)
      .attr('y', d => this.props.size[1] - yScale(d['Confirmed']) + 18)
      .style('fill', this.bar_colour)
      .text((d) => d['Confirmed']);

    // d3.select(node).select(`rect[id='${this.props.meta[0]}']`).style('fill', '#8D2BFF');
    // d3.select(node).select(`rect[id='${this.props.meta[1]}']`).style('fill', '#0D8EFF');
  }

  update_bar_chart() {
    const node = this.node;
    const dataMax = d3.max(this.props.data, d => d['Confirmed']);
    const yScale = d3.scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', this.bar_colour)
      .transition()
      .attr('x', (d, i) => i * this.bar_width)
      .attr('y', d => this.props.size[1] - yScale(d['Confirmed']))
      .attr('height', d => yScale(d['Confirmed']))
      .attr('width', this.bar_width);

    d3.select(node)
      .selectAll('text')
      .data(this.props.data)
      .transition()
      .attr('x', (d, i) => i * this.bar_width + 3)
      .attr('y', d => this.props.size[1] - yScale(d['Confirmed']) + 18)
      .style('fill', this.bar_colour)
      .text((d) => d);

    for(let start = 0; start < this.props.meta[0]; start++) {
      d3.select(node).select(`rect[id='${start}']`).style('fill', '#FDCD3D');
    }

    // d3.select(node).select(`rect[id='${this.props.meta[0]}']`).style('fill', '#8D2BFF');
    // d3.select(node).select(`rect[id='${this.props.meta[1]}']`).style('fill', '#0D8EFF');
  }

  render() {
    return(
      <div className="visualisation">
        <svg ref={node => this.node = node} preserveAspectRatio="xMidYMin" viewBox="0 0 1500 500" shapeRendering="crispEdges"/>
      </div>
    );
  }

}

export default BarChart;
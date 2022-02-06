import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
  /* Given a set of array data, create a line chart & return it */

  constructor(props) {
    super(props);
    this.create_bar_chart = this.create_bar_chart.bind(this);
  }

  // extended components
  componentDidMount() { this.create_bar_chart(); }
  componentDidUpdate() { this.update_bar_chart(); }

  create_bar_chart() {
    const node = this.node;
    const dataMax = d3.max(this.props.data);
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
      .style('fill', 'whitesmoke')
      .attr('x', (d, i) => i*25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
      .attr('id', (d, i) => i);

    d3.select(node)
      .selectAll('text')
      .data(this.props.data)
      .enter()
      .append('text')
      .attr('x', (d, i) => i*25 + 3)
      .attr('y', d => this.props.size[1] - yScale(d) + 18)
      .style('fill', 'whitesmoke')
      .text((d) => d);

    d3.select(node).select(`rect[id='${this.props.meta[0]}']`).style('fill', '#8D2BFF');
    d3.select(node).select(`rect[id='${this.props.meta[1]}']`).style('fill', '#0D8EFF');
  }

  update_bar_chart() {
    const node = this.node;
    const dataMax = d3.max(this.props.data);
    const yScale = d3.scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', 'whitesmoke')
      .transition()
      .attr('x', (d, i) => i*25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25);

    d3.select(node)
      .selectAll('text')
      .data(this.props.data)
      .transition()
      .attr('x', (d, i) => i*25 + 3)
      .attr('y', d => this.props.size[1] - yScale(d) + 18)
      .style('fill', 'whitesmoke')
      .text((d) => d);

    for(let start=0; start<this.props.meta[0]; start++) {
      d3.select(node).select(`rect[id='${start}']`).style('fill', '#FDCD3D');
    }

    d3.select(node).select(`rect[id='${this.props.meta[0]}']`).style('fill', '#8D2BFF');
    d3.select(node).select(`rect[id='${this.props.meta[1]}']`).style('fill', '#0D8EFF');
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
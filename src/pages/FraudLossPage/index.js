import React, { Component } from 'react';
import get from 'lodash/get';

import api from '../../mocks/api';
import Line from '../../components/Visualizations/Line';
import ControlPanel from '../../components/ControlPanel';

export default class FraudLoss extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      markers: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { loading } = this.state;

    if (!loading) {
      this.setState({ loading: true });
      try {
        api('/data/fraud').then(raw => {
          const formattedData = this.formatData(raw);
          this.setState({ ...formattedData, loading: false });
        });
      } catch (error) {
        this.setState({ loading: false });
        console.error(error);
      }
    }
  }
  
  formatCoordinate(coordinates, axises) {
    return coordinates.map(coordinate => {
      return {
        x: get(coordinate, axises.x),
        y: get(coordinate, axises.y),
      };
    });
  }

  formatData(raw) {
    const data = Object.keys(get(raw, 'data', {})).map(id => {
      const axises = {
        x: get(raw, `dataInformation.${id}.x`),
        y: get(raw, `dataInformation.${id}.y`),
      }
      return {
        id,
        data: this.formatCoordinate(get(raw, `data.${id}`, []), axises),
      };
    });

    const markers = get(raw, 'events', []).map(event => {
      return {
        axis: 'x',
        value: get(event, 'date'),
        lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
        legend: get(event, 'title'),
      };
    });
        
    return {data, markers};
  }

  onToggleControlPanel = () => {
    const { controlPanel } = this.state;
    this.setState({ controlPanel: !controlPanel });
  }
  render() {
    const { controlPanel, data, markers, loading } = this.state;

    return (
      <div style={{height: 500}}>
        <ControlPanel
          open={controlPanel}
        />
        <Line
          data={data}
          markers={markers}
          xLegend='Month'
          // Disable time scale because of bug with visualization library with
          // this version of ReactJS, should hopefully be fixed soon
          // xScale={{ type: 'time', format: '%Y-%m', precision: 'month' }}
        />
        <br />
      </div>
    );
  }
}
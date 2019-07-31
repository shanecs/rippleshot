/* App.js */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';

const COORDINATE_PROPTYPE = PropTypes.arrayOf(PropTypes.exact({
  x: PropTypes.any,
  y: PropTypes.any,
}));

const CURVE_TYPES = [
  'cardinal',
  'linear',
  'monotoneX',
  'monotoneY',
  'natural',
  'stepBefore',
  'step',
  'stepAfter',
];

const DATA_PROPTYPE = PropTypes.arrayOf(PropTypes.exact({
  id: PropTypes.string,
  data: COORDINATE_PROPTYPE,
}));

const MARKER_PROPTYPE = PropTypes.arrayOf(PropTypes.exact({
  axis: PropTypes.oneOf('x', 'y'),
  value: PropTypes.number,
  lineStyle: PropTypes.object,
  legend: PropTypes.string,
  legendOrientation: PropTypes.oneOf('vertical', 'horizontal'),
}));

export default class Line extends Component {
  static propTypes = {
    curve: PropTypes.oneOf(CURVE_TYPES),
    data: DATA_PROPTYPE.isRequired,
    markers: MARKER_PROPTYPE,
    xLegend: PropTypes.string,
    yLegend: PropTypes.string,
    xScale: PropTypes.object,
    yScale: PropTypes.object,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    curve: 'cardinal',
    xLegend: '',
    yLegend: '',
    xScale: { type: 'point' },
    yScale: { type: 'linear', min: 'auto', max: 'auto' },
    loading: false,
  }

  renderChart() {
    const { curve, data, markers, xLegend, yLegend, xScale, yScale } = this.props;

    return (
      <ResponsiveLine
          data={data}
          markers={markers}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={xScale}
          yScale={yScale}
          curve={curve}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              // format: value => `${value.getFullYear()}-${value.getMonth()}`,      
              legend: xLegend,
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: yLegend,
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          enableGridX={false}
          colors={{ scheme: 'nivo' }}
          useMesh={true}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
      />
    );
  }

  renderLoading() {
    return <p>The chart is currently loading...</p>;
  }

  render() {
    const { loading } = this.props;

    return loading ? this.renderLoading() : this.renderChart();
  }
}
import React, {Component} from "react";
import Chart from "react-google-charts";

import Data from '../Data'

class BarChart extends Component {
    render() {
        return (
            <>
                <Chart
                    width={'100%'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={Data}
                    options={{
                        theme: 'material',
                        legend: {
                            position : 'bottom'
                        },
                        colors: ['#29c3be', '#bc95df']
                    }}
                    controls={[
                        {
                            controlType: 'ChartRangeFilter',
                            options: {
                                filterColumnIndex: 0,
                                ui: {
                                    chartType: 'LineChart',
                                    chartOptions: {
                                        chartArea: {width: '100%', height: '50%'},
                                        hAxis: {baselineColor: 'none'},
                                        colors: ['#29c3be', '#bc95df']
                                    },
                                },
                            },
                            controlPosition: 'bottom',
                            controlWrapperParams: {
                                state: {
                                    range: {start: new Date(2020, 6, 10), end: new Date(2020, 6, 24)},
                                },
                            },
                        },
                    ]}
                />
            </>
        )
    }
}

export default BarChart;

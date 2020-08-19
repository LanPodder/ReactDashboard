import React from 'react';
import * as d3 from 'd3';
import { SampleData, SampleDataService } from '../../services/SampleDataService';
import BarChart from './BarChart';

interface SampleBarChartProps {

}

interface SampleBarChartState {
    data: SampleData,
}

class SampleBarChart extends React.Component<SampleBarChartProps, SampleBarChartState> {

    private dataService: SampleDataService;

    constructor(props: SampleBarChartProps) {
        super(props);
        this.dataService = new SampleDataService();
        this.state = {
            data: this.dataService.getData(),
        }
    }

    render() {
        return (
            <div>
                <h2>Hello Dashboard</h2>
                <BarChart width={600} height={400} data={this.state.data.values} />
            </div>
        );
    }
}

export default SampleBarChart;
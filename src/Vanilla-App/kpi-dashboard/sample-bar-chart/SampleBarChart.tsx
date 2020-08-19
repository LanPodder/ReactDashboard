import React from 'react';
import * as d3 from 'd3';
import { SampleData, SampleDataService } from '../../services/SampleDataService';
import BarChart from './BarChart';
import { Row, Col } from 'react-bootstrap';

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
            <div className="container-fluid">
                <h2>Dashboard</h2>
                <Row>
                    <Col><BarChart width={700} height={400} data={this.dataService.getData().values} /></Col>
                    <Col><BarChart width={700} height={400} data={this.dataService.getData().values} /></Col>
                </Row>
                <Row>
                    <Col><BarChart width={700} height={400} data={this.dataService.getData().values} /></Col>
                    <Col><BarChart width={700} height={400} data={this.dataService.getData().values} /></Col>
                </Row>
            </div>
        );
    }
}

export default SampleBarChart;
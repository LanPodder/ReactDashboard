import React from 'react';
import BarChart from './barchart/BarChart';
import { Row, Col } from 'antd';
import { Bar } from 'react-chartjs-2';
import { scaleService } from 'chart.js';

import './Dashboard.css';

interface Dataset {
    label: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    data: number[];
}

interface DashboardProps {

}

interface DashboardSate {
    labels: string[],
    datasets: Dataset[]
}
class Dashboard extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            labels: ['January', 'February', 'March',
                'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                
            datasets: [
                {
                    label: 'Rainfall',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56, 23, 36, 47, 67, 84, 73, 67]
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <Row>
                    <Col>
                        <div style={{width: '80vw', height: '50vh', backgroundColor: '#555'}}>
                            <Bar
                                data={this.state}
                                options={{
                                    maintainAspectRatio: false,
                                    
                                    title: {
                                        display: true,
                                        text: 'Average Rainfall per month',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
                                        labels:{
                                            fontColor: 'white'
                                        }
                                    },
                                    scales:{
                                        yAxes: [{
                                            ticks: {
                                                fontColor: 'white'
                                            },
                                        }],
                                      xAxes: [{
                                            ticks: {
                                                fontColor: 'white'
                                            },
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col><BarChart width={750} height={300} data={this.generateNumbers()} /></Col>
                    <Col><BarChart width={750} height={300} data={this.generateNumbers()} /></Col>
                </Row>
                <Row>
                    <Col><BarChart width={700} height={300} data={this.generateNumbers()} /></Col>
                    <Col><BarChart width={700} height={300} data={this.generateNumbers()} /></Col>
                </Row>
                <Row>
                    <Col><BarChart width={700} height={300} data={this.generateNumbers()} /></Col>
                    <Col><BarChart width={700} height={300} data={this.generateNumbers()} /></Col>
                </Row>
            </div>
        );
    }

    generateNumbers() {
        let result = [];
        for (let i: number = 0; i < 14; i++) {
            result.push(Math.random() * 100);
        }
        return result;
    }
}

export default Dashboard;
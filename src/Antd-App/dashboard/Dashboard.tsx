import React from 'react';
import BarChart from './barchart/BarChart';
import { Row, Col } from 'antd';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <Row>
                    <Col><BarChart width={800} height={300} data={this.generateNumbers()} /></Col>
                    <Col><BarChart width={800} height={300} data={this.generateNumbers()} /></Col>
                </Row>
                <Row>
                    <Col><BarChart width={800} height={300} data={this.generateNumbers()} /></Col>
                    <Col><BarChart width={800} height={300} data={this.generateNumbers()} /></Col>
                </Row>
                <Row>
                    <Col><BarChart width={800} height={300} data={this.generateNumbers()} /></Col>
                    <Col><BarChart width={800} height={300} data={this.generateNumbers()} /></Col>
                </Row>
            </div>
        );
    }

    generateNumbers(){
        let result = [];
        for(let i:number = 0; i < 14; i++){
            result.push(Math.random()*100);
        }
        return result;
    }
}

export default Dashboard;
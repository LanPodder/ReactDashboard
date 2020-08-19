// BarChart.js
import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

interface BarChartProps {
    width: number, height: number, data: number[]
}

const BarChart: React.SFC<BarChartProps> = (props) => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = d3.select(ref.current as any)
            .attr("width", props.width)
            .attr("height", props.height)
            .style("border", "1px solid black")
    }, []);

    useEffect(() => {
        draw();
    }, [props.data]);

    const draw = () => {

        const svg = d3.select(ref.current as any);
        var selection = svg.selectAll("rect").data(props.data);
        var yScale = d3.scaleLinear()
            .domain([0, (d3.max(props.data) as number)])
            .range([0, props.height - 100]);

        selection
            .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => props.height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => props.height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => props.height - yScale(d))

        selection
            .exit()
            .transition().duration(300)
            .attr("y", (d) => props.height)
            .attr("height", 0)
            .remove()
    }


    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>

    )
}

export default BarChart;
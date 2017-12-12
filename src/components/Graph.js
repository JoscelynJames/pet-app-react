import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Legend, Tooltip, PieChart, Pie, Cell} from 'recharts';

class Graph extends React.Component {
	constructor(props) {
		super(props);

		const points = [
			{ x: 2, y: 50 }, { x: 2.4, y: 50.5 }, { x: 2.9, y: 48.9 }, { x: 2, y: 50 }, { x: 3, y: 51 }, { x: 18, y: 50 }, { x: 17, y: 50.5 }, { x: 17.8, y: 52 },{ x: 17, y: 53 }, { x: 16.7, y: 40 }, { x: 16.4, y: 46 }, { x: 18, y: 50 }, { x: 2, y: 30 }, { x: 3.8, y: 30.3 }, { x: 3, y: 31.7 }, { x: 2.6, y: 28 }, { x: 3.3, y: 32 }, { x: 4, y: 30 }, { x: 4, y: 31 }, { x: 3.6, y: 29 }, { x: 4.5, y: 30.5 }, { x: 5, y: 30 }, { x: 4.3, y: 30.4 }, { x: 3.4, y: 34 }, { x: 2.4, y: 43 }, { x: 3.5, y: 42 }, { x: 5, y: 40.9 }, { x: 8, y: 40.1 }, { x: 8.6, y: 43.7 }, { x: 8.4, y: 45.3 }, { x: 8.2, y: 42.5 }, { x: 8.3, y: 40.2 }, { x: 8.5, y: 40.1 }, { x: 2, y: 50 }, { x: 2.4, y: 50.5 }, { x: 2.9, y: 48.9 }, { x: 2, y: 51 }, { x: 3.4, y: 50 }, { x: 16.4, y: 53 }, { x: 17, y: 50.5 }, { x: 17.8, y: 52 }, { x: 17, y: 53 }, { x: 16.7, y: 40 }, { x: 16.4, y: 46 }, { x: 18, y: 50 }, { x: 3, y: 30 }, { x: 3.8, y: 30.3 }, { x: 3.2, y: 30.7 }, { x: 2.4, y: 28 }, { x: 3, y: 32 }, { x: 4, y: 31 }, { x: 4, y: 31 }, { x: 3.6, y: 29 }, { x: 4.5, y: 30.5 }, { x: 5, y: 30 }, { x: 4.3, y: 30.4 }, { x: 3.4, y: 34.4 }, { x: 3.2, y: 44 }, { x: 3.5, y: 40 }, { x: 5, y: 40.9 }, { x: 8, y: 47 }, { x: 8.6, y: 40.7 }, { x: 8.4, y: 41 }, { x: 8.2, y: 44.5 }, { x: 8.3, y: 46.2 }, { x: 9.5, y: 40.1 }, { x: 2, y: 50 }, { x: 2.4, y: 50.5 }, { x: 2.9, y: 48.9 }, { x: 2, y: 50.6 }, { x: 3, y: 51.5 }, { x: 18, y: 50 }, { x: 17, y: 50.5 }, { x: 17.8, y: 52 }, { x: 17, y: 53 }, { x: 16.7, y: 40 }, { x: 16.4, y: 46 }, { x: 18, y: 50 }, { x: 2, y: 30 }, { x: 3.8, y: 30.3 }, { x: 3, y: 30.7 }, { x: 2.6, y: 28 }, { x: 3.3, y: 32 }, { x: 4, y: 30 }, { x: 4, y: 31 }, { x: 3.6, y: 29 }, { x: 4.5, y: 30.5 }, { x: 5, y: 31 }, { x: 4.3, y: 30.4 }, { x: 3.4, y: 34 }, { x: 2.4, y: 43 }, { x: 3.5, y: 42 }, { x: 5, y: 40.9 }, { x: 8, y: 40.1 }, { x: 8.6, y: 43.7 }, { x: 8.4, y: 46.3 }, { x: 8.2, y: 42.5 }, { x: 8.3, y: 40.2 }, { x: 8.5, y: 40.1 }, { x: 2, y: 50 }, { x: 2.4, y: 50.5 }, { x: 5.9, y: 43.9 }, { x: 2, y: 50.6 }, { x: 3.4, y: 52 }, { x: 16.4, y: 51 }, { x: 17, y: 50.5 }, { x: 16.8, y: 52 }, { x: 17.2, y: 53.6 }, { x: 14.7, y: 40 }, { x: 15.4, y: 46 }, { x: 18, y: 50 }, { x: 3, y: 30 }, { x: 3.8, y: 30.3 }, { x: 3.2, y: 30.7 }, { x: 12.4, y: 25 }, { x: 3, y: 32 }, { x: 4, y: 31 }, { x: 4, y: 31 }, { x: 3.6, y: 29 }, { x: 4.5, y: 30.5 }, { x: 5, y: 30 }, { x: 4.3, y: 30.4 }, { x: 13.4, y: 34.4 }, { x: 3.2, y: 44 }, { x: 3.5, y: 40 }, { x: 5, y: 40.9 }, { x: 8, y: 47 }, { x: 8.6, y: 40.7 }, { x: 9.4, y: 41 }, { x: 18.2, y: 44.5 }, { x: 8.3, y: 46.2 }, { x: 9.5, y: 40.1 },
		]

		this.state = {
			data: points,
		}
	};

	render() {
		return(
			<div className="graph-container">
				<ScatterGraph data={this.state.data}/>
				<PieGraph data={this.state.data}/>
			</div>
    );
  }
};

const ScatterGraph = (props) => {
	return (
		<div>
			<ScatterChart width={400} height={550} margin={{ top: 50, bottom: 20, left: 20 }}>
				<XAxis label={{ value: 'Width of Cage', position: 'bottom' }} dataKey={'x'} type="number" name='x' unit='in' />
				<YAxis label={{ value: 'Height of Cage', angle: -90, position: 'insideLeft' }} dataKey={'y'} type="number" name='y' unit='in' padding={{ right: 50 }}/>
				<CartesianGrid />
				<Scatter name='Miles' data={props.data} opacity={.5} fill='#2f3772' />
				<Tooltip cursor={{ strokeDasharray: '8 8' }} />
			</ScatterChart>
		</div>
	);
};

const PieGraph = (props) => {
	let eating = 0;
	let notEating = 0;
	let sleeping = 0;

	const computeTimeSpentEating = (data) => {
		for (var i = 0; i < data.length; i++) {
			let yCoord = props.data[i]['y'];
			let xCoord = props.data[i]['x'];

			if (xCoord < 8 && yCoord < 45 && yCoord > 25) {
			 	eating += 1
			} else if (xCoord < 5 && yCoord > 45) {
				sleeping += 1
			} else {
				notEating += 1
			}
		};
	};

	computeTimeSpentEating(props.data);	

	const piedata = [
		{ name: 'Eating', value: eating }, 
		{ name: 'Playing', value: notEating },
		{ name: 'Sleeping', value: sleeping }
	];

	const COLORS = ['#34722f', '#2f3772', '#b0ce15'];
	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<div>
			<PieChart width={400} height={550} onMouseEnter={this.onPieEnter}>
			<Pie
				data={piedata}
				cx={200}
				cy={250}
				labelLine={false}
				label={renderCustomizedLabel}
				paddingAngle={4}
				outerRadius={160}
				innerRadius={80}
				fill="#8884d8">
				{
					piedata.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
				}
			</Pie>
			<Tooltip />
				<Legend iconSize={20} iconType="circle" />
		</PieChart>
		</div>
	);
};

export default Graph;
import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Label, PieChart, Pie, Sector, Cell} from 'recharts';

class Graph extends React.Component {
	constructor(props) {
		super(props);

		const points = [
			{ x: 2, y: 50 }, { x: 2.4, y: 50.5 }, { x: 2.9, y: 48.9 }, { x: 2, y: 50 }, { x: 3, y: 50 }, { x: 18, y: 50 }, { x: 17, y: 50.5 }, { x: 17.8, y: 52 }, { x: 17, y: 53 }, { x: 16.7, y: 40 }, { x: 16.4, y: 46 }, { x: 18, y: 50 }, { x: 3, y: 30 }, { x: 3, y: 30.3 }, { x: 3, y: 30.7 }, { x: 3, y: 28 }, { x: 3, y: 32 }, { x: 4, y: 30 }, { x: 4, y: 31 }, { x: 3.6, y: 29 }, { x: 4.5, y: 30.5 }, { x: 5, y: 30 }, { x: 4.3, y: 30.4 }, { x: 3.4, y: 34 }, { x: 3, y: 40 }, { x: 3.5, y: 40 }, { x: 5, y: 40.9 }, { x: 8, y: 40 }, { x: 8.6, y: 40.7 }, { x: 8.4, y: 40 }, { x: 8.2, y: 40.5 }, { x: 8.3, y: 40.2 }, { x: 8.5, y: 40.1 },
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
			<ScatterChart width={400} height={600} margin={{ top: 50, bottom: 20, left: 20 }}>
				<Label value="Location" position="top" />
				<XAxis dataKey={'x'} type="number" name='x' unit='in' />
				<YAxis dataKey={'y'} type="number" name='y' unit='in' />
				<CartesianGrid />
				<Scatter name='Miles' data={props.data} opacity={.5} fill='blue' />
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
		{ name: 'eating', value: eating }, 
		{ name: 'not eating', value: notEating },
		{ name: 'sleeping', value: sleeping }
	];

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
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
		<PieChart width={400} height={600} onMouseEnter={this.onPieEnter}>
			<Pie
				datakey="Activity"
				data={piedata}
				cx={200}
				cy={250}
				labelLine={false}
				label={renderCustomizedLabel}
				outerRadius={160}
				fill="#8884d8"
			>
				{
					piedata.map((entry, index) => <Cell key={entry} fill={COLORS[index % COLORS.length]} />)
				}
			</Pie>
			<Tooltip />
		</PieChart>
		</div>
	);
};

export default Graph;
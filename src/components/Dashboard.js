import React from 'react';
import Graph from './Graph';
import Navbar from './Navbar';

class DashBoard extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="dashboard-container">
					{/* <StreamButton /> */}
					<Graph />
				</div>
			</div>
		)
	}
}

// function StreamButton() {
// 	return (
// 		<div className="stream-button-container">
// 			<button className="stream-button">
// 				<a href="http://10.0.0.13:8081/start">Watch Now</a>
// 			</button>
// 		</div>
// 	);
// }

export default DashBoard;
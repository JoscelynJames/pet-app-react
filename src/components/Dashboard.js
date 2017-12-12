import React from 'react';
import Graph from './Graph';
import Navbar from './Navbar';

class DashBoard extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="dashboard-container">
					<Graph />
				</div>
			</div>
		)
	}
};

export default DashBoard;
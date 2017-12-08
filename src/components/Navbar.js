import React from 'react';
import { NavLink } from 'react-router-dom';

import camera from "../lib/camera3.png";
import graph from "../lib/pie.svg";

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar-container">
				<div className="logo">
						<h1 className="logo-name">Where's My Bird App?</h1>
				</div>
				<div className="icons">
					<div className="navbar-stream">
						<NavLink to="/stream">
							<img className="camera-img" src={camera} alt="stream"/>
						</NavLink>
					</div>
					<div className="navbar-graph">
						<NavLink to="/dashboard">
							<img className="graph-img" src={graph} alt="graphs"/>
						</NavLink>
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar;
import React from 'react';
// import '../lib/img-tracking';
import Navbar from './Navbar';


class Stream extends React.Component {
	render() {
		return(
			<div>
				<Navbar />
				<div className="stream-container">
						<img className="stream" alt="Looks like we are offline" />
				</div>
			</div>
		);
	}
}

export default Stream;

// src = "http://10.0.0.48:8081/start"
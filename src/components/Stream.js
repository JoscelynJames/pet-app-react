import React from 'react';
import Navbar from './Navbar';
import video from '../lib/video.mov';

class Stream extends React.Component {
	render() {
		return(
			<div>
				<Navbar />
				<div className="stream-container">
					<video className="stream" src={video} alt="Looks like we are offline" type="video/mp4" autoPlay>
						Looks like Miles is offline
					</video>
				</div>
			</div>
		);
	}
}

export default Stream;


import React from 'react';
// import tracking from '../lib/tracking/build/tracking';
import Navbar from './Navbar';
// import video from '../lib/video2.mp4';

class Stream extends React.Component {
	render() {
		return(
			<div>
				<Navbar />
				<div className="stream-container">
					{/* <video className="stream" alt="Looks like we are offline" type="video/mp4" controls> */}
						Looks like Miles is offline
						{/* </video> */}
				</div>
			</div>
		);
	}
}
// var tracking = window.tracking;
// var img = document.getElementsByClassName('stream');
// var demoContainer = document.querySelector('.stream-container');

// var myTracker = new tracking.ColorTracker();

// tracking.ColorTracker.registerColor('darkgreen', function (r, g, b) {
// 	if (r < 120 && r > 80 && g < 150 && b < 70) {
// 		return true;
// 	}
// 	return false;
// });

// tracking.ColorTracker.registerColor('lightgreen', function (r, g, b) {
// 	if (r < 30 && g < 100 && b < 30) {
// 		return true;
// 	}
// 	return false;
// });

// tracking.ColorTracker.registerColor('green', function (r, g, b) {
// 	if (r < 30 && g < 50 && b < 30) {
// 		return true;
// 	}
// 	return false;
// });

// tracking.ColorTracker.registerColor('black', function (r, g, b) {
// 	if (r > 5 && g < 35 && b > 5) {
// 		return true;
// 	}
// 	return false;
// });

// var colors = new tracking.ColorTracker(['darkgreen', 'green', 'yellow']);

// myTracker.on('track', function (event) {
// 	if (event.data.length === 0) {
// 		console.log('no targets');
// 		event.data.forEach(function (rect) {
// 		});
// 	}
// });

// colors.on('track', function (event) {
// 	if (event.data.length === 0) {
// 		console.log('no targets');
// 	} else {
// 		console.log(event.data)
// 		event.data.forEach(function (rect) {
// 			console.log(rect)
// 			window.plot(rect.x, rect.y, rect.width, rect.height, rect.color);
// 		})
// 	}
// })

// tracking.track("#img", colors)
// tracking.track("#img", myTracker);

// window.plot = function (x, y, w, h, color) {
// 	var rect = document.createElement('div');
// 	document.querySelector('#img-container').appendChild(rect);
// 	rect.classList.add('rect');
// 	rect.style.border = '2px solid ' + color;
// 	rect.style.width = w + 'px';
// 	rect.style.height = h + 'px';
// 	rect.style.left = (img.offsetLeft + x) + 'px';
// 	rect.style.top = (img.offsetTop + y) + 'px';
// };


export default Stream;

// src = "http://10.0.0.48:8081/start"
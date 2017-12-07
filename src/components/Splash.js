import React from 'react';

class Splash extends React.Component {
	render() {
		return (
		<div className="splash-container"> 
			<SplashNav />
			<Login />
		</div>
		)
	}
}

const SplashNav = () => {
	return (
		<div className="navbar-container">
			<div className="logo">
				<h1 className="logo-name">Where's My Bird App?</h1>
			</div>
		</div>
	)
} 

const Login = () => {
	return (
		<div className="login-container">
			<form>
				<div>
					<input placeholder="username"/>
				</div>
				<div className="input">
					<input placeholder="password"/>
				</div>
				<div className="login-button">
					<a href="http://127.0.0.1:3000/dashboard">
						<button type="button"href="http://127.0.0.1:3000/dashboard">Login</button>
					</a>
				</div>
			</form>
		</div>
	)
} 

export default Splash;
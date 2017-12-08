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
					<input type="text" placeholder="username"/>
				</div>
				<div className="input">
					<input type="password" placeholder="password"/>
				</div>
				<div className="login-button">
					<a href="/dashboard">
						<button type="button" href="/dashboard">Login</button>
					</a>
				</div>
			</form>
		</div>
	)
} 

export default Splash;
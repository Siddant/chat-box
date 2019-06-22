import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../lib/Auth'

class NavBar extends React.Component {
	constructor() {
		super()
		this.logout = this.logout.bind(this)
	}



	logout() {
		Auth.removeToken()
		this.props.history.push('/')
	}

	render() {
		return (
			<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
				<div className="container nav-container">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							G-Link
						</Link>

						<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>
					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">

							{Auth.isAuthenticated() && (
								<Link className="navbar-item" to="/messages">
									Messages
								</Link>
							)}
						</div>
						{/* login and sign up buttons */}
						<div className="navbar-end">
							{!Auth.isAuthenticated() && (
								<div className="navbar-item">
									<div className="buttons">
										<Link className="button is-link is-outlined" to="/register">
											Sign up
										</Link>
										<Link className="button is-link is-outlined" to="/login">
											Log in
										</Link>
									</div>
								</div>
							)}

							{Auth.isAuthenticated() && (
								<div className="navbar-item">
									<button
										onClick={this.logout}
										className="button is-link is-outlined"
									>
										Logout
									</button>
								</div>
							)}


						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default withRouter(NavBar)

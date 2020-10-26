import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import { NotificationsNone } from "@material-ui/icons";

function Navbar() {
	return (
		<div className="navbar">
			<AppBar position="static" color="primary" elevation={2}>
				<Toolbar className="nav-toolbar">
					<div className="nav-brand-div">
						<div className="nav-circle"></div>
						<p className="nav-brand">Logo</p>
					</div>
					<div className="nav-link-div">
						<a href="/dashboard" className="nav-link">
							Dashboard
						</a>
						<a href="/" className="nav-link nav-active">
							Find Experts
						</a>
						<a href="/discussion" className="nav-link">
							Discussion
						</a>
					</div>
					<div className="nav-menu-div">
						<IconButton>
							<NotificationsNone color="secondary" />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
